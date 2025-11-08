// Navbar JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value;
                if (searchTerm.trim()) {
                    alert(`Searching for: ${searchTerm}`);
                    // Implement search functionality here
                    // You can replace this with your actual search logic
                    console.log('Search term:', searchTerm);
                }
            }
        });
        
        const searchIcon = document.querySelector('.search-icon');
        if (searchIcon) {
            searchIcon.addEventListener('click', function() {
                const searchTerm = searchInput.value;
                if (searchTerm.trim()) {
                    alert(`Searching for: ${searchTerm}`);
                    // Implement search functionality here
                    // You can replace this with your actual search logic
                    console.log('Search term:', searchTerm);
                }
            });
        }
    }
    
    // Smooth scroll for anchor links in navbar
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
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

// 
 const filters = document.querySelectorAll('.btn-filter');
  const cards = document.querySelectorAll('.game-card');
  const showAllContainer = document.getElementById('showAllContainer');

  filters.forEach(button => {
    button.addEventListener('click', () => {
      // Ganti tombol aktif
      filters.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      // Filter game-card berdasarkan genre
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.genre === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Hanya tampilkan tombol Show All saat kategori "all"
      showAllContainer.style.display = filter === 'all' ? 'block' : 'none';
    });
  });