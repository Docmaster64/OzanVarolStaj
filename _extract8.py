import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
e=open('_orig_compare/experiences.html',encoding='utf-8').read()
# find the 404 text context
i=e.find('Sorry! Page not found')
print(e[i-800:i+800])