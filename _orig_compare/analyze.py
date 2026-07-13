import re, os, html

pages = ['home','about','speaking','blog','courses','contact','experiences',
         'masterclass','moonshot','newsletter','terms','privacy-policy',
         'affiliate-disclosure','awaken','rocket-scientist']

def extract_text(path):
    with open(path, encoding='utf-8', errors='ignore') as f:
        s = f.read()
    # cut off the init_data JSON script (huge, not visible text)
    s = re.sub(r'<script id="init_data".*?</script>', '', s, flags=re.S)
    # remove all script/style
    s = re.sub(r'<script.*?</script>', '', s, flags=re.S)
    s = re.sub(r'<style.*?</style>', '', s, flags=re.S)
    # remove tags
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

def imgs(path):
    with open(path, encoding='utf-8', errors='ignore') as f:
        s = f.read()
    return sorted(set(re.findall(r'src="([^"]+\.(?:png|jpg|jpeg|webp|svg))"', s, flags=re.I)))

def links(path):
    with open(path, encoding='utf-8', errors='ignore') as f:
        s = f.read()
    return sorted(set(re.findall(r'href="([^"]+)"', s)))

for p in pages:
    orig = os.path.join('_orig_compare', p + '.html')
    mine = os.path.join('site', p + '.html')
    if not os.path.exists(mine):
        print('### %s : OUR FILE MISSING' % p)
        continue
    ot = extract_text(orig)
    mt = extract_text(mine)
    oh = headings(orig)
    mh = headings(mine)
    print('='*70)
    print('PAGE:', p)
    print('orig text len=%d  ours len=%d' % (len(ot), len(mt)))
    print('--- ORIG headings (%d) ---' % len(oh))
    for h in oh[:40]:
        print('  H:', h[:90])
    print('--- OURS headings (%d) ---' % len(mh))
    for h in mh[:40]:
        print('  H:', h[:90])
    # words in orig not present in ours (rough content gap)
    ow = set(re.findall(r'[A-Za-z]{5,}', ot.lower()))
    mw = set(re.findall(r'[A-Za-z]{5,}', mt.lower()))
    missing = sorted(ow - mw)
    print('--- distinctive words in ORIG missing from OURS (%d shown) ---' % min(len(missing),30))
    print('  ', ', '.join(missing[:30]))
print('='*70)
print('DONE')