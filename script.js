// Get the element to add hover effect
const element = document.getElementById('element');

// Add event listener for mouse enter (hover)
element.addEventListener('mouseenter', function() {
    // Change background color to yellow and make text bold
    element.style.backgroundColor = 'yellow';
    element.style.fontWeight = 'bold';
});

// Add event listener for mouse leave (end of hover)
element.addEventListener('mouseleave', function() {
    // Reset background color and font weight to default
    element.style.backgroundColor = '';
    element.style.fontWeight = '';
});
