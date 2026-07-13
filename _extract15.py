import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
data=open('_live_awakening.html',encoding='utf-8').read()
# Find hero image: look for the hero section block and the first <img> with a real photo (not logo)
m=re.search(r'<div id="hero".*?</div>\s*</div>', data, re.S)
print('HERO block found:', bool(m))
if m:
    blk=m.group(0)
    imgs=re.findall(r'src="([^"]+)"', blk)
    print('hero srcs:', imgs)
# Also find the first big background image in hero via style background
m2=re.search(r'<div id="hero"[^>]*style="([^"]*)"', data)
if m2:
    print('hero style:', m2.group(1))
# Find any data-img in hero
m3=re.search(r'<div id="hero".*?(data-img="[^"]+")', data, re.S)
if m3: print('hero data-img:', m3.group(1))
# Look for the hero photo used in original (likely a wide image). Search for 'awaken' or wide images near top
for kw in ['awaken','pexels','cappadocia','haroutinian','felixmittermeier','depositphotos','mahe']:
    for im in re.findall(r'//static\.showit\.co/[^\s"\']+'+kw+r'[^\s"\']*', data):
        print(kw, '->', im)