document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const navLinks = document.getElementById('navLinks');
  
  let backdrop = document.getElementById('menuBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';
    backdrop.id = 'menuBackdrop';
    document.body.appendChild(backdrop);
  }

  function openMenu() {
    navLinks.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; 
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);
  
  document.querySelectorAll('.drawer-items .nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // --------------------------------------------------------------------------
  // VERCEL-STYLE FULL TEXT ROTATOR ANIMATION
  // --------------------------------------------------------------------------
  const phrases = [
    "Banking made simple, secure, and seamless.",
    "Manage your money, grow your wealth.",
    "Fast, secure, and reliable banking.",
    "Your financial freedom, simplified."
  ];
  
  let currentIndex = 0;
  const titleElement = document.getElementById("rotatingHeroTitle");

  if (titleElement) {
    setInterval(() => {
      // 1. Animate current phrase up and out
      titleElement.classList.add("swap-out");

      setTimeout(() => {
        // 2. Advance index and change text
        currentIndex = (currentIndex + 1) % phrases.length;
        titleElement.textContent = phrases[currentIndex];

        // 3. Move instantly to bottom start position
        titleElement.classList.remove("swap-out");
        titleElement.classList.add("swap-prepare");

        // 4. Smoothly animate up into center position
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            titleElement.classList.remove("swap-prepare");
          });
        });
      }, 450); // Matches CSS transition duration
    }, 3200); // Rotates every 3.2 seconds
  }
});
