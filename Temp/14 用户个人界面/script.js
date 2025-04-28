$('.pro-file-mail-choice').change(function() {
    if($(this).is(":checked")) {
        $(this).parent().addClass('pro-file-selected-bg');
    } else {
        $(this).parent().removeClass('pro-file-selected-bg');
    }
});

const colorInput = document.getElementById("colorpicker");

if (colorInput) {
    colorInput.addEventListener("input", (e) => {
        document.body.style.setProperty("--button-color", e.target.value);
    });
}

$('.pro-file-inbox-calendar').click(function(){
    $('.pro-file-calendar-container').toggleClass('pro-file-calendar-show');
    $('.pro-file-inbox-container').toggleClass('pro-file-hide');
    $('.pro-file-mail-detail').toggleClass('pro-file-hide'); 
});

// Todo app functionality with plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Task data
    const tasks = {
        inprogress: [
            {
                id: 'task1',
                name: 'New sidebar design',
                tracked: false,
            },
            {
                id: 'task2',
                name: 'Login error fixes',
                tracked: false,
            },
            {
                id: 'task3',
                name: 'Header design features',
                tracked: false,
            },
        ],
        done: [
            {
                id: 'task4',
                name: 'Dashboard design',
                tracked: false,

            },
            {
                id: 'task5',
                name: 'Mobile layout implementation',
                tracked: false,
            }
        ]
    };

    // Render all tasks
    function renderTasks() {
        renderTaskList('inprogress', tasks.inprogress);
        renderTaskList('done', tasks.done);
    }

    // Render tasks for a specific list
    function renderTaskList(listId, taskItems) {
        const container = document.getElementById(listId);
        if (!container) return;
        
        container.innerHTML = '';
        
        taskItems.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'pro-file-task-item';
            taskElement.dataset.id = task.id;
            
            // Create task HTML - simplified
            taskElement.innerHTML = `
                <h3 class="pro-file-task-item-title">${task.name}</h3>
            `;
            
            container.appendChild(taskElement);
        });
        
        // Add click events for track buttons
        container.querySelectorAll('.pro-file-task-item-button').forEach(button => {
            button.addEventListener('click', function() {
                const taskId = this.dataset.taskId;
                toggleTaskTracking(taskId);
            });
        });
    }
    
    // Toggle task tracking
    function toggleTaskTracking(taskId) {
        // Find task in both lists
        ['inprogress', 'done'].forEach(listName => {
            const list = tasks[listName];
            const taskIndex = list.findIndex(task => task.id === taskId);
            
            if (taskIndex !== -1) {
                // Toggle tracked state
                list[taskIndex].tracked = !list[taskIndex].tracked;
                
                // Update UI
                const button = document.querySelector(`.pro-file-task-item-button[data-task-id="${taskId}"]`);
                if (button) {
                    const icon = button.querySelector('i');
                    if (icon) {
                        icon.textContent = list[taskIndex].tracked ? 'pause' : 'play_arrow';
                    }
                }
            }
        });
    }
    
    // Initialize dragula for drag and drop
    function initDragAndDrop() {
        if (window.dragula) {
            // Initialize Dragula with improved config
            const drake = dragula([
                document.getElementById('inprogress'),
                document.getElementById('done')
            ], {
                copy: false,
                moves: function(el, container, handle) {
                    return true; // Allow all elements to be moved
                },
                accepts: function(el, target, source, sibling) {
                    return true; // Allow dropping in all containers
                },
                removeOnSpill: false, // Don't remove on spill outside containers
                direction: 'vertical',
                // Custom styling for the mirror (dragged item)
                mirrorContainer: document.body
            });
            
            // Apply custom class to mirror element on drag
            drake.on('cloned', function(clone, original, type) {
                if (type === 'mirror') {
                    clone.classList.add('pro-file-drag-mirror');
                    // Make mirror more transparent and stylish
                    clone.style.opacity = '0.8';
                    clone.style.transform = 'scale(0.95)';
                    clone.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                }
            });
            
            // Handle drag start
            drake.on('drag', function(el) {
                el.classList.add('pro-file-is-moving');
            });
            
            // Handle drag end
            drake.on('dragend', function(el) {
                el.classList.remove('pro-file-is-moving');
                setTimeout(function() {
                    el.classList.add('pro-file-is-moved');
                    setTimeout(function() {
                        el.classList.remove('pro-file-is-moved');
                    }, 600);
                }, 100);
            });
            
            // Handle drop
            drake.on('drop', function(el, target, source) {
                const taskId = el.dataset.id;
                const sourceId = source.id;
                const targetId = target.id;
                
                if (sourceId !== targetId) {
                    // Find task in source list
                    const taskIndex = tasks[sourceId].findIndex(task => task.id === taskId);
                    if (taskIndex !== -1) {
                        // Move task from source to target
                        const taskToMove = tasks[sourceId][taskIndex];
                        tasks[sourceId].splice(taskIndex, 1);
                        tasks[targetId].push(taskToMove);
                    }
                }
            });
        } else {
            console.error('Dragula library not loaded');
        }
    }
    
    // Initialize
    renderTasks();
    initDragAndDrop();

    // Handle team-member more button
    const moreMembers = document.querySelector('.pro-file-member-item.pro-file-more-members');
    if (moreMembers) {
        moreMembers.addEventListener('click', function() {
            alert('More team members available');
            // This could be expanded to show a modal with all team members
        });
    }
});
