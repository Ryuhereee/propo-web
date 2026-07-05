/* ==========================================
   TARUNADHIKARA WEBSITE
   script.js
========================================== */

/* ===========================
LOADER
=========================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(()=>{

loader.style.display="none";

},600);

});

/* ===========================
NAVBAR SCROLL
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/* ===========================
SMOOTH ACTIVE MENU
=========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===========================
COUNTER TOTAL DANA
=========================== */

const total=document.querySelector(".dana-total h1");

if(total){

let start=0;

let end=14400000;

let duration=1800;

let step=end/(duration/20);

let counter=setInterval(()=>{

start+=step;

if(start>=end){

start=end;

clearInterval(counter);

}

total.innerHTML="Rp "+Math.floor(start).toLocaleString("id-ID");

},20);

}

/* ===========================
PROGRESS BAR
=========================== */

const progress=document.querySelector(".progress-fill");

if(progress){

window.addEventListener("load",()=>{

setTimeout(()=>{

progress.style.width="60%";

},400);

});

}

/* ===========================
CARD HOVER EFFECT
=========================== */

const cards=document.querySelectorAll(

".tujuan-card,.team-card,.benefit-card,.package,.rekening"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/* ===========================
GALLERY LIGHTBOX
=========================== */

const images=document.querySelectorAll(".gallery-grid img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

const image=document.createElement("img");

image.src=img.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(image);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

/* ===========================
BACK TO TOP
=========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===========================
FADE SECTION
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.2

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

/* ===========================
TEXT REVEAL
=========================== */

const titles=document.querySelectorAll(".title-center h2");

titles.forEach(title=>{

title.style.opacity="0";

title.style.transform="translateY(30px)";

});

const observerTitle=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.transition=".8s";

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

titles.forEach(title=>{

observerTitle.observe(title);

});

/* ===========================
BUTTON RIPPLE
=========================== */

const buttons=document.querySelectorAll(".gold-btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

let x=e.clientX-e.target.offsetLeft;

let y=e.clientY-e.target.offsetTop;

let ripple=document.createElement("span");

ripple.className="ripple";

ripple.style.left=x+"px";

ripple.style.top=y+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ===========================
PARALLAX HERO
=========================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=

window.scrollY*.45+"px";

});