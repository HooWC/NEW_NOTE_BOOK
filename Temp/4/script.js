 // Add some interactive effects
 const widgets = document.querySelectorAll('.widget');
        
 widgets.forEach(widget => {
     widget.addEventListener('click', () => {
         // Add a ripple effect
         const ripple = document.createElement('div');
         ripple.style.position = 'absolute';
         ripple.style.width = '20px';
         ripple.style.height = '20px';
         ripple.style.background = 'rgba(255, 255, 255, 0.7)';
         ripple.style.borderRadius = '50%';
         ripple.style.transform = 'scale(0)';
         ripple.style.animation = 'ripple 0.6s linear';
         ripple.style.opacity = '1';
         
         widget.appendChild(ripple);
         
         setTimeout(() => {
             ripple.remove();
         }, 700);
     });
 });
 
 // Add ripple animation
 const style = document.createElement('style');
 style.textContent = `
     @keyframes ripple {
         to {
             transform: scale(4);
             opacity: 0;
         }
     }
 `;
 document.head.appendChild(style);