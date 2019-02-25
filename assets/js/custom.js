$(document).ready(function(){

  // Dashboard Loading bar 
  var preloaderbar = new Nanobar({target: document.getElementById('preloader')});
  preloaderbar.go(100);

  // Sidebar menu collapse
  $('.menu-link').click(function(){
    $('#sideNav').toggleClass('active');
    $('body').toggleClass('sideMenuOpen');
    $(this).toggleClass('change');
  });


  // Sidebar sub menu collapse
  $.each($('.menu-toggle.toggled'), function (i, val) {
    $(val).next().slideToggle(0);
  });
  $('.collapsible').collapsible({
    accordion : false
  });
  $('#uploadFileForm1 .collapsible').collapsible({
    accordion : false
  });


  $('.collapsible-header').click(function(){
    var sidebarDropdown = $(this).find('.material-icons.right');
    if(sidebarDropdown.text() == "remove_circle_outline"){
      sidebarDropdown.text('add_circle_outline');
    }
    else {
      sidebarDropdown.text("remove_circle_outline");
    }
  });

  // Search

  $("nav .search-container .clearable").each(function() {
  
  var $inp = $(this).find("input"),
      $cle = $(this).find(".search-clear");
  

  $inp.on("input", showSearch);
  

  function showSearch(){
    $cle.toggle(!!this.value);
    $('.search-dropdown').fadeIn();
    $('#bodyOverlay').fadeIn();
    $('body').css({'overflow':'hidden','position':'fixed'});
  }
  
  $cle.on("touchstart click", function(e) {
    e.preventDefault();
    $inp.val("").css('transition','all 0.3s');
    $(this).fadeOut();
    $('.search-dropdown').fadeOut();
    $('#bodyOverlay').fadeOut();
    $('body').css({'overflow':'auto','position':'relative'});
  });
  
  $('.collection-item').click(function(){
    var $selectedVal = $(this).find('.title').text();
    $('#search').val($selectedVal);
  });
});
  $(document).click(function(){
    $('.search-dropdown').fadeOut();
    $('#bodyOverlay').fadeOut();
    $('body').css({'overflow':'auto','position':'relative'});
  });

$('#search').on('keyup', function(){
  if($('#search').val() == ''){
    $('.search-dropdown').fadeOut();
    $('#bodyOverlay').fadeOut();
    $('body').css({'overflow':'auto','position':'relative'});

    $("#search-listing ul.dropdown-list").niceScroll({
      cursorcolor:"rgba(0,0,0,1)",
      cursoropacitymax:1,
        cursorwidth:3,
        cursorborder:"0px solid rgba(0,0,0,0.8)",
        cursorborderradius:"8px",
        background:"#DDD",
        autohidemode: true,
        mousescrollstep: '20',
        horizrailenabled:false
    });

  }
})

//dropdown menu style - 2497

// $(document).on('click', '.dropdown.animPop', function(e) {
//   e.stopPropagation();
//   var that = $(this);
//   var target = $(e.target);

//   if(that.hasClass('once') && !that.find('.dropdown-contents').hasClass('once')){
//     that.find('.dropdown-contents').addClass('once');
//   }

//   if(!that.find('.dropdown-contents').hasClass('animDropOpen')){
//     $('.dropdown-contents').removeClass('animDropOpen');
//     that.find('.dropdown-contents').removeClass('animDropClose').addClass('animDropOpen');
//   }
//   else if (target.closest('.dropdown-contents').hasClass('animDropOpen') && !target.closest('.dropdown-contents').hasClass('once')) {
//     return;
//   }
//   else if(that.find('.dropdown-contents').hasClass('animDropOpen') && target.closest('.dropdown-contents').hasClass('once'))
//   {
//     that.find('.dropdown-contents').removeClass('animDropOpen').addClass('animDropClose');
//   }
//   else 
//   {
//     that.find('.dropdown-contents').removeClass('animDropOpen').addClass('animDropClose');
//   }

// });


//dropdown menu style - 2497

// $(document).on('click', '.dropdown.plainPop', function(e) {
//   e.stopPropagation();
//   var that = $(this);
//   var target = $(e.target);

//   if(that.hasClass('once') && !that.find('.dropdown-contents').hasClass('once')){
//     that.find('.dropdown-contents').addClass('once');
//   }

//   if(!that.find('.dropdown-contents').hasClass('plainOpen')){
//     $('.dropdown-contents').removeClass('plainOpen');
//     that.find('.dropdown-contents').removeClass('plainClose').addClass('plainOpen');
//     $(this).addClass('active');
//   }
//   else if (target.closest('.dropdown-contents').hasClass('plainOpen') && !target.closest('.dropdown-contents').hasClass('once')) {
//     return;
//   }
//   else if(that.find('.dropdown-contents').hasClass('plainOpen') && target.closest('.dropdown-contents').hasClass('once'))
//   {
//     that.find('.dropdown-contents').removeClass('plainOpen').addClass('plainClose');
//     $(this).removeClass('active');
//   }
//   else 
//   {
//     that.find('.dropdown-contents').removeClass('plainOpen').addClass('plainClose');
//     $(this).removeClass('active');
//   }

// });


//dropdown style 2
function DropDown(el) {
    this.dd = el;
    this.initEvents();
}

DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
          // console.log($(event.target),$(event.target).closest('.dropdown').find('.dropdown-contents').hasClass('active'));
          if(!$(event.target).parents('.dropdown-contents').length && $(event.target).parents('.dropdown').find('.dropdown-contents').hasClass('active')){
            $('.dropdown-contents').removeClass('active');
            $('[data-position]').removeClass('tt');
            $('select[data-nametag]').parent().removeClass('active');
            // console.log('1');
            event.stopPropagation();
          }
          else if($(event.target).parents('.dropdown-contents').length && !$(event.target).closest('.dropdown-contents').hasClass('stay')){
            $('.dropdown-contents').removeClass('active');
            $('[data-position]').removeClass('tt');
            $('select[data-nametag]').parent().removeClass('active');
            //$(this).find('.dropdown-contents').addClass('active');
            // console.log('2');
            if($(event.target).parents('#savedSearchesBtn').length || $(event.target).hasClass('#savedSearchesBtn')){
              var elem = $('#savedSearch');
              var instance = M.Modal.getInstance(elem);
              instance.open();
            }
            else{
              event.stopPropagation();
            }
            }
            else{
              // console.log('4');
              $('.dropdown-contents').removeClass('active');
              $('[data-position]').removeClass('tt');
              $('select[data-nametag]').parent().removeClass('active');
              $(this).find('.dropdown-contents').addClass('active');
              $(this).find('[data-position]').addClass('tt');
              event.stopPropagation();
            }
        });
    }
}

var dd = new DropDown($('.dropdown.plainPop'));

$(document).click(function(event) {
  // console.log($(this));
  if(!$(event.target).closest('.dropdown-contents').hasClass('stay')){
    $('.dropdown.plainPop').find('.dropdown-contents').removeClass('active');
    $('[data-position]').removeClass('tt');
    $('select[data-nametag]').parent().removeClass('active');
    // console.log('3');
  }
  else{
  }
});

$(document).on('click', '#selectedSec-files', function(e){
  e.preventDefault;
  e.stopPropagation();
})

// card height update
function cardHeight(){  
  var cW = $('#assets .card.small').width();
  cW = cW*.965;
  $('#assets .card.small').css({'height':cW-3});
  $('#assets .card .card-image').css({'height':cW-82});
  $('#assets .card .card-image').css('max-height', 'unset');
}

// cardHeight();
// $(window).on('resize', cardHeight);

//cards slide in - 2497cardA
var win = $(window);
var allMods = $("#assets .card");

cardAnimationLoad();
win.scroll(cardAnimationScroll);

function cardAnimationLoad(event) {
  
  allMods.each(function(i, el) {

  var top_of_element = $(this).offset().top;
  var bottom_of_element = $(this).offset().top + $(this).outerHeight();
  var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
  var top_of_screen = $(window).scrollTop();

    var el = $(this);
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('fadeIn')) {
      el.addClass("animated fadeInUp");
    }
  });
  
}
function cardAnimationScroll(event) {
  
  allMods.each(function(i, el) {

  var top_of_element = $(this).offset().top;
  var bottom_of_element = $(this).offset().top + $(this).outerHeight();
  var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
  var top_of_screen = $(window).scrollTop();

    var el = $(this);
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('fadeIn')) {
      el.addClass("animated fadeIn"); 
    }
  });
  
}

$('[title="Sort descending"]').on('click', function(e){
  e.stopPropagation();
})

$('#sideNav').niceScroll({
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
    cursorwidth:3,
    cursorborder:"0px solid rgba(0,0,0,0.8)",
    cursorborderradius:"8px",
    background:"#DDD",
    autohidemode: false,
    mousescrollstep: '20',
    horizrailenabled:false
});

$('body').niceScroll({
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  autohidemode: false,
  mousescrollstep: '20',
  horizrailenabled:false
});

$('.batchTableWrap, #changeLogs,  #batchListWrap').niceScroll({
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  autohidemode: true,
  mousescrollstep: '20',
  horizrailenabled:false
});

$('#asset-detail .uploadFileForm').niceScroll({
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  autohidemode: true,
  mousescrollstep: '20',
  horizrailenabled:false
});

$('.tags-filterUL').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});

$('.assetTypeUL').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});

$('.categoryFilterUL').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});

$('.countrySelectUL').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});

$("#search-listing ul.dropdown-list").niceScroll({
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
    cursorwidth:3,
    cursorborder:"0px solid rgba(0,0,0,0.8)",
    cursorborderradius:"8px",
    background:"#DDD",
    autohidemode: true,
    mousescrollstep: '20',
    horizrailenabled:false
});


// $('.afpThumbnails').niceScroll({
//   autohidemode:true,
//   cursorcolor:"rgba(0,0,0,1)",
//   cursoropacitymax:1,
//   cursorwidth:3,
//   cursorborder:"0px solid rgba(0,0,0,0.8)",
//   cursorborderradius:"8px",
//   background:"#DDD",
//   mousescrollstep: '20',
//   horizrailenabled:false
// });


$('.uploadFileForm').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});

$('#mediaTypeUl, #assetType2Ul, #category2Ul').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});

$('.reportTableWrap').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});

$('.chBoxWrSc').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});


$('.indTags > span').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});

// $('#advancedFilterDd').niceScroll({
//   autohidemode:true,
//   cursorcolor:"rgba(0,0,0,1)",
//   cursoropacitymax:1,
//   cursorwidth:3,
//   cursorborder:"0px solid rgba(0,0,0,0.8)",
//   cursorborderradius:"8px",
//   background:"#DDD",
//   mousescrollstep: '20',
//   horizrailenabled:false
// });

$('.savedSearchTableWrap').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false
});


$('#advancedFilterDdCon').niceScroll({
  autohidemode:true,
  cursorcolor:"rgba(0,0,0,1)",
  cursoropacitymax:1,
  cursorwidth:3,
  cursorborder:"0px solid rgba(0,0,0,0.8)",
  cursorborderradius:"8px",
  background:"#DDD",
  mousescrollstep: '20',
  horizrailenabled:false,
  scrollbarid: 'advancedFilterDdConBar'
});

