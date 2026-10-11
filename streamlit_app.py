import streamlit as st
import streamlit.components.v1 as components
import os
import base64
import re
import json

st.set_page_config(
    page_title="Krishna Verma | Portfolio",
    page_icon="🎓",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom styles to maximize viewport and remove Streamlit default margins
st.markdown("""
<style>
    /* Hide Streamlit default header, footer, and menu */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    
    /* Remove padding around main container */
    .block-container {
        padding-top: 0rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0rem !important;
        padding-right: 0rem !important;
        max-width: 100% !important;
    }
    
    /* Ensure iframe takes up full available height and width */
    iframe {
        border: none !important;
        width: 100% !important;
    }
</style>
""", unsafe_allow_html=True)

def build_self_contained_html():
    """
    Bundles HTML, CSS, JavaScript, and asset images into a single self-contained HTML payload.
    This guarantees zero path errors when hosted on Streamlit Community Cloud (share.streamlit.io).
    """
    base_dir = os.path.dirname(os.path.abspath(__file__))
    index_path = os.path.join(base_dir, "index.html")

    if not os.path.exists(index_path):
        return "<h3>Error: index.html not found.</h3>"

    with open(index_path, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Inline CSS stylesheets
    def inline_css(match):
        css_rel = match.group(1)
        css_full = os.path.join(base_dir, css_rel)
        if os.path.exists(css_full):
            with open(css_full, "r", encoding="utf-8") as cf:
                return f"<style>/* {css_rel} */\n{cf.read()}\n</style>"
        return match.group(0)

    html = re.sub(r'<link\s+rel=["\']stylesheet["\']\s+href=["\']([^"\']+\.css)["\']\s*>', inline_css, html)

    # 2. Inline JavaScript scripts
    def inline_js(match):
        js_rel = match.group(1)
        js_full = os.path.join(base_dir, js_rel)
        if os.path.exists(js_full):
            with open(js_full, "r", encoding="utf-8") as jf:
                return f"<script>/* {js_rel} */\n{jf.read()}\n</script>"
        return match.group(0)

    html = re.sub(r'<script\s+src=["\']([^"\']+\.js)["\']\s*></script>', inline_js, html)

    # 3. Inline assets (images, documents) as base64 data URIs
    def inline_assets(match):
        prefix = match.group(1)
        asset_rel = match.group(2)
        suffix = match.group(3)
        asset_full = os.path.join(base_dir, asset_rel.replace('/', os.sep))
        if os.path.exists(asset_full) and os.path.isfile(asset_full):
            ext = os.path.splitext(asset_full)[1].lower().replace('.', '')
            if ext in ["jpg", "jpeg"]:
                mime = "image/jpeg"
            elif ext == "docx":
                mime = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            elif ext == "doc":
                mime = "application/msword"
            elif ext == "pdf":
                mime = "application/pdf"
            else:
                mime = f"image/{ext}"
            try:
                with open(asset_full, "rb") as af:
                    b64 = base64.b64encode(af.read()).decode("utf-8")
                    return f'{prefix}data:{mime};base64,{b64}{suffix}'
            except Exception:
                return match.group(0)
        return match.group(0)

    # Replaces src="..." as well as "assets/..." in JavaScript configurations
    html = re.sub(r'(src=["\'])([^"\']+\.(?:jpg|jpeg|png|webp|svg|docx|doc|pdf))(["\'])', inline_assets, html)
    html = re.sub(r'([\"\'])(assets/[^"\']+\.(?:jpg|jpeg|png|webp|svg|docx|doc|pdf))([\"\'])', inline_assets, html)

    return html

def main():
    bundled_html = build_self_contained_html()

    # Render interactive HTML in Streamlit component
    components.html(
        bundled_html,
        height=1400,
        scrolling=True
    )

if __name__ == "__main__":
    main()
