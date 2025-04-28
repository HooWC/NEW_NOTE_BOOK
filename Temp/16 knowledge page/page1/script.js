document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');
    
    searchButton.addEventListener('click', function() {
        if (searchInput.value.length >= 3) {
            // In a real app, this would perform a search
            alert('Searching for: ' + searchInput.value);
        } else {
            alert('Please enter at least 3 characters');
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    // Actions dropdown
    const actionsButton = document.querySelector('.dropdown-btn');
    actionsButton.addEventListener('click', function() {
        // In a real app, this would show a dropdown menu
        alert('Actions menu clicked');
    });
    
    // Subscribe buttons
    const subscribeButtons = document.querySelectorAll('.card-subscribe');
    subscribeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle subscribe status
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                alert('Subscribed successfully');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                alert('Unsubscribed successfully');
            }
        });
    });
    
    // Article links
    const articleLinks = document.querySelectorAll('.article-title');
    articleLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Opening article: ' + this.textContent);
        });
    });
});
