	
$(document).ready(function(){

	
	//VARIABLES FOR QUICK MODS
	var navTarget = "ul#nav li a"  																				//menu link to target
	var contentHolder = "#content-wrapper"																		//specify gobal content holder
	var sideBarTarget ="#sideBar"																				//specify sidebar
	var sbToggleAmount 																							//create varible to hold sidebar toggle amount		

	//CUFON
	Cufon.replace('h1,#slidecaption-grande,.comment div', { fontFamily: 'Bebas Neue' });						//set primary font
	Cufon.replace('h2,h3,h4,h5,h6,.name',{fontFamily: 'Ubuntu'}); 												//set secondary font
	
	
	//INITIATE/SET
	
	//html/wrapper
	$('#wrapper').css({overflow:'hidden'});																		//hide overflow
	$('html').css({overflow:'hidden'});																			//ie7 fix
	$('#launch-but #label').html(launchButTitle);																//toggle but initial title
	
	
	//check if raster is on/of
	if(ss_raster==0){
		$('#wrapper').addClass('raster');																		//add raster if 0, else remove
	}else{
		//nothing
	}
	
	
	//supersized control navigation
	if(ss_transitionType==0 || ss_transitionType==1 || ss_transitionType==3 || ss_transitionType==5 || ss_transitionType==6 || ss_transitionType==7){
		
		//use original horizontal
		
	}else if(ss_transitionType==2 || ss_transitionType==4){
		
		
		//use vertical
		$('#prevslide').css({backgroundPosition: '0px -300px'});
		$('#nextslide').css({backgroundPosition: '0px -200px'});
		
		$('#prevslide').hover(function(){							   
			$(this).css({backgroundPosition: '0px -350px'})                     
			},
			function(){
			$(this).css({backgroundPosition: '0px -300px'})                     
			});
 
			
		$('#nextslide').hover(function(){							   
			$(this).css({backgroundPosition: '0px -250px'})                     
			},
			function(){
			$(this).css({backgroundPosition: '0px -200px'})                     
			});
	
	}else{
		
		//nothing
		
	}
	
	
	//twitter adjustment
	var twitterH= 97*TweetsDisp																					//set the correct height of the twitter box depending on no of tweets to display
	
	if(noTweets>1 || noTweets <=3){																				// if greater than 1 but less than 3 adjust the height accordingly
		$('#tweet-container').css({height:twitterH+'px'});														//set the correct height
	}else{
		$('#tweet-container').css({height:'288px'});															//if above 3, set it to a fixed height of 288px
	}
	
	//sidebar 
	$(window).load(function () {				 
			sbToggleAmount = $('#sideBar').height() 															//set toggle amount based on sidebar height
			$('#sideBar').css({marginTop: -sbToggleAmount});													//position sidebar
			$('#sideBar').fadeIn();																				//make side bar visible
			$('#launch-but').fadeIn();																		
	});
	
	/*init team div*/
	$('ul.listStyle li:last').css('border', 'none'); 															//make sure the last team has no border
	$('ul.listStyle li:last').css({margin :'0px',padding:'0px'});
	
	/*init blog div*/
	$('#blogContainer ul li div.post:last').css('border', 'none'); 												//make sure the last team has no border
	$('#blogContainer ul li div.post:last').css({margin :'0px'});
	
	//init pajinate containers
	$('#folioContainer').pajinate({start_page : folio_start_page, items_per_page : folio_items_per_page	});     //initialize pagination of folio items
	$('#blogContainer').pajinate({start_page : 0,items_per_page : blog_items_per_page	});     				//initialize pagination of folio items
	
	//init fancybox
	$("a[rel=folioGroup]").fancybox({
				'transitionIn'		: lightboxTransition,
				'transitionOut'		: lightboxTransition,
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
	});
	
	
	
	//TOGGLE CONTENT
	
	//launch but special effect
	  $('#launch-but').hover(
            function(){
                $('#circle').stop().animate({width : '92px', height : '92px', 'margin-top' : '-46px', 'margin-left' : '-46px'  }, 200);
				$('#circle-overlay').stop().delay(100).animate({width : '95px', height : '95px', 'margin-top' : '-47.5px', 'margin-left' : '-47.5px'  }, 200);
            },
            function(){
                $('#circle').stop().delay(200).animate({width : '80px', height : '80px', 'margin-top' : '-40px', 'margin-left' : '-40px'  }, 200);
			    $('#circle-overlay').stop().animate({width : '0px', height : '0px', 'margin-top' : '0px', 'margin-left' : '0px'    }, 200);
            }
        );
	
	//launch but actions
	$('#launch-but').click(function(){
								 
			$(sideBarTarget).animate({marginTop:0},sideBarToggleSpeed, menuEase);								//toggle sidebar
			$(contentHolder).show().animate({top:'0px', opacity:1}, contentToggleSpeed,pageEase);				//toggle content
			$('#close-but div').html(closeButTitle);															//set toggle but title
			$('#controls-wrapper').fadeOut();																	//fade out gallery nav
			$('#slidecaption-grande').fadeOut();																//*ie 7/8 fix- fade out slide caption
			$('#wrapper').css({overflow:'auto'});																//make scroll bar reappear
			$('html').css({overflow:'auto'});																	//*ie 7
			$('h1').stop().animate({opacity:1},pageFadeSpeed);													//fade out h tags for ie 7/8							 
			$('h2').stop().animate({opacity:1},pageFadeSpeed);	
			var pos = $(contentHolder).offset().top
			$(this).fadeOut();
			return false;
	
		 
	});
	
	//close but actions
	$('#close-but').click(function() {
		 	$(sideBarTarget).animate({marginTop:-sbToggleAmount},sideBarToggleSpeed, menuEase);
			$(contentHolder).animate({top:'300px',opacity:0}, contentToggleSpeed,pageEase, function(){			//hide content once animation is done, deactivate scrollbar
						$(contentHolder).hide();
			});										
			$('#controls-wrapper').delay(400).fadeIn();									
			$('#slidecaption-grande').delay(400).fadeIn();	
			$('h1').stop().animate({opacity:0},pageFadeSpeed);									 
			$('h2').stop().animate({opacity:0},pageFadeSpeed);
			$('#launch-but').delay(sideBarToggleSpeed).fadeIn('normal',menuEase); 
			return false;		   
								 
	});
	
	
	//MAIN MENU - PAGE SWITCH

	 //add ids to the menu links
	 $(navTarget).each(function(i){
		i++						
   		this.id = this.id +"_" +i ;
	 });
	 
	 //add ids to the pages
	 $(contentHolder).children('.content').each(function(i){
		i++													 
   		this.id = this.id + "page" +"_" + i;
	 });
	 
	 //hide all, then set the first
	 $(contentHolder).children('.content').hide();
	 $(contentHolder).children("#page_"+startPage).show();
	 $('#_'+startPage).addClass('active');
	
	
	 $(navTarget).click(function() {

			//ensure link isnt clickable when active
			if ($(this).hasClass('active')) return false;
	
			var PrevLink = $(navTarget+'.active')
			$(PrevLink).removeClass('active');
			var PrevId = $(PrevLink).attr('id');
			var NextLink = $(this).addClass('active');
			var NextId = $(this).attr('id');
		
			//set markers
			var prevPage = $("#content-wrapper").children("#page"+PrevId);
			var nextPage = $("#content-wrapper").children("#page"+NextId);	
			
			$(prevPage).css({opacity:1});
			$(nextPage).css({opacity:0});
			
			//run ie fix for animating cufon text
			$(prevPage).children().each(function(){
				$('h1').stop().animate({opacity:0},pageFadeSpeed)									 
				$('h2').stop().animate({opacity:0},pageFadeSpeed)														
			 })
			
			//fade out previous + call things once done
			$(prevPage).stop().animate({opacity:0},pageFadeSpeed, function(){
				//animation done, hide previous page												   
				$(this).hide();
				//show the next page
				$(nextPage).show();
				//fade it in
				$(nextPage).animate({opacity:1},pageFadeSpeed)
				//run ie fix for animating cufon text
				$(nextPage).children().each(function(){	
					$('h1').stop().animate({opacity:1},pageFadeSpeed)									 
					$('h2').stop().animate({opacity:1},pageFadeSpeed)					
				
				 })
			})
			
			
			
	});	
	

	//HOVERS
	$("._rollover").animate({ "opacity": "0" });
	
	var targetHover
	
	/*folio hovers*/
	$("._logoThumb").hover(

			function() {
				targetHover = $(this).parent().children('._rollover')
				$(targetHover).animate({"opacity": "0.9"}, hoverFadeSpeed);
				
				if($(this).parent('.thumb_holder')){
					$(this).css({backgroundPosition:'-160px'});
					$(this).stop().animate({backgroundPosition:'0px'}, 200);
																																   
				}
				
		},
			function() {
				targetHover = $(this).parent().children('._rollover')
				$(targetHover).animate({"opacity": "0"}, hoverFadeSpeed);
				
				if($(this).parent('.thumb_holder')){
					
					$(this).stop().animate({backgroundPosition:'160px'}, 200);
					
				}
				
		});
	
		
		/*blog hovers*/
		$("._logoBlog").hover(

			function() {
				targetHover = $(this).parent().children('._rollover')
				$(targetHover).animate({"opacity": "0.9"}, hoverFadeSpeed);
				
				if($(this).parent('.blogImg_holder')){
					$(this).css({backgroundPosition:'-500px'});
					$(this).stop().animate({backgroundPosition:'0px'}, 300);
																																   
				}
				
		},
			function() {
				targetHover = $(this).parent().children('._rollover')
				$(targetHover).animate({"opacity": "0"}, hoverFadeSpeed);
				
				if($(this).parent('.blogImg_holder')){
					
					$(this).stop().animate({backgroundPosition:'500px'}, 300);
					
				}
				
		});
	
	
		/*icon hovers*/
		$("._rollover").hover(
			function() {
				$(this).animate({"opacity": "1"}, hoverFadeSpeed);
		},
			function() {
				$(this).animate({"opacity": "0"}, hoverFadeSpeed
								);
		});
		
		//SET SOCIAL URLS
		$("a#fb").attr("href", "http://www.facebook.com/pages/"+facebookPageID)
		$("a#twr").attr("href", "http://www.twitter.com/"+twitterID)
		$("a#msp").attr("href", "http://www.myspace.com/"+myspaceID)
		$("a#fkr").attr("href", "http://www.flickr.com/photos/"+flickrID)
		$("a#yt").attr("href", "http://www.youtube.com/user/"+youtubeID)
		
		
		//CONTACT FORM - original code by Farid Hadi -http://www.faridhadi.com
		
		$('#reload').hide();// hide form reload button
		
		//field values on focus,on focus out
		$('#contactForm #name,#contactForm #email,#contactForm #subject,#contactForm #message' ).focus(function(){
			var initVal = $(this).val();
			$(this).val( initVal === this.defaultValue ? '' : initVal );
		}).blur(function(){
			var initVal = $(this).val();
			$(this).val( initVal.match(/^\s+$|^$/) ? this.defaultValue : initVal );
		});
		
		$('#contactForm #submit').click(function() {
												 
			// Fade in the prloader
			$('#contactForm #formProgress').hide();
			$('#contactForm #formProgress').html('Sending&hellip;');
			$('#contactForm #formProgress').fadeIn();
			
			// Disable the submit button
			$('#contactForm #submit').attr("disabled", "disabled");
			
			// Set temporary variables for the script
			var isFocus=0;
			var isError=0;
			
			// Get the data from the form
			var name=$('#contactForm #name').val();
			var email=$('#contactForm #email').val();
			var subject=$('#contactForm #subject').val();
			var message=$('#contactForm #message').val();
			
			
			//check if form element have verify class, if so remove and recheck
			if ($('#contactForm #name').hasClass('formVerify')){
				$('#contactForm #name').removeClass('formVerify');
			}
			if ($('#contactForm #email').hasClass('formVerify')){
				$('#contactForm #email').removeClass('formVerify');
			}
			if ($('#contactForm #message').hasClass('formVerify')){
				$('#contactForm #message').removeClass('formVerify');
			}
			
			//Make sure bkgs are set to original
			$('#contactForm #name').addClass('formReset');
			$('#contactForm #email').addClass('formReset');
			$('#contactForm #message').addClass('formReset');
			
			// Validate the data
			if(name=='Name*' || name=='' ) {
				$('#contactForm #name').addClass('formVerify');
				$('#contactForm #name').focus();
				isFocus=1;
				isError=1;
			}
			if(email=='E-mail*' || email=='' ) {
				$('#contactForm #email').addClass('formVerify');
				if(isFocus==0) {
					$('#contactForm #email').focus();
					isFocus=1;
				}
				isError=1;
			} else {
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(reg.test(email)==false) {
					$('#contactForm #email').addClass('formVerify');
	
					if(isFocus==0) {
						$('#contactForm #email').focus();
						isFocus=1;
					}
					isError=1;
					
				}
			}
			if(message=='Message*' || message=='' ) {
				$('#contactForm #message').addClass('formVerify');
				if(isFocus==0) {
					$('#contactForm #message').focus();
					isFocus=1;
				}
				isError=1;
			}
			
			// Terminate the script if an error is found
			if(isError==1) {
				$('#contactForm #formProgress').html(formWarning);
				
				
				// Activate the submit button
				$('#contactForm #submit').attr("disabled", "");
				
				return false;
			}
			
			$.ajaxSetup ({
				cache: false
			});
			
			var dataString = 'name='+ name + '&email=' + email + '&subject=' + subject + '&message=' + message;  
			$.ajax({
				type: "POST",
				url: "php/submit-form-ajax.php",
				data: dataString,
				success: function(msg) {
					
					/*alert(msg);*/
					
					
					// Check to see if the mail was successfully sent
					if(msg=='Mail sent') {
						
						// Update the loader to a check + message
						$('#sentConfirmMessage').html(formSuccess);
						
						//Change the main title
						$('#sentConfirmTitle').html(formSuccessTitle);
						
						//Display the info
						$('#sentConfirmMessage').fadeIn(1000);
						$('#sentConfirmTitle').fadeIn(1000);
						
						// Reinitialize the fields
						$('#contactForm #name').val('Name*');
						$('#contactForm #email').val('E-mail*');
						$('#contactForm #subject').val('Subject');
						$('#contactForm #message').val('Message*');
						
						// Fade out the contact from, then toggle the height
						$("#contactForm").animate({"opacity": "0"}, 1000);	
						$('#contactForm').delay(200).slideToggle("slow");
						
						//Fade in reload link
						$('#reload').fadeIn();	
						
						
						//Ensure new title is cufoned after sending
						Cufon.replace('h1#sentConfirmTitle');
						
						
					} else {
						$('#contactForm #formProgress').html(formError);
					}
					
					// Activate the submit button
					$('#contactForm #submit').attr("disabled", "");
				},
				error: function(ob,errStr) {
					$('#contactForm #formProgress').html(formError);
					
					// Activate the submit button
					$('#contactForm #submit').attr("disabled", "");
				}
			});
			
			return false;
	});
		
	// Contact form reload but function	
	$('#reload').click(function() {
		$("#contactForm").animate({"opacity": "1"}, 1000);	
		$('#contactForm').animate({ height:'toggle' }, 1000);
		$('#sentConfirmMessage').html(formReload);
		$('#sentConfirmTitle').html(formReloadTitle);
		$('#reload').fadeOut();
		$('#contactForm #formProgress').html('*required');
		//Ensure new title is cufoned
		Cufon.replace('h1#sentConfirmTitle');
		
	});			
		
		
		
		
});
