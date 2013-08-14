	$(document).ready(function(){
		 
		/* testimonials rotator */ 
		 //$('.testi').cycle({ 
			//fx:    'fade', 
			//speed:  1200 
		 //});
		 
		 /* skills 
        YOU CAN CHAGE THIS NUMBERS FORM (1 - 5)
        */
        var skill1 = '5';   /* change number to suit your skills (HTML)*/
        var skill2 = '5';   /* change number to suit your skills (CSS)*/
        var skill3 = '3';   /* change number to suit your skills (.Net)*/
        var skill4 = '3.5';   /* change number to suit your skills (Javascript)*/
        var skill5 = '3.5';   /* change number to suit your skills (jQuery)*/
        var skill6 = '4	';   /* change number to suit your skills (Adobe Photoshop)*/
        var skill7 = '3';   /* change number to suit your skills (Adobe Firewoks)*/

        $('.about').click(function () {
            $('#skill1').animate({ height: '40' * skill1 + 'px', opacity: '0.2' * skill1 }, 1200, 'easeInOutExpo');
            $('#skill2').animate({ height: '40' * skill2 + 'px', opacity: '0.2' * skill2 }, 1200, 'easeInOutExpo');
            $('#skill3').animate({ height: '40' * skill3 + 'px', opacity: '0.2' * skill3 }, 1200, 'easeInOutExpo');
            $('#skill4').animate({ height: '40' * skill4 + 'px', opacity: '0.2' * skill4 }, 1200, 'easeInOutExpo');
            $('#skill5').animate({ height: '40' * skill5 + 'px', opacity: '0.2' * skill5 }, 1200, 'easeInOutExpo');
            $('#skill6').animate({ height: '40' * skill6 + 'px', opacity: '0.2' * skill6 }, 1200, 'easeInOutExpo');
            $('#skill7').animate({ height: '40' * skill7 + 'px', opacity: '0.2' * skill7 }, 1200, 'easeInOutExpo');
        });

        /* latest tweets */

        $("div.tweetWrap").tweet({
            username: "yaditya",   /* your twitter username  */
            join_text: "auto",
            avatar_size: 40,
            count: 3,
            auto_join_text_default: " ",
            auto_join_text_ed: " ",
            auto_join_text_ing: " ",
            auto_join_text_reply: " ",
            auto_join_text_url: " ",
            loading_text: "loading tweets..."
        });

        /* prettyPhoto */
        $("#gal a[rel^='prettyPhoto']").prettyPhoto({ animation_speed: 'normal', theme: 'light_square' });
	
	
		 $('textarea').click(function() {
			$('form p').css('visibility','hidden');
		 });
		
		/* navigation */
		 
		$('.menuButtonWrap').fadeTo(0,0); 
		
		 
		 $('nav ul li').hover( function() {
			$(this).css('backgroundColor', '#' + h);	
		}, function() {
			$(this).css('backgroundColor', '#1f1f1f');	
		});  
		
		
		 $('#contact #submit').hover( function() {
			$(this).css('color', '#' + h);	
		}, function() {
			$(this).css('color', '#fafafa');	
		});  
		
		
		$('nav li:nth-child(1)').stop().hover(function() {
		    $(this).animate({ width: '-=20px', height: '-=20px' }, 400, 'easeInOutBack');
		}, function() {
		    $(this).animate({ width: '+=20px', height: '+=20px' }, 200, 'easeInOutBack');
		});
		$('nav li:nth-child(2)').stop().hover(function() { 
			$(this).animate({width: '-=20px',height: '-=20px'},400, 'easeInOutBack');
		}, function() { 
			$(this).animate({width: '+=20px',height: '+=20px'},200, 'easeInOutBack');
		});
		$('nav li:nth-child(3)').stop().hover(function() {
			$(this).animate({width: '-=20px',height: '-=20px'},400, 'easeInOutBack');
		}, function() { 
			$(this).animate({width: '+=20px',height: '+=20px'},200, 'easeInOutBack');
		});
		$('nav li:nth-child(4)').stop().hover(function() {
			$(this).animate({width: '-=20px',height: '-=20px'},400, 'easeInOutBack');
		}, function() { 
			$(this).animate({width: '+=20px',height: '+=20px'},200, 'easeInOutBack');
		});  
		
		 
		
		
		$('nav li a').click(function() {     
		
		$('nav li a').parent('li').css('z-index','42');   
		
						var ppop = $(this).attr('class');  
						var pshow = document.getElementById(ppop);
						$(pshow).delay(800).removeClass('hidden');
						
						
			$('nav li a').not(this).parent('li').css('backgroundColor', '#' + h ).animate({
					width: '0px',
					height: '0px',  
					borderTopLeftRadius: 0, 
					borderTopRightRadius: 0,  
					borderBottomLeftRadius: 0, 
					borderBottomRightRadius: 0, opacity: 0}, 800, 'easeInOutBack', function() {  
				
					
					}).css('z-index','40');   
					
				
			$('.menuButton').animate({ 
					opacity: '1'
			 }, 800, 'easeInOutExpo').css('cursor','pointer'); 
				
		 }); 
		 
		 
		$('.work').click(function() {     
		
		$('.work').parent('li').css('z-index','42');   
		
						var ppop = $(this).attr('class');  
						var pshow = document.getElementById(ppop);
						$(pshow).delay(800).removeClass('hidden');
						
						
			$(this).parent('li').css('backgroundColor', '#' + h ).animate({
					width: '0px',
					height: '0px',  
					borderTopLeftRadius: 0, 
					borderTopRightRadius: 0,  
					borderBottomLeftRadius: 0, 
					borderBottomRightRadius: 0, opacity: 0}, 800, 'easeInOutBack', function() {  
				
					
					}).css('z-index','40');   
					
				
			$('.menuButton').animate({ 
					opacity: '1'
			 }, 800, 'easeInOutExpo').css('cursor','pointer'); 
				
		 }); 		 
				 
				 
				 
		$('.menuButton, .logo').click(function(e) {  
		 
			e.preventDefault();
		
			$('.page, .testimony li').addClass('hidden'); 
			
			$('.menuButton').fadeTo(0,0).css('cursor','inherit'); 
			
			$('.about, .contact').parent('li').animate({
					width: '240px',
					height: '240px',  
					borderTopLeftRadius: 0, 
					borderTopRightRadius: '80px',  
					borderBottomLeftRadius: '80px', 
					borderBottomRightRadius: 0, opacity: 1}, 400, 'easeOutBack').css('backgroundColor', '#1f1f1f' ); 
					
			$('.work, .social').parent('li').animate({
					width: '240px',
					height: '240px',  
					borderTopLeftRadius: '80px', 
					borderTopRightRadius: 0,  
					borderBottomLeftRadius: 0 , 
					borderBottomRightRadius: '80px', opacity: 1}, 400, 'easeOutBack').css('backgroundColor', '#1f1f1f' ); 
			
			
			
		});  
		  
		  
		
		/* work gallery */
		
		
		 	 // Trigger mouse move event over the 'navigation'.
				$("#main").mousemove(function(e) {
					// Enable scroll function only when the height of the 'slider' or menu is greater than the 'navigation'.
					if($(this).height() < $('ul#chooseW').height()) {
						// Calculate the distance value from the 'navigation' y pos and page Y pos.
						var distance = e.pageY - $(this).offset().top;
						// Get the percentage value with respect to the Mouse Y on the 'navigation'.
						var percentage = distance / $(this).height();
						// Calculate the new Y position of the 'slider'. 
						var targetY = -Math.round(($('ul#chooseW').height() - $(this).height()) * percentage);
						// With jQuery easing funtion from easing plugin.
						$('ul#chooseW').animate({top: [targetY+"px", "easeOutSine"]}, { queue:false, duration:0 });
						// Without easeing function. by default jQuery have 'swing'.
						//$('#slider').animate({top: [targetY+"px", "easeOutCirc"]}, { queue:false, duration:200 });
					}
				});
			$('.item').click(function() {
			 
			 
				$('#chooseW').css('top','0px');
			 
			 
					$('.item').removeClass('current');
					$(this).addClass('current'); 
					$('.item').css('color','#fafafa'); 
					$('.current').css('color','#'+h); 
					
					thisItem 	= $(this).attr('rel');
					
					if(thisItem != "all") {
					
						$('ul#chooseW li[rel='+thisItem+'] a').addClass('current');
					
						$('ul#chooseW li[rel='+thisItem+']').stop()
																.animate({'width' : '120px', 
																			 'opacity' : 1, 
																			 'marginLeft' : '20px'
																			});
																			
						$('ul#chooseW li[rel!='+thisItem+']').stop()
																.animate({'width' : '0px', 
																			 'opacity' : 0,
																			 'marginLeft' : '0px'
																			} ); 
					} else {
						
						$('ul#chooseW li').stop()
										.animate({'opacity' : 1, 
													 'width' : '120px', 
													 'marginLeft' : '20px'
													} );
					} 
				});
		
		 
		 
				 
	
		/* style switcher */

		var h = '43c204';
		$('#colorSelector').ColorPicker({
		    color: '#43c204',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500); 
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.logo, .testimony li, .contactInfo p span, .highlight, h1, .ci1 p,   .titles li span:not("span span"), .download,  .tweetWrap a ').css('color', '#' + hex);  
				$('.skill , #skills, #contact input, #input, #input2').css('borderColor', '#' + hex);
				$('.testimony li span').css('color','rgba(31,31,31,0.3)');
				$('#colorSelector').css('-webkit-box-shadow','0px 0px 10px 0px #' + hex);
				$('#colorSelector').css('-moz-box-shadow','0px 0px 10px 0px #' + hex);
				$('#colorSelector').css('box-shadow','0px 0px 10px 0px #' + hex);
				$('.menuButton img, .download, #contact #submit ').css('backgroundColor', '#' + hex);	
				h = hex;
			}
		});
		
		
		
		$('.tweetWrap a').hover(function() {
			$(this).css('color','#'+h);
		}, function() {
			$(this).css('color','#fafafa'); 
		});	 
		
		$('.item').hover(function() {
			$(this).css('color','#'+h);
		}, function() {
			$(this).css('color','#fafafa'); 
			$('.current').css('color','#'+h); 
		});	
		
		$('.download, .menuButton img').hover(function() {
			$(this).css('backgroundColor','#1f1f1f');
			}, function() {
			$(this).css('backgroundColor','#'+h);
		});	
		
		
		/* WORK */
		$('.titles').fadeTo(0,0);
		$('#gal').hover(function() {
			$('#gal ul:not(".titles")').fadeTo(400,0.3,'easeOutExpo'); 
			$('#next, #prev, .titles').fadeTo(400,0.6,'easeOutExpo');  
		}, function() {
			$('#gal ul:not(".titles")').fadeTo(400,1,'easeOutExpo');
			$('#next, #prev, .titles').fadeTo(400,0,'easeOutExpo');
		});

		$('#next, #prev').hover (function() {
			$(this).fadeTo(200,0.3);
		}, function() {
			$(this).fadeTo(200,0.6);
		});
		  
		$('textarea').click(function() {
			$('#input2 label').addClass('hidden');
		});
		
		/* gallery */
		$('#gal ul').cycle({ 
			fx:     'fade', 
			speed:  'slow', 
			timeout: 0, 
			next:   '#next', 
			prev:   '#prev' 
		});
		
		
		/* social */
		
		 $('.sociala img').hover( function() {
			$(this).fadeTo(200,0.6);
		}, function() {
			$(this).fadeTo(200,1);
		});  
		
		
		$('#contactform').validate();
		
		 
	});
		
		