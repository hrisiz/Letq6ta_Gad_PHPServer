<style>
	input{
		width:100%;
		background-color:grey;
		color:black;
		font-size:10em;
	}
	input#change_value{
		min-height:100px;
	}
	input#input{
		min-height:500px;
	}
	input:focus{
		background-color:lightgrey;
	}
</style>
<div>
	<input tabindex='1' id="change_value" type="number" value="100" style=""/>
	<br>
	<input tabindex='2' id="input"/>
</div>