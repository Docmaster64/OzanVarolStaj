import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
b=open('_orig_compare/blog.html',encoding='utf-8').read()
for m in re.finditer(r'data-sid="header_post-loop_(\d+)"', b):
    i=m.group(1)
    start=m.start()
    nxt=re.search(r'data-sid="header_post-loop_(\d+)"', b[start+10:])
    end = (nxt.start()+start+10) if nxt else b.find('<div id="postloopcontainer"')
    block=b[start:end]
    print('==== POST',i,'====')
    for pm in re.finditer(r'<p[^>]*se-wpt[^>]*>(.*?)</p>', block, re.S):
        print('EXC:', clean(pm.group(1))[:400])
    for cm in re.finditer(r'<p[^>]*se-wpt[^>]*><a[^>]*>([^<]+)</a></p>', block, re.S):
        print('CAT:', clean(cm.group(1)))