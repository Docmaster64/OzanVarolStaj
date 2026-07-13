import re, html, subprocess
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
url='https://ozanvarol.com/the-awakening/'
r=subprocess.run(['curl.exe','-sL','--max-time','25','-A','Mozilla/5.0 (Windows NT 10.0; Win64; x64)','-H','Accept: text/html','--compressed',url], capture_output=True)
data=r.stdout.decode('utf-8','ignore')
open('_live_awakening.html','w',encoding='utf-8').write(data)
print('LEN', len(data))
tm=re.search(r'<title>(.*?)</title>', data)
print('TITLE:', tm.group(1) if tm else 'none')
# showit text blocks
texts=re.findall(r'class="se-t[^"]*"[^>]*>(.*?)</(?:div|h[1-4]|p|a|nav)>', data, re.S)
seen=set(); uniq=[]
for t in texts:
    c=clean(t)
    if len(c)>15 and c not in seen:
        seen.add(c); uniq.append(c)
for i,o in enumerate(uniq[:80]):
    print(i, o[:200])
print('TOTAL', len(uniq))