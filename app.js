/* A small, build-free Vue app. All project and profile content lives here. */
if (!window.Vue) {
  document.getElementById('load-fallback').hidden = false;
} else {
  const icons = {
    'arrow-up-right': ['M7 17 17 7M7 7h10v10'],
    'arrow-right': ['M5 12h14m-6-6 6 6-6 6'],
    'arrow-down': ['M12 5v14m-6-6 6 6 6-6'],
    'arrow-up': ['M12 19V5m-6 6 6-6 6 6'],
    sun: ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8', 'M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42'],
    moon: ['M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z'],
    menu: ['M4 7h16M4 12h16M4 17h16'],
    x: ['m6 6 12 12M6 18 18 6'],
    check: ['m5 12 4 4L19 6'],
    mail: ['M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z', 'm3 6 9 7 9-7'],
    code: ['m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18'],
    layers: ['m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5'],
    sparkles: ['m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM4 2v4M2 4h4m14 14v4m-2-2h4'],
    globe: ['M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0ZM3 12h18', 'M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18Z'],
    'map-pin': ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z', 'M15 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z'],
    branch: ['M6 3v12m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12-12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6a9 9 0 0 1-9 9'],
    panel: ['M4 4h16v16H4zM9 4v16'],
    refresh: ['M20 7v5h-5M4 17v-5h5', 'M6.1 6a8 8 0 0 1 13.2 3M4.7 15A8 8 0 0 0 17.9 18'],
    copy: ['M9 9h12v12H9zM15 5V3H3v12h2'],
    terminal: ['m4 5 7 7-7 7m9 0h7'],
    github: ['M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.3c.1-1-.3-1.8-.8-2.3 2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 7a4.3 4.3 0 0 0-.1-3.4S17.4 3.3 15 4.9a11.6 11.6 0 0 0-6 0C6.6 3.3 5.6 3.6 5.6 3.6A4.3 4.3 0 0 0 5.5 7a4.7 4.7 0 0 0-1.3 3.4c0 4.7 2.9 5.7 5.6 6-.5.5-.9 1.3-.8 2.3V22'],
    linkedin: ['M5 9H2v12h3V9ZM3.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9 21V9h3v2c1-3 8-3 8 3v7h-3v-6c0-3-5-3-5 0v6H9Z']
  };

  const app = Vue.createApp({
    data() {
      return {
        theme: document.documentElement.dataset.theme,
        mobileMenuOpen: false,
        imgError: false,
        portraitError: false,
        activeSection: 'hero',
        activeFilter: 'all',
        scrollY: 0,
        scrollProgress: 0,
        terminalText: '',
        terminalRunning: false,
        terminalComplete: false,
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        copied: false,
        copyMessage: '',
        manilaTime: '',
        year: new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Manila' }).format(new Date()),
        waveHeights: [6, 12, 19, 11, 22, 16, 9, 20, 14, 23, 12, 17, 8, 15, 21, 10, 6, 13],
        navItems: [
          { id: 'projects', label: 'Work' },
          { id: 'about', label: 'About' },
          { id: 'techstack', label: 'Stack' },
          { id: 'contact', label: 'Contact' }
        ],
        filters: [
          { id: 'all', label: 'All projects' },
          { id: 'frontend', label: 'Frontend' },
          { id: 'fullstack', label: 'Full stack' }
        ],
        projects: [
          {
            id: 1, title: 'Weather Dashboard', category: 'fullstack', art: 'weather', artLabel: 'A forecast with a fresh perspective',
            description: 'A weather app powered by live API data, with a PHP proxy to keep keys secure and CSS animations that bring the forecast to life.',
            tags: ['JavaScript', 'PHP', 'Weather API'],
            link: 'https://polszstack.github.io/Weather-WebApp/', github: 'https://github.com/polszstack/Weather-WebApp'
          },
          {
            id: 2, title: 'Music Player', category: 'frontend', art: 'music', artLabel: 'Your own little listening space',
            description: 'A responsive music player with playlists, dynamic track loading, and intuitive audio controls. Find your rhythm and press play.',
            tags: ['JavaScript', 'HTML', 'Audio API'],
            link: 'https://polszstack.github.io/Music-Player/', github: 'https://github.com/polszstack/Music-Player'
          },
          {
            id: 3, title: 'Quiz Bee', category: 'frontend', art: 'quiz', artLabel: 'A little friendly competition',
            description: 'A multi-category quiz with dynamic questions and score tracking. Built for curious minds.',
            tags: ['Vue.js', 'TypeScript'],
            link: 'https://polszstack.github.io/Quiz-Bee/', github: 'https://github.com/polszstack/Quiz-Bee'
          },
          {
            id: 4, title: 'Photo Booth', category: 'fullstack', art: 'photo', artLabel: 'Keep the good moments',
            description: 'Snap a photo, find your filter, and share a memory. A full-stack photo booth experience.',
            tags: ['Vue.js', 'Express.js', 'TypeScript'],
            link: 'https://photo-booth-clean.vercel.app/', github: 'https://github.com/polszstack/Photo-Booth'
          },
          {
            id: 5, title: 'Todo List', category: 'frontend', art: 'todo', artLabel: 'Less noise. More progress.',
            description: 'A focused task manager to bring a little order to your day. Fully typed and responsive.',
            tags: ['Next.js', 'React', 'TypeScript'],
            link: 'https://todo-list-app-seven-chi-94.vercel.app/', github: 'https://github.com/polszstack/Todo-List'
          }
        ],
        journey: [
          { date: '2022', message: 'Started with the fundamentals: HTML, CSS, and JavaScript.' },
          { date: '2023', message: 'Built my first PHP backends and worked with MySQL.' },
          { date: '2023', message: 'Found Vue.js and TypeScript. Started thinking in components.' },
          { date: '2024', message: 'Added Python and FastAPI. Connected more pieces of the stack.' },
          { date: '2025', message: 'Shipped personal projects and started looking for an internship.' }
        ],
        stackGroups: [
          { title: 'Languages', icon: 'code', items: [
            { name: 'PHP', symbol: 'php', tag: 'backend' },
            { name: 'JavaScript', symbol: 'JS', tag: 'frontend' },
            { name: 'TypeScript', symbol: 'TS', tag: 'frontend' },
            { name: 'Python', symbol: 'Py', tag: 'backend' },
            { name: 'HTML / CSS', symbol: '</>', tag: 'the foundations' }
          ] },
          { title: 'Frameworks', icon: 'layers', items: [
            { name: 'Vue.js', symbol: 'V', tag: 'frontend' },
            { name: 'Express.js', symbol: 'ex', tag: 'backend' },
            { name: 'Next.js', symbol: 'N', tag: 'full stack' },
            { name: 'FastAPI', symbol: 'F', tag: 'backend' },
            { name: 'Tailwind CSS', symbol: '~', tag: 'styling' },
            { name: 'Bootstrap', symbol: 'B', tag: 'styling' }
          ] },
          { title: 'Tools & platforms', icon: 'terminal', items: [
            { name: 'Node.js', symbol: 'nd', tag: 'runtime' },
            { name: 'MySQL', symbol: 'my', tag: 'database' },
            { name: 'Git', symbol: 'gt', tag: 'version control' }
          ] }
        ]
      };
    },
    computed: {
      filteredProjects() {
        return this.activeFilter === 'all' ? this.projects : this.projects.filter(project => project.category === this.activeFilter);
      }
    },
    methods: {
      openPortrait(event) {
        const dialog = this.$refs.portraitDialog;
        if (!dialog || dialog.open) return;
        this._portraitTrigger = event.currentTarget;
        this.portraitError = false;
        dialog.showModal();
        document.documentElement.classList.add('portrait-open');
      },
      closePortrait() {
        this.$refs.portraitDialog?.close();
      },
      onPortraitClosed() {
        document.documentElement.classList.remove('portrait-open');
        if (this._portraitTrigger?.isConnected) this._portraitTrigger.focus({ preventScroll: true });
        this._portraitTrigger = null;
      },
      dismissPortraitBackdrop(event) {
        const dialog = this.$refs.portraitDialog;
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) this.closePortrait();
      },
      toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = this.theme;
        document.querySelector('meta[name="theme-color"]').content = this.theme === 'dark' ? '#101312' : '#f5f6f0';
        try { localStorage.setItem('corre-theme', this.theme); } catch (_) { /* The switch still works when storage is unavailable. */ }
      },
      closeMenu(restoreFocus = false) {
        if (!this.mobileMenuOpen) return;
        this.mobileMenuOpen = false;
        if (restoreFocus) this.$refs.menuToggle?.focus();
      },
      navigateMobile(id) {
        this.closeMenu();
        this.$nextTick(() => document.getElementById(id)?.focus({ preventScroll: true }));
      },
      filterCount(id) {
        return id === 'all' ? this.projects.length : this.projects.filter(project => project.category === id).length;
      },
      async copyEmail() {
        clearTimeout(this._copyTimer);
        try {
          await navigator.clipboard.writeText('jvanpablo455@gmail.com');
          this.copied = true;
          this.copyMessage = 'Email address copied. Talk soon!';
        } catch (_) {
          this.copied = false;
          this.copyMessage = 'Copy unavailable. Select the email address above or choose Say hello.';
        }
        this._copyTimer = setTimeout(() => { this.copied = false; this.copyMessage = ''; }, 4000);
      },
      runTerminal() {
        clearTimeout(this._terminalTimer);
        const command = 'npm run build';
        this.terminalComplete = false;
        this.terminalText = '';
        this.terminalRunning = true;
        if (this.reducedMotion) {
          this.terminalText = command;
          this.terminalComplete = true;
          this.terminalRunning = false;
          return;
        }
        let index = 0;
        const type = () => {
          this.terminalText = command.slice(0, ++index);
          if (index < command.length) {
            this._terminalTimer = setTimeout(type, 80);
          } else {
            this._terminalTimer = setTimeout(() => {
              this.terminalComplete = true;
              this.terminalRunning = false;
            }, 400);
          }
        };
        this._terminalTimer = setTimeout(type, 500);
      },
      updateTime() {
        this.manilaTime = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
      },
      updateScroll() {
        this.scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, this.scrollY / maxScroll)) : 0;
        let active = 'hero';
        for (const section of this._sections) {
          if (section.getBoundingClientRect().top <= 170) active = section.id;
        }
        if (maxScroll > 0 && this.scrollY >= maxScroll - 4) active = 'contact';
        this.activeSection = active;
      },
      onScroll() {
        if (this._scrollFrame) return;
        this._scrollFrame = requestAnimationFrame(() => { this.updateScroll(); this._scrollFrame = 0; });
      },
      setupReveals() {
        if (this.reducedMotion || !('IntersectionObserver' in window)) return;
        this._revealObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              this._revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: .08, rootMargin: '0px 0px -25px 0px' });
        document.querySelectorAll('.reveal').forEach(element => this._revealObserver.observe(element));
        document.documentElement.classList.add('motion-ready');
      }
    },
    mounted() {
      this._sections = Array.from(document.querySelectorAll('main > section'));
      this._motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this._onMotionChange = event => {
        this.reducedMotion = event.matches;
        if (event.matches) {
          document.documentElement.classList.remove('motion-ready');
          this._revealObserver?.disconnect();
          this.runTerminal();
        }
      };
      this._motionQuery.addEventListener('change', this._onMotionChange);
      this._mobileQuery = window.matchMedia('(max-width: 700px)');
      this._onBreakpointChange = event => { if (!event.matches) this.closeMenu(); };
      this._mobileQuery.addEventListener('change', this._onBreakpointChange);
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      this._sizeObserver = new ResizeObserver(this.onScroll);
      this._sizeObserver.observe(document.body);
      this.updateTime();
      this._clockTimer = setInterval(this.updateTime, 30000);
      this.setupReveals();
      this.runTerminal();
      this.updateScroll();
    },
    beforeUnmount() {
      this.closePortrait();
      document.documentElement.classList.remove('portrait-open');
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
      this._motionQuery.removeEventListener('change', this._onMotionChange);
      this._mobileQuery.removeEventListener('change', this._onBreakpointChange);
      this._revealObserver?.disconnect();
      this._sizeObserver?.disconnect();
      cancelAnimationFrame(this._scrollFrame);
      clearTimeout(this._terminalTimer);
      clearTimeout(this._copyTimer);
      clearInterval(this._clockTimer);
      document.documentElement.classList.remove('motion-ready');
    }
  });

  app.component('ui-icon', {
    props: { name: { type: String, required: true } },
    computed: { paths() { return icons[this.name] || icons.code; } },
    template: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path v-for="(path, index) in paths" :key="index" :d="path" /></svg>'
  });
  app.mount('#app');
}
