document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.querySelector('.open-button');
    const closeButton = document.getElementById('closeButton');
    const modal = document.getElementById('menuModal');
    const gameIcons = document.querySelectorAll('.game-icon');
    const body = document.body;

    // Open modal when the open button is clicked
    openButton.addEventListener('click', function() {
        modal.classList.add('active_open_menu');
        body.classList.add('menu-open');
        
        // Add animation delay to make it feel more polished
        setTimeout(() => {
            modal.style.transition = 'opacity 0.3s ease';
        }, 500);
    });

    // Close modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        closeMenu();
    });

    // Close modal when clicking outside the game container
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeMenu();
        }
    });

    // Function to close menu with animation
    function closeMenu() {
        // First slide out the container
        const container = modal.querySelector('.game-container');
        container.style.transform = 'translateX(100%)';
        
        // Then fade out the overlay
        setTimeout(() => {
            modal.classList.remove('active_open_menu');
            body.classList.remove('menu-open');
            
            // Reset transform after animation completes
            setTimeout(() => {
                container.style.transform = '';
            }, 300);
        }, 300);
    }

    // Add click effect to game icons
    gameIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Remove active class from all icons
            gameIcons.forEach(i => i.classList.remove('active_open_menu'));
            
            // Add active class to clicked icon
            this.classList.add('active_open_menu');
        });
    });
    
    // Add keyboard support (Escape key to close)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active_open_menu')) {
            closeMenu();
        }
    });
});