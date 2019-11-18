var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `@importurl("https://fonts.googleapis.com/css?family=Noto+Sans+TC|Open+Sans&display=swap");
html,
body{height:100%;}

*,
*::before,
*::after{
box-sizing:border-box;
}

body{
margin:0;
font-family:"OpenSans","NotoSansTC",sans-serif,-apple-system,BlinkMacSystemFont,"SegoeUI",Roboto,"spHelveticaNeue","AppleColorEmoji","SegoeUIEmoji","SegoeUISymbol","NotoColorEmoji"!important;
font-size:1rem;
font-weight:400;
line-height:1.5;
color:#212529;
text-align:left;
background-color:#ffffff;
}

img{
vertical-align:middle;
border-style:none;
}

small,
.small{
font-size:80%;
font-weight:400;
}

p{
margin:0;
}

#body__c{
background:#161518;
}

.fission{
margin:auto;
}

.overflow-hidden{
overflow:hidden!important;
}

.overflow-visible{
overflow:visible!important;
}

.m-auto{
margin:auto!important;
}

.mb-4,
.my-4{
margin-bottom:1.5rem!important;
}

.mt-3,
.my-3{
margin-top:1rem!important;
}

.pb-1,
.py-1{
padding-bottom:0.25rem!important;
}

.w-60{
width:60%!important;
}

.w-100{
width:100%!important;
}

/*swiperstart*/
.swiper-wrapper{
position:relative;
width:100%;
height:100%;
z-index:1;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-transition-property:-webkit-transform;
transition-property:-webkit-transform;
-o-transition-property:transform;
transition-property:transform;
transition-property:transform,-webkit-transform;
-webkit-box-sizing:content-box;
box-sizing:content-box;
}

.wakool-swiper-container{
margin:0 auto;
position:relative;
overflow:hidden;
list-style:none;
padding:0;
z-index:1;
}

.swiper-container-android.wakool-swiper-slide,
.swiper-wrapper{
-webkit-transform:translate3d(0px,0,0);
transform:translate3d(0px,0,0);
}

.swiper-container-free-mode>.swiper-wrapper {
  -webkit-transition-timing-function: linear;
  /*之前是ease-out*/
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
  margin: 0 auto;
}


.wakool-swiper-slide{
-webkit-flex-shrink:0;
-ms-flex-negative:0;
flex-shrink:0;
width:100%;
height:100%;
position:relative;
-webkit-transition-property:-webkit-transform;
transition-property:-webkit-transform;
-o-transition-property:transform;
transition-property:transform;
transition-property:transform,-webkit-transform;
}

.swiper-container.swiper-notification{
position:absolute;
left:0;
top:0;
pointer-events:none;
opacity:0;
z-index:-1000;
}


/*swiperend*/
.game-row__link{
display:block;
color:#9b9b9b;
}

.game-row__item{
padding:10px 10px 0 10px;
border-radius:5px;
box-shadow:0 3px 6px 0 rgba(0,0,0,0.2);
background-color:#ffffff;
margin-bottom:3px;
}

.game-row__img{
width:100%;
border-radius:10px;
}

a{
color:#3194ff;
text-decoration:none;
background-color:transparent;
}

.f-heading-secondary{
color:#1c1c1c;
}

.text-truncate{
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}

.flex-wrap{
flex-wrap:wrap!important;
}

.pb-4,.py-4{
padding-bottom:1.5rem!important;
}

.d-flex{
display:flex!important;
}

.w-25{
width:25%!important;
}

.game-row__img__2{
border-radius:10px;
max-width:126px;
}

.w-95{
width:95%!important;
}

.pl-2,.px-2{
padding-left:0.5rem!important;
}

.pr-2,.px-2{
padding-right:0.5rem!important;
}


`;
document.getElementsByTagName('HEAD').item(0).appendChild(style);
document.write(`<div style="width: 300px;margin:0 auto">
    <div class="fission">
        <div class="overflow-hidden">
            <!--廣告 開始-->
            <div id="wakool-ads2" class="wakool-swiper-container wakool-ads2 overflow-visible mt-3 mb-4">
                <div class="swiper-wrapper">
                    <div class="wakool-swiper-slide">
                        <div class="m-auto">
                            <a href="#" class="game-row__link">
                                <div class="game-row__item">
                                    <img class="game-row__img" src="img/icon_1.png" alt="">
                                    <p class="f-heading-secondary text-truncate pb-1 small">Food Truck Pup:烹飪廚師</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="wakool-swiper-slide">
                        <div class="m-auto">
                            <a href="#" class="game-row__link">
                                <div class="game-row__item">
                                    <img class="game-row__img" src="img/icon_2.png" alt="">
                                    <p class="f-heading-secondary text-truncate pb-1 small">閃耀暖暖
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="wakool-swiper-slide">
                        <div class="m-auto">
                            <a href="#" class="game-row__link">
                                <div class="game-row__item">
                                    <img class="game-row__img" src="img/icon_3.png" alt="">
                                    <p class="f-heading-secondary text-truncate pb-1 small">Pong Pong Egg</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="wakool-swiper-slide">
                        <div class="m-auto">
                            <a href="#" class="game-row__link">
                                <div class="game-row__item">
                                    <img class="game-row__img" src="img/icon_4.png" alt="">
                                    <p class="f-heading-secondary text-truncate pb-1 small">貓咪真的很可愛</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--廣告 結束-->
        </div>
    </div>
    <script src="./js/wakool-ads.js"></script>
</div>`);

