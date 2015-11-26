function tGen(p,jsonString,jsonMap,defIdField)
{
	defIdField = typeof defIdField !== 'undefined' ? defIdField : "delta-force";

	var jsonObj = $.parseJSON(jsonString);

	var newTable = document.createElement("table");
	var newTableHead = document.createElement("thead");
	var newTableBody = document.createElement("tbody");
	
	newTable 	 = $(newTable);
	newTableHead = $(newTableHead);
	newTableBody = $(newTableBody);

	newTable.append(newTableHead);
	newTable.append(newTableBody);
	
	p.append($(newTable));
	

	// Add the necessary classes;
	
	newTable.addClass("table");
	
	// newTable is a JQuery object
	
	// Create the thead tags
	var newRow = document.createElement("tr");
	newRow = $(newRow);

	newTableHead.append(newRow);

	$.each(jsonMap,function(key,val){
		// console.log(key + val);
		var newTh = document.createElement("th");
		newTh = $(newTh);
		newTh.html(key);
		newRow.append(newTh);
	});

	// Append the rows
	
	$.each(jsonObj,function(ind,elem){
		var newRow = document.createElement("tr");
		newRow = $(newRow);
		newTableBody.append(newRow);
		
		if(defIdField !== "delta-force")
		{
			newRow.attr("id",elem[defIdField]);
		}

		$.each(jsonMap,function(key,val){
			// console.log(key + val);
			var newTd = document.createElement("td");
			newTd = $(newTd);
			newTd.html(elem[val].toString());
			newRow.append(newTd);
		});	
	});
}
