<style>
	p.error{
		color:red;
		text-align:center;
		width:100%;
		padding-top:80px;
	}
</style>
<?php
	session_start();
	if(isset($_POST['password']) && $_POST['password'] == "hrisiz"){
		file_put_contents("last_alive_time.inf",time());
		$serial_file = "";
		foreach (glob("/dev/*USB*") as $filename) {
		    $serial_file = $filename;
		}
		if($serial_file == ""){
			echo "<p class=\"error\">Drone is not connected to Serial port!</p>";
		}else{
			$_SESSION['serial_file'] = $serial_file;
			$_SESSION['user'] = "user";
		}
	}elseif(isset($_POST['password'])){
		echo "<p class=\"error\">Wrong password!</p>";		
	}
	if(!isset($_SESSION['user'])){
		include "login.php";
		exit();
	}
?>
<html>
	<head>
		<script src="JavaScript/jquery-1.12.2.min.js"></script>
		<script src="JavaScript/header.js"></script>
		<script src="JavaScript/ajax.js"></script>
		<link rel="stylesheet" type="text/css" href="CSS/css.css">
	</head>
	<body>
		<header>
			<div>
				<div id="top_animation">
					<div>
						<p></p>
					</div>
				</div>
			</div>
			<div id="information">
				<ul>
					<li>Battery:</li>
					<li>Drone position:</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</header>

		<section>
			<div>
				<input tabindex='2' id="input"/>
				<input tabindex='1' id="change_value" type="number" value="100"/>
			</div>
		</section>

		<footer>

		</footer>
	</body>
</html>