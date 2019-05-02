const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  }
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];

//Task 1: Create selectors to point your data into elements

const nav = document.querySelector('nav');
const anchors = document.querySelectorAll('a');
const mainHeader = document.querySelector('h1');
const headerbtn = document.querySelector("button");
const h4 = document.querySelectorAll('h4');
const para = document.querySelectorAll('p');

headerbtn.textContent = siteContent[`cta`][`button`];

anchors[0].textContent= siteContent['nav']['nav-item-1'];
anchors[1].textContent= siteContent['nav']['nav-item-2'];
anchors[2].textContent= siteContent['nav']['nav-item-3'];
anchors[3].textContent= siteContent['nav']['nav-item-4'];
anchors[4].textContent= siteContent['nav']['nav-item-5'];
anchors[5].textContent= siteContent['nav']['nav-item-6'];

//new anchor items

const newAnchor1 = document.createElement('a');
const newAnchor2 = document.createElement('a');

newAnchor1.textContent = 'Blog';
newAnchor2.textContent = 'Menu';

nav.appendChild(newAnchor1);
nav.prepend(newAnchor2);

document.querySelectorAll('a').forEach(aColor => aColor.style.color = "green");

// Array.from(document.querySelector('nav').getElementsByTagName('a')).forEach(link => link.style.color = "green");


mainHeader.innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`);

h4[0].textContent= siteContent[ "main-content"]["features-h4"];
h4[1].textContent= siteContent[ "main-content"]["about-h4"];
h4[2].textContent= siteContent[ "main-content"]["services-h4"];
h4[3].textContent= siteContent[ "main-content"]["product-h4"];
h4[4].textContent= siteContent[ "main-content"]["vision-h4"];

para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];


h4[5].textContent= siteContent[ "contact"]["contact-h4"];
para[5].textContent = siteContent['contact']['address'];
para[6].textContent = siteContent['contact']['phone'];
para[7].textContent = siteContent['contact']['email'];
para[8].textContent = siteContent['footer']['copyright'];