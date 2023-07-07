///////calculate St
St_2 = 0
for(var i = 1 ; i < numSteps+1 ; i++){
if(path1[i] == -2){
  St_2 ++    } } 
//////////
St_1 = 0
for(var i = 1 ; i < numSteps+1 ; i++){
if(path1[i] == -1){
  St_1 ++ } } 
//////////
St0 = 0
for(var i = 0 ; i < numSteps ; i++){
if(path1[i] == 0){
  St0 ++ } } 
//////////
St1 = 0
for(var i = 1 ; i < numSteps+1 ; i++){
if(path1[i] == 1){
  St1 ++ } } 
//////////
St2 = 0
for(var i = 1 ; i < numSteps+1 ; i++){
if(path1[i] == 2){
  St2 ++ } } 

St = [St_2 , St_1 , St0 , St1 , St2]
console.log("St:" , St)

// //////////////calculate Bt
// Bt = []
// for(var i = 1 ; i<St.length+1 ; i++){
//   Bt.push(St[i] / (Math.sqrt(i)))
//   console.log(St[i] , (Math.sqrt(i)) , "=" , (St[i] / (Math.sqrt(i))))
// }
// console.log("Bt:" , Bt)



////////// Create the data for the plot
  var data = [{
    x: [-2 , -1 , 0 , 1 , 2],
    y: St,   
    type: 'bar',
    mode: 'lines',
    marker: {color: '#A61F69' , line:{ width: 1}} ,  
    showlegend: true
}  ];
console.log(data)

////////////// Set the layout for the plot
  var layout = {
    font: {size : 17  , family:"monospace" , color: "#400E32"},
    xaxis: { title: 'Bt' },
    yaxis: { title: ' ' },
    autosize: true
  };

///////////////// Plot the diagram
  Plotly.newPlot('chart2', data, layout , );
