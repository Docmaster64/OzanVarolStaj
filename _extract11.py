import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
# Try fetching the live experiences page with curl via subprocess
import subprocess
url='https://ozanvarol.com/the-awakening/'
r=subprocess.run(['curl.exe','-sL','--max-time','25','-A','Mozilla/5.0 (Windows NT 10.0; Win64; x64)','-H','Accept: text/html','--compressed',url], capture_output=True, text=True)
data=r.stdout
print('LEN', len(data))
tm=re.search(r'<title>(.*?)</title>', data)
print('TITLE:', tm.group(1) if tm else 'none')
heads=re.findall(r'<h[12][^>]*>(.*?)</h[12]>', data, re.S)
for h in heads[:25]:
    c=clean(h)
    if c: print('H:', c[:160])
ps=re.findall(r'<p[^>]*>(.*?)</p>', data, re.S)
cnt=0
for p in ps:
    c=clean(p)
    if len(c)>40:
        print('P:', c[:300]); cnt+=1
    if cnt>20: break