<?php 
	$input = $_GET['input_value'];
	if(($fp = fopen("/dev/ttyUSB1","w")) == FALSE){
		echo "<p>Fail fopen Problem</p>";
	}
	if(fwrite($fp,$input) == FALSE){
		echo "<p>Fail write Problem</p>";
	}
	// echo fprintf($fp,"%s","1");
	fclose($fp);
	//echo "xaxa".$input;