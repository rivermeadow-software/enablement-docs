// Site-wide image lightbox: click any image inside rendered docs content to
// view it enlarged in an overlay. Click anywhere or press Escape to close.
// Uses a single delegated listener, so it works across client-side route changes.

const SELECTOR = '.markdown img';

function isZoomable(img) {
  // Skip images that are already links (badges, linked screenshots, etc.)
  return img.matches(SELECTOR) && !img.closest('a');
}

function openLightbox(img) {
  const overlay = document.createElement('div');
  overlay.className = 'image-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', img.alt || 'Enlarged image');
  overlay.tabIndex = -1;

  const full = document.createElement('img');
  full.src = img.currentSrc || img.src;
  full.alt = img.alt;
  overlay.appendChild(full);

  // Vector images can grow to fill the viewport without blurring; raster
  // images stay capped at their native size by the CSS max-width/height.
  if (/\.svg(\?|#|$)/i.test(full.src)) {
    const fit = () => {
      const w = full.naturalWidth || img.naturalWidth;
      const h = full.naturalHeight || img.naturalHeight;
      if (!w || !h) return;
      const scale = Math.min((window.innerWidth * 0.95 - 32) / w, (window.innerHeight * 0.9 - 32) / h);
      full.style.width = `${Math.floor(w * scale)}px`;
    };
    if (full.complete) fit();
    else full.addEventListener('load', fit, {once: true});
  }

  const previousOverflow = document.body.style.overflow;
  const close = () => {
    overlay.remove();
    document.body.style.overflow = previousOverflow;
    document.removeEventListener('keydown', onKey);
    img.focus?.({preventScroll: true});
  };
  const onKey = (e) => {
    if (e.key === 'Escape') close();
  };

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', onKey);
  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);
  overlay.focus();
}

if (typeof window !== 'undefined' && !window.__imageLightboxInstalled) {
  window.__imageLightboxInstalled = true;
  document.addEventListener('click', (e) => {
    const img = e.target instanceof Element ? e.target.closest('img') : null;
    if (img && isZoomable(img)) {
      e.preventDefault();
      openLightbox(img);
    }
  });
}
