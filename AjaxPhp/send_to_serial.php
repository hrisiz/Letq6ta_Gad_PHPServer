<?php 
	$input = $_GET['input_value'];
	if(($fp = fopen($_SESSION['serial_file'],"w")) == FALSE){
		echo "<p>Fail fopen Problem</p>";
	}
	if(fwrite($fp,$input) == FALSE){
		echo "<p>Fail write Problem</p>";
	}
	// echo fprintf($fp,"%s","1");
	fclose($fp);
	//echo "xaxa".$input;