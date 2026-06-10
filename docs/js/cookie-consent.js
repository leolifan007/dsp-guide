(function() {
  var STORAGE_KEY = 'dsp_cookie_consent';
  var consent = localStorage.getItem(STORAGE_KEY);

  // Already decided
  if (consent === 'accepted') {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
    loadAdsense();
    return;
  }
  if (consent === 'rejected') return;

  // Show banner
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;
  banner.style.display = 'block';

  document.getElementById('cookieAccept').addEventListener('click', function() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    banner.style.display = 'none';
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
    loadAdsense();
    // Reload GA pageview with full consent
    if (typeof gtag === 'function') {
      gtag('event', 'consent_update');
    }
  });

  document.getElementById('cookieReject').addEventListener('click', function() {
    // Essential only — also reject AdSense personalization
    localStorage.setItem(STORAGE_KEY, 'rejected');
    banner.style.display = 'none';
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });
    }
  });

  function loadAdsense() {
    var existing = document.querySelector('script[src*="adsbygoogle.js"]');
    if (existing) return;
    var s = document.createElement('script');
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7551387157478980';
    s.crossOrigin = 'anonymous';
    s.async = true;
    document.head.appendChild(s);
  }
})();
