//mobile menu

$('.nav-link:nth-child(1)').click(function () {
  $('html,body').animate({ scrollTop: $('.work__title').offset().top - 50 }, 500)
})
$('.nav-link:nth-child(2)').click(function () {
  $('html,body').animate({ scrollTop: $('.about__title').offset().top - 50 }, 500)
})

$('.nav-link:nth-child(3)').click(function () {
  $('html,body').animate({ scrollTop: $('.contact__title').offset().top - 50 }, 500)
})

//content-btn
$('.content-btn').click(function () {
  $('html,body').animate({ scrollTop: $('.contact').offset().top }, 500)
})

window.addEventListener('load', function (event) {
  setTimeout(function () {
    $('.loading').fadeOut(1000)
  }, 500)
})

//平面設計lightbox
$('.work__img--show').click(function () {
  $('.show__work').fadeIn('fast')
  //console.log(this.id)
  let imgUrl = 'img/' + this.id + '_2.jpg'
  //console.log(imgUrl)
  let image = new Image();
  image.src = imgUrl;

  image.onload = function() {
    $('.lds-ellipsis').fadeOut()
    console.log('img loaded')
    $('.show__work--img').attr('src', imgUrl) 
  } 

})




$('.show__work').click(function () {
  $('.show__work').fadeOut('fast')
  $('.show__work--img').attr('src', '')
  $('.lds-ellipsis').fadeIn()
  // $('body').removeClass('overflow-hidden')
})
$('.header').click(function () {
  $('.show__work').fadeOut('fast')
  $('.show__work--img').attr('src', '')
  $('.lds-ellipsis').fadeIn()
  // $('body').removeClass('overflow-hidden')
})
