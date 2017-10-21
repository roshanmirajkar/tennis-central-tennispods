'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ProgressCircle=function(){function ProgressCircle(percent,radius,elementClass,innerNumber){_classCallCheck(this,ProgressCircle);this._percent=percent;this._radius=radius;this._innerNumber=innerNumber;this._elementClass=elementClass;}_createClass(ProgressCircle,[{key:'calcDashOffset',value:function calcDashOffset(){var circumference=Math.PI*(2*this.radius);return Math.floor(circumference-this.percent/100*circumference);}},{key:'createCSS',value:function createCSS(){document.querySelectorAll('.'+this._elementClass+' .donut__svg .donut__svg__circle--one')[0].style.strokeDashoffset=this.calcDashOffset();}},{key:'updateText',value:function updateText(){document.querySelectorAll('.'+this.elementClass+' .js-donut-figure')[0].innerText=this.innerNumber;}},{key:'updateFigure',value:function updateFigure(newStat){this._percent=newStat;this.updateText();this.createCSS();}},{key:'init',value:function init(){var _this=this;this.updateText();setTimeout(function(){_this.createCSS();},300);}},{key:'percent',get:function get(){return this._percent;}},{key:'radius',get:function get(){return this._radius;}},{key:'elementClass',get:function get(){return this._elementClass;return document.getElementsByClassName(this._elementClass)[0];}},{key:'innerNumber',get:function get(){return this._innerNumber;}}]);return ProgressCircle;}();var queryDonut=document.querySelectorAll('.donut');if(queryDonut.length){var progress1=new ProgressCircle(14,125,'donut-1',24);var progress2=new ProgressCircle(90,125,'donut-2',90);var progress3=new ProgressCircle(100,125,'donut-3',117);}jQuery(function(){jQuery('li.page-scroll a').bind('click',function(event){var jQueryanchor=jQuery(this);console.log("hello");jQuery('html, body').stop().animate({scrollTop:jQuery(jQueryanchor.attr('href')).offset().top},1500,'easeInOutExpo');event.preventDefault();});jQuery('a.page-scroll').bind('click',function(event){var jQueryanchor=jQuery(this);console.log("hello");jQuery('html, body').stop().animate({scrollTop:jQuery(jQueryanchor.attr('href')).offset().top},1500,'easeInOutExpo');event.preventDefault();});});function preload(arrayOfImages){jQuery(arrayOfImages).each(function(){jQuery('<img/>')[0].src=this;});}jQuery(document).ready(function(jQuery){jQuery(window).resize(function(){resizeBxSlider();});jQuery(window).load(function(){resizeBxSlider();});jQuery('#bx-slider').bxSlider({touchEnabled:true,mode:'fade',pager:true,nextText:'',prevText:'',auto:true,speed:500,onSlideAfter:function(currentSlide,totalSlides,currentSlideHtmlObject){jQuery('#bx-slider li').removeClass('active-slide');jQuery('#bx-slider li').eq(currentSlideHtmlObject).addClass('active-slide');},onSliderLoad:function(){jQuery('#bx-slider li').eq(0).addClass('active-slide');}});jQuery('#how-section .tab-content').bxSlider({touchEnabled:true,mode:'fade',pager:true,nextText:'',prevText:'',auto:true,speed:300,pause:10000,adaptiveHeight:true,onSlideBefore:function(currentSlide,totalSlides,currentSlideHtmlObject){jQuery('.fixed-header .nav.nav-pills li').removeClass('active');jQuery('.fixed-header .nav.nav-pills li').eq(currentSlideHtmlObject).addClass('active');if(currentSlideHtmlObject==2){jQuery("#how-section").removeClass('how-bg-mobile how-bg-laptop').addClass('how-bg-echo');}if(currentSlideHtmlObject==0){jQuery("#how-section").removeClass('how-bg-echo how-bg-laptop').addClass('how-bg-mobile');}if(currentSlideHtmlObject==1){jQuery("#how-section").removeClass('how-bg-mobile how-bg-echo').addClass('how-bg-laptop');}},onSlideAfter:function(){jQuery('.fixed-header').blur();}});jQuery('.fixed-header .nav.nav-pills li a').on('click',function(e){var index=jQuery('.fixed-header .nav.nav-pills li').index(jQuery(this).parent());jQuery('.fixed-header .nav.nav-pills li').remo
e.preventDefault();jQuery('#how-section .bx-pager .bx-pager-item').eq(index).find('a').trigger('click');});jQuery('#how-section a.bx-pager-link').on('click',function(e){jQuery('html,body').animate({scrollTop:jQuery('#how-section').offset().top});e.preventDefault();})
jQuery('#about-section .tab-content').bxSlider({touchEnabled:false,mode:'fade',pager:true,pagerCustom:jQuery('#about-section .nav.nav-pills'),nextText:'',prevText:'',auto:false,speed:500,adaptiveHeight:true,onSlideBefore:function(currentSlide,totalSlides,currentSlideHtmlObject){jQuery('.fixed-header .nav.nav-pills li').removeClass('active');jQuery('.fixed-header .nav.nav-pills li').eq(currentSlideHtmlObject).addClass('active');if(currentSlideHtmlObject==0){jQuery("#about-section").removeClass('partner-bg').addClass('story-bg');}else{jQuery("#about-section").removeClass('story-bg').addClass('partner-bg');}},onSlideAfter:function(){jQuery('.fixed-header').blur();}});jQuery('#testimonials-slider').bxSlider({touchEnabled:true,mode:'horizontal',auto:false,pager:false,nextText:'',prevText:'',speed:500,adaptiveHeight:true});function getScrollTop(){if(typeof pageYOffset!='undefined'){return pageYOffset;}else{var B=document.body;var D=document.documentElement;D=(D.clientHeight)?D:B;return D.scrollTop;}}jQuery(window).scroll(function(){if(jQuery('body').hasClass('home')){if(getScrollTop()>jQuery('.donut.donut-1:eq(0)').offset().top-900&&queryDonut.length){progress1.init();}if(getScrollTop()>jQuery('.donut.donut-2:eq(0)').offset().top-900&&queryDonut.length){progress2.init();}if(getScrollTop()>jQuery('.donut.donut-3:eq(0)').offset().top-900&&queryDonut.length){progress3.init();}}});jQuery('#contact-form').validate({rules:{email:{required:true,email:true}}});jQuery('#app-form').validate({rules:{email:{required:true,email:true}},messages:{appSystem:{required:"This field is required."}}});jQuery(".nav-btn").attr("data-side","left");jQuery('.sidebar-nav').addClass("left");jQuery(".sidebar-nav.left").sidebar({side:"left"});jQuery(".nav-btn[data-action]").on("click",function(){var jQuerythis=jQuery(this);var action=jQuerythis.attr("data-action");var side=jQuerythis.attr("data-side");if(action=="open"){jQuery('.nav-open').hide();jQuery('.nav-fixed-line').slideUp();}else{jQuery('.nav-open').show();jQuery('.nav-fixed-line').slideDown();}jQuery(".sidebar-nav."+side).trigger("sidebar:"+action);return false;});jQuery(".nav-menu li a").on("click",function(){jQuery(".sidebar-nav").trigger("sidebar:close");jQuery('.nav-open').show();jQuery('.nav-fixed-line').slideDown();});if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)){jQuery('#main-menu .nav-menu').css({"margin-bottom":"100px"});}jQuery(document).ready(function(){jQuery('.nav-open').midnight();jQuery('#myScrollspy').midnight();});jQuery('.modal').on('show.bs.modal',function(){jQuery(".sidebar-nav.left").trigger("sidebar:close");jQuery('.nav-open').show();});jQuery('#videoModal').on('shown.bs.modal',function(){var vid=document.getElementById("modelVideo");vid.play();});jQuery('#videoModal').on('hide.bs.modal',function(e){jQuery('#videoModal').hide();var vid=document.getElementById("modelVideo");vid.load();});jQuery('#howPhone .how-block').on('click',function(){var src=jQuery(this).find('.title').attr('data-screen-src');jQuery('#howPhone .how-block.active').removeClass('active');jQuery(this).addClass('active');jQuery('.dynamic_image').find('.vc_single_image-wrapper').empty().append('<img src="'+src+'">');});jQuery('#howPhone a.how-block').on('click',function(){var src=jQuery(this).attr('data-screen-src');jQuery('#howPhone a.how-block.active').removeClass('active');jQuery(this).addClass('active');jQuery('.device-image-phone span').empty().append('<img src="'+src+'">')});jQuery('#howPhone a.how-block.active').trigger('click');jQuery('#howLaptop .how-block').on('click',function(){console.log('hello laptop');var src=jQuery(this).find('.title').attr('data-screen-src');jQuery('#howLaptop .how-block.active').removeClass('active');jQuery(this).addClass('active');jQuery('.laptop_inner_image').find('.vc_single_image-wrapper').empty().append('<img src="'+src+'">');});jQuery('#howLaptop a.how-block').on('click',function(){var src=jQuery(this).attr('data-screen-src');jQuery('#howLaptop a.how-block.active').removeClass('active');jQuery(this).addClass('active');jQuery('.device-image-laptop span').empty().append('<img src="'+src+'">')});jQuery('#howLaptop a.how-block.active').trigger('click');window.sr=ScrollReveal();sr.reveal('#solution-section .container');sr.reveal('.white-section');sr.reveal('.fixed-header');sr.reveal('#testimonials-section');sr.reveal('#contacts-section .container');sr.reveal('footer .container');sr.reveal('.about-people__ava-wrap',{'origin':'left'});sr.reveal('.about-people__name, .about-people__position');sr.reveal('.about-people__text',{'delay':100})
jQuery('.about-banner').addClass('about-banner--loaded')});function resizeBxSlider(){var windowHeight=jQuery(window).height();var windowWidth=jQuery(window).width();if(windowHeight<750){windowHeight=750;}var sliderHeight=windowHeight;jQuery('#bx-slider li, #bx-slider-section .bx-viewport, #bx-slider').css({height:sliderHeight});var sliderControl=jQuery('#bx-slider-section .bx-pager-custom');var sliderCount=sliderControl.find('.bx-pager-item').length;var sliderItemHeight=65;var sliderOffset=4;if(sliderCount>0){var controlHeight=sliderCount*sliderItemHeight-sliderItemHeight;var controlPadding=(sliderHeight/2)-(controlHeight/2)-sliderOffset;sliderControl.css('padding-top',controlPadding+'px');}}