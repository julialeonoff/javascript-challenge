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
var button = d3.select("#filter-btn");

button.on("click", function()
    {
    d3.event.preventDefault();
    
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();
    
    // Tried doing && instead of ||, but would bring an empty table if a filter
    // wasn't used
    var filteredInfo = tableData.filter(info => info.datetime === inputDate ||
                                                info.city === inputCity ||
                                                info.state === inputState ||
                                                info.country === inputCountry ||
                                                info.shape === inputShape);

    console.log(d3.event.target);
    console.log(filteredInfo);

    d3.select("tbody").html("");

    filteredInfo.forEach(function(filtered)
        {
            console.log(filtered);
            var row = tbody.append("tr");
            Object.entries(filtered).forEach(function([key, value])
                {
                    console.log(key, value);
                    var cell = row.append("td");
                    cell.text(value);
                });
        });
});


