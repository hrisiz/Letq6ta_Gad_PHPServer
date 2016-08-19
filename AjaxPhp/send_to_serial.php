<?php 
	$input = $_GET['input_value'];
	if(($fp = fopen("/dev/ttyACM0","w")) == FALSE){
		echo "<p>Fail fopen</p>";
	}
	if(fwrite($fp,$input) == FALSE){
		echo "<p>Fail write</p>";
	}
	// echo fprintf($fp,"%s","1");
	fclose($fp);
	//echo "xaxa".$input;