$(document).on('click', function(){
  setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 200);
})


var setScrolTimer
$('#advancedFilterDdCon').niceScroll().scrollstart(function(){
  setScrolTimer = setInterval(function(){
  $('#mediaTypeUl').getNiceScroll().resize();
  $('#assetType2Ul').getNiceScroll().resize();
  $('#category2Ul').getNiceScroll().resize();
}, 10)})
$('#advancedFilterDdCon').niceScroll().scrollend(function(){
  $('#mediaTypeUl').getNiceScroll().resize();
  $('#assetType2Ul').getNiceScroll().resize();
  $('#category2Ul').getNiceScroll().resize();
  clearInterval(setScrolTimer);
})

$('.asset-listings .card-overlay').on('click', "label", function(e){
  e.stopPropagation();
  if($(this).find('input').is(':checked')){
    $(this).parent().parent().addClass('active');
   }
  else{
    $(this).parent().parent().removeClass('active');
  }
  showActBar();
  selectedAssetCount();
});


function showActBar(){
  var show = 0;
  $(".asset-listings").find('.card-overlay').each(function(){
      if($(this).hasClass('active')){
        show = 1;
      }
    });
  if(show) {
    $('.action-bar').css({'visibility':'visible','opacity':'1'});
  }
  else {
    $('.action-bar').css({'visibility':'hidden','opacity':'0'});
  }
}

function selectedAssetCount() {
  var count = $('#assets .card').find('.card-overlay .select label input:checked').length;
  var span = $('.select-all').find('#select-value span');
  var label = $('.select-all').find('#select-value label');
  if(count){
    span.text('Selected');
    label.show();
    label.text(count);
  }
  else{
    span.text('Select');
    label.hide();
    label.text('');
    $('.select-all').find('input.filled-in').prop('checked', false);
  }
}


/* Select All Filter */
$('#select-options').find('li a').click(function(){
  var selectText = $('.select-all').find('#select-value span');
  var selectLabel = $('.select-all').find('#select-value label');
  var selectedVal = $(this).attr('name');
  var selectedLabVal = $(this).find('label').text();
  if(selectedVal == 'Select'){
    $('.select-all').find('input.filled-in').prop('checked', false);
  }
  else{
    $('.select-all').find('input.filled-in').prop('checked', true);
    $('.select-all').find('#select-value label').show();
  }
  setTimeout(function(){$(selectText).text(selectedVal);}, 20);
  setTimeout(function(){$(selectLabel).text(selectedLabVal);}, 20);
});

$('#select-all').click(function(e){
  $('.select-all').find('#select-value label').show();
  $('.asset-listings .card').find('.card-overlay').removeClass('opc0').addClass('opc1');
  $input = $('.asset-listings .card-overlay').find('input');
  $input.each(function(){
    if($(this).is(':checked')){
      $(this).unbind('click');
      dismissModal();
    }
    else{
      $(this).trigger('click');
      dismissModal();
    }
  });
});

$('#select-none').click(function(){
  $('.action-bar').css({'opacity':'0','visibility':'hidden'});
  $('.select-all').find('#select-value label').hide();
  $('.asset-listings .card').find('.card-overlay').removeClass('opc1').addClass('opc0');
  $('.asset-listings .card').find('.card-overlay').removeClass('active');
  $input = $('.asset-listings .card-overlay').find('input');
  $input.each(function(){
    if(!$(this).is(':checked')){
      $(this).unbind('click');
      dismissModal();
    }
    else{
      $(this).trigger('click');
      dismissModal();
    }
  });
});


// card carousel
$('#assets').find('.card .card-image').each(function(){
  if($(this).find('img').length>1){

  }
})


//car slider functionality
var slideIndex = 1;

$('.cc_carousel .cc_item').each(function(){
  var that = $(this)
  showSlides(slideIndex, that);
})

// function showSlides(n) {
//   var i;
//   var slides = $(".cc_item");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}

//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
  
//   slides[slideIndex-1].style.display = "block";
// }

function showSlides(n, that){
  var slides;
  that.closest('.card').find('.cc_carousel .cc_item').each(function(index, elem){
    slides = $(this).parent().children();
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    if(index != slideIndex-1){
      $(this).hide();
    }
    else{
      $(this).show();
      $(this).closest('.card').find('.card-action .img-format').text($(this).find('img').attr('data-type'));
      $(this).closest('.card').find('.card-action .img-format').attr('data-format',$(this).find('img').attr('data-type'));
    }
  })

  // slides[slideIndex-1].style.display = "block";
}


function plusSlides(n, that) {
  showSlides(slideIndex += n, that);
}

$('.cc_prev').on('click', function(e) {
  e.stopPropagation();
  that = $(this);
  plusSlides(-1, that);
})

$('.cc_next').on('click', function(e) {
  e.stopPropagation();
  that = $(this);
  plusSlides(1, that);
})

// floating, up icon
$('#fixed-up-btn').floatingActionButton();
var elems = document.querySelector('#fixed-up-btn');
var instances = M.FloatingActionButton.init(elems, {
  direction: 'left',
  hoverEnabled: false
});

$('#fixed-up-btn').each(function(){
    $(this).click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 'normal');
        return false; 
    });
});

$(window).scroll(function() {
  $("#fixed-up-btn").each(function(){
    var winTop = $(window).scrollTop();
    // console.log(winTop);
    if (winTop > 200) {
      $(this).find('a').css({'opacity':'1', 'visibility':'visible'});
    }
    else{
      $(this).find('a').css({'opacity':'0', 'visibility':'hidden'});
    }
  });
});

// // file select all dropdown - 2497
// $('#fileselect-options').on('click', 'li a', function(){
//   var selectText = $('.selectBoxAll').find('#selected-files span');
//   var selectLabel = $('.selectBoxAll').find('#selected-files label');
//   var selectedVal = $(this).attr('name');
//   var selectedLabVal = $(this).find('label').text();
//   if(selectedVal == 'Select'){
//     $('#selected-files').find('input.filled-in').prop('checked', false);
//   }
//   else{
//     $('#selected-files').find('input.filled-in').prop('checked', true);
//     $('#selected-files').find('label').show();
//   }
//   setTimeout(function(){$(selectText).text(selectedVal);}, 20);
//   setTimeout(function(){$(selectLabel).text(selectedLabVal);}, 20);
// });


// $('#fileselect-options').on('click', '#selectfile-all', function(){
//   $('.fileListSide').find('.card-overlay').removeClass('opc0').addClass('opc1');
//   $input = $('.fileListSide .card-overlay').find('input');
//   $('#selected-files').find('label').show();
//   $input.each(function(){
//     if($(this).is(':checked')){
//       $(this).unbind('click');
//     }
//     else{
//       $(this).trigger('click');
//     }
//   });
//   updateFCount();
// });

// $('#fileselect-options').on('click', '#selectfile-none', function(){
//   $('.fileListSide').find('.card-overlay').removeClass('opc1').addClass('opc0');
//   $('.fileListSide').find('.card-overlay').removeClass('active');
//   $input = $('.fileListSide .card-overlay').find('input');
//   $('#selected-files').find('label').hide();
//   $input.each(function(){
//     if(!$(this).is(':checked')){
//       $(this).unbind('click');
//     }
//     else{
//       $(this).trigger('click');
//     }
//   });  
//   updateFCount();
// });
// $('#selected-files').on('click', 'input.filled-in', function(e){
//   e.stopPropagation();
// })


$(document).on('click', '#selected-files', function(e){
  e.stopPropagation();

  var selectText = $('.selectBoxAll').find('#selected-files span');
  var selectLabel = $('.selectBoxAll').find('#selected-files label');
  var selectedVal = $(this).find('input').attr('name');
  var selectedLabVal = $(this).find('label').text();
  if(selectedVal == 'Select none'){
    $('#selected-files').find('input.filled-in').prop('checked', false);

    $('.fileListSide').find('.card-overlay').removeClass('opc1').addClass('opc0');
      $('.fileListSide').find('.card-overlay').removeClass('active');
      $input = $('.fileListSide .card-overlay').find('input');
      $('#selected-files').find('label').hide();
      $input.each(function(){
        if(!$(this).is(':checked')){
          $(this).unbind('click');
        }
        else{
          $(this).trigger('click');
        }
      });
      $(this).find('input').attr('name','Select all');
      $('.selectBoxAll').find('#selected-files span').text('Select all');
      setTimeout(function(){$(selectLabel).text(selectedLabVal);}, 20);
  }
  else{
    $('#selected-files').find('input.filled-in').prop('checked', true);
    $('#selected-files').find('label').show();

    $('.fileListSide').find('.card-overlay').removeClass('opc0').addClass('opc1');
      $input = $('.fileListSide .card-overlay').find('input');
      $('#selected-files').find('label').show();
      $input.each(function(){
        if($(this).is(':checked')){
          $(this).unbind('click');
        }
        else{
          $(this).trigger('click');
        }
      });
      $(this).find('input').attr('name','Select none');
      $('.selectBoxAll').find('#selected-files span').text('Select none');
      setTimeout(function(){$(selectLabel).text(selectedLabVal);}, 20);
  }

  updateFCount();

})


// ############
$(document).on('click', '.selectedSec-files', function(e){
  e.stopPropagation();

  var selectText = $(this).find('span');
  var selectLabel = $(this).parent().prev();
  var selectedVal = $(this).find('input').attr('name');
  var selectedLabVal = $(this).find('label').text();
  if(selectedVal == 'Select none'){
    $(this).find('input.filled-in').prop('checked', false);

     $input = $(this).closest('.scWrap').find('.fileCapsule input');
      $input.each(function(){
        if(!$(this).is(':checked')){
          $(this).unbind('click');
        }
        else{
          $(this).trigger('click');
        }
      }); 


      $(this).find('input').attr('name','Select all');
      $(this).find('span').text('Select all');
  }
  else{
    $(this).find('input.filled-in').prop('checked', true);
    $(this).find('label').show();

    $input = $(this).closest('.scWrap').find('.fileCapsule input');
    $input.each(function(){
      if($(this).is(':checked')){
        $(this).unbind('click');
      }
      else{
        $(this).trigger('click');
      }
    });

    $(this).find('input').attr('name','Select none');
    $(this).find('span').text('Select none');
  }

})




// // file select sec all dropdown - 2497
// $(document).on('click', '.fileselectSec-options li a', function(e){
//   var selectedVal = $(this).attr('name');
//   if(selectedVal == 'Select'){
//     $(this).closest('.scWrap').find('input.filled-in').prop('checked', false);
//   }
//   else{
//     $(this).closest('.scWrap').find('input.filled-in').prop('checked', true);
//   }
// });

// $(document).on('click', '.selectSecfile-all', function(e){
//   $input = $(this).closest('.scWrap').find('.fileCapsule input');
//   $input.each(function(){
//     if($(this).is(':checked')){
//       $(this).unbind('click');
//     }
//     else{
//       $(this).trigger('click');
//     }
//   });
//   updateFCount();
// });

