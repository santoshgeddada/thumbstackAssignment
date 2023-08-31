let slides = 0;


function controller(x) {
    slides = slides + x;
    slideshow(slides)
}

slideshow(slides)

function slideshow(num) {
    let slider = document.getElementsByClassName("slider");

    if (slides === slider.length) {
        slides = 0;
        num = 0;
    }
    if (slides < 0) {

        slides = slider.length - 1;
        num = slider.length - 1;
    }

    for (let x of slider) {
        x.style.display = "none";
    }

    slider[num].style.display = "block";

}

/* promo image section*/

function first() {
    document.getElementById("promoimage").src = "https://i.ibb.co/mqfyGFc/promo-slide-3.jpg"
}

function second() {
    document.getElementById("promoimage").src = "https://i.ibb.co/cvYDwns/promo-slide-2.jpg"
}

function third() {
    document.getElementById("promoimage").src = "https://i.ibb.co/KzXzXMS/promo-slide-1.jpg"
}

setInterval(first, 1800);
setInterval(second, 3600);
setInterval(third, 5400);

/*menu section*/

let menu = document.getElementById("menu")
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let menu3 = document.getElementById("menu3");
let menu4 = document.getElementById("menu4");
let menu5 = document.getElementById("menu5");
let menu6 = document.getElementById("menu6");


function all() {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";

    menu1.style.display = "flex";
    menu2.style.display = "flex";
    menu3.style.display = "flex";
    menu4.style.display = "flex";
    menu5.style.display = "flex";
    menu6.style.display = "flex";
}

function breakfast() {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";

    menu1.style.display = "flex";
    menu3.style.display = "flex";
    menu4.style.display = "flex";
}

function lunch() {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";

    menu4.style.display = "flex";
    menu6.style.display = "flex";
    menu5.style.display = "flex";
}

function dinner() {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";

    menu4.style.display = "flex";
    menu2.style.display = "flex";
    menu6.style.display = "flex";
    menu5.style.display = "flex";
}

function coffee() {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";

    menu1.style.display = "flex";
    menu3.style.display = "flex";
}

function snacks() {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";

    menu6.style.display = "flex";
}


/*sticky navbar*/

window.addEventListener('scroll', function() {

    let navbar = document.getElementById("stickynav");
    let navimage = document.getElementById("stickyimg");

    if (window.pageYOffset >= 42) {
        navbar.classList.add('navbar_sticky');
        navimage.src = "https://i.ibb.co/vxzZ4nS/main-logo-black.png";
    } else {
        navbar.classList.remove('navbar_sticky');
        navimage.src = "https://i.ibb.co/SRyPH6x/main-logo.png";
    }
});
