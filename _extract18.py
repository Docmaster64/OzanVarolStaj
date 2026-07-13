import re, html, json
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
data=open('_live_awakening.html',encoding='utf-8').read()

# Map each section's image. Showit stores image key in JSON: "c":{"key":"<id>/<file>"}
# Build a map from data-img id -> image url by scanning the JSON-ish config near top (init_data) OR by the <img> in noscript.
# Simpler: each se-img div has data-img="X". The actual image is loaded via JS from showit CDN using the key.
# We can find the key in the embedded JSON: search for '"id":"X"' patterns. But easier: the noscript <img> tags contain full urls.
# Let's extract all noscript imgs with their preceding data-img context.
# Actually the structure: <div data-img="intro_0" class="se-img ..."></div> then later <noscript><img src="//static.showit.co/.../file.jpg"></noscript>
# Find pairs: for each data-img, the nearest following noscript img.
pairs={}
for m in re.finditer(r'data-img="([^"]+)"[^>]*>(?:\s*</div>)?\s*(?:<div[^>]*>)?\s*<noscript>\s*<img src="([^"]+)"', data):
    pairs[m.group(1)]=m.group(2)
print('IMG PAIRS:', len(pairs))
for k,v in pairs.items():
    print(k,'->',v)

# Also get the hero/intro background: intro_0 may not have noscript. Search for the key in JSON for intro_0
m=re.search(r'"id":"intro_0".*?"key":"([^"]+)"', data)
print('intro_0 key:', m.group(1) if m else 'none')
# Build url from key
if m:
    key=m.group(1)
    print('intro_0 url: //static.showit.co/1200/'+key)