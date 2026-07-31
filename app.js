document.addEventListener('DOMContentLoaded', () => {
  // 1. Select the necessary DOM elements
  const menuBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const navLinks = document.getElementById('navLinks');
  
  // 2. Create the backdrop dynamically if it wasn't hardcoded, 
  // or select the existing one from the HTML
  let backdrop = document.getElementById('menuBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';
    backdrop.id = 'menuBackdrop';
    document.body.appendChild(backdrop);
  }

  // 3. Function to open the mobile drawer
  function openMenu() {
    navLinks.classList.add('active');
    backdrop.classList.add('active');
    // Lock the body scroll so the user can't scroll the page behind the menu
    document.body.style.overflow = 'hidden'; 
  }

  // 4. Function to close the mobile drawer
  function closeMenu() {
    navLinks.classList.remove('active');
    backdrop.classList.remove('active');
    // Restore the body scroll
    document.body.style.overflow = '';
  }

  // 5. Attach Event Listeners
  if (menuBtn) {
    menuBtn.addEventListener('click', openMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }
  
  // 6. Automatically close the menu when a link is clicked
  // This ensures the menu gets out of the way when navigating to an anchor link
  const drawerLinks = document.querySelectorAll('.drawer-items .nav-link');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // 7. Optional: Simple modal toggles for the "Sign In" buttons
  const signInBtns = document.querySelectorAll('.sign-in-btn, .desktop-login-btn, .mobile-login-btn');
  signInBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // If you are using the modals from previous iterations, trigger them here
      // For now, it just closes the drawer if you log in from mobile
      closeMenu();
      console.log('Sign in modal triggered');
    });
  });
});
