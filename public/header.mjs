const links = [
    { name: 'Home', href: 'index.html' },
    { name: 'Hobbies', href: 'hobbies.html' }
  ];
  
  function createHeader() {
    const headerContainer = document.createElement('header');
    headerContainer.classList.add('site-header');
  
    headerContainer.innerHTML = `
      <h1 class="page-title">Mei Shiratori</h1>
      <div class="mobile-topbar">
        <label class="dark-mode-toggle">
          <input type="checkbox" id="darkModeToggle" autocomplete="off" />
          <span class="switch"></span>
          <span class="toggle-label">Dark mode</span>
        </label>
        <button class="menu-button">Menu</button>
      </div>
      <div class="mobile-header">
        <ul class="nav-list mobile-nav">
          ${links.map(link => `<li><a href="${link.href}">${link.name}</a></li>`).join('')}
        </ul>
      </div>
      <nav class="nav-desktop">
        <ul class="nav-list">
          ${links.map(link => `<li><a href="${link.href}">${link.name}</a></li>`).join('')}
        </ul>
      </nav>
    `;
  
    document.body.prepend(headerContainer);
  
    const menuButton = headerContainer.querySelector('.menu-button');
    const mobileNav = headerContainer.querySelector('.mobile-header');
    const darkToggle = headerContainer.querySelector('#darkModeToggle');
  
    // Mobile nav behavior
    mobileNav.style.display = 'none';
  
    menuButton.addEventListener('click', () => {
      const isVisible = mobileNav.style.display === 'flex';
      mobileNav.style.display = isVisible ? 'none' : 'flex';
    });
  
    document.body.addEventListener('click', (e) => {
      if (!headerContainer.contains(e.target)) {
        mobileNav.style.display = 'none';
      }
    });
  
    // Initialize dark mode from localStorage
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkToggle.checked = true;
    }
  
    // Dark mode toggle behavior
    darkToggle.addEventListener('change', () => {
      if (darkToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
    });
  }
  
  createHeader();
  