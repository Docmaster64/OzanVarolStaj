import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
b=open('_orig_compare/blog.html',encoding='utf-8').read()
# The post-loop blocks use data-sid="header_post-loop_0" etc. but there are multiple copies.
# Let's just find all <h2 ... se-wpt ...><a href="URL">TITLE</a></h2> and the following excerpt/category
# Strategy: split by occurrences of se-wpt title anchors
titles = re.findall(r'<h2[^>]*se-wpt[^>]*><a href="([^"]+)"[^>]*>([^<]+)</a></h2>', b)
print('TITLES found:', len(titles))
for t in titles:
    print('  ', t[1], '->', t[0])

# For each title, find the surrounding block to get image, excerpt, category
for url, title in titles:
    idx = b.find('<a href="%s"' % url)
    block = b[idx-2000:idx+2000]
    im = re.search(r'<img[^>]*src="([^"]+)"', block)
    # excerpt: first se-wpt <p> after the title
    exc_m = re.search(r'<p[^>]*se-wpt[^>]*>(.*?)</p>', block[1500:], re.S)
    exc = clean(exc_m.group(1)) if exc_m else ''
    cat_m = re.search(r'<p[^>]*se-wpt[^>]*><a[^>]*>([^<]+)</a></p>', block[1500:], re.S)
    cat = clean(cat_m.group(1)) if cat_m else ''
    print('---')
    print('TITLE:', title)
    print('IMG:', im.group(1) if im else '')
    print('CAT:', cat)
    print('EXC:', exc[:300])