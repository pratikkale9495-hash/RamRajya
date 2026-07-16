// ======================================
// RAMRAJYA WEBSITE
// script.js (Part 3A)
// ======================================

// Smooth scroll for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        const target = this.getAttribute('href');

        if(target.startsWith("#")){

            e.preventDefault();

            document.querySelector(target).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ============================
// Sticky Header Shadow
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

        header.style.background = "rgba(255,255,255,.98)";

    }

    else{

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

        header.style.background = "rgba(255,255,255,.95)";

    }

});

// ============================
// Active Navigation
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop-120;

        const height = section.clientHeight;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ============================
// Reveal Animation
// ============================

const cards = document.querySelectorAll(".card");

function revealCards(){

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < trigger){

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition=".7s";

});

window.addEventListener("scroll", revealCards);

revealCards();

// ============================
// Contact Form
// ============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🙏 Thank you for contacting RamRajya. We will get back to you soon.");

form.reset();

});

}

// ============================
// Donate Button
// ============================

const donateBtn=document.querySelector(".btn2");

if(donateBtn){

donateBtn.addEventListener("click",()=>{

alert("Donation gateway will be integrated soon.");

});

}

// ============================
// Volunteer Button
// ============================

const joinBtn=document.querySelector("#volunteer .btn");

if(joinBtn){

joinBtn.addEventListener("click",()=>{

alert("Volunteer registration will open soon.");

});

}

// ============================
// Simple Counter Animation
// ============================

function counter(id,end){

let obj=document.getElementById(id);

if(!obj) return;

let start=0;

let speed=Math.ceil(end/100);

let interval=setInterval(()=>{

start+=speed;

obj.innerHTML=start;

if(start>=end){

obj.innerHTML=end;

clearInterval(interval);

}

},20);

}

// Example
counter("count1",500);
counter("count2",120);
counter("count3",25);

// ============================
// Current Year in Footer
// ============================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

// ============================
// Welcome Message
// ============================

window.onload=function(){

console.log("Welcome to RamRajya");

};
// ===========================
// Mobile Menu
// ===========================

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

// ===========================
// Scroll Top
// ===========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// Dark Mode
// ===========================

const theme=document.querySelector(".theme-toggle");

theme.addEventListener("click",()=>{

document.body.classList.toggle("dark");

let icon=theme.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

}else{

icon.classList.remove("fa-sun");

icon.classList.add("fa-moon");

}

});
// ===============================
// Festival Countdown
// ===============================


let festivalDate =
new Date("November 8, 2026 00:00:00").getTime();


setInterval(()=>{


let now=new Date().getTime();


let distance=festivalDate-now;


let days=Math.floor(
distance/(1000*60*60*24)
);


let hours=Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);


let minutes=Math.floor(
(distance%(1000*60*60))
/(1000*60)
);


let seconds=Math.floor(
(distance%(1000*60))
/1000
);



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;



},1000);