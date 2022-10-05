let char = document.querySelector('.girl');

function walk(){
    let start=0;
    let end = 1400;
    let speed = 3;
    let move = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start = 0;
        }
        char.style.left = start + "px";
    },80);
}
walk();
