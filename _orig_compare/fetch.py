import urllib.request, os

pages = {
    'home': '',
    'about': 'about',
    'speaking': 'speaking',
    'blog': 'blog',
    'courses': 'courses',
    'contact': 'contact',
    'experiences': 'experiences',
    'masterclass': 'masterclass',
    'moonshot': 'moonshot',
    'newsletter': 'newsletter',
    'terms': 'terms',
    'privacy-policy': 'privacy-policy',
    'affiliate-disclosure': 'affiliate-disclosure',
    'awaken': 'awaken',
    'rocket-scientist': 'rocket-scientist',
}

os.makedirs('_orig_compare', exist_ok=True)
for name, slug in pages.items():
    url = 'https://ozanvarol.com/' + slug
    out = os.path.join('_orig_compare', name + '.html')
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        with open(out, 'wb') as f:
            f.write(data)
        print('OK', url, len(data))
    except Exception as e:
        print('ERR', url, e)
print('DONE')