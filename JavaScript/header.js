header_animation_color = "green";
top_animation_interval = false;
jQuery(document).ready(function($){
	var password = "";
	var deg = 0;
  	$("div#password_input").hide();
  	var parent_div = $("header > div > div#top_animation");
  	header_animation_color = "green";
  	top_animation_interval = setInterval(function(){
  		deg += 5;
  		if(deg == 360){
  			deg = 0;
  		}
  		parent_div.css("background","linear-gradient("+deg+"deg,black,"+header_animation_color+",black)");
  	},100);
	$("section").show();
  
	$(document).on("click","header > div > div#top_animation",function(){
		if(top_animation_interval != false){
			$("header > div#information").slideToggle();
		}
	});
});