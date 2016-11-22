//Ready Function
$(function(){
    $('.btnoffcanvas').on('click', function(){
        $('body').toggleClass('canvasin');
        $('.contactbox').toggleClass('cbside');
    });
    $('.bsmorebtn').on('click', function(){
        $(this).next('.bsecmore').slideToggle();
        $(this).children('i').toggleClass('fa-angle-down fa-angle-up');
    });
    
    $(window).on('resize', function(){
        if($(window).width()>767){
            $('body').removeClass('canvasin');
        }
    });
    
    //Sticky Navigation
    stickynav();
    $( window ).scroll(function() {
        stickynav();
    });
    
    // Offcanvas dropdown
    $('.ocdropdown').on('click', function(e){
        
        $('.ocdropdown').removeClass('active');
        $('.ocdropdown').find('.arr').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.ocsubnav').slideUp();
        if($(this).next('.ocsubnav').is(':hidden')){
            $(this).toggleClass('active');
            $(this).find('.arr').toggleClass('fa-angle-down fa-angle-up');
            $(this).next().slideToggle();
        }
    });
    
    // Go To product btn
    ScrollTo('.gotoabs', '#abs');
    ScrollTo('.gotobe', '#be');
    ScrollTo('.gotocm', '#cm');
    
    //Banner Animation
    bannerAnim('.proslide');
    
    //fix popup for contact
    var cbbox = $('.contactbox');
    var cbcont = $('.cbcontainer');
    var cbbtn = $('.fxbtn');
    cbbox.css('bottom', -cbcont.height()-40);
    cbbtn.on('click', function(){
        
        if(!cbbox.hasClass('cbopen')){
            cbbox.css({'bottom': 0, 'width':300});
            cbbox.addClass('cbopen');
        }else{
            cbbox.css('width', 150);
            setTimeout(function(){
                cbbox.css('bottom', -cbcont.height()-40);
            },500);
            
            cbbox.removeClass('cbopen');   
        }
    });
    
    // Talk Now popup
    $('.talknow').on('click', function(){
        $(this).next().slideToggle();
        $('.blockui').toggleClass('show');
    });
    
    /* ===== header drop down ===== */
    $('.header-toll-box p').on('click', function(e){
        e.stopPropagation();
        $(this).next('ul').toggleClass('open-ul');
    });
	
	// Form Auto Fill - Create
	$('[data-flabel^="v-"]').blur(function(){
        var cokey = $(this).attr('data-flabel');
        var coval = $(this).val();
        createCookie(cokey, coval, 60);
        console.log('cookie created' + coval);
    });

    // Form Auto Fill - Read
    $('[data-flabel^="v-"]').each(function(){
        var coname = $(this).attr('data-flabel');
        var urlparaname = coname.split('-');
        if($('input[name='+urlparaname[1]+']')){
            $('input[name='+urlparaname[1]+']').each(function(){
            var coknam = 'v-'+urlparaname[1];
            var cokval = $(this).val();
             createCookie(coknam, cokval, 60);
            });
            
        }
        if(readCookie(coname)){
            var fieldval = readCookie(coname); 
            console.log(fieldval);
            $(this).val(fieldval);
        }
    });
	
    
}); 


// Cookie Functions - Create, Read and Erase
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


$(document).on('click', function(e){
    if(!$(e.target).closest('.header-toll-box ul').length) {
        if($('.header-toll-box ul').is(":visible")) {
            $('.header-toll-box ul').removeClass('open-ul');
        }
    }
});

