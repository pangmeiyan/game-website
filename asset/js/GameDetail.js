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
    
    // Buy Now button functionality
    const buyNowButtons = document.querySelectorAll('.btn-buy-now');
    
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.deal-card');
            const title = card.querySelector('.deal-title').textContent;
            const price = card.querySelector('.deal-price').textContent;
            const selectedOption = card.querySelector('input[type="radio"]:checked');
            
            if (selectedOption) {
                const diamonds = selectedOption.nextElementSibling.nextElementSibling.textContent;
                alert(`You selected: ${title}\nPrice: ${price}\nDiamonds: ${diamonds}\n\nProceeding to checkout...`);
            } else {
                alert('Please select a diamond option first!');
            }
        });
    });
    
    // Top-up card click functionality
    const topupCards = document.querySelectorAll('.topup-card');
    
    topupCards.forEach(card => {
        card.addEventListener('click', function() {
            const diamonds = this.querySelector('.topup-diamonds').textContent;
            const price = this.querySelector('.topup-price').textContent;
            
            if (confirm(`Add to cart?\n${diamonds}\n${price}`)) {
                // Add to cart logic here
                console.log('Added to cart:', { diamonds, price });
                this.style.borderColor = '#4A90E2';
                setTimeout(() => {
                    this.style.borderColor = '';
                }, 1000);
            }
        });
    });
    
    // Show All button functionality
    const showAllBtn = document.querySelector('.btn-show-all');
    
    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            // Show all top-up options or load more
            const topupGrid = document.querySelector('.topup-grid');
            const currentCards = topupGrid.querySelectorAll('.topup-card').length;
            
            if (currentCards < 50) {
                // Add more cards if needed
                const cardsToAdd = 16;
                for (let i = 0; i < cardsToAdd; i++) {
                    const newCard = document.createElement('div');
                    newCard.className = 'topup-card';
                    
                    const diamondImages = ['foto/diamond1.png', 'foto/diamond2.png', 'foto/diamond3.png', 'foto/diamond4.png'];
                    const icon = diamondImages[Math.floor(Math.random() * diamondImages.length)];
                    const diamonds = ['25', '77', '500'][Math.floor(Math.random() * 3)];
                    const prices = {
                        '25': 'Rp8.000',
                        '77': 'Rp22.000',
                        '500': 'Rp150.000'
                    };
                    
                    newCard.innerHTML = `
                        <img src="${icon}" alt="${diamonds} Diamonds" class="topup-icon">
                        <div class="topup-diamonds">${diamonds} Diamonds</div>
                        <div class="topup-price">${prices[diamonds]}</div>
                    `;
                    
                    newCard.addEventListener('click', function() {
                        const diamonds = this.querySelector('.topup-diamonds').textContent;
                        const price = this.querySelector('.topup-price').textContent;
                        
                        if (confirm(`Add to cart?\n${diamonds}\n${price}`)) {
                            this.style.borderColor = '#4A90E2';
                            setTimeout(() => {
                                this.style.borderColor = '';
                            }, 1000);
                        }
                    });
                    
                    topupGrid.appendChild(newCard);
                }
                
                // Scroll to new cards
                showAllBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                alert('All top-up options are already displayed!');
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value;
                if (searchTerm.trim()) {
                    alert(`Searching for: ${searchTerm}`);
                    // Implement search functionality here
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
                }
            });
        }
    }
});
