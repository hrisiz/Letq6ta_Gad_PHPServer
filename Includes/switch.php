<?php
	$page = $_GET['page'];
	include "View/".ucfirst($page)."/".$page.".php";