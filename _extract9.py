import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
e=open('_orig_compare/experiences.html',encoding='utf-8').read()
# The experiences page is a 404. Let's check what the LIVE site's /the-awakening (Experiences) page looks like.
# But we don't have it locally. Let's check if there's a t_experiences.txt or any text extraction.
import os
print('files with experiences:')
for f in os.listdir('_orig_compare'):
    if 'exper' in f.lower():
        print(' ', f, os.path.getsize('_orig_compare/'+f))
# Also check the home page footer / menu: Experiences links to /the-awakening
# Let's look at the awaken.html (book) which is a real page, to understand the pattern of a real content page.
# Actually, let's check what 'the-awakening' content might be. Search all orig files for 'awakening' text.
for f in ['home.html','awaken.html','about.html']:
    t=open('_orig_compare/'+f,encoding='utf-8').read()
    for m in re.finditer(r'[Aa]waken(?:ing| your genius)?', t):
        i=m.start()
        print(f, '::', clean(t[i-60:i+120]))
        break