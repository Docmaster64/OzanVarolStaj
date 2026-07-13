import re, html, json
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()

b=open('_orig_compare/blog.html',encoding='utf-8').read()

# Each post block: <div id="header_post-loop" ...> ... </div></div> then next <div id="header_post-loop-1"
# We'll split by the container ids.
ids = [m.start() for m in re.finditer(r'<div id="header_post-loop(-?\d*)"', b)]
ids.append(b.find('<div id="postloopcontainer"'))
print('blocks:', len(ids)-1)

posts=[]
for k in range(len(ids)-1):
    block = b[ids[k]:ids[k+1]]
    tm = re.search(r'<h2[^>]*se-wpt[^>]*><a href="([^"]+)"[^>]*>([^<]+)</a></h2>', block)
    if not tm: 
        continue
    url = tm.group(1)
    title = clean(tm.group(2))
    im = re.search(r'<img[^>]*src="([^"]+)"', block)
    img = im.group(1) if im else ''
    # excerpt: the se-wpt paragraph (the one with [&hellip;])
    em = re.search(r'<div class="se-t[^"]*se-wpt"[^>]*>(.*?)</div>', block, re.S)
    exc = clean(em.group(1)) if em else ''
    # category: appears in blog-post-grid intro blocks, not here. We'll grab from grid later.
    posts.append({'title':title,'url':url,'img':img,'excerpt':exc})

for p in posts:
    print('TITLE:', p['title'])
    print('URL:', p['url'])
    print('IMG:', p['img'])
    print('EXC:', p['excerpt'][:350])
    print('---')

# Now categories from the grid intro blocks: <h2 ... se-wpt ...><a href="cat">TITLE</a></h2> then <p ... se-wpt><a>CAT</a></p>
# The grid uses data-sid="blog-post-grid-intro_view-1_1" etc. Let's extract category per post from grid.
# Find grid blocks
gids=[m.start() for m in re.finditer(r'<div id="blog-post-grid-intro_view-', b)]
gids+= [m.start() for m in re.finditer(r'<div id="blog-post-grid_view-', b)]
gids = sorted(set(gids))
print('grid blocks:', len(gids))
# For each, get title and category
cats={}
for g in gids:
    # take a window
    seg = b[g:g+3000]
    tm = re.search(r'<h2[^>]*se-wpt[^>]*><a href="([^"]+)"[^>]*>([^<]+)</a></h2>', seg)
    if not tm: continue
    turl=tm.group(1); ttitle=clean(tm.group(2))
    cm = re.search(r'<p[^>]*se-wpt[^>]*><a[^>]*>([^<]+)</a></p>', seg)
    cat = clean(cm.group(1)) if cm else ''
    cats[ttitle]=cat
    print('GRID:', ttitle, '=>', cat)

# merge
for p in posts:
    p['category']=cats.get(p['title'],'')
    print(p['title'],'|',p['category'])

json.dump(posts, open('_blog_posts.json','w'), ensure_ascii=False, indent=1)
print('saved', len(posts))