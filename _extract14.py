import re, html, json
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
data=open('_live_awakening.html',encoding='utf-8').read()

# Extract hero image and any key images
imgs = re.findall(r'<img[^>]*src="([^"]+)"[^>]*>', data)
print('IMAGES (unique):')
seen=set()
for im in imgs:
    if im not in seen and 'static.showit.co' in im:
        seen.add(im)
        print(' ', im)
print('---')

# Extract the hero section image specifically
m=re.search(r'<div id="hero"[^>]*>(.*?)</div>\s*</div>', data, re.S)
if m:
    himgs=re.findall(r'src="([^"]+)"', m.group(1))
    print('HERO imgs:', himgs[:5])

# Extract FAQ pairs
faqs=[]
for qm in re.finditer(r'<div id="question-(\d+)"[^>]*>(.*?)</div>\s*<div id="answer-\d+"[^>]*>(.*?)</div>', data, re.S):
    q=clean(qm.group(2)); a=clean(qm.group(3))
    faqs.append({'q':q,'a':a})
print('FAQS', len(faqs))
for f in faqs:
    print('Q:', f['q'])
    print('A:', f['a'][:200])
    print()

# Save structured data
json.dump({'faqs':faqs}, open('_awakening_faq.json','w'), ensure_ascii=False, indent=1)