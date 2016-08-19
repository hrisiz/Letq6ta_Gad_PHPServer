jQuery(document).ready(function($){
	$(document).on("click","button.send_to_serial",function(){
		var value;
		switch($(this).attr("data-value")){
			case '1':
					value = "1 +100;";
				break;
			
			case '2':
					value = "1 +100;";
				break;
			
			case '3':

				break;
			
			case '4':

				break;
			
			case '5':

				break;
			
			case '6':

				break;
			
			case '7':

				break;
			
			case '8':
			
				break;
			
			case '9':
			
				break;
			
			case '+':
			
				break;
			
			case '-':
			
				break;
			
			case '.':
			
				break;
			
			case '*':
			
				break;
			
			default:
				alert("Wrong Input!");
				return;
		}
		$.ajax({
		  url: "ajax_switch.php",
		  type:"GET",
		  data:{
		  	"page":"send_to_serial",
		  	"input_value":value
		  },
		  success:function(result){
			  alert(result);
			}
		})
	});

});