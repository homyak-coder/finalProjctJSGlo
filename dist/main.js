(()=>{"use strict";const e=e=>{const t=document.createElement("div");try{if(!e)throw new Error("В форме критическая ошибка!");(()=>{const n=document.querySelectorAll("input"),l=new FormData(e),o={};var c;t.textContent="Идёт отравка...",e.append(t),l.forEach(((e,t)=>{o[t]=e})),(c=o,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{t.textContent="Отправлено!",t.style.color="red",n.forEach((e=>{"submit"!==e.type&&(e.value="")}))})).catch((e=>{t.textContent="Ошибка"}))})()}catch(e){console.log(e.message)}};(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-callback"),n=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close"),o=document.querySelector(".button-services"),c=document.querySelectorAll(".fancyboxModal"),r=e=>{e.preventDefault(),t.style.display="block",n.style.display="block"},s=()=>{t.style.display="none",n.style.display="none"};e.forEach((e=>{e.addEventListener("click",r)})),c.forEach((e=>{e.addEventListener("click",r)})),o.addEventListener("click",r),l.addEventListener("click",s),n.addEventListener("click",s)})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),n=e.querySelectorAll(".element-content");t[0].classList.toggle("active"),n[0].style.display="none",e.addEventListener("click",(e=>{if(e.target.closest(".element")){let l=e.target.closest(".element");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),n[t].style.display="block"):(e.classList.remove("active"),n[t].style.display="none")}))}}))})(),window.addEventListener("load",(()=>{const e=document.querySelector(".services-carousel"),t=document.querySelector(".arrow-left"),n=document.querySelector(".arrow-right"),l=document.querySelectorAll(".col-sm-6.col-md-4");let o=0;const c=l[0].clientWidth;e.insertAdjacentHTML("beforeend","\n    <style> \n    \n    .services-elements {\n        display: flex;\n        width: 100%;\n        height: 460px;\n        margin: auto;\n        overflow: hidden;\n    }\n    .services-carousel .element {\n        display: block;\n        width: 100%;\n        \n    }\n    .services-carousel {\n        display: flex;\n        \n    }\n    .transformAnimation {\n        transition: .4s all ease-in-out;\n    }\n    .col-md-4 {\n        width: 400px;\n    }\n    .services-elements .title-h5 {\n        margin-bottom: 45px;\n    }\n    .services-elements .element-price {\n        margin-top: -48px;\n       \n    }\n    "),e.style.transform="translateX("+-c*o+"px)",n.addEventListener("click",(()=>{o>=3&&(o=-1),e.classList.add("transformAnimation"),o++,e.style.transform="translateX("+-c*o+"px)"})),t.addEventListener("click",(()=>{o<=0&&(o=4),e.classList.add("transformAnimation"),o--,e.style.transform="translateX("+-c*o+"px)"}))})),(()=>{const e=document.querySelector(".up"),t=document.querySelectorAll('.top-menu a[href*="#"]');let n,l;function o(){n>0&&(window.scrollTo(0,n),n-=100,l=setTimeout(o,10))}e.addEventListener("click",(()=>{n=window.pageYOffset,o()})),window.addEventListener("scroll",(()=>{document.documentElement.scrollTop>500?(e.style.display="block",e.classList.add("animated","fadeIn"),e.classList.remove("fadeOut")):(e.classList.add("fadeOut"),e.classList.remove("fadeIn"))})),t.forEach((function(e){t&&e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))}))})(),(()=>{const e=document.querySelectorAll(".item"),t=document.querySelectorAll(".table");let n=1;const l=l=>{l>e.length&&(n=1),e.forEach((e=>{e.style.display="none"})),e[n-1].style.display="block",t.forEach((e=>{e.classList.remove("active")}))};l(n),setInterval((()=>{l(n+=1),setTimeout((()=>t[n-1].classList.add("active")),10)}),3e3)})(),(()=>{const e=document.querySelectorAll(".form-control");document.querySelector(".form-control.tel").addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\+\-\(\)]/g,"")})),e[0].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я]/g,"")}))})(),((e,t="+7 (___) ___-__-__")=>{const n=document.querySelectorAll(".form-control.tel");function l(e){const n=e.keyCode,l=t,o=l.replace(/\D/g,""),c=this.value.replace(/\D/g,"");let r=0,s=l.replace(/[_\d]/g,(function(e){return r<c.length?c.charAt(r++)||o.charAt(r):e}));r=s.indexOf("_"),-1!=r&&(s=s.slice(0,r));let a=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",l),e.addEventListener("focus",l),e.addEventListener("blur",l)})(),document.querySelectorAll("[name=form-callback]").forEach((t=>{t.addEventListener("submit",(n=>{n.preventDefault(),e(t)}))}))})();