// // file select individual -2497
// $(document).on('click', '.selectSecfile-none', function(e){
//   $input = $(this).closest('.scWrap').find('.fileCapsule input');
//   $input.each(function(){
//     if(!$(this).is(':checked')){
//       $(this).unbind('click');
//     }
//     else{
//       $(this).trigger('click');
//     }
//   });  
//   updateFCount();
// });




/* Dropdown select */
$('.order-by').find('li a').click(function(){
  var selectedText = $(this).attr('name');
  that = $(this);
  $(this).parent().parent().parent().parent().find('a.hover-link span').text(selectedText);
  setTimeout(function(){that.closest('.dropdown-contents').removeClass('active');}, 100);
});

$('.relevant-sort').find('li a').click(function(){
  var selectedText = $(this).attr('name');
  that = $(this);
  $(this).parent().parent().parent().parent().find('a.hover-link span').text(selectedText);
  setTimeout(function(){that.closest('.dropdown-contents').removeClass('active');}, 100);
});

$('#search').on('focus', function(){
  $(this).parent().css({'border':'1px solid #399dff','background':'#fff'});
})
$('#search').on('blur', function(){
  $(this).parent().css({'border':'1px solid rgba(0, 0, 0, 0.08)','background':'#f5f5f5'});
})

$('.dpSearch input').on('focus', function(){
  $(this).css({'border-color':'#399dff'});
})

$('.dpSearch input').on('blur', function(){
  $(this).css({'border-color':'rgba(0, 0, 0, 0.08)'});
})

// dropdown seach
function dpSearch() {
  var filter, ul, li, i;
  filter = $(this).val().toUpperCase();

  // if($(this).parents('.tagSearchWrap').length){
  //   $($(this).parents('.dropdown-contents').find('>ul .tag-item')).each(function(){
  //     if ($(this).find('a').text().toUpperCase().indexOf(filter) > -1) {
  //       $(this).css('display','');
  //     } else {
  //       $(this).css('display','none');
  //     }
  //   })
  // }
  // else{
    $($(this).parents('.dropdown-contents').find('>ul > li > label > input + span')).each(function(){
      if ($(this).text().toUpperCase().indexOf(filter) > -1) {
        $(this).parent().parent().css('display','');
      } else {
        $(this).parent().parent().css('display','none');
      }
    })

    $(this).parents('.dropdown-contents').children('ul').find('ul > li > label > input + span').each(function(){
      if($(this).text().toUpperCase().indexOf(filter) > -1){
        $(this).closest('li').css('display','');
        $(this).parents('ul').closest('li').css('display', '');
      } else {
        $(this).closest('li').css('display','none');
      }
    })
  // }

}

$('.dpSearch').on('keyup', 'input', dpSearch);

$('#search').on('focus', function(){
  $(this).parent().css({'border':'1px solid #399dff','background':'#fff'});
})
$('#search').on('blur', function(){
  $(this).parent().css({'border':'1px solid rgba(0, 0, 0, 0.08)','background':'#f5f5f5'});
})


/* Sort icon toggle */
$('.sort').click(function(){
  $(this).find('span').toggleClass('desc');
});

$('.hover-link').off('click');
$('.hover-link label').unbind('click');


/* Category and asset filters */
// var counter = 0;
$('.filter-values').hide();
$('.filter-options ul.dropdown-menu li label input').bind("click",function(e){

  e.stopPropagation();

  $('.filter-values').fadeIn().addClass('active');
  $('.filter-values').find('.filter-item[data-target="save-filters"]').show();

  $(this).parent().toggleClass('selected');

  var selectedVal = $(this).attr('data-filter');

  if(!$(this).parent().parent().find('.secondLevelList').length){

    if($(this).is(':checked')){
      var selectedFilterItem = '<div class=\"filter-item selected-filters\" id="' + selectedVal.replace(/\s/g,'') + '"><i class="fas fa-filter icon-left"></i><span class="filter-text">'+ selectedVal+'</span><a href="#" class=\"remove-filter\"><i class="material-icons icon-right">clear</i></a></div>';
      $('.filter-values').prepend(selectedFilterItem);

    }
    else{
      $(this).parents().find('.filter-values').find('#' + selectedVal.replace(/\s/g,'')).remove();
    }
    // console.log('fasdfas',$(this).parents('.firstLevelList').find('.secondLevelList label input').length,$(this).parents('.firstLevelList').find('.secondLevelList label input:checked').length);
    if($(this).parents('.firstLevelList').find('.secondLevelList label input').length == $(this).parents('.firstLevelList').find('.secondLevelList label input:checked').length){
      $(this).parents('.firstLevelList').find('>label>input').prop('checked', true);
    }
    else{
      $(this).parents('.firstLevelList').find('>label>input').prop('checked', false);
    }
  }
  else{
    if($(this).is(':checked')){
      $(this).parent().parent().find('.secondLevelList label input').each(function(){
        if(!$(this).is(':checked')){
          $(this).trigger('click');
        }
      })
    }
    else{
      $(this).parent().parent().find('.secondLevelList label input').each(function(){
        if($(this).is(':checked')){
          $(this).trigger('click');
        }
      });
    }
  }
  
  setTimeout(assetMargin,210);

  if($('.filter-item.selected-filters').length <= 0){
    $('.filter-values').fadeOut(150);
  }

});


function assetMargin(){
  var $navHeight = $('.topNavBar').height();
  var $filterValHeight = $('#filters').height();
  //var $filterValHeight = parseInt($('.filter-values').innerHeight());
  //var $assetsMargin = parseInt($('#assets').css('margin-top'));
  var $newMargin =$navHeight + $filterValHeight;
  // console.log($newMargin+'px');
  $('#assets').css('margin-top', $newMargin+'px');
}

$('.clear-filters').click(function(){
  $('.filter-options ul.dropdown-menu li > label > input:checked').prop('checked', false);
  $('.selected-filters').remove();
  $('.filter-values').removeClass('active').fadeOut(150);

  $('.filter-options #countrySelect').find('.firstLevelList > label > input').each(function(){
    $(this).prop('checked',false);
    })

  $('.filter-options #countrySelect').find('.secondLevelList > label > input').each(function(){
    $(this).prop('checked',false);
    })

  setTimeout(assetMargin,200);
});

$(document).on("click",".filter-item.selected-filters .remove-filter",function(){
  $this = $(this);
  $this.parent().remove();
  var filterVal = $this.parent().find('.filter-text').text();
  // console.log(filterVal);
  $('.filter-options').find('input[data-filter="'+ filterVal + '"]').parent().trigger('click');
  setTimeout(assetMargin,200);
  if($('.filter-item.selected-filters').length <= 0){
    $('.filter-values').fadeOut(150);
  }

  $(document).find('.filter-options .countrySelectUL .firstLevelList > label.selected > input').each(function(){
    var that = $(this);
    $(this).parent().next().find('.secondLevelList label input').each(function(){
      if(!$(this).is(':checked')){
        that.prop('checked', false);
      }
    })
  })

});

$('#save-filter-info').click(function(){
  $('.filter-values').find('.filter-item[data-target="save-filters"]').hide();
  assetMargin();
});



// report filter
$('.reportsFilter ul.dropdown-menu li label input').bind("click",function(e){

  e.stopPropagation();
  $('#reportsFilterDisp').slideDown(150).addClass('active');
  $(this).parent().toggleClass('selected');
  var selectedVal = $(this).attr('data-filter');

  if(!$(this).parent().parent().find('.secondLevelList').length){

    if($(this).is(':checked')){
      var selectedFilterItem = '<div class=\"rFilter-item selected-filters\" id="' + selectedVal.replace(/\s/g,'') + '"><i class="fas fa-filter icon-left"></i><span class="filter-text">'+ selectedVal+'</span><a href="#" class=\"remove-filter\"><i class="material-icons icon-right">clear</i></a></div>';
      $('.rFilterValues').prepend(selectedFilterItem);
    }
    else{
      $(this).parents().find('.reportsFilter').find('#' + selectedVal.replace(/\s/g,'')).remove();
    }
    // console.log('fasdfas',$(this).parents('.firstLevelList').find('.secondLevelList label input').length,$(this).parents('.firstLevelList').find('.secondLevelList label input:checked').length);
    if($(this).parents('.firstLevelList').find('.secondLevelList label input').length == $(this).parents('.firstLevelList').find('.secondLevelList label input:checked').length){
      $(this).parents('.firstLevelList').find('>label>input').prop('checked', true);
    }
    else{
      $(this).parents('.firstLevelList').find('>label>input').prop('checked', false);
    }
  }
  else{
    if($(this).is(':checked')){
      $(this).parent().parent().find('.secondLevelList label input').each(function(){
        if(!$(this).is(':checked')){
          $(this).trigger('click');
        }
      })
    }
    else{
      $(this).parent().parent().find('.secondLevelList label input').each(function(){
        if($(this).is(':checked')){
          $(this).trigger('click');
        }
      });
    }
  }

  if($('.rFilter-item.selected-filters').length <= 0){
    $('#reportsFilterDisp').slideUp(150);
  }

  advFilterCount();
  cntryFilterCount();

  $('#mediaTypeUl').getNiceScroll().resize();
  $('#assetType2Ul').getNiceScroll().resize();
  $('#category2Ul').getNiceScroll().resize();
  

$(document).on('click', function(){
  setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 200);
})
});



$(document).on("click",".rFilter-item.selected-filters .remove-filter",function(){
  $this = $(this);
  $this.parent().remove();
  var filterVal = $this.parent().find('.filter-text').text();

  // console.log(filterVal);
  $('.reportsFilter').find('input[data-filter="'+ filterVal + '"]').parent().trigger('click');
  if($('.rFilter-item.selected-filters').length <= 0){
    $('#reportsFilterDisp').slideUp(150);
  }

  $(document).find('.reportsFilter .countrySelectUL .firstLevelList > label.selected > input').each(function(){
    var that = $(this);
    $(this).parent().next().find('.secondLevelList label input').each(function(){
      if(!$(this).is(':checked')){
        that.prop('checked', false);
      }
    })
  })


});


$('.rClear-filters').click(function(){
  $('.reportsFilter ul.dropdown-menu li label input:checked').prop('checked', false);
  $('.selected-filters').remove();
  $('#reportsFilterDisp').slideUp(150).removeClass('active');

  $('.reportsFilter #countrySelect').find('.firstLevelList > label > input').each(function(){
    $(this).prop('checked',false);
    })

  $('.reportsFilter #countrySelect').find('.secondLevelList > label > input').each(function(){
    $(this).prop('checked',false);
    })
advFilterCount();
});

/* Modal */

$('.modal').modal({
  preventScrolling: true,
});


