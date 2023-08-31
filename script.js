let elem = document.querySelector('.forit'), 
div = document.querySelector('.logitech_lookin_face'), 
x = 0, 
y = 0, 
mousedown = false; 

// div event mousedown 
div.addEventListener('mousedown', function (e) { 
// set mouse state to true 
mousedown = true; 
// subtract offset 
x = div.offsetLeft - e.clientX; 
y = div.offsetTop - e.clientY; 
e.preventDefault(); // prevent browser's default drag behavior 
}, true); 

// div event mouseup 
document.addEventListener('mouseup', function (e) { // Notice the change here 
// set mouse state to false 
mousedown = false; 
}, true); 

// element mousemove to stop 
elem.addEventListener('mousemove', function (e) { 
// Is mouse pressed? 
if (mousedown) { 
    // now we calculate the difference 
    div.style.left = e.clientX + x + 'px'; 
    div.style.top = e.clientY + y + 'px'; 
} 
}, true); 

console.log("peepee\npoopoo");
