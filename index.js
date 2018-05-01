// Get a reference to the table
var $tbody = document.querySelector("tbody");

// Get a reference to the date column
var datetime = document.querySelector("#datetime")

// Get a reference to the search box and buttons
var $dateInput = document.querySelector("#search");
var $searchButton = document.querySelector("#searchButton");
var $reloadButton = document.querySelector("#reloadButton");

// Add a listener to the button so we can tell when it's clicked
$searchButton.addEventListener("click", searchButtonClicked);

// Add listener to reload dataset button
$reloadButton.addEventListener("click", reloadButtonClicked);

// Create a variable to reference the dataset
var dataset = dataSet

// Define a function to create the table from the data file
function createTable() {
    $tbody.innerHTML = "";

    //iterate through the whole dataset
    for (var i = 0; i < 200; i++) {
        var sighting = dataset[i];

        // pull out the individual data values from each item
        var fields = Object.keys(sighting);

        // create a new row
        var $row = $tbody.insertRow(i);

        // iterate through individual data values and put them into cells
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];

            var $cell = $row.insertCell(j);
            $cell.innerHTML = sighting[field];
        }
    }
}

// function for when you click the button 
function searchButtonClicked() {
    // Get date input
    var dateInput = $dateInput.value;

    console.log(dateInput)
    try {
        // filter on date
        dataset = dataset.filter(function (row) {
            return row.datetime === dateInput;
        });

        // recreate table
        createTable();
    } catch {
        console.log(Error)
    } finally {}

}

function reloadButtonClicked() {
    dataset = dataSet
    createTable();
}

// Create table
createTable();
