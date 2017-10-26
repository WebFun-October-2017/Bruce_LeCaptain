$(document).ready(function(){
	var data3;
	var pokeURL2 = "https://pokeapi.co/api/v2/pokemon/";
	var tempURL;

	for (var i=1; i<152; i++) {
		tempURL = pokeURL2 + i + "/";
		$.getJSON(tempURL, function(data3) {
			$("#sprites").append('<img src="' + data3.sprites.front_default + '" alt="sprite' + i + '">');
		});
	}
});