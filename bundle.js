!function(e){var a={};function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)t.d(n,i,function(a){return e[a]}.bind(null,i));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";t.r(a);const n=e=>new Promise(a=>setTimeout(a,e)),i=e=>document.querySelector(e),s=async(e,a)=>{e.classList.add("fadeout"),await n(690),e.classList.remove("fadeout","showing"),await n(200),a.classList.add("fadein","showing"),await n(690),a.classList.remove("fadein")},r=(e,a=2)=>{const t=String(e);if(t.length>=a)return t;const n="0".repeat(a-t.length);return e<0?"-"+n+t.replace("-",""):n+t},c=(e,a=0)=>Math.floor(Math.random()*(e-a))+a;let l,o,f=!1,d=!1;const u="a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J".split(" "),p='<i class="far fa-heart"></i>\n<i class="far fa-gem"></i>\n<i class="fas fa-apple-alt"></i>\n<i class="far fa-bell"></i>\n<i class="fas fa-cat"></i>\n<i class="fas fa-dog"></i>\n<i class="fab fa-ello"></i>\n<i class="fab fa-envira"></i>\n<i class="far fa-eye"></i>\n<i class="fas fa-fish"></i>\n<i class="fas fa-frog"></i>\n<i class="far fa-hand-paper"></i>\n<i class="fas fa-ice-cream"></i>\n<i class="fas fa-horse"></i>\n<i class="fas fa-mobile-alt"></i>\n<i class="fas fa-pizza-slice"></i>\n<i class="fas fa-square-root-alt"></i>\n<i class="far fa-star"></i>'.split("\n"),m=p.concat(p);let g=p.length;const v=async function(){if(!d){if(this.classList.contains("clicked"))return!1;d=!0,this.classList.add("clicked"),f?(f=!1,await n(1e3),o===this.innerHTML&&(document.querySelectorAll(".card.clicked").forEach(e=>{e.classList.add("aligned"),e.removeEventListener("click",v)}),g--,i("span#remaining").innerText=g),document.querySelectorAll(".card.clicked").forEach(e=>e.classList.remove("clicked"))):(f=!0,o=this.innerHTML),d=!1}};window.addEventListener("load",()=>{i("#start").addEventListener("click",async()=>{i("span#remaining").innerText=g,s(i(".start"),i(".game"));for(let e=1;e<37;e++){const a=c(m.length),t=document.createElement("div");t.innerHTML=m[a],t.classList.add("card","clicked"),t.style.gridArea=u[e-1],i(".boardContainer").appendChild(t),m.splice(a,1)}await n(1600);let e=0,a=0,t=0;i("span#time").innerText="まずは10秒で覚えましょう",await n(7e3),i("span#time").innerText="3",await n(1e3),i("span#time").innerText="2",await n(1e3),i("span#time").innerText="1",await n(1e3),i("span#time").innerText="Start",document.querySelectorAll(".card").forEach(e=>{e.classList.remove("clicked"),e.addEventListener("click",v)}),await n(1e3),l=setInterval(async()=>{++t>=10&&(a++,t-=10),a>=60&&(e++,a-=60),i("span#time").innerText=`${r(e)} : ${r(a)} . ${r(t,1)}`,g<=0&&(clearInterval(l),s(i(".game"),i(".end")),i("span#finTime").innerText=`${r(e)} : ${r(a)} . ${r(t,1)}`)},100)}),i("#again").addEventListener("click",()=>{location.reload()})})}]);