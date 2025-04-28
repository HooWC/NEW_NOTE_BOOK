document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const createTicketBtn = document.querySelector('.create-btn');
    const modal = document.querySelector('.modal');
    
    // By default, the modal is shown in the design
    // To toggle it for real use, uncomment these lines:
    /*
    // Hide modal initially
    modal.style.display = 'none';
    
    // Show modal when clicking a "Create Ticket" button
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('create-ticket-trigger')) {
            modal.style.display = 'block';
        }
    });
    
    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
    }
    
    // Close button for modal (add a close button to HTML)
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    */
    
    // Table row hover effect
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        });
        
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Checkbox functionality for all/individual selection
    const selectAllCheckbox = document.querySelector('thead input[type="checkbox"]');
    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            checkboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }
    
    // Update selectAll state based on individual checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
            const someChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
            
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = allChecked;
                selectAllCheckbox.indeterminate = someChecked && !allChecked;
            }
        });
    });
    
    // Pagination functionality
    const paginationItems = document.querySelectorAll('.pagination .page');
    
    paginationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all pagination items
            paginationItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // In a real application, you would fetch and display data for the selected page
            console.log('Page changed to:', this.textContent);
        });
    });
    
    // Responsive menu toggle for mobile
    const createMobileMenu = () => {
        // Check if mobile menu already exists
        if (document.querySelector('.mobile-menu-toggle')) return;
        
        const header = document.querySelector('header');
        const navLeft = document.querySelector('.nav-left');
        
        // Create mobile menu toggle button
        const mobileMenuToggle = document.createElement('button');
        mobileMenuToggle.classList.add('mobile-menu-toggle');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Insert before the logo
        navLeft.insertBefore(mobileMenuToggle, navLeft.firstChild);
        
        // Add event listener to toggle menu
        mobileMenuToggle.addEventListener('click', function() {
            const menu = document.querySelector('.menu');
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
            
            // If shown, make it a column
            if (menu.style.display === 'flex') {
                menu.style.flexDirection = 'column';
                menu.style.position = 'absolute';
                menu.style.top = '60px';
                menu.style.left = '0';
                menu.style.backgroundColor = 'var(--darker-bg)';
                menu.style.width = '100%';
                menu.style.padding = '10px 0';
                menu.style.zIndex = '100';
                
                // Style menu items
                const menuItems = menu.querySelectorAll('li');
                menuItems.forEach(item => {
                    item.style.margin = '0';
                    item.style.padding = '10px 20px';
                    item.style.borderBottom = '1px solid var(--border-color)';
                });
            }
        });
    };
    
    // Call only on smaller screens
    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            createMobileMenu();
        }
    };
    
    // Check on load
    checkScreenSize();
    
    // Check on resize
    window.addEventListener('resize', checkScreenSize);
    
    // Search functionality
    const searchInput = document.querySelector('.search-input input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            if (searchInput) {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    // In a real application, perform search here
                    console.log('Searching for:', searchTerm);
                    
                    // Example: Filter table rows based on search term
                    filterTableRows(searchTerm);
                }
            }
        });
    }
    
    // If search input exists, add enter key event
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && searchBtn) {
                searchBtn.click();
            }
        });
    }
    
    // Function to filter table rows
    function filterTableRows(term) {
        const rows = document.querySelectorAll('tbody tr');
        term = term.toLowerCase();
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(term)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
    
    // Show/hide more details in the modal
    const moreDetailsBtn = document.querySelector('.more-details');
    const recentItems = document.querySelector('.recent-items');
    
    if (moreDetailsBtn && recentItems) {
        moreDetailsBtn.addEventListener('click', function() {
            const isVisible = recentItems.style.display !== 'none';
            recentItems.style.display = isVisible ? 'none' : 'block';
            
            // Change the icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = isVisible ? 'fas fa-chevron-left' : 'fas fa-chevron-down';
            }
        });
    }
});
