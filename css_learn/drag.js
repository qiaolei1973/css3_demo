


var drags = document.getElementsByClassName('drag');
console.log(drags);
var i = 0, len = drags.length;
for (; i < len; i++) {
    var drag = drags[i];
    drag.onmousedown = function (e) {
        console.log(e);
    }
        drag.onmouseup = function(){
        console.log(e);
    }
    drag.onmouseup = function () {
        console.log('up');
    }
}