//There are 3 main types of objects in JavaScript: BOM,DOM, and Global.

//Some examples of the window object.

window.innerHeight //Height of browser object window.
window.innerWidth //Width of the browser object window.
window.pageYOffset //Distance doument has been scrolled vertically (in pixels)
window.location // Current URL of window object.

//The browser object model represents all the objects inherent within the browser, such as the window and history.


var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth +'</p>';
msg += '<p>height:' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;
alert('Current page: ' + window.location);



