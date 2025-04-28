document.addEventListener('DOMContentLoaded', function() {
    // Initialize rating functionality
    const stars = document.querySelectorAll('.KB3-rating .star');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Fill in clicked star and all previous stars
            for (let i = 0; i <= index; i++) {
                stars[i].innerHTML = '&#9733;'; // Filled star
            }
            // Clear all following stars
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].innerHTML = '&#9734;'; // Empty star
            }
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.KB3-search-container input');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            alert('Search functionality would be implemented here.');
        }
    });

    // Subscribe button
    const subscribeBtn = document.querySelector('.KB3-subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            this.classList.toggle('KB3-subscribed');
            if (this.classList.contains('KB3-subscribed')) {
                this.textContent = 'Subscribed';
            } else {
                this.textContent = 'Subscribe';
            }
        });
    }

    // Dropdown functionality
    const dropdownBtn = document.querySelector('.KB3-dropdown-btn');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function() {
            // Toggle dropdown menu
            alert('Dropdown menu would appear here');
        });
    }

    // Author link
    const authorLink = document.querySelector('.meta-item a');
    authorLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Viewing author: ' + this.textContent);
    });
    
    // Breadcrumb links
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    breadcrumbLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Navigating to: ' + this.textContent);
        });
    });
});
