	  $(".2").css('font-size', '12px');
			
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
        
		  $(".nav-header").addClass("small");
		  	 $(".nav-header").addClass("shadow");
		  
		  	  $(".htitle-div").removeClass("htitle-div");
		  	   $(".2").css('font-size', '0px');
		
			updateSliderMargin();
		}
	else 	if
      ($(document).scrollTop() < 100){
		  $(".nav-header").removeClass("small");
		  	 $(".nav-header").removeClass("shadow");
		  
		  	  $(".textr").addClass("htitle-div");
		  	  $(".2").css('font-size', '12px');
			updateSliderMargin();
		}
	});

    
    $('.ripple').on('click', function (event) {
      
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
      

      
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        }) 
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });
    
 