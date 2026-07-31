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
});