$('#batchUpload').modal({
  preventScrolling: true,
  dismissible: false,
  startingTop: '10%',
  onOpenStart: function(){
    $('#batchuploadFormTab').tabs({});

    $('.bulkUploadCSelect').formSelect({
                              dropdownOptions :{
                                constrainWidth:true,
                                coverTrigger: false,
                                alignment: 'left',
                                closeOnClick: false,
                                hover:false,
                              }
                            });


var myDropzone2 = new Dropzone('#myFile', {

  previewTemplate:document.querySelector('#tpl').innerHTML,
  previewsContainer: ".fileBatchCapwWr",
  uploadMultiple: false,

 init: function() {

    var elemID = '#'+(this.element.id);

    this.on("addedfile", function(file) {
      $(elemID).hide();
      // var attr = $(elemID).attr('multiple');
      //     alert(attr);

      // //hiding dropzone for 'single file' upload forms after one file is selected
      // if (typeof attr == typeof undefined || attr == false) {        
      //     // $(elemID).parent().find('.fileBatchCapwWr').empty();
      //   }
      
      $(file.previewElement).find('.fileName').attr('data-tooltip',file.name).tooltip();
      $('#asset-detail .uploadFileForm').getNiceScroll().resize();
    });

    this.on('uploadprogress', function(file, progress, bytesSent){
      // console.log(file);
      $(file.previewElement).find('.status').text('Uploading');
      $(file.previewElement).find('.statusIcon').html('autorenew');
      $(file.previewElement).find('i.close').unbind().on('click', function(){        
        $(this).parent().parent().remove();
        $(elemID).show();
        $('#asset-detail .uploadFileForm').getNiceScroll().resize();
      })
    })

    this.on('success', function(file){
      $(file.previewElement).find('.status').text('Uploaded');
      $(file.previewElement).find('.statusIcon').html('check_circle');
      $(file.previewElement).find('.action').text('VIEW');
    })

    this.on('error', function(file, errorMessage, xhr){
      $(file.previewElement).find('.status').text('Error uploading');
      $(file.previewElement).find('.statusIcon').html('error');
      $(file.previewElement).find('.action').text('RETRY');
      // console.log(errorMessage);
      // console.log(xhr);    
      $(file.previewElement).find('i.close').unbind().on('click', function(){      
        $(this).parent().parent().remove();
        $(elemID).show();
        $('#asset-detail .uploadFileForm').getNiceScroll().resize();
      })
    })

  }
});


    setTimeout(function(){
      $('#batchUpload').parent().find('input[type="checkbox"]').attr('class','filled-in');
      setTimeout(function(){$("#batchUpload input.dropdown-trigger").each(function(){
        var name = 'Select country';
        $(this).attr('placeholder', 'Choose '+ name +'');
        })}, 30);
    }, 200);
  },
  onCloseEnd:function(){
    $('#myFile').parent().find('.fileBatchCapwWr').empty();
    $('#myFile').show();
}
});

$('.modal.fullscreen').modal({
  preventScrolling: true,
  startingTop: 0,
  endingTop: 0,
  dismissible: false,
  onOpenStart: function(){$('html').css({'overflow':'hidden'});
    $('.modal.fullscreen').animate({'opacity':'1'}, 300);
  },
  onCloseEnd : function(){
    $('html').css({'overflow':'hidden'});
    $('.fileBatchCapwWrPm').empty();
    $('.fileBatchCapwWrSc').empty();
  }
});

var setScrolTimer
$('#uploadFileForm1').niceScroll().scrollstart(function(){
  setScrolTimer = setInterval(function(){$('.chBoxWrSc').each(function(){
    $(this).getNiceScroll().resize();
  })
}, 10)})
$('#uploadFileForm1').niceScroll().scrollend(function(){
  $('.chBoxWrSc').each(function(){
    $(this).getNiceScroll().resize();
  })
  clearInterval(setScrolTimer);
})

    
  $(document).on('mouseover', '#asset-detail .uploadFileForm, #assetFilePopup .uploadFileForm', function(){
     $('#asset-detail .uploadFileForm').getNiceScroll().resize();
     $('#assetFilePopup .uploadFileForm').getNiceScroll().resize();
     $(window).trigger('resize');
  })
/* Asset Cards */


$('.add-wishlist i').on('click', function(e){
  $(this).toggleClass('active');
  if ($(this).text() == "favorite_border")
      $(this).text("favorite");
  else
      $(this).text("favorite_border");
});

function dismissModal(){
  $('.modal.fullscreen').modal({
    dismissible: true
  });
}



$('.add-wishlist').on('click', function(e){
  e.stopPropagation();
  $(this).toggleClass('active');
});

//to prevent asset view action - 2497
$('.card-action').on('click', function(e){
  e.stopPropagation();
});


// modal close and open style - 2497
$('.modal-trigger').on('click', function(e){
  var targ = '#'+ $(this).attr('data-target');
  if($(targ).hasClass('fullscreen')){
    e.stopPropagation();
    $(targ).css({'opacity':'0','z-index': '1030'});
    $(targ).css({'display':'block'});
    $(targ).animate({'opacity':'1'}, 300);
  }
})

$('.modal-close.full').on('click', function(e){
  e.stopPropagation();
  var that = $(this);
  that.closest('.modal.fullscreen').animate({'opacity':'0'}, 300);
  setTimeout(function(){that.closest('.modal.fullscreen').css({'display':'none'});}, 310);
})

$('.modal.sub').on('click', '.modal-close',function(e){
  e.stopPropagation();
  var that = $(this);
  that.closest('.modal.sub').animate({'opacity':'0'}, 300);
  setTimeout(function(){that.closest('.modal.sub').css({'display':'none'});}, 310);
})


// create asset button click action - 2497
$('#createAssetAnchor').on('click', function(){
  $("[name='createAssetInput[]'").val(null);
  $("[name='createAssetInput[]'").trigger('click');
})

// file uploaded action - 2497
$("[name='createAssetInput[]'").on('change', function(){
  // console.log($("[name='createAssetInput[]'")[0].files);
  // $("#assetFilePopup").show();
  //$('#assetFilePopup').modal('open');
    $('.afpThumbnails').empty();
    $('#uploadDummy').children().clone().appendTo('.afpThumbnails');
    $('#assetFilePopup').css({'opacity':'0','z-index': '9999'});
    $('#assetFilePopup').css({'display':'block'});
    $('#assetFilePopup').animate({'opacity':'1'}, 300);
    $('html').css({'overflow':'hidden'});
    $(document).find('#selectfile-all').trigger('click');
    $(".fileDetailSide h5").html('Uploading Files');
})


$('#assetFilePopup .fileListSide').on('click','.card-overlay label', function(){
  if($(this).find('input').is(':checked')){
    $(this).parent().parent().addClass('active');
  }
  else{
    $(this).parent().parent().removeClass('active');
  }
  updateFCount();;
});

$('#assetFilePopup .modal-close .material-icons').on('click', function(){
  $('html').css({'overflow':'auto'});
})
// remove individual file
$('#assetFilePopup').on('click', '.clearFile .clear', function(){
  $(this).parent().parent().parent().remove();
  updateFCount();
})


// move next carousel


// function cLogPos(){
//     if(!$(this).hasClass('set')){
//       var ot = $('#assets-slider').offset();
//       $('.change-logs').offset(ot);
//       $('.change-logs').width($('#assets-slider').width());
//       var ct  = $('#assets-slider').height()
//       $('.change-logs').height(ct);
//       var bt = window.innerHeight - (ot.top + ct);
//       $('.change-logs').css({'bottom': bt,'top':'auto'})
//       $(this).addClass('set');
//       }
// }

// cLogPos();

// $(window).on('resize', function(){
//     $('#changelogs-link').removeClass('set');
//     cLogPos();
//   }
// );

// $(document).on('click','#skipButton', function(){
//   $('#batchuploadFormTab > li > a').removeClass('active');
//   $('#batchuploadFormTab').find('[href="#FTPcredentials"]').addClass('active');
//   $('#DownloadTemplate').removeClass('active').hide();
//   $('#FTPcredentials').addClass('active').show();
// })
// $(document).on('click','#nextButton', function(){
//   $('#batchuploadFormTab > li > a').removeClass('active');
//   $('#batchuploadFormTab').find('[href="#StartBatchUpload"]').addClass('active');
//   $('#FTPcredentials').removeClass('active').hide();
//   $('#StartBatchUpload').addClass('active').show();
// })

// Change logs - slide up and down
var changeLogs = $('.change-logs');
$('#changelogs-link, .hide-logs').click(function(event){

  var elem = $('#assets-slider');
  var instance = M.Carousel.getInstance(elem);

  if(instance){
    instance.destroy();
  }
  else{
    $('#assets-slider').carousel({
      fullWidth: true,
      indicators: false,
      duration: 50
    })
  }

  // cLogPos();
  event.preventDefault();
  if (changeLogs.is( ":visible" )){
    // Hide - slide up.
    changeLogs.slideUp( 150 );
    $('#changelogs-link').removeClass('active');

    //hide arow button
    $('.notTab').fadeOut(150);
  } else {
    // Show - slide down.
    changeLogs.slideDown( 150 );
    $('#changelogs-link').addClass('active');

    //to fix long blue line issue
    var elem = $('#activityTabs');
    var instance = M.Tabs.getInstance(elem);
    instance.select('changeLogs');

    //show arow button
    $('.notTab').fadeIn(150);
  }
});


//file upload checkbox - 2497
$('.multiDropdownTag.dropdown-trigger').dropdown({
  closeOnClick:false,
  coverTrigger: false,
  constrainWidth: true
});

$('.uploadFileForm>.collapsible').collapsible({

    accordion : false ,
  onOpenEnd: function(){$('#asset-detail .uploadFileForm').getNiceScroll().resize();}  
})

//adding selectd checkbox tags while opening - 2497
function checkBoxTag(){
$('.uploadFileForm .checkTag').find('.chipsWrap').html('');
$('.uploadFileForm .checkTag').find('.selectCheckbox input[type="checkbox"]').each(function(){
  if($(this).is(':checked')){
    currentData = $(this).parent().parent().parent().parent().find('.chipsWrap').html();
    var val = $(this).next('span').text();
    val = '<div class="chip"><i class="material-icons">check</i>'+val+'<i class="material-icons close">close</i></div>';
    $(this).parent().parent().parent().parent().find('.chipsWrap').html(currentData+val);
  }
})
}
checkBoxTag();


//adding/removing clicked checkbox tags - 2497
$('.uploadFileForm .checkTag').on('click', '.selectCheckbox input[type="checkbox"]', function(){
  checkBoxTag();

  var avail = 0;
  var that = $(this);
  var parent = $(this).parents().find('.checkTag.active').find('.multiDropdownTag');
  var field = parent.attr('data-name');
  $('#assetFilePopup .card-content [data-nametag]').each(function(){
    if($(this).attr('data-nametag') == field) avail = 1;
  })

  if(avail){
    if(parent.attr('data-render') == "checkbox" || parent.attr('data-render') == "radio"){
      var val;
      if(!$(this).parent().find('.filled-in').hasClass('active')) {
        val = $(that).parent().find('.listItem').text();
        $('#assetFilePopup .card-content [data-nametag="'+field+'"]').find('[value="'+val+'"]').prop('selected',true);
      }
      else{
        val = $(that).parent().find('.listItem').text();
        $('#assetFilePopup .card-content [data-nametag="'+field+'"]').find('[value="'+val+'"]').prop('selected', false);
      }
    }
  }
  $('#assetFilePopup .card-content [data-nametag="'+field+'"]').formSelect({
      dropdownOptions :{
        constrainWidth:true,
        coverTrigger: false,
        alignment: 'left',
        closeOnClick: false,
        hover:false
      }
    });


redoDd();

})


