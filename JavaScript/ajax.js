jQuery(document).ready(function($){
	$(document).on("click","button.send_to_serial",function(){
		$.ajax({
		  url: "ajax_switch.php",
		  type:"GET",
		  data:{
		  	"page":"send_to_serial",
		  	"input_value":$(this).attr("data-value")
		  },
		  success:function(result){
			  alert(result);
			}
		})
	});
});