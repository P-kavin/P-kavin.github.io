var messages = [
    document.getElementById('message1'),
    document.getElementById('message2')
  ];

  window.onscroll = function() {
    var navbar = document.querySelector('.top-navbar');
    var navbarNav=document.getElementById('navbarNav');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled-navbar');
      navbarNav.classList.remove('bg-dark');
      navbar.classList.remove('initial-navbar');
    } else {
      navbar.classList.add('initial-navbar');
      navbarNav.classList.add('bg-dark');
      navbar.classList.remove('scrolled-navbar');
    }
  };
  function rotateMessages() {
    var currentMessageIndex = 0;

    setInterval(function() {
      messages.map(msg=>msg.classList.add('hidden'));
      currentMessageIndex = (currentMessageIndex + 1) % messages.length; 
      messages[currentMessageIndex].classList.remove('hidden');
    }, 3000);
  }
  window.onload = rotateMessages();
  
   function closeSideMenu() {
          const offcanvasElement = document.getElementById("navbarNav");
          const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
  }