(function(t){function e(e){for(var s,a,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},o={app:0},i=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-3fe35b9e":"3a71ddcc"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3fe35b9e":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var s="css/"+({}[t]||t)+"."+{"chunk-3fe35b9e":"12d3248e"}[t]+".css",o=c.p+s,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var l=i[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===o))return e()}var p=document.getElementsByTagName("style");for(r=0;r<p.length;r++){l=p[r],u=l.getAttribute("data-href");if(u===s||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,n){s=o[t]=[e,n]}));e.push(s[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",p.name="ChunkLoadError",p.type=s,p.request=a,n[1](p)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/demo-bj-0425/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"061b":function(t,e,n){"use strict";n("7d51")},"14e6":function(t,e,n){"use strict";n("316c")},"18e3":function(t,e,n){},"316c":function(t,e,n){},"3ed8":function(t,e,n){"use strict";n("f36f")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"app"},r=i,c=n("2877"),l=Object(c["a"])(r,a,o,!1,null,null,null),u=l.exports,p=n("2f62");s["default"].use(p["a"]);var f=new p["a"].Store({state:{isLogin:!1},mutations:{setIsLogin:function(t,e){t.isLogin=e}},actions:{}}),d=n("8c4f");s["default"].use(d["a"]);var g=new d["a"]({mode:"history",routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-3fe35b9e").then(n.bind(null,"bb51"))}}]}),m=g,v=(n("6672"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[t.show?s("div",{staticClass:"popup"},[s("div",{staticClass:"bg",on:{click:function(e){t.show=!1}}}),"login"===t.type?s("div",{staticClass:"pop-up-member"},[s("button",{staticClass:"close",on:{click:t.closePopup}},[s("img",{attrs:{src:n("b89e"),alt:""}})]),s("Login")],1):t._e(),"news"===t.type?s("div",{staticClass:"pop-up-box"}):t._e()]):t._e()])}),h=[],A=n("fe86"),b={name:"Popup",components:{Login:A["a"]},data:function(){return{type:"",content:"",show:!1}},methods:{closePopup:function(){this.show=!1}}},C=b,w=(n("e86b"),Object(c["a"])(C,v,h,!1,null,"3f872472",null)),y=w.exports,k={install:function(t){var e=t.extend(y),n=new e({el:document.createElement("div")});document.body.appendChild(n.$el),t.prototype.$popup=function(t,e){n.content=t,n.type=e||"view",n.show=!0}}},E=k;s["default"].use(E),s["default"].config.productionTip=!1,new s["default"]({router:m,store:f,render:function(t){return t(u)}}).$mount("#app")},"60cf":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADHklEQVRoge1ZS2sTURT+7p3JPJK2aWNqa6G1YC34ALUKIlQobtWFC2mXIojgXxB/g1tXuhBx46KIKzdd2Y1WoYJdWBGb1r4fiUkmTmbmyrkxSVvswuaGaWE+mGS4HObe755zvnPuDBsefSpwiMEP8+IRETgAiAiEjYhA2IgIhI2IQNjQmzE/Y4DvC5RcD54XQAiAAaCmyzJ1WIYGVQ2YcgKMMRRLZXAGnOhLId0Rh64xBAJyLLOUw8paEYwJadsolBKgxRccF4m4gZvXBnF95CROD3TusHn26hOevJwCZwy6fsAIlMuBXNidW+dw9/aFf9q0Jkwo2PgalCZx9peD4Ut9GLtxZk8bTVOrG8o8EAgBrjGcP9WNuG3UximBM4tZOCUPpqFhYTknQ02VE5QR8Dwf6Y4EutIttbEgEHgz8RUvXk9LVUrYMaxvOdA4hyoGygjQThsxDUasHiJbuRLG385g8mMGR1MJ6aWKjaZqWrVJLISQVxUkpxTzqTYLcTumcqoaGibglMooOGW4ZV+GDP1vR77oYnWzCM8X0gOkQralS9tQCVQ3eqD/CAaPp5DN/5YxfqyzngO2FcOVoV60t1loiRsyiWe+rWF+MQvDUOP8fT8lCCotwsjlftwfu4ii40p9376wVNLCvdEh+H6lPlAYPXo8gS+zq0iHTaAaAHFblwun6rsbJJe2WZ+CQogqNefqakHDTzL/YyfXN4tY2yhCV1jM9u0BCgkwgQ+ff8rukpKX5HHobA96u9ukDSX3++kFLK3mYVk6vs9tYWW9AMs6ADLKqbUEw7upjLyckotkq4WHD67WCFAdeD4+jcmpOXS0x6Xy6JxV6oCifrphXxKNwA/k3Z4NAqskPXFm9KPwbWzDUkCe4FyTCarrvBJaf0G3FO8xXZNXMxCdicNGRCBsRAR2Y/t5l6k8/O4BZQSq3akRqysz9UEks6KJX+GUfeSTdYBz9HS1IpW05RidFeaXc8gXXOWH+SqUnciogBGJ2R8bKHuBHNM4g2nqssA1ywvK38zJV4fmzrFmhlCkQmEjIhA2IgJhIyIQKgD8AYbQ/zqHpp6GAAAAAElFTkSuQmCC"},6158:function(t,e,n){t.exports=n.p+"img/login_tit2.c90007b8.png"},6672:function(t,e,n){},"71ae":function(t,e,n){t.exports=n.p+"img/captcha_sample.009439c3.png"},"78a2":function(t,e,n){t.exports=n.p+"img/vip_diamond.cf59bbef.png"},"7d51":function(t,e,n){},"92ef":function(t,e,n){t.exports=n.p+"img/avatar.e45d72a1.jpg"},"99fb":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login_info",class:{styleForHome:t.styleForHome}},[s("div",{staticClass:"wrapper"},[t._m(0),s("button",{staticClass:"logout",on:{click:t.logout}},[s("img",{attrs:{src:n("bc49"),alt:""}})])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:n("92ef"),alt:""}})]),s("div",{staticClass:"info"},[s("h1",{staticClass:"name"},[t._v("會員名稱這麼長"),s("img",{staticClass:"vip_icon_mobile",attrs:{src:n("78a2"),alt:""}})]),s("h2",{staticClass:"activity"},[t._v("活躍度："),s("span",[t._v("0")])]),s("div",{staticClass:"amount"},[s("img",{attrs:{src:n("d37f"),alt:""}}),s("span",[t._v("174.73")])]),s("img",{staticClass:"vip_icon",attrs:{src:n("78a2"),alt:""}})])])}],o={name:"LoginInfo",props:["styleForHome"],methods:{logout:function(){this.$store.commit("setIsLogin",!1)}}},i=o,r=(n("3ed8"),n("2877")),c=Object(r["a"])(i,s,a,!1,null,"550c6680",null);e["a"]=c.exports},a5ca:function(t,e,n){t.exports=n.p+"img/btn_ok2.96197dbe.png"},a9ad:function(t,e,n){t.exports=n.p+"img/btn_login.048dc7de.png"},b89e:function(t,e,n){t.exports=n.p+"img/icon_cancel.febcd4d8.png"},bc49:function(t,e,n){t.exports=n.p+"img/btn_logout.a429db04.png"},c92d:function(t,e,n){t.exports=n.p+"img/login_tit1.7af04aee.png"},cbcc:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQwQ0U3N0RCQjEwMTFFQ0IwNkNBREYzOTVENDg4RDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQwQ0U3N0VCQjEwMTFFQ0IwNkNBREYzOTVENDg4RDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNDBDRTc3QkJCMTAxMUVDQjA2Q0FERjM5NUQ0ODhENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNDBDRTc3Q0JCMTAxMUVDQjA2Q0FERjM5NUQ0ODhENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl66Lh0AAATqSURBVHja7JhZbFRVGMfPdpdZOktnOm1DS1kkrbQCEoJieLAhCiJLxCfRkABGY0QSTWzig/hi5NX4YjA+GTX6gNQYDYmJoBXESqQttlQClCJ0Os7QWXvXs3im04IoLVBS5eGeTCb3Zs7yO9//f7/z3YHntrSDe6khcI81D8gD8oA8IA/oXgcidzwCQsCYoK68Kn8IgRgC8T8AyeU5cEw2bkI9gKvjEHIgXJbP0ayDAkGka+UO/xGQjAq1mElRzRL/8nq1sVFtXooRBcJwL563hq/wKwPWUEro1UhFQIg5BoJQ2IbcvLpqa9Xj26LrWv7tO9Z3MHfoYKE/TcddRNBcAsnYOIa0iLr+pcQLO/TgzXvhZU/Hli1H+zr+PDqCov65BOIO41hZszOxd4d+ra8zYp4edFJFFEqoLQ9pcRmSkv3jEfOySXQiJuw2V0DCdFHt2qrndk/R2O7g0fyXXxS7jhvnr5LEYv2RpyJbVpF8T+bAR2ZWVaI+yMUNaQUbfKzAHQGQjsNVUMEzm2xGIOFwXOtbsal68aRV2GBn6s138heAVhf3tdQK6tjHPkyf/BwQv2A+NaoK/o/FTF68z9/+gJpQgH1l/JfTNGfBGU02I5Arw5NQ162dnKDUV/z0g9Kwrs8PAWjzUoYWKESIWlkgslBReFHIBpWwjARSAR/P8/FhZ3hD4t3Xw61yfLe1q9u4NErm12GFTBenmYAEEyig+BrJ5F1/j3l8GNUuANwUZo3a/ET0wQhw6d8mRlBBPN1t9Jxx0pAsWRlYtAmW2ohmAuADeS24dqvaNsZ+7bWyBUHwbDyECCG+yqVlJ9PFQggFZT40WaFeX/lqbKd+kzElnNr3k9EPfM88Gd+9WZnYTPkr2BbdtRwAana8mBpNU+KHszvLIJzaPUSQVcJRDrcQ7OYDTCowEpzCQFi5nuVlbqiEhBCpF+ez8RAEkFHXLgFfObNoWmNtVe1YnsYI1pCWpyPfG2fqgC2nthmtUptatBq1PMxgwAQoFHVPfpPh/aDUGtz4sN6gAnOo8N0JN1NgyTTXNTgbUxPI867xuxVJlKVBS1f729sKH18Wi2twKGX3vp+6qELKWHIErXg20XG/VnkUTxv8AsLxKO359mrXJeeP5xuWrdEb5A/nc5+8V+pN4aYGoknPizsvP4gGMkP0h89o5VZvDm5/q3p1DR8cokaOZUfcgQHzxM+uuyi0eaM/VtEnUxwYMjI6RGXJSF2TtkARxSQzTJYsoHBcmTdvQrJpUxHe27xwes0wZDmWGRP1jwWaykGCoXm+Va1KNITlFgXATa2B9u2xPS9HVi+sSCD6D2UPdlrcjyeTDYZqkY72maeOjR/rdkZzE0aYKZPDW73bc2EI0Lg+/kZHZMl1ffnoRVeCBmrUBY3o2vzO2dzbr2WOJEF1ZKpEggA5vGTIFAuwjgI6xLcoB24JJGe2uMlgy7b4nlcizb5pO5q9+QP704fPCRRGipizw1VuFOpIs/jZzsz+EfvR9qr1G/z12o19MubXXxUOd5bOXeYijFVxNwUkvK2/Y6TqnIpikZOYurRVq4shdUonzkQpaff12SkbxSIQi7ssZ2+vYpSqS4OHI5hZ7m9dzikqrvsAQqxCv1+ewuVn566L6zsp8uViSEHB8HTu997LPCAPyAPygDwgD8gDuo32lwADAAvtIpQfFgMLAAAAAElFTkSuQmCC"},d37f:function(t,e,n){t.exports=n.p+"img/rank_coin.4df07262.png"},e86b:function(t,e,n){"use strict";n("18e3")},f36f:function(t,e,n){},fe86:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login_form"},[s("div",{staticClass:"bg",on:{click:t.close}}),s("div",{staticClass:"popup"},[s("div",{staticClass:"popup_content"},[t.isLogin?t._e():s("button",{staticClass:"close",on:{click:t.close}},[s("img",{attrs:{src:n("b89e"),alt:""}})]),t.isLogin||t.forgotPwdShow?t._e():s("div",{staticClass:"form"},[t._m(0),s("div",{staticClass:"data_enter"},[t._m(1),t._m(2),s("div",{staticClass:"option"},[t._m(3),s("button",{staticClass:"forgot_pwd",on:{click:function(e){t.forgotPwdShow=!0}}},[s("span",{staticClass:"effect"},[t._v("忘記密碼")])])]),t._m(4),s("button",{staticClass:"login_button",on:{click:t.login}},[s("img",{attrs:{src:n("a9ad"),alt:""}})]),t._m(5)])]),t.isLogin?s("LoginInfo"):t._e(),t.forgotPwdShow?s("ForgotPwd"):t._e()],1)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"title"},[s("img",{attrs:{src:n("c92d"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user_data"},[n("span",[t._v("帳號")]),n("input",{attrs:{type:"text",placeholder:"請輸入帳號"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user_data"},[n("span",[t._v("密碼")]),n("input",{attrs:{type:"password",placeholder:"請輸入密碼"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"remember"}},[n("input",{attrs:{id:"remember",type:"checkbox"}}),n("span"),t._v("記住我的帳號")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"agree"},[t._v("登入表示您同意"),n("a",{staticClass:"effect",attrs:{href:"#"}},[t._v("使用者規章")]),t._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sns_login"},[s("div",{staticClass:"other_account"},[s("hr"),s("h1",[t._v("其他帳號登入")]),s("hr")]),s("button",{staticClass:"facebook"},[s("img",{attrs:{src:n("60cf"),alt:""}})]),s("button",{staticClass:"google"},[s("img",{attrs:{src:n("cbcc"),alt:""}})])])}],o=n("99fb"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"forgot_pwd"},[s("h1",{staticClass:"title"},[s("img",{attrs:{src:n("6158"),alt:""}})]),s("div",{staticClass:"form"},[s("div",{staticClass:"user_data"},[s("span",[t._v("帳號")]),s("input",{attrs:{type:"text",placeholder:"請輸入帳號"}})]),s("div",{staticClass:"user_data"},[s("span",[t._v("手機號碼")]),s("input",{attrs:{type:"password",placeholder:"請輸入手機號碼"}})]),s("div",{staticClass:"user_data"},[s("span",[t._v("驗證碼")]),s("input",{attrs:{type:"password",placeholder:"請輸入驗證碼"}})]),s("div",{staticClass:"captcha"},[s("img",{attrs:{src:n("71ae"),alt:""}}),s("button",{staticClass:"reset_captcha"},[t._v("點擊換一張")])]),s("h1",{staticClass:"notice"},[t._v("請填寫正確資料，系統將發送驗證碼至您的手機。")]),s("button",{staticClass:"send_button"},[s("img",{attrs:{src:n("a5ca"),alt:""}})])])])}],c={name:"ForgotPwd"},l=c,u=(n("14e6"),n("2877")),p=Object(u["a"])(l,i,r,!1,null,"4f7718ea",null),f=p.exports,d={name:"Login",components:{LoginInfo:o["a"],ForgotPwd:f},data:function(){return{forgotPwdShow:!1}},computed:{isLogin:function(){return this.$store.state.isLogin}},methods:{close:function(){this.$emit("closePopup")},login:function(){this.$store.commit("setIsLogin",!0)}}},g=d,m=(n("061b"),Object(u["a"])(g,s,a,!1,null,"4b629850",null));e["a"]=m.exports}});