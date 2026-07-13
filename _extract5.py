import re, html
def clean(s):
    s = re.sub(r'<[^>]+>',' ',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
b=open('_orig_compare/blog.html',encoding='utf-8').read()

# Each post-loop block: starts at <div id="header_post-loop-N" ...> and ends before next <div id="header_post-loop- or postloopcontainer
# But the data-sid uses header_post-loop_0 inside. Let's locate the container divs by id.
# Find all <div id="header_post-loop-(\d+)" ...> ... </div> boundaries is hard. Instead use the structure:
# <div id="header_post-loop-0" class="ss sis-header_post-loop "><div class="sc"> ... </div></div>
# We'll find each block by locating 'id="header_post-loop-' and the matching closing via counting is complex.
# Simpler: the title h2 is followed by a 'read the post' link and the excerpt p appears BEFORE the title in the markup?
# Let's just print the raw segment around the first title to understand structure.
idx = b.find('People keep asking about our marriage')
seg = b[idx-1500:idx+1500]
print(seg)