!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){var o;new Vue({el:".content-wrapper",data:{title:"RURU'S",skill:{a:"Front-end Web Developer"},description:"嗨！我是Ruru<br>目前專職於前端網頁開發，熱愛專研前端技術",copyright:"© RURU'S "+(new Date).getFullYear(),workList:[,{name:"HalohaloNEWS",url:"https://halohalonews.netlify.app",img:"img/work_1104.jpg",tool:"Nuxt , Tailwind Css , API串接",type:"web"},{name:"FUTURELA - Work project demo",url:"http://175.97.177.18:8892/",img:"img/work_0531.jpg",tool:"Vue3+Vite , Tailwind Css , Json Server",type:"web"},{name:"Future game official website",url:"https://www.futuregame.com.tw/",img:"img/work_1103.jpg",tool:"Vue-cli , Tailwind Css , API串接",type:"web"},{name:"《星之夢幻島》official website",url:"https://nl.futuregame.com.tw/",img:"img/work_1102.jpg",tool:"Vue-cli , Tailwind Css , API串接",type:"web"},{name:"《星之夢幻島》Pre-registration page",url:"https://nl.futuregame.com.tw/pre-order",img:"img/work_1021.jpg",tool:"Vue-cli , Tailwind Css , API串接",type:"web"},{name:"《閃之軌跡》Cosplay event",url:"https://mojoy.io/event/ltn/",img:"img/work_221210.jpg",tool:"HTML , CSS , 串接 Google Sheet",type:"web"},{name:"KIWIPIN",url:"https://stalwart-semolina-6e1192.netlify.app/",img:"img/work_0532.jpg",tool:"HTML , CSS , Javascript",type:"web"},{name:"《古劍奇譚網路版》Event page",url:"https://idyllic-kringle-fbc658.netlify.app/",img:"img/work_230603.jpg",tool:"HTML , CSS , Javascript",type:"web"},{name:"《未來戰》Event page",url:"https://elaborate-shortbread-5e482c.netlify.app/",img:"img/work_230602.jpg",tool:"HTML , CSS , Javascript",type:"web"},{name:"Ｑちゃん包子饅頭店 official website",url:"https://qchanpaoz.com/",img:"img/work_10.webp",tool:"UI / UX , HTML / CSS , jQuery",type:"web"},{id:"design_2",name:"招財犬柯基",img:"img/design_2.jpg",type:"graphic"},{id:"design_3",name:"Q版人物",img:"img/design_3.jpg",type:"graphic"},{id:"design_4",name:"Ｑちゃん包子店傳單",img:"img/design_4.jpg",type:"graphic"},{id:"design_5",name:"動漫節活動Banner",img:"img/design_5.jpg",type:"graphic"},{id:"design_6",name:"麵包超人遊戲書Banner",img:"img/design_6.jpg",type:"graphic"},{id:"design_7",name:"麵包超人商品電子報",img:"img/design_7.jpg",type:"graphic"}]},computed:{showWebItem:function(){return this.workList.filter(function(e){return"web"===e.type})},showEWebItem:function(){return this.workList.filter(function(e){return"web"===e.type})},showGraphicItem:function(){return this.workList.filter(function(e){return"graphic"===e.type})}}}),$(".nav-link:nth-child(1)").click(function(){$("html,body").animate({scrollTop:$(".work__title").offset().top-50},500)}),$(".nav-link:nth-child(2)").click(function(){$("html,body").animate({scrollTop:$(".about__title").offset().top-50},500)}),$(".nav-link:nth-child(3)").click(function(){$("html,body").animate({scrollTop:$(".contact__title").offset().top-50},500)}),$(".content-btn").click(function(){$("html,body").animate({scrollTop:$(".contact").offset().top},500)}),window.addEventListener("load",function(e){setTimeout(function(){$(".loading").fadeOut(1e3)},500)}),$(".work__img--show").click(function(){$(".lds-ellipsis").show(),$(".show__work").fadeIn("fast");var e="img/"+this.id+"_2.jpg",t=new Image;t.src=e,$(".show__work--img").hide(),$(".show__work--img").attr("src",e),t.onload=function(){$(".lds-ellipsis").fadeOut(),$(".show__work--img").fadeIn()}}),$(".show__work").click(function(){$(".show__work").fadeOut("fast"),$(".show__work--img").attr("src","")}),$(".header").click(function(){$(".show__work").fadeOut("fast"),$(".show__work--img").attr("src","")}),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js").then(function(e){console.log("Registration succeeded.")}).catch(function(e){console.log("Registration failed with "+e)});var i=document.querySelector("#btn-save");window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),o=e}),i.addEventListener("click",function(e){o.prompt(),o.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),o=null})}),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&($(".tip").append('<span class="tip-word">請在chrome使用此功能(⁎⁍̴̛ᴗ⁍̴̛⁎)</span>'),$("#btn-save").mouseover(function(){$(".tip-word").addClass("d-block")}),$("#btn-save").mouseout(function(){$(".tip-word").removeClass("d-block")}))}]);