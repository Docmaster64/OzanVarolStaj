import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
# Check the live site's experiences page (the-awakening) to get real content
import urllib.request
url='https://ozanvarol.com/the-awakening/'
try:
    req=urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
    data=urllib.request.urlopen(req, timeout=20).read().decode('utf-8','ignore')
    print('LEN', len(data))
    # find title
    tm=re.search(r'<title>(.*?)</title>', data)
    print('TITLE:', tm.group(1) if tm else 'none')
    # find h1/h2 text
    heads=re.findall(r'<h[12][^>]*>(.*?)</h[12]>', data, re.S)
    for h in heads[:20]:
        c=clean(h)
        if c: print('H:', c[:150])
    # paragraphs
    ps=re.findall(r'<p[^>]*>(.*?)</p>', data, re.S)
    cnt=0
    for p in ps:
        c=clean(p)
        if len(c)>40:
            print('P:', c[:300]); cnt+=1
        if cnt>15: break
except Exception as ex:
    print('ERR', ex)