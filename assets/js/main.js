(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const body = document.body;
  const filterButtons = document.querySelectorAll('.filter-button');
  const recipes = document.querySelectorAll('.recipe-card');
  const year = document.getElementById('current-year');

  if (year) {
    year.textContent = new Date().getFullYear();
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
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));

        recipes.forEach((recipe) => {
          const category = recipe.dataset.category;
          const shouldShow = filter === 'all' || category === filter;
          recipe.style.display = shouldShow ? 'flex' : 'none';
          recipe.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
        });
      });
    });
  }
})();
