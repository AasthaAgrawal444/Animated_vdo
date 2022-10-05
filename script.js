let char = document.querySelector('.girl');
let cloud = document.querySelector('.cloud1');
let cloude = document.querySelector('.cloud2');
let cloudee = document.querySelector('.cloud3');
let cloudeee = document.querySelector('.cloud4');
let cloudeeee = document.querySelector('.cloud5');
let sky1 = document.querySelector('.clouds5');
let sky2 = document.querySelector('.clouds7');
let rained = document.querySelector('.rain');


let music = new Audio('audio/rain-02.mp3');
music.play();





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
    let start=200;
    let end = 250;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
        start= 200;
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

function clouds1(){
    let start= -100;
    let end = 20;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start=-100;
        }
        sky1.style.left = start + "px";
    },150);
}
clouds1();
function clouds2(){
    let start= 830;
    let end = 920;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start=830;
        }
        sky2.style.left = start + "px";
    },150);
}
clouds2();

function rain(){
    let start= 0;
    let end = 100;
    let speed = 3;
    let sky = setInterval(function () {
        start = start + speed;
        if(start>=end) {
            start=0;
        }
        rained.style.top = start + "px";
    },150);
}
rain();