$('#uploadTag').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
    onChipAdd:function(){
      changeIcons('#uploadTag');
      if($('.indTagsChips').length){chipCopy('#uploadTag','.indTagsChips')};
    }
  });


// adding options to asset upload individual - 2497
$('.collapHeadIcon').on('click', function(e){
  e.stopPropagation();

  var avail = 0;
  var parent = $(this).parent();
  var field = parent.attr('data-name');
  var options = [];
  var template;
  var chevrt = '<span class="chevrt"><i class="material-icons">chevron_right</i></span>';

  $('.cardContentSubtitle').show();

  $('#assetFilePopup .card-content [data-nametag]').each(function(){
    if($(this).attr('data-nametag') == field) avail = 1;
  })

if(!avail){

  if(parent.attr('data-render') == "checkbox" || parent.attr('data-render') == "radio"){
    options = [];
    var index = 0;
    $('#assetFilePopup #'+ parent.attr('data-target') +' .listItem').each(function(){
      var chk = '';
      if($(this).parent().find('.filled-in').hasClass('active')) chk='selected="selected"';
      options[index] = [$(this).text(),chk];
      index++;
    })
  }

    switch (field){

      case 'Media type':
        template = $('<div></div>');
        template.attr('class', 'input-field col s12 clearPad');
        select = $('<select data-nametag="'+field+'"></select>');
        select.attr('multiple', 'multiple');
        var item = '';
        for(i=0;i<options.length;i++){
            item = item + '<option value="'+options[i][0]+'" '+options[i][1]+'>'+options[i][0]+'</option>';
          }
        select.html(item);
        template.html(select);
        break;

      case 'Asset type':
        template = $('<div></div>');
        template.attr('class', 'input-field col s12 clearPad');
        select = $('<select data-nametag="'+field+'"></select>');
        select.attr('multiple', 'multiple');
        var item = '';
        for(i=0;i<options.length;i++){
            item = item + '<option value="'+options[i][0]+'" '+options[i][1]+'>'+options[i][0]+'</option>';
          }
        select.html(item);
        template.html(select);
        break;

      case 'Category':
        template = $('<div></div>');
        template.attr('class', 'input-field col s12 clearPad');
        select = $('<select data-nametag="'+field+'"></select>');
        select.attr('multiple', 'multiple');
        var item = '';
        for(i=0;i<options.length;i++){
            item = item + '<option value="'+options[i][0]+'" '+options[i][1]+'>'+options[i][0]+'</option>';
          }
        select.html(item);
        template.html(select);
        break;

      case 'Country':
        template = $('<div></div>');
        template.attr('class', 'input-field col s12 clearPad');
        select = $('<select data-nametag="'+field+'"></select>');
        var item = '';
        for(i=0;i<options.length;i++){
            item = item + '<option value="'+options[i][0]+'" '+options[i][1]+'>'+options[i][0]+'</option>';
          }
        select.html(item);
        template.html(select);
        break;

      case 'Description':
        var tVal = $(this).parent().next().find('textarea').val();
        template = '<div class="input-field noTop"><span style="line-height:0;display:block;clear:both"><textarea data-nametag="'+field+'" name="fileUploadDesc" placeholder="description goes here" class="materialize-textarea fileUploadDesc" data-length="120">'+tVal+'</textarea></div>';
        break;

      case 'Tags':
        template = '<span class="indTags"><span><div class="chips dMod indTagsChips" data-nametag="Tags" id=""></div></span></span>';
        break;
    }

    $('#assetFilePopup .card-content').append(template);

    setTimeout(function(){$("#assetFilePopup .card-content input.dropdown-trigger").each(function(){
      var name = $(this).parent().find('select').attr('data-nametag').toLowerCase();
      $(this).attr('placeholder', 'Choose '+ name +'');
    })}, 30);

    $('select[data-nametag]').formSelect({
      dropdownOptions :{
        constrainWidth:true,
        coverTrigger: false,
        alignment: 'left',
        closeOnClick: false,
        hover:false
      }
    });

    setTimeout(function(){
      $('select[data-nametag]').parent().find('input[type="checkbox"]').attr('class','filled-in');

      $('.card').each(function(){
        $(this).find('.select-wrapper').each(function(){
        if(!$(this).find('.liWrap').length){
          $(this).find('ul').append('<span class="liWrap"></span>');
          $(this).find('ul').append('<span class="arrow-up"></span>');
          $(this).find('li').each(function(){$(this).appendTo($(this).parent().find('.liWrap'))});
          $(this).find('ul').append('<div class="dpTitle"><span class="dpTitleSp"></span><span class="dpRestore right"></span></div><div class="dpFooter"><a class="btn btn-small btn-primary">OK</a></div>');
          $(this).find('.dpTitleSp').text($(this).find('[data-nametag]').attr('data-nametag'));
          }
        })

      $('.liWrap').niceScroll({
        autohidemode:true,
        cursorcolor:"rgba(0,0,0,1)",
        cursoropacitymax:1,
        cursorwidth:3,
        cursorborder:"0px solid rgba(0,0,0,0.8)",
        cursorborderradius:"8px",
        background:"#DDD",
        mousescrollstep: '20',
        horizrailenabled:false
      });

    $('.indTags > span').niceScroll({
      autohidemode:false,
      cursorcolor:"rgba(0,0,0,1)",
      cursoropacitymax:1,
      cursorwidth:3,
      cursorborder:"0px solid rgba(0,0,0,0.8)",
      cursorborderradius:"8px",
      background:"#DDD",
      mousescrollstep: '20',
      horizrailenabled:false
    });

      })



    }, 200);

    setTimeout(function(){$('select[data-nametag]').parent().append(chevrt)}, 20);

    $('.indTagsChips').chips({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
      onChipAdd:function(){
          changeIcons('.indTagsChips');

          $('.indTags > span').niceScroll({
            autohidemode:false,
            cursorcolor:"rgba(0,0,0,1)",
            cursoropacitymax:1,
            cursorwidth:3,
            cursorborder:"0px solid rgba(0,0,0,0.8)",
            cursorborderradius:"8px",
            background:"#DDD",
            mousescrollstep: '20',
            horizrailenabled:false
          });
        },
      onChipDelete:function(){
          $('.indTags > span').niceScroll({
            autohidemode:false,
            cursorcolor:"rgba(0,0,0,1)",
            cursoropacitymax:1,
            cursorwidth:3,
            cursorborder:"0px solid rgba(0,0,0,0.8)",
            cursorborderradius:"8px",
            background:"#DDD",
            mousescrollstep: '20',
            horizrailenabled:false
          });
        }
    });

    chipCopy('#uploadTag','.indTagsChips');

  $(this).attr('src','assets/images/icons/view-icn.png');
  $(this).css('opacity','1'); 
  $(this).addClass('active');
}
else{
  $("[data-nametag='"+field+"']").parent().parent().remove();
  $(this).attr('src','assets/images/icons/view-slash-icn.png');
  $(this).removeClass('active');

   if($("[data-nametag]").length <= 0) $('.cardContentSubtitle').hide();

}

})




function redoDd(){

  var chevrt = '<span class="chevrt"><i class="material-icons">chevron_right</i></span>';

  setTimeout(function(){$("#assetFilePopup .card-content input.dropdown-trigger").each(function(){
        var name = $(this).parent().find('select').attr('data-nametag').toLowerCase();
        $(this).attr('placeholder', 'Choose '+ name +'');
      })}, 30);

      $('select[data-nametag]').formSelect({
        dropdownOptions :{
          constrainWidth:true,
          coverTrigger: false,
          alignment: 'left',
          closeOnClick: false,
          hover:false
        }
      });

    setTimeout(function(){
      $('select[data-nametag]').parent().find('input[type="checkbox"]').attr('class','filled-in');

      $('.card').each(function(){
        $(this).find('.select-wrapper').each(function(){
        if(!$(this).find('.liWrap').length){
          $(this).find('ul').append('<span class="liWrap"></span>');
          $(this).find('ul').append('<span class="arrow-up"></span>');
          $(this).find('li').each(function(){$(this).appendTo($(this).parent().find('.liWrap'))});
          $(this).find('ul').append('<div class="dpTitle"><span class="dpTitleSp"></span><span class="dpRestore right"></span></div><div class="dpFooter"><a class="btn btn-small btn-primary">OK</a></div>');
          $(this).find('.dpTitleSp').text($(this).find('[data-nametag]').attr('data-nametag'));
          }
        })

      $('.liWrap').niceScroll({
        autohidemode:true,
        cursorcolor:"rgba(0,0,0,1)",
        cursoropacitymax:1,
        cursorwidth:3,
        cursorborder:"0px solid rgba(0,0,0,0.8)",
        cursorborderradius:"8px",
        background:"#DDD",
        mousescrollstep: '20',
        horizrailenabled:false
      });

    $('.indTags > span').niceScroll({
      autohidemode:false,
      cursorcolor:"rgba(0,0,0,1)",
      cursoropacitymax:1,
      cursorwidth:3,
      cursorborder:"0px solid rgba(0,0,0,0.8)",
      cursorborderradius:"8px",
      background:"#DDD",
      mousescrollstep: '20',
      horizrailenabled:false
    });

      })

    }, 200);

    setTimeout(function(){$('select[data-nametag]').parent().append(chevrt)}, 20);
}





$(document).on('click', '.select-wrapper a.btn', function(){
  $(this).parents('.select-wrapper').trigger('click');
})

$(document).on('click', '.select-wrapper', function(e){
  var elem = $(this).find('select[data-nametag]');
  var cardSelectDp = M.FormSelect.getInstance(elem);
  setTimeout(function(){
    if(cardSelectDp.dropdown.isOpen){
      elem.parent().addClass('active');
  }
  else{
      elem.parent().removeClass('active');
  }
}, 20);
})

// var cardSelectDp = M.FormSelect.getInstance($('select[data-nametag]'));
// console.log(cardSelectDp.dropdown.isOpen);
// if(cardSelectDp.dropdown.isOpen){alert()}


$('.uploadFileForm').on('keyup', '.fileUploadDesc', function(){
  var tVal = $(this).val();
  $('#assetFilePopup .card-content .fileUploadDesc').text(tVal);
})

function chipCopy(srcChip, trgChip){
  var eleSrc = $(srcChip);
  var src = M.Chips.getInstance(eleSrc);

  $('#assetFilePopup .card-content '+trgChip).each(function(){
    var trg = M.Chips.getInstance($(this));
    $.each(src.chipsData, function(index, item){
      trg.addChip({
      tag: item.tag
      });
    });
  })
}



$('#assets-slider').carousel({
  fullWidth: true,
  indicators: false,
  duration: 50
});


$('#activityTabs').tabs({});
$('#sideNavTab').tabs({});

