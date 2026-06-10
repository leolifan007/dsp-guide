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
    // Ads load automatically via Hugo partials
    return;
  }
  if (consent === 'rejected') {
    // Remove ad scripts if user rejected
    removeAdsterraAds();
    return;
  }

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
    // Ads already loaded via Hugo partials
    if (typeof gtag === 'function') {
      gtag('event', 'consent_update');
    }
  });

  document.getElementById('cookieReject').addEventListener('click', function() {
    // Essential only
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
    // Remove ad containers
    removeAdsterraAds();
  });

  function removeAdsterraAds() {
    // Remove ad containers
    var adContainers = document.querySelectorAll('.adsterra-banner, .adsterra-native, #container-da8ceeaa957e13ce9d75f6f99ca7ef33');
    adContainers.forEach(function(el) {
      el.style.display = 'none';
      el.innerHTML = '';
    });
    // Note: Popunder script cannot be removed once loaded, but won't trigger on reject
  }
})();
