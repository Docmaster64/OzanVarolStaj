import re, html, json
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
data=open('_live_awakening.html',encoding='utf-8').read()

# Extract the full ordered text per section (already have from _extract13). Let's also get the 'expect' list items and 'list' (who is this for) items.
# We'll build a structured dict for the experiences page.

# Helper: get section text
def section_text(bid):
    m=re.search(r'<div id="'+re.escape(bid)+r'" data-bid="[^"]+"[^>]*>(.*?)(?=<div id="[^"]+" data-bid=)', data, re.S)
    if not m: return ''
    return clean(m.group(1))

# expect section: list items
m=re.search(r'<div id="expect" data-bid="expect"[^>]*>(.*?)(?=<div id="[^"]+" data-bid=)', data, re.S)
expect_block=m.group(1)
# The expect items are in <p> or <h3> with se-t. Let's grab all se-t texts in order
expect_items=re.findall(r'class="se-t[^"]*"[^>]*>(.*?)</(?:div|h[1-4]|p|a|nav)>', expect_block, re.S)
expect_items=[clean(x) for x in expect_items if clean(x)]
print('EXPECT ITEMS:')
for it in expect_items: print('  -', it[:120])

# list section (who is this for / not for)
m=re.search(r'<div id="list" data-bid="list"[^>]*>(.*?)(?=<div id="[^"]+" data-bid=)', data, re.S)
list_block=m.group(1)
list_items=re.findall(r'class="se-t[^"]*"[^>]*>(.*?)</(?:div|h[1-4]|p|a|nav)>', list_block, re.S)
list_items=[clean(x) for x in list_items if clean(x)]
print('LIST ITEMS:')
for it in list_items: print('  -', it[:120])

# flow sections: flow2, flow3, flow4 (day one/two/after) - get their text
for bid in ['flow2','flow3','flow4']:
    t=section_text(bid)
    print('===',bid,'===', t[:400])