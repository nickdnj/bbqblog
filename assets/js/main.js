(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const body = document.body;
  const filterButtons = document.querySelectorAll('[data-season-filter]');
  const recipes = document.querySelectorAll('.recipe-card');
  const yearEl = document.querySelector('[data-year]');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('is-open');
      nav.classList.toggle('is-open');
      body.classList.toggle('nav-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.addEventListener('click', (event) => {
      const isLink = event.target instanceof HTMLElement && event.target.tagName === 'A';
      if (isLink && navToggle.classList.contains('is-open')) {
        navToggle.classList.remove('is-open');
        nav.classList.remove('is-open');
        body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (filterButtons.length && recipes.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.seasonFilter;

        filterButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));

        recipes.forEach((recipe) => {
          const season = recipe.dataset.season;
          const shouldShow = filter === 'all' || season === filter;
          recipe.style.display = shouldShow ? 'flex' : 'none';
          recipe.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
        });
      });
    });
  }

  // ---- Bob's Grill School ----
  // Drop-in video series: fill a youtubeId to turn a "coming soon" card into a
  // click-to-load embed (no iframe loads until the viewer clicks). Episodes map
  // to the Start Here steps. See docs/bob-video-series.md for the production plan.
  const EPISODES = [
    { num: 1, title: 'Light Your First Charcoal Fire', desc: 'The chimney-starter method, start to glowing coals — no guesswork, no lighter fluid.', youtubeId: '' },
    { num: 2, title: 'Is It Ready? Reading Your Coals', desc: 'How to tell when the coals are perfect, the hand heat-test, and setting up a cool "safe zone".', youtubeId: '' },
    { num: 3, title: 'Burgers & Dogs: Your First Cook', desc: 'Forgiving first-timer foods, the flip-once trick, and hitting the safe temps every time.', youtubeId: '' },
    { num: 4, title: 'Lighter Fluid, the Safe Way', desc: 'Prefer fluid? The right way to use it — and the one thing you must never do.', youtubeId: '' },
    { num: 5, title: 'Beat the Wind on the Waterfront', desc: 'Spin the grill, block the gust, and keep your fire steady on a breezy Jersey Shore day.', youtubeId: '' },
    { num: 6, title: 'Cool Down & Clean Up Right', desc: 'Cold ash into the metal bins, a quick grate scrub, and leaving it perfect for the next neighbor.', youtubeId: '' },
  ];

  const bobGrid = document.getElementById('bob-grid');
  if (bobGrid) {
    EPISODES.forEach((ep) => {
      const card = document.createElement('article');
      card.className = 'video-card';
      const thumb = ep.youtubeId
        ? '<button class="video-card__thumb video-card__thumb--ready" type="button" aria-label="Play: ' +
          ep.title + '" data-yt="' + ep.youtubeId + '" style="background-image:url(https://i.ytimg.com/vi/' +
          ep.youtubeId + '/hqdefault.jpg)"><span class="video-card__play" aria-hidden="true">▶</span></button>'
        : '<div class="video-card__thumb" aria-hidden="true"><span class="video-card__play">▶</span>' +
          '<span class="video-card__soon">Coming soon</span></div>';
      card.innerHTML = thumb +
        '<div class="video-card__body"><p class="video-card__num">Episode ' + ep.num + '</p><h3>' +
        ep.title + '</h3><p>' + ep.desc + '</p></div>';
      bobGrid.appendChild(card);
    });
    bobGrid.addEventListener('click', (event) => {
      const btn = event.target.closest('.video-card__thumb--ready');
      if (!btn) return;
      const id = btn.dataset.yt;
      const wrap = document.createElement('div');
      wrap.className = 'video-card__embed';
      wrap.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
        '?autoplay=1" title="Bob\'s Grill School video" frameborder="0" allow="accelerometer; autoplay; ' +
        'clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      btn.replaceWith(wrap);
    });
  }

  // ---- Forms: no backend yet — be honest, never fake a submit ----
  // TODO: route reservation requests to ECI/HOA via a real endpoint (see DEPLOY.md roadmap).
  function showFormNotice(form, msg) {
    let note = form.querySelector('.form-notice');
    if (!note) {
      note = document.createElement('p');
      note.className = 'form-notice';
      note.setAttribute('role', 'status');
      form.appendChild(note);
    }
    note.textContent = msg;
  }

  const reserveForm = document.querySelector('.reserve-form');
  if (reserveForm) {
    reserveForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!reserveForm.reportValidity()) return;
      showFormNotice(
        reserveForm,
        'Thanks! Online reservations aren\'t wired up yet — to lock in your grill, call the HOA office at (732) 245-4057 with your date, time, and guest count.'
      );
    });
  }

  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!newsletterForm.reportValidity()) return;
      showFormNotice(newsletterForm, 'Thanks for your interest — the seasonal newsletter is coming soon!');
      newsletterForm.reset();
    });
  }
})();
