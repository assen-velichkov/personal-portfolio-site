window.onload=function(){function a(){$(".circle>div").not(this).removeClass("scale"),$(".circle>div>i").not(this).removeClass("disappear"),$(".circle p").not(this).removeClass("appear")}function b(){$(".circle>div").removeClass("scale"),$(".circle>div>i").removeClass("disappear"),$(".circle p").removeClass("appear")}$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},1e3),!1}})}),$(".circle>div").click(function(){a(),$(this).addClass("scale"),$(this).contents("i").addClass("disappear"),$(this).contents("p").addClass("appear")}),$(".circle>div").dblclick(function(){b()}),$("#projects .keyboard-btn").click(function(){$("#projects .keyboard-btn").not(this).removeClass("btnClicked"),$(this).addClass("btnClicked")}),$("#projects .keyboard-btn").dblclick(function(){$("#projects .keyboard-btn").removeClass("btnClicked")}),$("a.logo img").click(function(){$("a.logo img").not(this).removeClass("logoClicked"),$(this).addClass("logoClicked")}),$("a.logo img").dblclick(function(){$("a.logo img").removeClass("logoClicked")}),$("#projects-keyboard>li").click(function(){var a=$("#projects-screen"),b=$(this).contents("ul").clone(),c=b.contents("li:nth-child(1), li:nth-child(2)"),d=b.contents("li:nth-child(1), li:nth-child(3), li:nth-child(4), li:nth-child(5)"),e=b.contents("li:nth-child(6)"),f=new Array(c,d,e),g=f.length,h=0,i=$(".next-btn"),j=$(".prev-btn");b.removeClass("hide"),i.removeClass("hide"),j.removeClass("hide"),a.contents().replaceWith(f[h]),i.click(function(){h===g-1?h=0:h++,a.contents().replaceWith(f[h])}),j.click(function(){0===h?h=g-1:h--,a.contents().replaceWith(f[h])})});var c=300,d=300;$(window).scroll(function(){$(this).scrollTop()>c?$(".backTop").fadeIn(d):$(".backTop").fadeOut(d)}),$(".backTop").click(function(a){return a.preventDefault(),$("html, body").animate({scrollTop:0},d),!1}),$(function(){var a=new Date,b=a.getYear();b<1900&&(b+=1900),$(".currentYear").append(b)})};