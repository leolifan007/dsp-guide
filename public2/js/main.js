(function() {
  // Generate TOC from h2s
  var tocContainer = document.getElementById('tocLinks');
  if (!tocContainer) return;
  
  var headings = document.querySelectorAll('.article-body h2');
  if (headings.length === 0) return;
  
  var html = '';
  for (var i = 0; i < headings.length; i++) {
    var h = headings[i];
    var id = h.id || h.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    h.id = id;
    var text = h.textContent.trim();
    html += '<a href="#' + id + '" class="toc-link">' + text + '</a>';
  }
  tocContainer.innerHTML = html;
  
  // Scroll spy: highlight active TOC link
  var links = tocContainer.querySelectorAll('.toc-link');
  function updateActive() {
    var scrollY = window.scrollY + 100;
    var activeIdx = -1;
    for (var i = 0; i < headings.length; i++) {
      var rect = headings[i].getBoundingClientRect();
      var top = rect.top + window.scrollY;
      if (top <= scrollY) activeIdx = i;
    }
    for (var j = 0; j < links.length; j++) {
      links[j].classList.toggle('active', j === activeIdx);
    }
  }
  window.addEventListener('scroll', updateActive);
  updateActive();
  
  // Smooth scroll on TOC click
  for (var k = 0; k < links.length; k++) {
    (function(link, idx) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.getElementById(link.getAttribute('href').slice(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    })(links[k], k);
  }
})();