//disable collapsible -2497
$('.checkTag').on('click', '.no-collapsible', function (e) {
    e.stopPropagation();
});

//enable editing - 2497
$('.editIcon').on('click', function(){
  $(this).hide();
  $('.infoIcon').show();
  // $('.multiDropdownTag.collapsible-header.nc').append('<i class="material-icons right rotate">keyboard_arrow_right</i>');
  $('.multiDropdownTag.collapsible-header.nc').removeClass('no-collapsible');
  $('.multiDropdownTag.collapsible-header.nc').css({'background':'#ffffa9'});
  setTimeout(function(){$('.multiDropdownTag.collapsible-header.nc').css({'background':'white'})}, 200);
  $('#asset-detail .uploadFileForm .fileUploadDesc').prop("disabled", false);
  $('input.assetNameUpl').prop('disabled',false);

  // $(".primaryFiles .fileCapsule").find("input[data-origin]").each(function(){
  //         $(this).prop('disabled', false);
  //    });
  // $(".secondaryFiles .fileCapsule").find("input[data-bind]").each(function(){
  //         $(this).prop('disabled', false);
  //       });

  $(".packageSelect").formSelect('destroy');
  // $('.packageSelect').prop('disabled', false);
  $('.packageSelect').formSelect({
  dropdownOptions :{
    coverTrigger: false,
    alignment: 'left',
    closeOnClick: false,
    hover:false
    }
  });
  
  var elem = $('#asset-detail .uploadFileForm > .collapsible');
  var instance = M.Collapsible.getInstance(elem);
  instance.open(0);

  // $('.addFiles').removeClass('disabled');
  $('#asset-detail .uploadFileForm').getNiceScroll().resize();

  $('#saveDetails').prop('disabled', false);
})


//disable editing - 2497
$('.infoIcon').on('click', function(){
  $(this).hide();
  $('.editIcon').show();
  $('.multiDropdownTag.collapsible-header.nc i').remove();
  $('.multiDropdownTag.collapsible-header.nc').addClass('no-collapsible');
  $('#asset-detail .uploadFileForm .fileUploadDesc').prop("disabled", true);
  $('input.assetNameUpl').prop('disabled',true);
  $(".packageSelect").formSelect('destroy');
  // $('.packageSelect').prop('disabled', true);
  $('.packageSelect').formSelect({
  dropdownOptions :{
    coverTrigger: false,
    alignment: 'left',
    closeOnClick: false,
    hover:false
    }
  });

  // $('.addFiles').addClass('disabled');
  $('#asset-detail .uploadFileForm').getNiceScroll().resize();

  $('#saveDetails').prop('disabled', true);

})

//enabling chips - 2497
$('#editChips').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
    onChipAdd: function(){changeIcons('#editChips')}
  });

function changeIcons(elem){
  $(elem).find('.chip').each(function(){
      // $(this).find('.material-icons').removeClass('close');
      // $(this).find('.material-icons').removeClass('close').addClass('left').html('check');
      if(!$(this).find('.material-icons.left').length){
        $(this).append('<i class="material-icons left">check</i>');
      }

  })
}

//package select dropdown - 2497
$('.packageSelect').formSelect({
  dropdownOptions :{
    coverTrigger: false,
    alignment: 'left',
    closeOnClick: false,
    hover:false
  }
});

// var sHtml = '';
// $(".packageSelect").formSelect('destroy');
//  if($(this).is(':checked')){
//       '<option value="1" data-package="'+primary1+'">'+primary1+'</option>'
//   }


//dynamically adding chips
// var myData = {
//     tag: 'abcd'
//   };

// var elem = $('#editChips');
// var instance = M.Chips.getInstance(elem);

// instance.addChip(myData);

$('.deleteIcon, .mailIcon').dropdown({
  hover: false,
  constrainWidth: false,
  coverTrigger: false,
  closeOnClick: false,
  alignment: 'left'
});


$('.eDeleteCancel').on('click', function(){
  $('#eDeleteConfirm').hide();
})

$('.eMailCancel').on('click', function(){
  $('#eMailPopup').hide();
})

//building primay file capsules
$('#assets-slider .carousel-item').each(function(index){
    var templateFi = '';
    var templateSi;
    var selectBtn;
    var PrimaryName = $(this).find('.assetName').text();
    var src = '';
    var nod = $(this).find(':first-child');
    var active = null;

    if($(this).hasClass('active')) active = 'active'; else active = '';

    switch(nod.prop('nodeName')){
      case 'IMG' :
        src = nod.attr('src');
        break;
      case 'VIDEO' :
        src = 'assets/images/logos/video-icon.png';
        // src = nod.find('source').attr'src';
        break;
      case 'EMBED' :
        // src = nod.attr('src');
        src = 'assets/images/logos/pdf-icon.png';
        break;
      default:

    }

    templateFi = '<div class="fileCapsule '+active+'">\
        <div class="homeIconWrapper left '+active+'">\
        <div></div>\
        </div>\
        <label>\
          <input type="checkbox" class="filled-in" data-origin="'+PrimaryName+'"/>\
          <span></span>\
        </label>\
        <div class="imgWrapper"><img src="'+src+'"></div>\
        <div class="filenameWrapper">\
          <p class="fnTitle">'+PrimaryName+'</p>\
          <p class="fnInfo">700 x 333 px | 101 KB</p>\
        </div>\
        <div class="expand material-icons">add_circle_outline\
        </div>\
        <ul class="scWrap scWrap'+index+'">\
        </ul>\
    </div>';

    templateSecAd = '<div class="btn btn-full addtnlBtn">Additional files<span class="active badge">3</span><div class="selectFileAll right"><a class="hover-link selectedSec-files" href="#" data-target="fileselectSec-options'+index+'" id="selectedSec-files'+index+'"><input class="filled-in" type="checkbox" name="Select all"><span>Select all</span><label></label></a></div></div>';
    // templateSecAd = '<div class="btn btn-full addtnlBtn">Additional files <span class="active badge">3</span><div class="selectFileAll right"><div class="dropdown right"><a class="hover-link dropdown-trigger" href="#" data-target="fileselectSec-options'+index+'" id="selectedSec-files'+index+'"><input class="filled-in" type="checkbox"><span><i class="material-icons large">arrow_drop_down</i></span></a><div class="dropdown-content dropdown-contents fileselectSec-options" id="fileselectSec-options'+index+'"><ul class="dropdown-list" tabindex="0"><span class="arrow-up"></span><li><a href="#" name="All Files" class="selectSecfile-all"><span>Select all</span><label>3</label></a></li><li><a href="#" name="Select" class="selectSecfile-none"><span>Select none</span></a></li></ul></div></div></div></div>';

    templateSiPs = '<li class="fileCapsule valign-wrapper">\
        <label>\
          <input type="checkbox" class="filled-in" data-bind="myimage.jpg" />\
          <span></span>\
        </label>\
        <div class="imgWrapper"><span class="psd"></span></div>\
        <div class="filenameWrapper"><p class="fnTitle active">mypsfile.psd</p><p class="fnInfo">Size: 101 KB</p></div>\
     </li>';

    templateSiAi = '<li class="fileCapsule valign-wrapper">\
        <label>\
          <input type="checkbox" class="filled-in" data-bind="myimage.jpg" />\
          <span></span>\
        </label>\
        <div class="imgWrapper"><span class="ai"></span></div>\
        <div class="filenameWrapper"><p class="fnTitle active">myvectorfile.ai</p><p class="fnInfo">Size: 101 KB</p></div>\
     </li>';

    templateSiPdf = '<li class="fileCapsule valign-wrapper">\
        <label>\
          <input type="checkbox" class="filled-in" data-bind="myimage.jpg" />\
          <span></span>\
        </label>\
        <div class="imgWrapper"><span class="pdf"></span></div>\
        <div class="filenameWrapper"><p class="fnTitle active">mypfdfile.pdf</p><p class="fnInfo">Size: 101 KB</p></div>\
     </li>';

    templateSiBtn = '<div class="fileBatchCapwWrSc'+index+'"></div>\
     <button id="addFilesSec'+index+'" action="assets/uploads" type="button" method="post" enctype="multipart/form-data" multiple="" class="btn addFiles  btn-dotted dz-clickable">\
      <i class="material-icons">cloud_upload</i>\
      &nbsp;&nbsp;ADD ADDITIONAL FILES\
      <div class="dz-message"></div>\
    </button>';


  switch(index){
    case 0 : templateSi = templateSecAd+templateSiPs+templateSiAi+templateSiPdf+templateSiBtn; break;
    case 1 : templateSi = templateSecAd+templateSiPs+templateSiBtn; break;
    case 2 : templateSi = templateSecAd+templateSiAi+templateSiPdf+templateSiBtn; break;
  }

  $('.uploadFileForm .collapsible-body.primaryFiles .pmWrap').append(templateFi);
  $('.uploadFileForm .collapsible-body.primaryFiles .scWrap'+index).append(templateSi);
  $('.uploadFileForm .collapsible-body.primaryFiles .scWrap'+index+'::before').height(($('.uploadFileForm .collapsible-body.primaryFiles .scWrap'+index+' li').length-2)*63.1);


  $('.addtnlBtn .dropdown-trigger').dropdown();


  // add secondary files dropzone options - 2497
  // addFilesSec is the id of dropzone
  var dpzone = '#addFilesSec'+index;
  //alert(dpzone);
  var abbb = String('.fileBatchCapwWrSc'+index);
  setTimeout(function(){

  var myDropzone = new Dropzone('#addFilesSec'+index, {

    previewTemplate:document.querySelector('#tpl').innerHTML,
    previewsContainer: abbb,
   init: function() {

      elemID = '#'+(this.element.id);
      this.on("addedfile", function(file) {
        var attr = $(elemID).attr('multiple');

        //hiding dropzone for 'single file' upload forms after one file is selected
        if (typeof attr == typeof undefined || attr == false) {        
            // $(elemID).parent().find('.fileBatchCapwWr').empty();
            $(elemID).hide();
          }
        
        $(file.previewElement).find('.fileName').attr('data-tooltip',file.name).tooltip();
        $('#asset-detail .uploadFileForm').getNiceScroll().resize();

      });

      this.on('uploadprogress', function(file, progress, bytesSent){
        // console.log(file);
        $(file.previewElement).find('.status').text('Uploading');
        $(file.previewElement).find('.statusIcon').html('autorenew');
        $(file.previewElement).find('i.close').unbind().on('click', function(){        
          $(this).parent().parent().remove();
          $(elemID).show();
          $('#asset-detail .uploadFileForm').getNiceScroll().resize();
        })
      })

      this.on('success', function(file){
        $(file.previewElement).find('.status').text('Uploaded');
        $(file.previewElement).find('.statusIcon').html('check_circle');
        $(file.previewElement).find('.action').text('VIEW');
      })

      this.on('error', function(file, errorMessage, xhr){
        $(file.previewElement).find('.status').text('Error uploading');
        $(file.previewElement).find('.statusIcon').html('error');
        $(file.previewElement).find('.action').text('RETRY');
        // console.log(errorMessage);
        // console.log(xhr);    
        $(file.previewElement).find('i.close').unbind().on('click', function(){      
          $(this).parent().parent().remove();
          $(elemID).show();        
          $('#asset-detail .uploadFileForm').getNiceScroll().resize();
        })
      })

    }
  });

  // myDropzone.options = ;

  updateScBadgeCount();

  }, 1000)




})

