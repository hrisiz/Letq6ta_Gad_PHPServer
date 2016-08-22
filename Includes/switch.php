<?php
	$page = "home";
	if(isset($_GET['page']))
		$page = $_GET['page'];
	include "View/".ucfirst($page)."/".$page.".php";