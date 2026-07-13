import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
data=open('_live_awakening.html',encoding='utf-8').read()
# Find the hero section's background image. Showit uses data-img with a background set via inline style or CSS.
# Let's dump the hero section raw (first 2500 chars after <div id="hero")
i=data.find('<div id="hero"')
print(data[i:i+2500])