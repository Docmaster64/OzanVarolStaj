import re, html

def clean(s):
    s = re.sub(r'<[^>]+>', ' ', s)
    s = html.unescape(s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

# ---------- BLOG ----------
b = open('_orig_compare/blog.html', encoding='utf-8').read()

# Each post loop block: title in <h2 ... se-wpt ...><a href="URL">TITLE</a></h2>
posts = []
# find all post-loop containers
for m in re.finditer(r'data-sid="header_post-loop_\d+"[^>]*>(.*?)(?=<div id="header_post-loop-\d+"|<div id="postloopcontainer"|</div></div></div>)', b, re.S):
    block = m.group(1)
    # title
    tm = re.search(r'<h2[^>]*se-wpt[^>]*><a href="([^"]+)"[^>]*>([^<]+)</a></h2>', block)
    if not tm:
        continue
    url = tm.group(1)
    title = clean(tm.group(2))
    # image
    im = re.search(r'<img[^>]*src="([^"]+)"', block)
    img = im.group(1) if im else ''
    # excerpt
    em = re.search(r'<p[^>]*se-wpt[^>]*>(.*?)</p>', block, re.S)
    exc = clean(em.group(1)) if em else ''
    # category
    cm = re.search(r'<p[^>]*se-wpt[^>]*><a[^>]*>([^<]+)</a></p>', block, re.S)
    cat = clean(cm.group(1)) if cm else ''
    posts.append((title, url, img, cat, exc))

print('=== BLOG POSTS ===', len(posts))
for p in posts:
    print('TITLE:', p[0])
    print('URL:', p[1])
    print('IMG:', p[2])
    print('CAT:', p[3])
    print('EXC:', p[4][:300])
    print('---')

# categories
cats = re.findall(r'<a href="https://ozanvarol\.com/([^"]+)/"[^>]*><h3[^>]*>([^<]+)<br>', b)
print('=== CATEGORIES ===')
print(cats)