<html>
	<head>
	
		<title>TIC TIC TOE</title>
		
		<script language="javascript" src="https://code.jquery.com/jquery-2.2.4.min.js" type="text/javascript"></script>
		<script language="javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" type="text/javascript"></script>
		<script language="javascript" src="Script.js" type="text/javascript"></script>
		<link href="styles.css" type="text/css" rel="stylesheet" />

	</head>
<body>

	<h1>
	My Game
	</h1>
	<body onload="Start()">
	<div class="Box" id="TL" onclick='clicked("TL","0")'></div>
	<div class="Box" id="TM" onclick='clicked("TM","1")'></div>
	<div class="Box" id="TR" onclick='clicked("TR","2")'></div>
	<div class="Box" id="ML" onclick='clicked("ML","3")'></div>
	<div class="Box" id="MM" onclick='clicked("MM","4")'></div>
	<div class="Box" id="MR" onclick='clicked("MR","5")'></div>
	<div class="Box" id="BL" onclick='clicked("BL","6")'></div>
	<div class="Box" id="BM" onclick='clicked("BM","7")'></div>
	<div class="Box" id="BR" onclick='clicked("BR","8")'></div>
	<button type="button" id="BtnNewGame" onclick='NewGame();'>New Game
	</button>
	<div class="Score" id="X"></div>
	<div class="Score" id="O"></div>
	

</body>

</html> 