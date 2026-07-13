import re, html, json
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
data=open('_live_awakening.html',encoding='utf-8').read()

# We'll extract structured content by walking the showit blocks (data-bid sections).
# Print the full ordered text with section ids to map content.
# Get all (bid, text) pairs in document order.
blocks = re.findall(r'<div id="([^"]+)" data-bid="[^"]+"[^>]*>(.*?)(?=<div id="[^"]+" data-bid=)', data, re.S)
print('sections', len(blocks))
for bid, blk in blocks:
    txt = clean(blk)
    # only print sections with substantial text
    if len(txt) > 30:
        print('### SECTION', bid)
        print(txt[:600])
        print()