console.log('right')

    $('#mainSlider').carousel({
    pause: false
  })
  $('body').scrollspy({ target: '#list-example' })
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })
  $(window).on('activate.bs.scrollspy', function (e,obj) {
    console.log(obj.relatedTarget);
});

$(document).ready(function(){
  $("aboutTitle").mouseover(function(){
    $("text").css("opacity", "1");
  });
  $("aboutTitle").mouseout(function(){
    $("text").css("opacity", "0");
  });; /*in regards to the mouse over the pics, opacity changes  applying the text above*/
});



window.onscroll = function() {scrollFunction()}; /*my new scroll function init */

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("about1").style.fontSize = "30px";
    document.getElementById("basket1").style.fontSize = "30px";
   document.getElementById("products1").style.fontSize = "30px";
    document.getElementById("contact1").style.fontSize = "30px";
    document.getElementById("services1").style.fontSize = "30px";/*font size is this size when we scroll down */
    
  
  } else {
    document.getElementById("about1").style.fontSize = "50px";
    document.getElementById("basket1").style.fontSize = "50px";
    document.getElementById("products1").style.fontSize = "50px";
    document.getElementById("services1").style.fontSize = "50px";
    document.getElementById("contact1").style.fontSize = "50px";
    document.getElementById("toplogo").height = "300";
  }/*font size is this size when we scroll up to these points */
  
}



window.onload = function() {
  currentYear();
};
 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
        loopFillGroupWithBlank: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
        
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};
function pagetop(){
  width = "100%";
}
var feed = new Instafeed({
  get: 'user',
  userId: '11180810277', //the id and access token i was given when setting up a developer account for instagram
  accessToken: '11180810277.fbcd7ac.dfa684fa7824a9f86beef8c3a',
  //limit: none,
  sortBy: most-liked,
  resolution:'standard_resolution',
  filter: function(image) {
  var MAX_LENGTH = 40;

  // here we create a property called "short_caption"
  // on the image object, using the original caption
  if (image.caption && image.caption.text) {
    image.short_caption = image.caption.text.slice(0,30, MAX_LENGTH); //displays characters of the captions 0 to 30
  } else {
    image.short_caption = "";
  }

  // ensure the filter doesn't reject any images
  return true;
},
  template: '<div class="col-4"><img class="w-100" src={{image}}><hr><i<br></i><br><p>{{model.short_caption}}...<a href="{{link}}" target="_blank">Read More</a></p></div>'
});
feed.run();

