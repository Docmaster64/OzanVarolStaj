import re, html, json
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()

e=open('_orig_compare/experiences.html',encoding='utf-8').read()

# Experiences page structure: it's a Showit page. Let's find text blocks (se-t / se-wpt) with meaningful content.
# Strategy: extract all elements with class containing 'se-t' and pull text, then filter.
texts = re.findall(r'class="se-t[^"]*"[^>]*>(.*?)</(?:div|h[1-4]|p|a|nav|svg)>', e, re.S)
out=[]
for t in texts:
    c=clean(t)
    if len(c)>15:
        out.append(c)
# dedupe preserve order
seen=set(); uniq=[]
for o in out:
    if o not in seen:
        seen.add(o); uniq.append(o)
for i,o in enumerate(uniq[:120]):
    print(i, o[:200])
print('TOTAL', len(uniq))