// $('#uploadFileForm .collapsible-body.primaryFiles').append('');


$(document).on('click', '.pmWrap .fileCapsule', function(event){
  if(!$(event.target).parents('.scWrap').length && !$(event.target).hasClass('.scWrap') && !$(event.target).parents('.homeIconWrapper').length && !$(event.target).hasClass('.homeIconWrapper') && !$(event.target).parents('label').length){

    var that = $(this).find('.expand');
    //$('.pmWrap .expand').removeClass('active');
    $('.scWrap').slideUp(300,function(){$(this).parents('.fileCapsule').find('.expand').text('add_circle_outline').removeClass('active')});
    if(that.hasClass('active')) {
      that.removeClass('active');
      that.parents('.fileCapsule').find('.scWrap').slideUp();
    }
    else{
      that.text('remove_circle_outline').addClass('active');
      that.parents('.fileCapsule').find('.scWrap').slideDown();
    }

  }
})

//file Checkbox Enabling Disabling - 2497
function fileCheckboxEnabling(a){
  if(a){
  $(".packageSelect").formSelect('destroy');
  $('.packageSelect').html('');
  var sHtml = '';
  $(".primaryFiles .fileCapsule").find("input[type='checkbox']").each(function(){
    var data = $(this).attr('data-origin');
    var selection='';
    if($(this).is(':checked')) {
        selection = "selected";
        $(".secondaryFiles .fileCapsule").find("input[data-bind='"+data+"']").each(function(){
          $(this).parent().parent().show();
          $(this).prop('checked', true);
        });
      }
      else{
        $(".secondaryFiles .fileCapsule").find("input[data-bind='"+data+"']").each(function(){
          $(this).parent().parent().hide();
          $(this).prop('checked', false);
        });
      }
    sHtml+='<option value="1"'+selection+'>'+data+'</option>';
  })

  $('.packageSelect').append(sHtml);
  $('.packageSelect').formSelect({
    dropdownOptions :{
      coverTrigger: false,
      alignment: 'left',
      closeOnClick: false,
      hover:false
    }
  });
  $('.packageSelect').parent().find('input').attr('placeholder','Select here');
  $('.packageSelect').parent().find('ul li span input').addClass('filled-in');
  }
  else{
  $(".primaryFiles .fileCapsule").find("input[type='checkbox']").each(function(){
    var data = $(this).attr('data-origin');
    if($(this).is(':checked')) {
        $(".secondaryFiles .fileCapsule").find("input[data-bind='"+data+"']").each(function(){
          $(this).parent().parent().show();
          $(this).prop('checked', true);
        });
      }
    else {
        $(".secondaryFiles .fileCapsule").find("input[data-bind='"+data+"']").each(function(){
          $(this).parent().parent().hide();
          $(this).prop('checked', false);
        });
      }
  })
  }
}
fileCheckboxEnabling('1');

$(".primaryFiles .fileCapsule").on('click', "input[type='checkbox']", function(){
  fileCheckboxEnabling('1');
})

$(".packageSelect").on('change', function(){

  $(".packageSelect").parent().find("ul>li.selected").each(function(){
    var data = $(this).find('label span').text();
    $(".primaryFiles .fileCapsule").find("input[data-origin='"+data+"']").each(function(){
        $(this).prop('checked', true);
     });
  })

  $(".packageSelect").parent().find("ul>li:not('.selected')").each(function(){
    var data = $(this).find('label span').text();
    $(".primaryFiles .fileCapsule").find("input[data-origin='"+data+"']").each(function(){
        $(this).prop('checked', false);
     });
  })

  fileCheckboxEnabling();

})

$(document).on('click', '.primaryFiles .fileCapsule .homeIconWrapper div', function(){
  var index = $(this).parent().parent().index();
  var elem = $('#assets-slider');
  var instance = M.Carousel.getInstance(elem);
  instance.set(index);
  $(".primaryFiles .fileCapsule .homeIconWrapper").removeClass('active');
  $(this).parent().addClass('active');
  $('.primaryFiles .fileCapsule').removeClass('active');
  $(this).parents('.fileCapsule').addClass('active');
})


// batch list view icon
$('.batchListView').on('click', function(){
  var elem = $("#batchListing");
  var instance = M.Modal.getInstance(elem);
  instance.open();
})


// $('#batchListWrap').niceScroll().scrollstart(moveScroll);


// batch upload dropzone init - 2497
// var myDropzone = new Dropzone("#myFile", {
//     url: "../assets/uploads"
//   });


// batch upload dropzone options - 2497
  // myFile is the id of dropzone

// Dropzone.options.myFile = {

//   previewTemplate:document.querySelector('#tpl').innerHTML,
//   previewsContainer: ".fileBatchCapwWr",
//   uploadMultiple: false,

//  init: function() {

//     var elemID = '#'+(this.element.id);

//     this.on("addedfile", function(file) {
//       $(elemID).hide();
//       // var attr = $(elemID).attr('multiple');
//       //     alert(attr);

//       // //hiding dropzone for 'single file' upload forms after one file is selected
//       // if (typeof attr == typeof undefined || attr == false) {        
//       //     // $(elemID).parent().find('.fileBatchCapwWr').empty();
//       //   }
      
//       $(file.previewElement).find('.fileName').attr('data-tooltip',file.name).tooltip();
//       $('#asset-detail .uploadFileForm').getNiceScroll().resize();
//     });

//     this.on('uploadprogress', function(file, progress, bytesSent){
//       // console.log(file);
//       $(file.previewElement).find('.status').text('Uploading');
//       $(file.previewElement).find('.statusIcon').html('autorenew');
//       $(file.previewElement).find('i.close').unbind().on('click', function(){        
//         $(this).parent().parent().remove();
//         $(elemID).show();
//         $('#asset-detail .uploadFileForm').getNiceScroll().resize();
//       })
//     })

//     this.on('success', function(file){
//       $(file.previewElement).find('.status').text('Uploaded');
//       $(file.previewElement).find('.statusIcon').html('check_circle');
//       $(file.previewElement).find('.action').text('VIEW');
//     })

//     this.on('error', function(file, errorMessage, xhr){
//       $(file.previewElement).find('.status').text('Error uploading');
//       $(file.previewElement).find('.statusIcon').html('error');
//       $(file.previewElement).find('.action').text('RETRY');
//       // console.log(errorMessage);
//       // console.log(xhr);    
//       $(file.previewElement).find('i.close').unbind().on('click', function(){      
//         $(this).parent().parent().remove();
//         $(elemID).show();
//         $('#asset-detail .uploadFileForm').getNiceScroll().resize();
//       })
//     })

//   }
// };

// add primary files dropzone options - 2497
  // addFilesPrimary is the id of dropzone
Dropzone.options.addFilesPrimary = {

  previewTemplate:document.querySelector('#tpl').innerHTML,
  previewsContainer: ".fileBatchCapwWrPm",

 init: function() {

    elemID = '#'+(this.element.id);

    this.on("addedfile", function(file) {

      var attr = $(elemID).attr('multiple');

      //hiding dropzone for 'single file' upload forms after one file is selected
      if (typeof attr == typeof undefined || attr == false) {        
          // $(elemID).parent().find('.fileBatchCapwWr').empty();
          $(elemID).hide();
        }
      
      $(file.previewElement).find('.fileName').attr('data-tooltip',file.name).tooltip();
      $('#asset-detail .uploadFileForm').getNiceScroll().resize();

    });

    this.on('uploadprogress', function(file, progress, bytesSent){
      // console.log(file);
      $(file.previewElement).find('.status').text('Uploading');
      $(file.previewElement).find('.statusIcon').html('autorenew');
      $(file.previewElement).find('i.close').unbind().on('click', function(){        
        $(this).parent().parent().remove();
        $(elemID).show();
        $('#asset-detail .uploadFileForm').getNiceScroll().resize();
      })
    })

    this.on('success', function(file){
      $(file.previewElement).find('.status').text('Uploaded');
      $(file.previewElement).find('.statusIcon').html('check_circle');
      $(file.previewElement).find('.action').text('VIEW');
    })

    this.on('error', function(file, errorMessage, xhr){
      $(file.previewElement).find('.status').text('Error uploading');
      $(file.previewElement).find('.statusIcon').html('error');
      $(file.previewElement).find('.action').text('RETRY');
      // console.log(errorMessage);
      // console.log(xhr);    
      $(file.previewElement).find('i.close').unbind().on('click', function(){      
        $(this).parent().parent().remove();
        $(elemID).show();
        $('#asset-detail .uploadFileForm').getNiceScroll().resize();
      })
    })

  }
};




// batch edit - 2497
$('#batchEdit').on('click', function(){
  //$('#assetFilePopup').modal('open');

  $('#assetFilePopup').css({'opacity':'0','z-index': '9999'});
  $('#assetFilePopup').css({'display':'block'});
  $('#assetFilePopup').animate({'opacity':'1'}, 300);

  $(".fileDetailSide h5").html('Editing files');

  $('.afpThumbnails').empty();

  $('#assets .assets-thumbnail').find('.card').each(function(){

    if($(this).find('.card-overlay input').is(':checked')){

      var src = $(this).find('.card-image img').attr('src');
      var aName = $(this).find('.card-content .asset-name span:not(".tooltiptext")').text();
      var aFormat = $(this).find('.img-format').text();

      var cOverlay = '<div class="card-overlay"><div class="select"><label><input type="checkbox" class="filled-in" name="Car"><span></span></label></div></div>';
      var cImage = '<div class="card-image"><img src="'+src+'"><span class="card-title left clearFile"><i class="small material-icons clear">clear</i></span><span class="card-title right"><span class="badge img-format" data-format="'+aFormat+'">'+aFormat+'</span></span></div>';
      var cContent = '<div class="card-content"><input name="filetitle[]" type="text" class="validate" value="'+aName+'" placeholder="Title"><span class="file-name cardContentSubtitle">Optional Fields</span></div>';

      $('.afpThumbnails').append('<div class="card small">'+cOverlay+cImage+cContent+'</div>');
    
    }

  })

  $('#assetFilePopup').find('#selectfile-all').trigger('click');

  $('.collapHeadIcon').attr('src','assets/images/icons/view-slash-icn.png');

  updateFCount();

  $('.afpThumbnails').append('<div class="dummy"></div><div class="dummy"></div><div class="dummy"></div><div class="dummy"></div>\
    <div class="dummy"></div><div class="dummy"></div><div class="dummy"></div><div class="dummy"></div><div class="dummy"></div>');

})


function updateFCount(){
  var aCount = 0;
  var aCountSelect = 0;
  $('#assetFilePopup').find('.card').each(function(){
    aCount++;
    if($(this).find('.card-overlay input').is(':checked')){
      aCountSelect++;
    }
  })

  setTimeout(function(){$('#assetFilePopup .assetCount').text(aCount);}, 20);
  setTimeout(function(){$('#selected-files label').text(aCountSelect);}, 20);
}

