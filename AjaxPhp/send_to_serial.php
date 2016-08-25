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
	//echo "xaxa".$input;
	//stty -F /dev/ttyUSB1 9600 min 0 time 0 line 0 -brkint -icrnl -imaxbel -opost -isig -icanon -iexten -echo -echoe -echok -echoctl -echoke
	//stty -F /dev/ttyUSB0 cs8 9600 ignbrk -brkint -icrnl -imaxbel -opost -onlcr -isig -icanon -iexten -echo -echoe -echok -echoctl -echoke noflsh -ixon -crtscts

 //   $fd = dio_open('/dev/ttyUSB0', O_RDWR | O_NOCTTY | O_NONBLOCK);


?>