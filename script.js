const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', function(event) {
    customCursor.style.left = event.clientX + 'px'; 
    customCursor.style.top = event.clientY + 'px';  });
