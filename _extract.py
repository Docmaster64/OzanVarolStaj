import re, json, sys

page = sys.argv[1]
s = open('_orig_compare/' + page, encoding='utf-8').read()
m = re.search(r'<script id="init_data" type="application/json">(.*?)</script>', s, re.S)
d = json.loads(m.group(1))
ed = d['elementData']
for e in ed:
    if e.get('id') == 'speaking_0':
        print(json.dumps(e, ensure_ascii=False, indent=1))
        break