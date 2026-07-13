import re, os, html

def extract_text(path):
    with open(path, encoding='utf-8', errors='ignore') as f:
        s = f.read()
    s = re.sub(r'<script id="init_data".*?</script>', '', s, flags=re.S)
    s = re.sub(r'<script.*?</script>', '', s, flags=re.S)
    s = re.sub(r'<style.*?</style>', '', s, flags=re.S)
    s = re.sub(r'<[^>]+>', ' ', s)
    s = html.unescape(s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def headings(path):
    with open(path, encoding='utf-8', errors='ignore') as f:
        s = f.read()
    s = re.sub(r'<script.*?</script>', '', s, flags=re.S)
    s = re.sub(r'<style.*?</style>', '', s, flags=re.S)
    out = []
    for m in re.finditer(r'<(h1|h2|h3|h4)[^>]*>(.*?)</\1>', s, flags=re.S|re.I):
        t = re.sub(r'<[^>]+>', '', m.group(2))
        t = html.unescape(t).strip()
        if t:
            out.append(t)
    return out

# home is index.html in ours
checks = [
    ('home', '_orig_compare/home.html', 'site/index.html'),
    ('experiences', '_orig_compare/experiences.html', 'site/experiences.html'),
    ('masterclass', '_orig_compare/masterclass.html', 'site/masterclass.html'),
    ('moonshot', '_orig_compare/moonshot.html', 'site/moonshot.html'),
]

for name, orig, mine in checks:
    ot = extract_text(orig); mt = extract_text(mine)
    oh = headings(orig); mh = headings(mine)
    print('='*70)
    print('PAGE:', name, '| orig len=%d ours len=%d' % (len(ot), len(mt)))
    print('--- ORIG headings (%d) ---' % len(oh))
    for h in oh[:50]:
        print('  H:', h[:95])
    print('--- OURS headings (%d) ---' % len(mh))
    for h in mh[:50]:
        print('  H:', h[:95])
print('='*70)
print('DONE')