$(document).ready(function(){


	var json_string = '[{"tshirt_size": "XL", "tshirt_given": true, "fcard_given": false, "extra_given": true },{"tshirt_size": "L", "tshirt_given": true, "fcard_given": false, "extra_given": true },{"tshirt_size": "M", "tshirt_given": true, "fcard_given": false, "extra_given": true }]' ;
	
	var json_map = {
		"size" : "tshirt_size",
		"tgiven" : "tshirt_given",
		"fgiven" : "fcard_given",
		"egiven" : "extra_given"
	}

	tGen($("#parent1"),json_string,json_map);

	tGen($("#parent2"),json_string,json_map,"tshirt_size");
});