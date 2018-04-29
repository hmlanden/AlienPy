// Get a reference to the table
var $tbody = document.querySelector("tbody");

// Create a variable to reference the dataset
var dataset = alienData;


// Define a function to create the table from the data file
function createTable() {
    $tbody.innerHTML = "";

    //iterate through the whole dataset
    for (var i = 0; i < dataset.length; i++) {
        var address = dataset[i];

        // pull out the individual data values from each item
        var fields = Object.keys(address);

        // create a new row
        var $row = $tbody.insertRow(i);

        // iterate through individual data values and put them into cells
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        }
    }
}

// Create table
createTable();
