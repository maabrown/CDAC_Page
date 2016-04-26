/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.2.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

var tpj=jQuery;               // MAKE JQUERY PLUGIN CONFLICTFREE
tpj.noConflict();
                
tpj(document).ready(function() {
                
                   if (tpj.fn.cssOriginal!=undefined)   // CHECK IF fn.css already extended
                   tpj.fn.css = tpj.fn.cssOriginal;
 
                    tpj('.fullwidthbanner').revolution(
                        {    
                            delay:9000,                                                
                            startheight:490,                            
                            startwidth:890,
                            
                            hideThumbs:200,
                            
                            thumbWidth:100,                            
                            thumbHeight:50,
                            thumbAmount:5,
                            
                            navigationType:"both",                  
                            navigationArrows:"nexttobullets",        
                            navigationStyle:"round",                
                            touchenabled:"on",                      
                            onHoverStop:"on",                        
                            
                            navOffsetHorizontal:0,
                            navOffsetVertical:20,
                            
                            shadow:0,
                            fullWidth:"off"    
                                                        
                        });
})

tpj(document).ready(function(){
  tpj(".carouselStyle").owlCarousel({
                singleItem: true,
                autoPlay: 6000,
                navigation: true,
                loop: true,
                pagination: true,
                navigationText: ['Previous', 'Next']
  });
  tpj(".carouselStyle .owl-controls").addClass("newsControlDesign");
});

// tpj(document).ready(function() {
// 	tpj(".natureImages").slick({
// 	  slidesToShow: 1,
// 	  slidesToScroll: 1,
// 	  draggable: false,
// 	  dots: true,
// 	  arrows: false
// 	})
// });

tpj(document).ready(function() {
	tpj('.missionStatements').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  draggable: false,
	  dots: false,
	  arrows: true,
	})
});

// the first parameter sets the X - so if it is at 50% it centers the image, b/c it is 50% in from its original (0,0) coordinates
// the second parameter determines how fast it moves - which influences where the image is on the y axis - so part of the image may
// seem cut off when it loads but as you scroll it will be fully shown

// tpj(document).ready(function() {
// 	tpj('#headerSection').parallax('50%', .20);
// });

    tpj('#headerSection').parallax('50%', .20);

    tpj('#headerSection .logo').parallax('50%', .9);

// tpj(document).ready(function() {
//     tpj('#headerSection .logo').parallax('50%', .9);
// })

tpj(document).ready(function() {
    tpj('#missionSection').parallax('50%', .60);
});