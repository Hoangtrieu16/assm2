var images = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
];
var img = new Object();
var num = 0;

function next(){
    var slider = document.getElementById("slider");
    num ++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}


function prev(){
    var slider = document.getElementById("slider");
    num --;
    if(num < 0){
        num = images.length - 1;
    }
    slider.src = images[num];
}

img.hinh = function(n){
    num = n;
    var slider = document.getElementById("slider");
    slider.src = images[num];
}

window.setInterval(function(){time(1);},5000);

function time(n){
    if(num == 12){
        num = 0;
    }else{
        num += n;
    }
    img.hinh(num);
}

function current(n){
    num = n;
}