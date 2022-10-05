let char = document.querySelector('.girl');
let cloud = document.querySelector('.cloud1');
let cloude = document.querySelector('.cloud2');
let cloudee = document.querySelector('.cloud3');
let cloudeee = document.querySelector('.cloud4');
let cloudeeee = document.querySelector('.cloud5');


function walk(){
    let start=0;
    let end = 1300;
    let speed = 3;
    let move = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start = 0;
        }
        char.style.left = start + "px";
    },150);
}
walk();

function cloud1(){
    let start=100;
    let end = 200;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start=100;
        }
        cloud.style.left = start + "px";
    },150);
}
cloud1();

function cloud2(){
    let start=300;
    let end = 350;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start = 300;
        }
        cloude.style.left = start + "px";
    },250);
}
cloud2();

function cloud3(){
    let start=500;
    let end = 550;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start = 500;
        }
        cloudee.style.left = start + "px";
    },150);
}
cloud3();

function cloud4(){
    let start=800;
    let end = 850;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start = 800;
        }
        cloudeee.style.left = start + "px";
    },150);
}
cloud4();

function cloud5(){
    let start=950;
    let end = 1000;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start = 950;
        }
        cloudeeee.style.left = start + "px";
    },150);
}
cloud5();

