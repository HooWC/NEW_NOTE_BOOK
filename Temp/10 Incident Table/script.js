document.addEventListener('DOMContentLoaded', function() {
    // Select All Checkbox Functionality
    const selectAllCheckbox = document.getElementById('select-all');
    const rowCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            rowCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
            
            // Toggle selection class on rows
            const tableRows = document.querySelectorAll('tbody tr');
            tableRows.forEach(row => {
                if (selectAllCheckbox.checked) {
                    row.classList.add('selected');
                } else {
                    row.classList.remove('selected');
                }
            });
        });
    }

    // Individual Row Selection
    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
                row.classList.add('selected');
            } else {
                row.classList.remove('selected');
                // Uncheck "select all" if any row is unchecked
                if (selectAllCheckbox) {
                    selectAllCheckbox.checked = false;
                }
            }

            // Update "select all" if all rows are checked
            const allChecked = Array.from(rowCheckboxes).every(cb => cb.checked);
            if (selectAllCheckbox && allChecked) {
                selectAllCheckbox.checked = true;
            }
        });
    });

    // Sortable Column Functionality
    const sortableColumns = document.querySelectorAll('th.inc-tab-sortable');
    sortableColumns.forEach(column => {
        column.addEventListener('click', function() {
            const isAscending = this.querySelector('i').classList.contains('fa-arrow-up');
            
            // Reset all sort icons
            document.querySelectorAll('th.inc-tab-sortable i').forEach(icon => {
                icon.className = 'fas fa-sort';
            });
            
            // Set the clicked column's sort icon
            const icon = this.querySelector('i');
            if (isAscending) {
                icon.className = 'fas fa-arrow-down';
            } else {
                icon.className = 'fas fa-arrow-up';
            }
            
            // Here you would implement the actual sorting logic
            sortTable(this.cellIndex, !isAscending);
        });
    });

    // Table Sorting Function
    function sortTable(columnIndex, ascending) {
        const tbody = document.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        // Sort the rows
        rows.sort((a, b) => {
            const aValue = a.cells[columnIndex].textContent.trim();
            const bValue = b.cells[columnIndex].textContent.trim();
            
            // Check if values are numbers
            const aNum = parseFloat(aValue);
            const bNum = parseFloat(bValue);
            
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return ascending ? aNum - bNum : bNum - aNum;
            }
            
            // Otherwise sort as strings
            return ascending 
                ? aValue.localeCompare(bValue) 
                : bValue.localeCompare(aValue);
        });
        
        // Reappend rows in the new order
        rows.forEach(row => tbody.appendChild(row));
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.body.classList.toggle('menu-open');
        });
    }

    // Responsive Table Handling
    function adjustTableForScreenSize() {
        const table = document.querySelector('.inc-tab-incidents-table');
        if (!table) return;
        
        // Add data-label attributes dynamically if they don't exist
        if (window.innerWidth < 768) {
            const headerCells = table.querySelectorAll('thead th');
            const headerTexts = Array.from(headerCells).map(th => th.textContent.trim());
            
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                cells.forEach((cell, index) => {
                    if (index < headerTexts.length && !cell.hasAttribute('data-label')) {
                        cell.setAttribute('data-label', headerTexts[index]);
                    }
                });
            });
            
            table.classList.add('mobile-view');
        } else {
            table.classList.remove('mobile-view');
        }
    }

    // Initial call and event listener for resize
    adjustTableForScreenSize();
    window.addEventListener('resize', adjustTableForScreenSize);

    // Set initial container height
    function setTableHeight() {
        const container = document.querySelector('.inc-tab-container');
        const header = document.querySelector('header');
        const tableOptions = document.querySelector('.inc-tab-table-options');
        const pagination = document.querySelector('.inc-tab-pagination');
        
        if (container && header && tableOptions && pagination) {
            // Calculate available height
            const availableHeight = window.innerHeight;
            
            // Set container height
            container.style.height = `${availableHeight}px`;
        }
    }

    // Initial height setup and resize listener
    setTableHeight();
    window.addEventListener('resize', setTableHeight);

    // Add click event to table rows for mobile view (to show details)
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Only trigger if we're in mobile view and not clicking checkbox
            if (window.innerWidth < 768 && !e.target.matches('input[type="checkbox"]')) {
                this.classList.toggle('expanded');
            }
        });
    });
});
