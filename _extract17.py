import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
data=open('_live_awakening.html',encoding='utf-8').read()
# The hero has no image; intro_0 has data-img="intro_0" -> background image. Find the CSS mapping for intro_0.
# Showit stores bg images in a <style> with .sie-intro_0 or in the pub.css. Let's search for 'intro_0' in the file.
for m in re.finditer(r'intro_0', data):
    i=m.start()
    seg=data[i-200:i+400]
    if 'background' in seg or 'url(' in seg or 'img' in seg.lower():
        print('---CTX---')
        print(seg)
        print()
# Also search for the image url used as intro background - look for 'pexels' near intro
print('=== search pexels-cappadocia (likely intro bg) ===')
i=data.find('pexels-cappadocia')
print(data[i-300:i+200])