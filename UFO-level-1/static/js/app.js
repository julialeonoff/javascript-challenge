// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Add data to table
tableData.forEach(function(sightings)
    {
        console.log(sightings);
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(function([key, value])
            {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            }
        );
    }
);

// Filter button
// Why doesn't this work if i make a separate function for the filter, and declare inputfield/date after the button?
var button = d3.select("#filter-btn");

button.on("click", function()
    {
        d3.event.preventDefault();
        
        var inputField = d3.select("#datetime");
        var inputDate = inputField.property("value");
        var filteredDate = tableData.filter(date => date.datetime === inputDate);
        console.log(d3.event.target);
        console.log(filteredDate);

        d3.select("tbody").html("");

        filteredDate.forEach(function(filtered)
            {
                console.log(filtered);
                var row = tbody.append("tr");
                Object.entries(filtered).forEach(function([key, value])
                    {
                        console.log(key, value);
                        var cell = row.append("td");
                        cell.text(value);
                    }
                );
            }
        );
    }
);


