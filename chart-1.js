var numSteps = 50;
var stepSize = 1;

///////// Generate random steps
var steps1 = [];
for (var i = 0; i < numSteps; i++) {
steps1.push(Math.random() < 0.5 ? -stepSize : stepSize);
}

////////// Calculate the position at each step
var path1 = [0];
for (var i = 1; i < numSteps; i++) {
path1.push(path1[i - 1] + steps1[i]);
}

////////// Create the data for the plot
  var data = [{
    x: Array.from({ length: numSteps }, (_, i) => i + 1),
    y: path1,   
    type: 'scatter',
    mode: 'roundness',
    showlegend: true,    
    line: { color: '#A61F69' }} ,
  ];
console.log(data)

////////////// Set the layout for the plot
  var layout = {
    // title: 'Random Walk Diagram',
    xaxis: { title: 'Time(t)' },
    yaxis: { title: 'Position(St)' },
    font: {size : 17  , family:"monospace" , color: "#434343" , weigh: "bold"},
    autosize: true,
  };


///////////////// Plot the diagram
  Plotly.newPlot('chart', data, layout);

