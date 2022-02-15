// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear existing data
    tbody.html("");

    data.forEach((dataRow) => {
        // Append a row for each value in the row
        let row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            // Add each value as a table cell
            let cell = row.append("td");
            cell.text(val);
        });
    });
}


function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using the date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    buildTable(filteredData);
};


// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
