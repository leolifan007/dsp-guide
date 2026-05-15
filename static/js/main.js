(function() {
  // Generate TOC from h2s
  var tocContainer = document.getElementById('floatingToc');
  if (!tocContainer) return;

  var headingSelector = '.article-body h2';
  var headings = document.querySelectorAll(headingSelector);
  if (headings.length === 0) {
    tocContainer.innerHTML = '<div class="toc-title">On This Page</div>';
    return;
  }

  var html = '<div class="toc-title">On This Page</div>';
  for (var i = 0; i < headings.length; i++) {
    var h = headings[i];
    var id = h.id || h.textContent.trim().toLowerCase().replace(/[\s]+/g, '-').replace(/[^a-z0-9\-]/g, '');
    h.id = id;
    var text = h.textContent.trim();
    if (!text) continue;
    html += '<a href="#' + id.replace(/"/g, '') + '" class="toc-link">' + text.replace(/"/g, '&quot;') + '</a>';
  }
  tocContainer.innerHTML = html;

  // Scroll spy
  var links = tocContainer.querySelectorAll('.toc-link');
  if (!links.length) return;

  function updateActive() {
    var scrollY = window.scrollY + 120;
    var activeIdx = -1;
    for (var i = 0; i < headings.length; i++) {
      var rect = headings[i].getBoundingClientRect();
      if (rect.top + window.scrollY <= scrollY) activeIdx = i;
    }
    for (var j = 0; j < links.length; j++) {
      links[j].classList.toggle('active', j === activeIdx);
    }
  }
  window.addEventListener('scroll', updateActive);
  updateActive();

  // Smooth scroll
  for (var k = 0; k < links.length; k++) {
    (function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var id = link.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    })(links[k]);
  }
})();
