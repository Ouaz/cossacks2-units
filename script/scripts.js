/* Hide loading div */

$(window).load(function() { 
    $('.loadpage').fadeOut();
});


/* Smooth Scroll (same page)
 * Author: Chris Coyier (adapted by therealrootuser)
 * https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link/26642959#26642959
 * https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
 
$(document).ready(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 50
            }, 1000);
            return false;
          }
        }
      });
    });


/* Panels Hide Show */

$(document).ready(function(){
    
    // Menu On Off
    $(".nav").click(function(){
        $(".toggle_help, .wrap_toc, .reset, .wrap_calc, .top").fadeToggle(400); $(this).toggleClass("nav_off");
    });

    // Help Toggle
    $(".help").click(function(){
        $("#help_container").slideToggle(400); $(this).toggleClass("help_off"); $('#help_container').scrollTop(0);
    });
    
    // Toc Toggle
    $(".toc").click(function(){
        $(".toc_container").slideToggle(400); $(this).toggleClass("toc_off");
    });
    
    // Calc Toggle
    $(".calc").click(function(){
        $(".calc_container").slideToggle(400); $(this).toggleClass("calc_off");
    });

    // Close Help Container
    $("#closehelp").click(function(){
        $("#help_container").slideToggle(400);  $(".help").toggleClass("help_off"); $('#help_container').scrollTop(0);
    });

    // Close Calc
    $("#closecalc").click(function(){
        $(".calc_container").slideToggle(400);  $(".calc").toggleClass("calc_off");
    });
    
});


/* Commanders Hide Show */

