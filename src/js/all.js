
// --- vue start --- //
new Vue({
  el: '.content-wrapper',
  data: {
    title: 'RURUR STUDIO',
    skill: { a: '| FRONT-END DEV', b: '| UI DESIGN', c: '| GRAPHIC' },
    description: '嗨！我是Ruru<br>目前專職於前端網頁開發，熱愛專研前端技術',
    copyright: '© RURUR STUDIO ' + new Date().getFullYear(),
    workList: [
      {
        name: 'S5遊戲館 - 皇者天下活動',
        url: 'https://rurulee.com/works/200610/index.html',
        img: 'img/work_0609.jpg',
        tool: 'HTML / SCSS , jQuery',
        type: 'web'
      },
      {
        name: 'iplay福利中心',
        url: 'https://iplay.wakool.net/playgame.php?gameid=20000993',
        img: 'img/work_1.jpg',
        tool: 'HTML / SCSS , jQuery , API串接',
        type: 'web'
      },
      {
        name: '發財星',
        url: 'https://iplay.wakool.net/playgame.php?gameid=20000995',
        img: 'img/work_2.jpg',
        tool: 'HTML / SCSS , jQuery , API串接',
        type: 'web'
      },
      {
        name: '百寶屋',
        url: 'https://iplay.wakool.net/playgame.php?gameid=20000998',
        img: 'img/work_3.jpg',
        tool: 'HTML / SCSS , jQuery , API串接',
        type: 'web'
      },
      {
        name: 'S5遊戲館(Xtemplate開發)',
        url: 'https://game.setn.com/',
        img: 'img/work_4.jpg',
        tool: 'HTML / SCSS , jQuery , 日常維護',
        type: 'web'
      },
      {
        name: 'Y5遊戲 - 龍之塔防活動頁',
        url: 'https://yahoo.wakool.net/hilife?tdsourcetag=s_pcqq_aiomsg',
        img: 'img/work_5.jpg',
        tool: 'HTML / SCSS , jQuery',
        type: 'web'
      },
      {
        name: 'Ｑちゃん包子饅頭店',
        url: 'https://rururlee.github.io/qchanpaoz/',
        img: 'img/work_10.jpg',
        tool: 'UI / UX , HTML / CSS , jQuery',
        type: 'web'
      },
      {
        name: '飛行鼠歷險記繪本',
        url: 'https://www.e-kids.com.tw/books/maus/',
        img: 'img/work_6.jpg',
        tool: 'UI / UX , HTML / CSS , jQuery',
        type: 'web'
      },
      {
        name: '傷物語電影版',
        url: 'https://www.mightymedia.com.tw/kizumonogatari/index.html',
        img: 'img/work_7.jpg',
        tool: 'UI / UX , HTML / CSS , jQuery',
        type: 'web'
      },
      {
        name: '火影忍者 - 慕留人',
        url: 'https://www.naruto.com.tw/BORUTOmovie/index.html',
        img: 'img/work_8.jpg',
        tool: 'UI / UX , HTML / CSS , jQuery',
        type: 'web'
      },
      {
        name: 'Free!劇場版 - High‧Speed!',
        url: 'https://www.mightymedia.com.tw/Free/Movie/',
        img: 'img/work_9.jpg',
        tool: 'UI / UX , HTML / CSS , jQuery',
        type: 'web'
      },
      {
        id: 'design_1',
        name: '台灣Star - LOGO',
        img: 'img/design_1.jpg',
        type: 'graphic'
      },
      {
        id: 'design_2',
        name: '招財犬柯基',
        img: 'img/design_2.jpg',
        type: 'graphic'
      },
      {
        id: 'design_3',
        name: 'Q版人物',
        img: 'img/design_3.jpg',
        type: 'graphic'
      },
      {
        id: 'design_4',
        name: 'Ｑちゃん包子店傳單',
        img: 'img/design_4.jpg',
        type: 'graphic'
      },
      {
        id: 'design_5',
        name: '動漫節活動Banner',
        img: 'img/design_5.jpg',
        type: 'graphic'
      },
      {
        id: 'design_6',
        name: '麵包超人遊戲書Banner',
        img: 'img/design_6.jpg',
        type: 'graphic'
      },
      {
        id: 'design_7',
        name: '麵包超人商品電子報',
        img: 'img/design_7.jpg',
        type: 'graphic'
      },
    ]
  },
  computed: {
    showWebItem() {
      return this.workList.filter((work) => {
        return work.type === 'web'
      })
    },
    showGraphicItem() {
      return this.workList.filter((work) => {
        return work.type === 'graphic'
      })
    },
  }

})
// --- vue end --- //

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
  $('.lds-ellipsis').show()
  $('.show__work').fadeIn('fast')
  //console.log(this.id)
  let imgUrl = 'img/' + this.id + '_2.jpg'
  //console.log(imgUrl)
  let image = new Image();
  image.src = imgUrl;
  $('.show__work--img').hide()
  $('.show__work--img').attr('src', imgUrl)
  image.onload = function () {
    $('.lds-ellipsis').fadeOut()
    $('.show__work--img').fadeIn()

  }
})




$('.show__work').click(function () {
  $('.show__work').fadeOut('fast')
  $('.show__work--img').attr('src', '')
  // $('body').removeClass('overflow-hidden')
})
$('.header').click(function () {
  $('.show__work').fadeOut('fast')
  $('.show__work--img').attr('src', '')
  // $('body').removeClass('overflow-hidden')
})


