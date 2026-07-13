import re, sys, html, os

def main_text(path):
    with open(path, encoding='utf-8', errors='ignore') as f:
        s = f.read()
    # remove init_data and all scripts/styles
    s = re.sub(r'<script id="init_data".*?</script>', '', s, flags=re.S)
    s = re.sub(r'<script.*?</script>', '', s, flags=re.S)
    s = re.sub(r'<style.*?</style>', '', s, flags=re.S)
    # keep only the <body>...</body>
    m = re.search(r'<body[^>]*>(.*)</body>', s, flags=re.S)
    body = m.group(1) if m else s
    # remove tags but keep some structure markers
    # replace block-level closings with newlines
    body = re.sub(r'</(div|section|p|h1|h2|h3|h4|li|blockquote|tr)>', '\n', body, flags=re.I)
    body = re.sub(r'<br\s*/?>', '\n', body, flags=re.I)
    body = re.sub(r'<[^>]+>', '', body)
    body = html.unescape(body)
    lines = [re.sub(r'\s+', ' ', l).strip() for l in body.split('\n')]
    lines = [l for l in lines if l]
    return lines

if __name__ == '__main__':
    page = sys.argv[1]
    orig = os.path.join('_orig_compare', page + '.html')
    lines = main_text(orig)
    # boilerplate to skip (nav/overlay/footer repeated)
    skip = {'About','Books','Speaking','Courses','Blog','Contact','Experiences',
            'YOUR WEEKLY SPARK','free masterclass','Reimagine The Status Quo',
            'WSJ BESTSELLERS:','Awaken Your Genius','Think Like a Rocket Scientist',
            'THE AI ADVANTAGE','MOONSHOT THINKING','new!','navigate','books',
            'join 50k+ readers','Home','Newsletter','EXPERIENCES','YOUR WEEKLY SPARK',
            'download','see all courses','For individuals and businesses',
            'For businesses','Learn how to master ChatGPT, reclaim 10 hours from your work week, and change your to-do list from a battleground to a playground.',
            'Moonshot Thinking is a system for reimagining the status quo—and building a future others can’t yet see. I wrote the book on it—literally.'}
    out = []
    for l in lines:
        if l in skip:
            continue
        out.append(l)
    print('\n'.join(out))