$(document).ready(function(){
    
    // Fra
    $("#comfra").click(function(){
        $(".comfra").fadeToggle(400); $(".comfra").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
    // Aut
    $("#comaus").click(function(){
        $(".comaus").fadeToggle(400); $(".comaus").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
    // Rus
    $("#comrus").click(function(){
        $(".comrus").fadeToggle(400); $(".comrus").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
    // Pru
    $("#compru").click(function(){
        $(".compru").fadeToggle(400); $(".compru").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
    // Gbr
    $("#comgbr").click(function(){
        $(".comgbr").fadeToggle(400); $(".comgbr").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
    // Egy
    $("#comegy").click(function(){
        $(".comegy").fadeToggle(400); $(".comegy").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
    // Pol
    $("#compol").click(function(){
        $(".compol").fadeToggle(400); $(".compol").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
    // Spa
    $("#comspa").click(function(){
        $(".comspa").fadeToggle(400); $(".comspa").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
    // Rhi
    $("#comrhi").click(function(){
        $(".comrhi").fadeToggle(400); $(".comrhi").toggleClass("active2"); $(this).toggleClass("comon");
    });
    
});


/* Tooltip Text 
 * Author: Alessio Atzeni
 * http://www.alessioatzeni.com/blog/simple-tooltip-with-jquery-only-text/
 */
 
$(document).ready(function() {
        // Tooltip only Text
        $('.info').hover(function(){
                // Hover over code
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn(300);
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
        }).mousemove(function(e) {
                var mousex = e.pageX + 15; //Get X coordinates
                var mousey = e.pageY + 12; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
});


/* No click Preview Image */

$(document).ready(function() {
$(".preview").click(function(event) {
        event.preventDefault();
    });
});


/* No Right-Click Book */

$(document).ready(function() {
$(".book").bind('contextmenu', function(e) {
    return false;
   });
});


/* Back to Top */

$(document).ready(function() {
   $(".tophov").click(function(event) {
      $("html, body").animate({ scrollTop: 0 }, 500);
   });
});


/* Dynamical Draggable Element without jQueryUI 
 * Author: Jason Sebring
 * https://stackoverflow.com/questions/2424191/how-do-i-make-an-element-draggable-in-jquery/20699370#20699370
 
 
$.fn.draggable = function(){
    var $this = this,
    ns = 'draggable_'+(Math.random()+'').replace('.',''),
    mm = 'mousemove.'+ns,
    mu = 'mouseup.'+ns,
    $w = $(window),
    isFixed = ($this.css('position') === 'fixed'),
    adjX = 0, adjY = 0;

    $this.mousedown(function(ev){
        var pos = $this.offset();
        if (isFixed) {
            adjX = $w.scrollLeft(); adjY = $w.scrollTop();
        }
        var ox = (ev.pageX - pos.left), oy = (ev.pageY - pos.top);
        $this.data(ns,{ x : ox, y: oy });
        $w.on(mm, function(ev){
            ev.preventDefault();
            ev.stopPropagation();
            if (isFixed) {
                adjX = $w.scrollLeft(); adjY = $w.scrollTop();
            }
            var offset = $this.data(ns);
            $this.css({left: ev.pageX - adjX - offset.x, top: ev.pageY - adjY - offset.y});
        });
        $w.on(mu, function(){
            $w.off(mm + ' ' + mu).removeData(ns);
        });
    });

    return this;
};

*/

$(document).ready(function() {
    $(".toggle_nav").draggable();
    $(".toggle_toc").draggable();
    $(".toc_container").draggable();
    $(".toggle_help").draggable();
    $(".reset").draggable();
    $(".toggle_calc").draggable();
    $(".calc_container").draggable();
    $(".top").draggable();
});


/* Reset All Position and Clear drag pos save */

$(document).ready(function() {
   
    $('.resetok').click(function(e) {
        
        e.preventDefault();
        
        $('.toggle_nav').animate({ 
            top: '10px' , left: '10px'
        }, 500 );
        $('.toggle_help').animate({ 
            top: '60px' , left: '10px'
        }, 500 );
        $('.toggle_toc').animate({ 
            top: '110px' , left: '10px'
        }, 500 );
        $('.toc_container').animate({ 
            top: '160px' , left: '17px'
        }, 500 );
        $('.toggle_calc').animate({ 
            top: '60px' , left: '88.66%'
        }, 500 );
        $('.calc_container').animate({ 
            top: '110px' , left: '89.33%'
        }, 500 );       
        $('.reset').animate({ 
            top: '10px' , left: '88.66%'
        }, 500 ); 
        $('.top').animate({ 
            top: '91.33%' , left: '88.66%'
        }, 500 );             
    });            
});


/* Active only once Keyboard Numpad input for Calculator and only if Calc is displayed */

$(document).ready(function() {
   $('.toggle_calc').one("click", function() {
   
   if ($('.calc_container').css('display') == 'block'){
      numpad();}
   });
});

function numpad() {

$(window).keydown (function(event) {
    switch (event.keyCode) {
    
    case 13: event.preventDefault(); $("#bequal").click(); break;
    case 79: event.preventDefault(); $("#closecalc").click(); break;
    case 67: $("#bclear").click(); break;
    case 96: $("#b0").click(); break;
    case 97: event.preventDefault(); $("#b1").click(); break;
    case 98: event.preventDefault(); $("#b2").click(); break;
    case 99: event.preventDefault(); $("#b3").click(); break;
    case 100: event.preventDefault(); $("#b4").click(); break;
    case 101: event.preventDefault(); $("#b5").click(); break;
    case 102: event.preventDefault(); $("#b6").click(); break;
    case 103: event.preventDefault(); $("#b7").click(); break;
    case 104: event.preventDefault(); $("#b8").click(); break;
    case 105: event.preventDefault(); $("#b9").click(); break;
    case 106: event.preventDefault(); $("#bmul").click(); break;
    case 107: $("#bplu").click(); break;
    case 109: $("#bmin").click(); break;
    case 110: event.preventDefault(); $("#bcom").click(); break;
    case 111: event.preventDefault(); $("#bdiv").click(); break;

    }
 });
}


/* Underline links border-bottom */

$(document).ready(function() {
  $('#tocfra1').hover(function() {
    $('#tocfra2').toggleClass('ahover');
  })

  $('#tocaut1').hover(function() {
    $('#tocaut2').toggleClass('ahover');
  })

  $('#tocrus1').hover(function() {
    $('#tocrus2').toggleClass('ahover');
  })
  
  $('#tocpru1').hover(function() {
    $('#tocpru2').toggleClass('ahover');
  })
  
  $('#tocgbr1').hover(function() {
    $('#tocgbr2').toggleClass('ahover');
  })
  
  $('#tocegy1').hover(function() {
    $('#tocegy2').toggleClass('ahover');
  })
  
  $('#tocpol1').hover(function() {
    $('#tocpol2').toggleClass('ahover');
  })
  
  $('#tocspa1').hover(function() {
    $('#tocspa2').toggleClass('ahover');
  })
  
  $('#tocrhi1').hover(function() {
    $('#tocrhi2').toggleClass('ahover');
  })
});


//
//  pop! for jQuery
//  v0.2 requires jQuery v1.2 or later
//  
//  Licensed under the MIT:
//  http://www.opensource.org/licenses/mit-license.php
//  
//  Copyright 2007,2008 SEAOFCLOUDS [http://seaofclouds.com]
//
//  https://github.com/seaofclouds/pop/
//

$(document).ready(function(){
  
  $.pop = function(options){
    
    // settings
    var settings = {
     pop_class : '.pop',
     pop_toggle_text : ''
    }
    
    // inject html wrapper
    function initpops (){
      $(settings.pop_class).each(function() {
        var pop_classes = $(this).attr("class");
        $(this).addClass("pop_menu");
        $(this).wrap("<div class='"+pop_classes+"'></div>");
        $(".pop_menu").attr("class", "pop_menu");
        $(this).before(" \
          <div class='pop_toggle'>"+settings.pop_toggle_text+"</div> \
          ");
      });
    }
    initpops();
    
    // assign reverse z-indexes to each pop
    var totalpops = $(settings.pop_class).size() + 1000;
    $(settings.pop_class).each(function(i) {
     var popzindex = totalpops - i;
     $(this).css({ zIndex: popzindex });
    });
    // close pops if user clicks outside of pop
    activePop = null;
    function closeInactivePop() {
      $(settings.pop_class).each(function (i) {
        if ($(this).hasClass('active') && i!=activePop) {
          $(this).children(".pop_menu").fadeOut(400, function() {$(this).parent(settings.pop_class).removeClass("active");}); $(".pop_ready").removeClass("pop_ready");
          }
      });
      return false;
    }
    $(settings.pop_class).mouseover(function() { activePop = $(settings.pop_class).index(this); });
    $(settings.pop_class).mouseout(function() { activePop = null; });

    $(document.body).click(function(evt){
    if(!$(evt.target).is("#move_toc, #move, #move_calc, .resetok, #exposeMask, #contentWrap p, #contentWrap img, #contentWrap h2, #contentWrap strong, .contentWrap, #overlay, img#inert, .data, .close")) {
        closeInactivePop();}
    });
    // toggle that pop
    $(".pop_toggle").click(function(){
    if ( $(this).parent().hasClass('active') ){
      $(".pop_ready, .active").children(".pop_menu").fadeOut(400, function() {
      $(this).parent(settings.pop_class).removeClass("active");});
      $(this).parent().removeClass("pop_ready");
    
    }else{
      $(this).parent().addClass("pop_ready"); $(".pop_ready").children(".pop_menu").fadeIn(400); $(this).parent(settings.pop_class).addClass("active");}
    });
     
  }

});


/* Extracted img filename as Title attribute in jQueryUI
 * Author: Andrew Medico
 * https://stackoverflow.com/questions/5800827/automatically-adding-the-alt-attribute-to-every-image-on-a-page/25914619#25914619
 */
 
$(document).ready(function() {  
  $('#cost img').each(function(){  
   var $img = $(this);  
   var filename = $img.attr('src')
   $img.attr('title', filename.substring((filename.lastIndexOf('/'))+3, filename.lastIndexOf('.')).charAt(0).toUpperCase()+filename.substr(10,3).toLowerCase());  
  });  
 });


/* Smooth Scroll (other page)
 * Author:niccolomineo
 * https://gist.github.com/niccolomineo/6adeb8942444b2a2a46669fb4306baf9
 */

$(document).ready(function() {
    $('#link').on('click', function(e) {
        smooth_scroll_to(this.hash, e);
    });
});

$(window).on('load',function() {
    smooth_scroll_to(window.location.hash);
});

function smooth_scroll_to(hash, e) {
    if(hash === '') {
        return false;
    } else {
        if($(hash).length > 0) {
            if(typeof e !== 'undefined') {
                e.preventDefault();
                history.pushState(null, null, $(e.target).attr('href'));
            }
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800);
        }
    }
}


/* Scroll top or bottom of an element
 * Author: webeno
 * https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div/12391116#12391116
 */

function ScrollBottom() {
   $('#help_container').stop().animate({
  scrollTop: $('#help_container')[0].scrollHeight
}, 800);
}

function ScrollTop() {
   $('#help_container').stop().animate({
      scrollTop: 0
   }, 500);
}

  