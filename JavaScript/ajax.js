jQuery(document).ready(function($){
	var value_sign = '+';
	var check = setInterval(function(){
		$.ajax({
			url: "ajax_switch.php",
			type:"POST",
			data:{
				"page":"is_alive"
			},
			success:function(result){
				if(result == "OK"){
			 		header_animation_color = "green";
			  		$("input").prop('disabled',false);
				}
				if(result == "Error"){
			  		header_animation_color = "red";
			  		$("input").prop('disabled',true);
				}
			},
			error:function(){	
			  header_animation_color = "red";
		  		$("input").prop('disabled',true);
			}
		});
	},500);
	$(document).on("click","button#alive",function(){
		$.ajax({
		  url: "ajax_switch.php",
		  type:"POST",
		  data:{
		  	"page":"send_to_serial",
		  	"input_value":value
		  },
		  success:function(result){
			  console.log(result);
			}
		});
	});
	$(document).on("keypress","#input",function(e){
		var value = ";";
		var change_val = $('input#change_value').val();
		var change_val_with_sign = value_sign + change_val;
		switch(String.fromCharCode(e.keyCode)){
			case '1':
					value = "1 " + change_val_with_sign + ';';
				break;
			
			case '2':
					if(value_sign == '+'){
						value = "2 " + change_val_with_sign + ';' + "3 " + change_val_with_sign + ';';	
					}else{
						value = "0 " + change_val_with_sign + ';' + "1 " + change_val_with_sign + ';';					
					}
				break;
			
			case '3':
					value = "0 " + change_val_with_sign + ';';
				break;
			
			case '4':
					if(value_sign == '+'){
						value = "0 " + change_val_with_sign + ';' + "3 " + change_val_with_sign + ';';	
					}else{
						value = "1 " + change_val_with_sign + ';' + "2 " + change_val_with_sign + ';';					
					}
				break;
			
			case '5':
					//value = "0 " + change_val + ';' + "1 " + change_val + ';' + "2 " + change_val + ';' + "3 " + change_val + ';';
				break;
			
			case '6':
					if(value_sign == '+'){
						value = "1 " + change_val_with_sign + ';' + "2 " + change_val_with_sign + ';';	
					}else{
						value = "0 " + change_val_with_sign + ';' + "3 " + change_val_with_sign + ';';					
					}
				break;
			
			case '7':
					value = "2 " + change_val_with_sign + ';';
				break;
			
			case '8':
					if(value_sign == '+'){
						value = "0 " + change_val_with_sign + ';' + "1 " + change_val_with_sign + ';';	
					}else{
						value = "2 " + change_val_with_sign + ';' + "3 " + change_val_with_sign + ';';					
					}
				break;
			
			case '9':
					value = "3 " + change_val_with_sign + ';';
				break;
			
			case '+':
					value_sign = '+';
				break;
			
			case '-':
					value_sign = '-';
				break;
			
			case '.':
					if(value_sign == '+'){
						value = "0 " + change_val + ';' + "1 " + change_val + ';' + "2 " + change_val + ';' + "3 " + change_val + ';';
					}else{
						value = "0 0;" + "1 0;" + "2 0;"+ "3 0;";
					}
				break;
			
			case '*':
					value = "0 " + '+' + change_val + ';' + "1 " + '+' + change_val + ';' + "2 " + '+' + change_val + ';' + "3 " + '+' + change_val + ';';		
				break;

			case '/':
					value = "0 " + '-' + change_val + ';' + "1 " + '-' + change_val + ';' + "2 " + '-' + change_val + ';' + "3 " + '-' + change_val + ';';		
				break;
			
			default:
			 	console.log("Wrong input!");
				return;
		}
		if(String.fromCharCode(e.keyCode) != '+' && String.fromCharCode(e.keyCode) != '-'){
			console.log(value);
			$.ajax({
			  url: "ajax_switch.php",
			  type:"POST",
			  data:{
			  	"page":"send_to_serial",
			  	"input_value":value
			  },
			  success:function(result){
				  console.log(result);
				}
			});
		}
	});
});