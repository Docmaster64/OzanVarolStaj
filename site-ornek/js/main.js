/* ============================================================
   Ozan Varol Clone - Shared JavaScript
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Navbar scroll effect ---------- */
  var navbar = document.querySelector('.navbar');
  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ---------- Hamburger / overlay menu ---------- */
  var navToggle = document.getElementById('navToggle');
  var overlay = document.getElementById('overlayMenu');
  var overlayClose = document.getElementById('overlayClose');

  if (navToggle && overlay) {
    navToggle.addEventListener('click', function () {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (overlayClose && overlay) {
    overlayClose.addEventListener('click', function () {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  // Close overlay when a link is clicked
  if (overlay) {
    overlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Dropdown (Courses) click toggle for touch ---------- */
  var dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) {
    var trigger = dropdown.querySelector('.nav-link');
    if (trigger) {
      trigger.addEventListener('click', function (e) {
        // On touch devices, toggle the menu instead of navigating
        if (window.matchMedia('(hover: none)').matches) {
          e.preventDefault();
          var menu = dropdown.querySelector('.nav-dropdown-menu');
          if (menu) {
            menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
            menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
          }
        }
      });
    }
  }

  /* ---------- About image slider (manual + autoplay) ---------- */
  var gallery = document.querySelector('.about-gallery');
  if (gallery) {
    var slides = gallery.querySelectorAll('img');
    var dotsWrap = document.querySelector('.about-dots');
    var current = 0;
    var timer = null;

    // Build dots
    if (dotsWrap && slides.length) {
      slides.forEach(function (_, i) {
        var btn = document.createElement('button');
        btn.setAttribute('aria-label', 'Slide ' + (i + 1));
        if (i === 0) btn.classList.add('active');
        btn.addEventListener('click', function () {
          goTo(i);
          restart();
        });
        dotsWrap.appendChild(btn);
      });
    }

    function goTo(index) {
      slides.forEach(function (s, i) { s.classList.toggle('active', i === index); });
      if (dotsWrap) {
        dotsWrap.querySelectorAll('button').forEach(function (b, i) {
          b.classList.toggle('active', i === index);
        });
      }
      current = index;
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    function start() {
      timer = setInterval(next, 5000);
    }
    function stop() {
      if (timer) clearInterval(timer);
    }
    function restart() {
      stop();
      start();
    }

    if (slides.length > 1) {
      goTo(0);
      start();
      // Pause on hover
      gallery.addEventListener('mouseenter', stop);
      gallery.addEventListener('mouseleave', start);
    }
  }

  /* ---------- IntersectionObserver fade-in ---------- */
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    fadeEls.forEach(function (el) { io.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Video visibility control ---------- */
  var videos = document.querySelectorAll('.speaking-video-bg video');
  if ('IntersectionObserver' in window && videos.length) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.1 });
    videos.forEach(function (v) { vio.observe(v); });
  }

  /* ---------- 3D book tilt ---------- */
  var tiltEls = document.querySelectorAll('[data-tilt]');
  tiltEls.forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var rect = el.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform =
        'perspective(1000px) rotateY(' + (x * 18) + 'deg) rotateX(' + (-y * 12) + 'deg)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.transform = 'perspective(1000px) rotateY(-12deg) rotateX(0deg)';
    });
  });

  /* ---------- Parallax (hero image) ---------- */
  var parallax = document.querySelector('[data-parallax]');
  if (parallax) {
    window.addEventListener('scroll', function () {
      var offset = window.scrollY * 0.15;
      parallax.style.transform = 'translateY(' + offset + 'px)';
    });
  }

  /* ---------- Marquee: duplicate content for seamless loop ---------- */
  var track = document.querySelector('.marquee-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* ---------- Mobile nav menu (fallback toggle) ---------- */
  var navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu && !overlay) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  /* ---------- Rocket logo (home link) — fixed bottom-right ---------- */
  var rocket = document.createElement('a');
  rocket.className = 'back-to-top';
  rocket.href = 'index.html';
  rocket.setAttribute('aria-label', 'Home');
  rocket.innerHTML = '<img src="https://static.showit.co/200/ToPPkbZRT0C0XqIAErQWtg/260793/ozan_varol-283.png" alt="Ozan Varol" />';
  document.body.appendChild(rocket);
  function toggleRocket() {
    if (window.scrollY > 400) rocket.classList.add('show');
    else rocket.classList.remove('show');
  }
  window.addEventListener('scroll', toggleRocket);
  toggleRocket();
})();
