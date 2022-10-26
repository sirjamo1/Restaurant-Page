(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.d({},{Z:()=>c});const t=e.p+"6806d7a6191331b4a886.svg",n=()=>{const e=document.createElement("div"),t=document.createElement("img");t.setAttribute("src","/src/assets/images/steak-on-grill.png"),t.setAttribute("alt","steak on grill"),e.appendChild(t),e.classList.add("home-container");const n=document.createElement("div"),a=document.createElement("h1");a.innerHTML="Marble Steakhouse",n.appendChild(a);const s=document.createElement("h2");return s.innerHTML="Home to four of the best cuts of meat you'll ever eat. </br> </br> Have it your way! We take pride in cooking your steak the way you like it, if you're not 100% satisfied with how it's cooked, we'll cook another. No questions asked.",n.appendChild(s),e.appendChild(n),e};document.body.style.background="url('/src/assets/images/marble-background.png') center center/cover fixed no-repeat";const a=document.getElementById("content"),s=["home-link","menu-link","contact-link"];a.appendChild((()=>{const e=document.createElement("header");e.classList.add("header");const t=document.createElement("div");t.classList.add("icon-container"),e.appendChild(t);const n=document.createElement("img");n.setAttribute("src","/src/assets/images/steak-transparent.png"),n.setAttribute("alt","steak"),t.appendChild(n);const a=document.createElement("div");a.classList.add("marble-steakhouse-text-container");const s=document.createElement("div");s.classList.add("marble-text-div");const r=["Marble","Steakhouse"];for(let e=0;e<r[0].length;e++){let t=document.createElement("h1");t.classList.add("marble-steakhouse-text"),t.innerHTML=r[0][e],s.appendChild(t),a.appendChild(s)}const i=document.createElement("div");i.classList.add("steak-house-text-div");for(let e=0;e<r[1].length;e++){let t=document.createElement("h1");t.classList.add("marble-steakhouse-text"),t.innerHTML=r[1][e],i.appendChild(t),a.appendChild(i)}t.appendChild(a);const o=document.createElement("nav");o.classList.add("navbar"),e.appendChild(o);const d=document.createElement("h4");d.classList.add("home-link"),d.addEventListener("click",(e=>{c(e.target.innerHTML.toLowerCase())})),d.innerHTML="Home";const l=document.createElement("h4");l.classList.add("menu-link"),l.addEventListener("click",(e=>{c(e.target.innerHTML.toLowerCase())})),l.innerHTML="Menu";const m=document.createElement("h4");return m.classList.add("contact-link"),m.addEventListener("click",(e=>{c(e.target.innerHTML.toLowerCase())})),m.innerHTML="Contact",o.appendChild(d),o.appendChild(l),o.appendChild(m),e})()),a.appendChild(n()),a.appendChild((()=>{const e=document.createElement("footer"),n=document.createElement("h4");n.innerHTML="Built by James Howells",e.appendChild(n);const a=document.createElement("a");a.setAttribute("href","https://github.com/sirjamo1/Restaurant-Page");const s=document.createElement("img");return s.setAttribute("src",t),s.setAttribute("alt","github icon"),a.appendChild(s),n.appendChild(a),e})());const c=e=>{s.forEach((e=>{document.getElementsByClassName(e)[0].style.textDecoration="none",document.getElementsByClassName(e)[0].style.color="white"}));let t=document.getElementsByClassName(`${e}-link`)[0],c=a.childNodes[1];t.style.textDecoration="underline",t.style.color="red","menu"===e?a.replaceChild((()=>{const e=document.createElement("div");e.classList.add("menu-container");const t=document.createElement("h1");e.appendChild(t),t.innerHTML="Choose a steak.";const n=document.createElement("div");n.classList.add("menu-item-container"),e.appendChild(n),[{name:"Chateaubriand",description:"Traditionally consists of a large front cut fillet of tenderloin grilled between two lesser pieces of meat that are discarded after cooking.",photoSrc:"/src/assets/images/chateaubriand.png"},{name:"Filet Mignon",description:"Thick slices taken from the tenderloin or eye fillet.",photoSrc:"/src/assets/images/filet-mignon.png"},{name:"Ribeye",description:"The ribeye is carved from the primal section called the beef rib.",photoSrc:"/src/assets/images/ribeye.png"},{name:"Striploin",description:"Boneless cut from the short loin that's highly prized for its excellent balance of flavor & tenderness.",photoSrc:"/src/assets/images/striploin.png"}].forEach((e=>{let t=document.createElement("div");t.classList.add("menu-cards");let a=document.createElement("h3");a.innerHTML=e.name,t.appendChild(a);let s=document.createElement("h4");s.innerHTML=e.description,t.appendChild(s);let c=document.createElement("img");c.setAttribute("src",e.photoSrc),c.setAttribute("alt",e.name),t.appendChild(c);let r=document.createElement("p");r.innerHTML="* All steaks are served with baked potatoes and steamed veggies",t.appendChild(r),n.appendChild(t)}));const a=document.createElement("h1");a.innerHTML="How you would like it cooked?",e.appendChild(a);const s=document.createElement("img");s.classList.add("rare-well-done-img"),s.setAttribute("src","/src/assets/images/rare-welldon.png"),s.setAttribute("alt","cooked steak"),e.appendChild(s);const c=document.createElement("h1");c.innerHTML="Choose a sauce.",e.appendChild(c);let r=document.createElement("div");r.classList.add("sauce-container"),e.appendChild(r),[{name:"Mushroom",description:" Mushroom sauce is a rich sauce made from sautéed mushrooms and aromatics.",photoSrc:"/src/assets/images/mushroom-sauce.png"},{name:"Pepper",description:"A spicy hot sauce seasoned with cayenne peppers, chile peppers or peppercorns.",photoSrc:"/src/assets/images/pepper-sauce.png"},{name:"Blue Cheese",description:"Blue cheese sauce is assertive and salty, with a tangy garlic kick.",photoSrc:"/src/assets/images/blue-cheese-sauce.png"}].forEach((e=>{let t=document.createElement("div");t.classList.add("sauce-cards");let n=document.createElement("h3");n.innerHTML=e.name,t.appendChild(n);let a=document.createElement("h4");a.innerHTML=e.description,t.appendChild(a);let s=document.createElement("img");s.setAttribute("src",e.photoSrc),s.setAttribute("alt",`${e.name} sauce image`),s.classList.add("sauce-image"),t.appendChild(s),r.appendChild(t)}));const i=document.createElement("h1");return i.classList.add("order-at-counter"),i.innerHTML="Order at the counter.",e.appendChild(i),e})(),c):"contact"===e?a.replaceChild((()=>{const e="5pm - 11pm",t="2pm - 1am",n=document.createElement("div");n.classList.add("contact-container");const a=document.createElement("div");a.classList.add("contact-details-container"),n.appendChild(a);const s=document.createElement("h4");s.innerHTML="Address: 123 fake street",a.appendChild(s);const c=document.createElement("h4");c.innerHTML="Phone: +12 345 678 9101",a.appendChild(c);const r=document.createElement("h4");r.innerHTML="Email: real_email@marbleSteakhouse.com",a.appendChild(r);const i=document.createElement("h4");i.innerHTML=`Open times: </br> Mon-Fri: ${e} </br> Sat-Sun: ${t}`,a.appendChild(i);const o=document.createElement("iframe");return o.classList.add("iframe-map"),o.src="https://maps.google.com/maps?q=123%20fake%20street&t=&z=13&ie=UTF8&iwloc=&output=embed",o.loading="lazy",n.appendChild(o),n})(),c):a.replaceChild(n(),c)}})();