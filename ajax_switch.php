<?php
	session_start();
	if(!isset($_SESSION['user'])){
		header("Location: /");
		exit();
	}else{
		$_SESSION['user'] = $_SESSION['user'];
		$_SESSION['serial_file'] = $_SESSION['serial_file'];
	}
	$page = $_POST['page'];
	$file = "AjaxPhp/".$page.".php";
	if(file_exists($file)){
		include $file;
	}else{
		echo "Error";
	}