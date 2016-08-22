<?php 
	$input = $_POST['input_value'];
	echo $_SESSION['serial_file'];
	if(($fp = fopen($_SESSION['serial_file'],"w")) == FALSE){
		echo "<p>Fail fopen Problem</p>";
	}
	if(fwrite($fp,$input) == FALSE){
		echo "<p>Fail write Problem</p>";
	}
	// echo fprintf($fp,"%s","1");
	fclose($fp);
	echo "xaxa".$input;