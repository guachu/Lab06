$('#dynamictable').append('<table></table>');
var table = $('#dynamictable').children();    
table.append("<tr><td>a</td><td>b</td></tr>");
table.append("<tr><td>c</td><td>d</td></tr>");



$(function () {
    $("#btnGenerate").click(function () {
        //Build an array containing Customer records.
        var customers = new Array();
        customers.push(["Customer Id", "Name", "Country"]);
        customers.push([1, "John Hammond", "United States"]);
        customers.push([2, "Mudassar Khan", "India"]);
        customers.push([3, "Suzanne Mathews", "France"]);
        customers.push([4, "Robert Schidner", "Russia"]);
 
        //Create a HTML Table element.
        var table = $("<table />");
        table[0].border = "1";
 
        //Get the count of columns.
        var columnCount = customers[0].length;
 
        //Add the header row.
        var row = $(table[0].insertRow(-1));
        for (var i = 0; i < columnCount; i++) {
            var headerCell = $("<th />");
            headerCell.html(customers[0][i]);
            row.append(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = $(table[0].insertRow(-1));
            for (var j = 0; j < columnCount; j++) {
                var cell = $("<td />");
                cell.html(customers[i][j]);
                row.append(cell);
            }
        }
 
        var dvTable = $("#dvTable");
        dvTable.html("");
        dvTable.append(table);
    });
});