function stickynav(){
    if($(this).scrollTop()  > 10){
        $(".navbar-abs").addClass('stickynav');   
    }else{
        $(".navbar-abs").removeClass('stickynav');       
    }   
}
function ScrollTo(clickele, scrollele){
    $(clickele).on('click', function() {
    $('html, body').animate({
        scrollTop: $(scrollele).offset().top-72
    }, 400);
});
}
function bannerAnim(animele){
    setTimeout(function(){
        if($(animele+":last-child").hasClass('bshow')){
            $('.abs').addClass('bshow flipInX animated');
            setTimeout(function(){
                $('.flipInX').removeClass('flipInX animated');
            },1000);
            $(animele+":last-child").removeClass('bshow');
            
        }else{
            
            $('.bshow').removeClass('bshow').next().addClass('bshow flipInX animated');
            setTimeout(function(){
                $('.flipInX').removeClass('flipInX animated');
            },1000);
        }
        bannerAnim('.proslide');
    },5000); 
}
function proimgslider(){
    
    var slidercontainer = $('.proimgslider');
    var imgcontainer = $('.prosecimg');
    imgcontainer.find('img').load(function() {
        $('.prosecimg').each(function(){
            var imghgt = $(this).find('img').height();
             slidercontainer.height(imghgt); // set slider height
        });
    });
    
   /* setTimeout(function(){
    imgcontainer.find('img').load(function() {
        var imghgt = $('.prosecimg').find('img').height();
        slidercontainer.height(imghgt); // set slider height
    });
    },0);*/
   
    imgcontainer.find('img:first-child').addClass('currentimg'); // display first image
    //disabled next arrow on load
    if(imgcontainer.find('img:last-child').hasClass('currentimg'))
        slidercontainer.find('.next').addClass('imgsldisabled');
    //disabled prev arrow on load
    if(imgcontainer.find('img:first-child').hasClass('currentimg'))
        slidercontainer.find('.prev').addClass('imgsldisabled');
    
    //Next
    slidercontainer.find('.next').on('click', function(){
        var currentimgcontainer = $(this).parent().children('.prosecimg');
        if(currentimgcontainer.find('img:last-child').hasClass('currentimg')){
            $(this).addClass('imgsldisabled');
        }else{
            slidercontainer.find('.prev').removeClass('imgsldisabled');
            currentimgcontainer.find('img.currentimg').removeClass('currentimg').next().addClass('currentimg');
            if(currentimgcontainer.find('img:last-child').hasClass('currentimg')){
                slidercontainer.find('.next').addClass('imgsldisabled');
            }
        }
    });
    
    //Prev
    slidercontainer.find('.prev').on('click', function(){
        var currentimgcontainer = $(this).parent().children('.prosecimg');
        if(currentimgcontainer.find('img:first-child').hasClass('currentimg')){
            $(this).addClass('imgsldisabled');
        }else{
            slidercontainer.find('.next').removeClass('imgsldisabled');
            currentimgcontainer.find('img.currentimg').removeClass('currentimg').prev().addClass('currentimg');
            if(currentimgcontainer.find('img:first-child').hasClass('currentimg')){
                slidercontainer.find('.prev').addClass('imgsldisabled');
            }
        }
    });
}
function selfeaturestab(){
    var winhash = window.location.hash;
    var ftab = $('.featurestab');
    //ftab.find('.nav-tabs a[href="'+winhash+'"]').tab('show');
    if(winhash != ""){
        $('html, body').animate({
            scrollTop: ftab.find(winhash).offset().top-72
        }, 200);
    }
}
	// comm100 code
function winpopup(){
	/*//window.open("https://chatserver5.comm100.com/chatwindow.aspx?planId=243&siteId=64061", "myWindow", "status = 0, height = 550, width = 500, resizable = 0")
    Tawk_API.showWidget();
    Tawk_API.maximize();*/
    window.open('http://www.ezeetechnosys.com/livesupport/?chat=cloud','_blank');
}

//quicksand Script
$(document).ready(function(){
	var items = $('#clients li'),
		itemsByTags = {};
	// Looping though all the li items:
	items.each(function(i){
		var elem = $(this),
			tags = elem.data('tags').split(',');
		// Adding a data-id attribute. Required by the Quicksand plugin:
		elem.attr('data-id',i);
		$.each(tags,function(key,value){
			// Removing extra whitespace:
			value = $.trim(value);
			if(!(value in itemsByTags)){
				// Create an empty array to hold this item:
				itemsByTags[value] = [];
			}
			// Each item is added to one array per tag:
			itemsByTags[value].push(elem);
		});
	});

	// Creating the "Everything" option in the menu:
	createList('All',items);

	// Looping though the arrays in itemsByTags:
	$.each(itemsByTags,function(k,v){
		createList(k,v);
	});
	
	$('#filter').on('click','a',function(e){
		var link = $(this);
		link.addClass('active').siblings().removeClass('active');
		// Using the Quicksand plugin to animate the li items.
		// It uses data('list') defined by our createList function:
		$('#clients').quicksand(link.data('list').find('li'));
		e.preventDefault();
        $(window).off("unveil");
        $("img").unveil(200);
	});
	$('#filter a:first').click();
	
	function createList(text,items){
		// This is a helper function that takes the
		// text of a menu button and array of li items
		// Creating an empty unordered list:
		var ul = $('<ul>',{'class':'hidden'});
		$.each(items,function(){
			// Creating a copy of each li item
			// and adding it to the list:
			$(this).clone().appendTo(ul);
		});
		ul.appendTo('#container');
		// Creating a menu item. The unordered list is added
		// as a data parameter (available via .data('list'):
		var a = $('<a>',{
			html: text,
			href:'#',
			data: {list:ul}
		}).appendTo('#filter');
	}
});

/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */
!function(t){t.fn.unveil=function(i,e){function n(){var i=a.filter(function(){var i=t(this);if(!i.is(":hidden")){var e=o.scrollTop(),n=e+o.height(),r=i.offset().top,s=r+i.height();return s>=e-u&&n+u>=r}});r=i.trigger("unveil"),a=a.not(r)}var r,o=t(window),u=i||0,s=window.devicePixelRatio>1,l=s?"data-src-retina":"data-src",a=this;return this.one("unveil",function(){var t=this.getAttribute(l);t=t||this.getAttribute("data-src"),t&&(this.setAttribute("src",t),"function"==typeof e&&e.call(this))}),o.on("scroll.unveil resize.unveil lookup.unveil",n),n(),this}}(window.jQuery||window.Zepto);