document.documentElement.classList.add('js');

const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

requestAnimationFrame(() => body.classList.remove('is-loading'));

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      body.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

const progress = document.querySelector('.progress-rail span');
if (progress) {
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.height = `${Math.min(100, Math.max(0, value))}%`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
}

const projectFilterButtons = [...document.querySelectorAll('[data-project-filter]')];
const projectCards = [...document.querySelectorAll('[data-project-category]')];

if (projectFilterButtons.length && projectCards.length) {
  const applyProjectFilter = (category) => {
    projectFilterButtons.forEach((button) => {
      const active = button.dataset.projectFilter === category;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.projectCategory.split(' ');
      const visible = categories.includes(category);
      card.hidden = !visible;

      if (visible) {
        card.classList.remove('is-filter-entering');
        void card.offsetWidth;
        card.classList.add('is-filter-entering');
        card.addEventListener('animationend', () => {
          card.classList.remove('is-filter-entering');
        }, { once: true });
      }
    });
  };

  projectFilterButtons.forEach((button, index) => {
    button.addEventListener('click', () => applyProjectFilter(button.dataset.projectFilter));
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + direction + projectFilterButtons.length) % projectFilterButtons.length;
      projectFilterButtons[nextIndex].focus();
      projectFilterButtons[nextIndex].click();
    });
  });
}

const nextStudySection = document.querySelector('[data-next-study]');
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
const pagesWithoutNextStudy = new Set(['index.html', 'about.html', 'contact.html']);

if (nextStudySection && pagesWithoutNextStudy.has(currentFile)) {
  nextStudySection.remove();
} else if (nextStudySection) {
  const caseStudies = [
    {
      file: 'ezhire.html',
      title: 'EZHire',
      image: 'image/ezhire/hero.png',
      category: 'ux'
    },
    {
      file: 'profi.html',
      title: 'ProFi',
      image: 'image/profi/hero.png',
      category: 'ux'
    },
    {
      file: 'sourcedout.html',
      title: 'SourcedOut',
      image: 'image/so/hero.png',
      category: 'ux'
    },
    {
      file: 'hrex.html',
      title: 'HREX',
      image: 'image/hrex/hero.png',
      category: 'ux'
    },
    {
      file: 'lp-ezhire.html',
      title: 'EZHire - ATS Platform',
      image: 'image/lp-ezhire/hero.png',
      category: 'web'
    },
    {
      file: 'lp-profi.html',
      title: 'ProFi - Talent Marketplace',
      image: 'image/lp-profi/hero.png',
      category: 'web'
    },
    {
      file: 'lp-nokot.html',
      title: 'Nokot - Matcha Café',
      image: 'image/lp-nokot/hero.png',
      category: 'web'
    },
    {
      file: 'lp-sourcedout.html',
      title: 'SourcedOut',
      image: 'image/lp-so/hero.png',
      category: 'web'
    }
  ];

  const isProjectPage = window.location.pathname.includes('/projects/');
  const currentStudy = caseStudies.find((study) => study.file === currentFile);
  const availableStudies = caseStudies.filter((study) => {
    if (study.file === currentFile) return false;
    return !isProjectPage || !currentStudy || study.category === currentStudy.category;
  });

  if (!availableStudies.length) {
    nextStudySection.remove();
  } else {
    const nextStudy = availableStudies[Math.floor(Math.random() * availableStudies.length)];
    const pagePath = isProjectPage ? nextStudy.file : `projects/${nextStudy.file}`;
    const imagePath = `${isProjectPage ? '../' : ''}${nextStudy.image}`;
    const title = nextStudySection.querySelector('[data-next-study-title]');
    const image = nextStudySection.querySelector('[data-next-study-image]');
    const links = nextStudySection.querySelectorAll('[data-next-study-link]');

    nextStudySection.hidden = false;
    title.textContent = nextStudy.title;
    image.src = imagePath;
    image.alt = `${nextStudy.title} case study preview`;
    links.forEach((link) => {
      link.href = pagePath;
      if (link.classList.contains('footer-next-study__thumbnail')) {
        link.setAttribute('aria-label', `View ${nextStudy.title} case study`);
      }
    });
  }
}
