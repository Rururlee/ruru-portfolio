!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){var o;new Vue({el:".content-wrapper",data:{title:"RURU'S",skill:{a:"| FRONT-END DEV",b:"| UI DESIGN",c:"| GRAPHIC"},description:"嗨！我是Ruru<br>目前專職於前端網頁開發，熱愛專研前端技術",copyright:"© RURU'S "+(new Date).getFullYear(),workList:[{name:"《星之夢幻島》事前登錄頁面",url:"https://nl.futuregame.com.tw/pre-order",img:"img/work_1021.jpg",tool:"Vue-cli , Tailwind Css , API串接",type:"web"},{name:"WAKOOL數位生活館",url:"https://ctbc.wakool.net/",img:"img/work_0715.jpg",tool:"HTML / SCSS , jQuery , API串接",type:"web"},{name:"S5遊戲館 - 皇者天下活動",url:"https://rurulee.com/works/200610/index.html",img:"img/work_0609.jpg",tool:"HTML / SCSS , jQuery",type:"web"},{name:"iplay福利中心",url:"https://iplay.wakool.net/playgame.php?gameid=20000993",img:"img/work_1.jpg",tool:"HTML / SCSS , jQuery , API串接",type:"web"},{name:"發財星",url:"https://iplay.wakool.net/playgame.php?gameid=20000995",img:"img/work_2.jpg",tool:"HTML / SCSS , jQuery , API串接",type:"web"},{name:"百寶屋",url:"https://iplay.wakool.net/playgame.php?gameid=20000998",img:"img/work_3.jpg",tool:"HTML / SCSS , jQuery , API串接",type:"web"},{name:"S5遊戲館(Xtemplate開發)",url:"https://game.setn.com/",img:"img/work_4.jpg",tool:"HTML / SCSS , jQuery , 日常維護",type:"web"},{name:"Y5遊戲 - 龍之塔防活動頁",url:"https://yahoo.wakool.net/hilife?tdsourcetag=s_pcqq_aiomsg",img:"img/work_5.jpg",tool:"HTML / SCSS , jQuery",type:"web"},{name:"H5千元禮包大放送",url:"https://iplay.wakool.net/event/201909/",img:"img/work_0909.webp",tool:"HTML / SCSS , jQuery",type:"web"},{name:"Ｑちゃん包子饅頭店",url:"https://qchanpaoz.com/",img:"img/work_10.webp",tool:"UI / UX , HTML / CSS , jQuery",type:"web"},{name:"傷物語電影版",url:"https://www.mightymedia.com.tw/kizumonogatari/index.html",img:"img/work_7.jpg",tool:"UI / UX , HTML / CSS , jQuery",type:"web"},{name:"Free!劇場版 - High‧Speed!",url:"https://www.mightymedia.com.tw/Free/Movie/",img:"img/work_9.jpg",tool:"UI / UX , HTML / CSS , jQuery",type:"web"},{id:"design_1",name:"台灣Star - LOGO",img:"img/design_1.jpg",type:"graphic"},{id:"design_2",name:"招財犬柯基",img:"img/design_2.jpg",type:"graphic"},{id:"design_3",name:"Q版人物",img:"img/design_3.jpg",type:"graphic"},{id:"design_4",name:"Ｑちゃん包子店傳單",img:"img/design_4.jpg",type:"graphic"},{id:"design_5",name:"動漫節活動Banner",img:"img/design_5.jpg",type:"graphic"},{id:"design_6",name:"麵包超人遊戲書Banner",img:"img/design_6.jpg",type:"graphic"},{id:"design_7",name:"麵包超人商品電子報",img:"img/design_7.jpg",type:"graphic"}]},computed:{showWebItem:function(){return this.workList.filter(function(e){return"web"===e.type})},showGraphicItem:function(){return this.workList.filter(function(e){return"graphic"===e.type})}}}),$(".nav-link:nth-child(1)").click(function(){$("html,body").animate({scrollTop:$(".work__title").offset().top-50},500)}),$(".nav-link:nth-child(2)").click(function(){$("html,body").animate({scrollTop:$(".about__title").offset().top-50},500)}),$(".nav-link:nth-child(3)").click(function(){$("html,body").animate({scrollTop:$(".contact__title").offset().top-50},500)}),$(".content-btn").click(function(){$("html,body").animate({scrollTop:$(".contact").offset().top},500)}),window.addEventListener("load",function(e){setTimeout(function(){$(".loading").fadeOut(1e3)},500)}),$(".work__img--show").click(function(){$(".lds-ellipsis").show(),$(".show__work").fadeIn("fast");var e="img/"+this.id+"_2.jpg",t=new Image;t.src=e,$(".show__work--img").hide(),$(".show__work--img").attr("src",e),t.onload=function(){$(".lds-ellipsis").fadeOut(),$(".show__work--img").fadeIn()}}),$(".show__work").click(function(){$(".show__work").fadeOut("fast"),$(".show__work--img").attr("src","")}),$(".header").click(function(){$(".show__work").fadeOut("fast"),$(".show__work--img").attr("src","")}),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js").then(function(e){console.log("Registration succeeded.")}).catch(function(e){console.log("Registration failed with "+e)});var i=document.querySelector("#btn-save");window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),o=e}),i.addEventListener("click",function(e){o.prompt(),o.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),o=null})}),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&($(".tip").append('<span class="tip-word">請在chrome使用此功能(⁎⁍̴̛ᴗ⁍̴̛⁎)</span>'),$("#btn-save").mouseover(function(){$(".tip-word").addClass("d-block")}),$("#btn-save").mouseout(function(){$(".tip-word").removeClass("d-block")}))}]);