// showing assets number
function assetCardCount(){
  var assetCount = $('#assets .card').length;
  $('#assets .assetCount').text(assetCount);
  $('#select-options .visibleAssets').text(assetCount);
}

$(".viewMoreA").on('click', function(e){
  e.preventDefault();
  $(this).prev().toggleClass('expand');
  if($(this).find('.viewMore').hasClass('expand')) {
    $(this).find('.viewMore').removeClass('expand').addClass('collapse');
    $(this).find('.tooltiptext').text('Expand');
    $(this).find('.viewMore').text('add_circle_outline');
  }
  else {
    $(this).find('.viewMore').removeClass('collapse').addClass('expand');
    $(this).find('.tooltiptext').text('Collapse');
    $(this).find('.viewMore').text('remove_circle_outline');
  }
})

assetCardCount();

function updateScBadgeCount(){
  $('.scWrap').each(function(){
    var count = $(this).find('.fileCapsule').length;
    $(this).find('.addtnlBtn .badge').text(count);
  })
}






function drpFormat2(start8){
  setTimeout(function(){$("#publicationDate span.date").html(start8.format('DD/MMM/YYYY'));}, 10);
  }

var start6 = moment();


$("#publicationDate").daterangepicker({
  singleDatePicker: true, 
  showDropdowns: true,
  drops:'down',
  parentEl: '.pubDateRangeWrap'
}, function(start){$("#publicationDate span.date").html(start.format('DD/MMM/YYYY'));}, 10);


$('#publicationDate').on('show.daterangepicker', function(ev, picker){
  $('#assetFilePopup .fileDetailSide #uploadFileForm1 ul.collapsible').css({'padding-bottom':'200px'});
  // setTimeout(function(){$(".uploadFileForm").getNiceScroll(0).doScrollTop(1150);}, 400);
  // $(".uploadFileForm").scrollTop(1E10);
  $(".uploadFileForm").animate({ scrollTop: $(".uploadFileForm")[0].scrollHeight }, 500);
})
$('#publicationDate').on('hide.daterangepicker', function(ev, picker){
  $('#assetFilePopup .fileDetailSide #uploadFileForm1 ul.collapsible').animate({'padding-bottom':'0'}, 300);
  // $('#assetFilePopup .fileDetailSide #uploadFileForm1 ul.collapsible').scrollTop(100)
  // setTimeout(function(){$(".uploadFileForm").getNiceScroll(0).doScrollTop(1115);}, 100);
})

drpFormat2(start6);


function drpFormat(start3, end3){
  setTimeout(function(){$("#reportsDateRange span.date").html(start3.format('DD/MMM/YYYY') +'<span>to</span>'+ end3.format('DD/MMM/YYYY'));}, 10);
  }

var start2 = moment().subtract(29, 'days');
var end2 = moment();

$("#reportsDateRange").daterangepicker({
    showDropdowns: true,
    autoApply: true,
    startDate: start2,
    endDate: end2,
    maxDate: end2,
    minYear: end2.year() - 10,
    // maxYear: end2.year()
}, drpFormat(start2, end2));

$("#reportsDateRange").on('hide.daterangepicker', function(ev, picker){
  drpFormat(picker.startDate, picker.endDate);
  });

drpFormat(start2, end2);
// $('.monthselect').attr('data-nametag',' ');
// $('.monthselect').formSelect({
//   dropdownOptions: {
//     coverTrigger: false
//   }
// });

// $('.yearselect').attr('data-nametag',' ');
// $('.yearselect').formSelect({
//   dropdownOptions: {
//     coverTrigger: false
//   }
// });


// function setYearCal(){

//     $('.monthselect').attr('data-nametag',' ');
//     $('.monthselect').each(function(){
//       $(this).formSelect({
//       dropdownOptions: {
//         coverTrigger: false
//         }
//       });
//     })

//     $('.yearselect').attr('data-nametag',' ');
//     $('.yearselect').each(function(){
//       $(this).formSelect({
//       dropdownOptions: {
//         coverTrigger: false
//       }
//     });

//   })

//   $('.daterangepicker .select-wrapper ul').niceScroll({
//         autohidemode:true,
//         cursorcolor:"rgba(0,0,0,1)",
//         cursoropacitymax:1,
//         cursorwidth:2,
//         cursorborder:"0px solid rgba(0,0,0,0.8)",
//         cursorborderradius:"5px",
//         background:"#DDD",
//         mousescrollstep: '20',
//         horizrailenabled:false
//       })
// }

// $("#reportsDateRange").on('showCalendar.daterangepicker', function(ev, picker){
//   setYearCal();
// })

// $(document).on('mousedown', 'td.available', function(e){
//   // e.preventDefault;
//   // e.stopPropagation();
//   // alert();
//   setYearCal();
// })


// $("#reportsDateRange").on('showCalendar.daterangepicker', function(ev, picker){
//   alert('showCalendar');
// })
// $("#reportsDateRange").on('hide.daterangepicker', function(ev, picker){
//   alert('hide');
// })
// $("#reportsDateRange").on('hideCalendar.daterangepicker', function(ev, picker){
//   alert('hideCalendar');
// })
// $("#reportsDateRange").on('show.daterangepicker', function(ev, picker){
//   alert('show');
// })
// $("#reportsDateRange").on('apply.daterangepicker', function(ev, picker){
//   alert('apply');
// })
// $("#reportsDateRange").on('cancel.daterangepicker', function(ev, picker){
//   alert('cancel');
// })


$('#advancedFilterDd').on('click', '.dropdown-trigger', function(e){
  e.preventDefault;

  function niceScrollUpdate(){
    $('#mediaTypeUl').getNiceScroll().resize();
    $('#assetType2Ul').getNiceScroll().resize();
    $('#category2Ul').getNiceScroll().resize();
  }

  if($(this).closest('li').hasClass('active')){
    $(this).closest('li').removeClass('active');
    $(this).parent().find('.dropdown-content').slideUp(150, niceScrollUpdate);
    return false;
  }
  else{
    $('#advancedFilterDd .dropdown-content').slideUp(150);
    $('#advancedFilterDd > ul > ul > li').removeClass('active');
    $(this).closest('li').addClass('active');
    $(this).parent().find('.dropdown-content').slideDown(200, niceScrollUpdate);
  }
})




var advFilterCountV;
function advFilterCount(){
   advFilterCountV = $('#advancedFilterDd input[data-filter]:checked').length;
  if(!advFilterCountV<=0) {
    $('#advancedFilter .badge').show();
    $('#advancedFilter .badge').text(advFilterCountV);
    }
  else {
    $('#advancedFilter .badge').hide();
  }
}

advFilterCount();


var cntryFilterCountV;
function cntryFilterCount(){
   cntryFilterCountV = $('#countrySelect input[data-filter]:checked').length;
  if(!cntryFilterCountV<=0) {
    $('.countrySelection .badge').show();
    $('.countrySelection .badge').text(cntryFilterCountV);
    }
  else {
    $('.countrySelection .badge').hide();
  }
}

cntryFilterCount();



$('.moveNextCarousel').on('click', function(e){
  e.preventDefault();
  // e.stopPropagation();
  // $('.carousel').carousel('next');
  var elem = $('#assets-slider');
  var instance = M.Carousel.getInstance(elem);
  instance.next();
});

// move prev carousel
$('.movePrevCarousel').on('click', function(e){
  e.preventDefault();
  // e.stopPropagation();
  // $('.carousel').carousel('prev');
  var elem = $('#assets-slider');
  var instance = M.Carousel.getInstance(elem);
  instance.prev();
});


$('.card-overlay').on('click', function(){
  var origin = $(this).closest('.card').attr('data-crslOrigin');
  carouselChange(origin);
})

function carouselChange(origin){
  $('#assets-slider').attr('data-crslOrigin', origin);
    if(origin == "2"){
      $('#assets-slider').children('.carousel-item').eq(0).html('<img src="assets/images/asset-files/asset-111.jpg" alt="" /><div class="assetName">myimage1.jpg</div>');
      $('#assets-slider').children('.carousel-item').eq(1).html('<img src="assets/images/asset-files/asset-114.jpg" alt="" /><div class="assetName">myimage2.jpg</div>');
      $('#assets-slider').children('.carousel-item').eq(2).html('<img src="assets/images/asset-files/asset-115.jpg" alt="" /><div class="assetName">myimage3.jpg</div>');
    }
    else{
      $('#assets-slider').children('.carousel-item').eq(0).html('<img src="assets/images/asset-files/asset-1.jpg" alt="" /><div class="assetName">myimage.jpg</div>');
      $('#assets-slider').children('.carousel-item').eq(1).html('<video controls><source src="https://jdvaultbeta.2adpro.com/uploads/1181/2018/May/68396/Creative_YC.mp4" type="video/mp4"><source src="https://jdvaultbeta.2adpro.com/uploads/1181/2018/May/68396/Creative_YC.mp4" type="video/ogg">Your browser does not support HTML5 video.</video><div class="assetName">myvideofile.mp4</div>');
      $('#assets-slider').children('.carousel-item').eq(2).html('<embed src="http://www.hbp.com/resources/SAMPLE%20PDF.pdf" width="100%" height="100%" class="pdf-img" /><div class="assetName">mypdf.pdf</div>');
    }


}

$('.asset-actions').on('click', '.assetDetailPrev', function(){
  var origin = $('#assets-slider').attr('data-crslOrigin');
  if(origin == "1") origin = "2"; else origin = "1";
  carouselChange(origin);
})

$('.asset-actions').on('click', '.assetDetailNext', function(){
  var origin = $('#assets-slider').attr('data-crslOrigin');
  if(origin =="1") origin = "2"; else origin = "1";
  carouselChange(origin);
})


$('#savedSearchesBtn').on('click', function(e){
    // e.stopPropagation();
})


// carsl1 = '<img src="assets/images/asset-files/asset-1.jpg" alt="" /><div class="assetName">myimage.jpg</div>';
// carsl2 = '<video controls><source src="https://jdvaultbeta.2adpro.com/uploads/1181/2018/May/68396/Creative_YC.mp4" type="video/mp4"><source src="https://jdvaultbeta.2adpro.com/uploads/1181/2018/May/68396/Creative_YC.mp4" type="video/ogg">Your browser does not support HTML5 video.</video><div class="assetName">myvideofile.mp4</div>';
// carsl3 = '<embed src="http://www.hbp.com/resources/SAMPLE%20PDF.pdf" width="100%" height="100%" class="pdf-img" /><div class="assetName">mypdf.pdf</div>';



// function modalAssetCardCount(modalId){
//   var assetCount = $(modalId).('.card').length;
//   $(modalId).find('.assetCount').text(assetCount);
//   //$('#select-options .visibleAssets').text(assetCount);
// }

//temperory - can be removed - 2497
// $('#asset-detail').modal('open');
// $('html').css('overflow','hidden');
// $('#batchListing').show();
  // $('#assetFilePopup').modal('open');

});