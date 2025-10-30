// JavaScript Native untuk Toggle Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
   const menuToggle = document.getElementById('mobile-menu-toggle');
   const menuContent = document.getElementById('navbar-menu-content');

   if (menuToggle && menuContent) {
         menuToggle.addEventListener('click', function() {
            // Toggle kelas 'active' pada tombol dan menu
            menuToggle.classList.toggle('active');
            menuContent.classList.toggle('active');
         });
   }
});

// untuk scroll navbar ada background
document.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbarr');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// faqs
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.parentElement.classList.toggle("active");

      var panel = this.nextElementSibling;
      var icon = this.querySelector("i");

      // toggle panel display
      if (panel.style.display === "block") {
        panel.style.display = "none";
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      } else {
        panel.style.display = "block";
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      }
    });
  }
