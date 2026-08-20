(function () {
  "use strict";

  var year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });

  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header && window.scrollY > 10) {
      header.classList.add("is-scrolled");
    } else if (header) {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var hamburger = document.querySelector(".hamburger");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (hamburger && mobileMenu) {
    function closeMenu() {
      hamburger.classList.remove("is-open");
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    hamburger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("is-open");
      hamburger.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-revealed"); });
  }

  var counters = document.querySelectorAll("[data-counter]");
  if (counters.length) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        counterObserver.unobserve(el);
        var target = parseInt(el.getAttribute("data-counter"), 10);
        var suffix = el.getAttribute("data-suffix") || "";
        var duration = 1600;
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var progress = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  var track = document.querySelector(".testimonials__slides");
  if (track) {
    var slides = track.children;
    var dotsWrap = document.querySelector(".testimonials__dots");
    var index = 0;
    var total = slides.length;

    for (var i = 0; i < total; i++) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Ir para o depoimento " + (i + 1));
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", (function (n) { return function () { goTo(n); }; })(i));
      dotsWrap.appendChild(dot);
    }

    var dots = dotsWrap.children;

    function goTo(n) {
      index = (n + total) % total;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      for (var d = 0; d < dots.length; d++) {
        dots[d].classList.toggle("is-active", d === index);
      }
    }

    var prevBtn = document.querySelector("[data-testi-prev]");
    var nextBtn = document.querySelector("[data-testi-next]");
    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(index - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(index + 1); });

    var autoTimer = setInterval(function () { goTo(index + 1); }, 8000);
    var slider = document.querySelector(".testimonials__slider");
    if (slider) {
      slider.addEventListener("mouseenter", function () { clearInterval(autoTimer); });
      slider.addEventListener("mouseleave", function () {
        clearInterval(autoTimer);
        autoTimer = setInterval(function () { goTo(index + 1); }, 8000);
      });
    }
  }

  var productGrid = document.querySelector("[data-product-grid]");
  if (productGrid) {
    renderProducts(productGrid, PRODUCTS);
  }

  var filterBar = document.querySelector("[data-filter-bar]");
  if (filterBar && productGrid) {
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      var cat = btn.getAttribute("data-filter");
      var filtered = cat === "all" ? PRODUCTS : PRODUCTS.filter(function (p) {
        return p.cat === cat || p.tags.indexOf(cat) !== -1;
      });
      productGrid.innerHTML = "";
      renderProducts(productGrid, filtered);
    });
  }

  function renderProducts(container, list) {
    container.setAttribute("data-visible", "");
    list.forEach(function (p, i) {
      var card = document.createElement("article");
      card.className = "product-card";
      card.style.animationDelay = (i * 60) + "ms";
      card.innerHTML =
        '<div class="product-card__media">' +
          '<span class="product-card__tag">' + p.cat + '</span>' +
          '<img src="' + p.img + '" alt="' + p.name + ' — ' + p.desc + '" loading="lazy">' +
        '</div>' +
        '<div class="product-card__body">' +
          '<span class="product-card__cat">' + p.cat + '</span>' +
          '<h3>' + p.name + '</h3>' +
          '<p>' + p.desc + '</p>' +
          '<div class="product-card__foot">' +
            '<a class="link-arrow" href="contato.html?produto=' + encodeURIComponent(p.name) + '">Solicitar Preço <span class="arrow">→</span></a>' +
          '</div>' +
        '</div>';
      container.appendChild(card);
    });
  }

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = form.parentElement.querySelector(".form-success");
      var fields = form.querySelectorAll("[data-required]");
      var valid = true;
      fields.forEach(function (f) {
        var invalid = !f.value.trim();
        f.setAttribute("aria-invalid", invalid ? "true" : "false");
        f.style.borderColor = invalid ? "#C0392B" : "";
        if (invalid) valid = false;
      });
      if (!valid) {
        fields[0].focus();
        return;
      }
      var btn = form.querySelector('[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Enviando...";
      }
      function done() {
        form.style.display = "none";
        if (success) success.classList.add("is-visible");
      }
      if (form.action && form.action.indexOf("formsubmit.co") !== -1) {
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        })
          .then(function (res) { return res.json(); })
          .then(function () { done(); })
          .catch(function () { done(); });
      } else {
        done();
      }
    });
  });

  var urlParams = new URLSearchParams(window.location.search);
  var prefill = urlParams.get("produto");
  if (prefill) {
    var subject = document.querySelector("#assunto");
    if (subject) subject.value = "Orçamento — " + prefill;
  }

  var qualityVideo = document.querySelector(".quality-video");
  if (qualityVideo) {
    function playQualityVideo() {
      var p = qualityVideo.play();
      if (p && p.catch) p.catch(function () {});
    }
    playQualityVideo();
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) playQualityVideo();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var segGrid = document.querySelector("[data-segments-grid]");
  if (segGrid) {
    SEGMENTS.forEach(function (s, i) {
      var card = document.createElement("article");
      card.className = "segment-card";
      card.innerHTML =
        '<img src="' + s.img + '" alt="' + s.title + '" loading="lazy">' +
        '<span class="segment-card__num">' + String(i + 1).padStart(2, "0") + '</span>' +
        '<div class="segment-card__body">' +
          '<h3>' + s.title + '</h3>' +
          '<p>' + s.text + '</p>' +
        '</div>';
      segGrid.appendChild(card);
    });
  }

  var recGrid = document.querySelector("[data-recipes-grid]");
  if (recGrid) {
    RECIPES.forEach(function (r) {
      var card = document.createElement("article");
      card.className = "recipe-card";
      card.innerHTML =
        '<div class="recipe-card__media">' +
          '<span class="tag">' + r.tag + '</span>' +
          '<img src="' + r.img + '" alt="' + r.title + '" loading="lazy">' +
        '</div>' +
        '<div class="recipe-card__body">' +
          '<h3>' + r.title + '</h3>' +
          '<div class="recipe-card__meta">' +
            '<span>' + clockIcon() + r.time + '</span>' +
            '<span>' + plateIcon() + r.yield + '</span>' +
          '</div>' +
          '<p>' + r.text + '</p>' +
          '<a class="link-arrow" href="contato.html?assunto=receita&produto=' + encodeURIComponent(r.title) + '">Ver Receita <span class="arrow">→</span></a>' +
        '</div>';
      recGrid.appendChild(card);
    });
  }

  function clockIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>';
  }
  function plateIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><path d="M3 12h2M19 12h2"></path></svg>';
  }

  })();