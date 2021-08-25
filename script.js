// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['language', 'percentage'],
  ['HTML', 90],
  ['CSS', 85],
  ['JAVASCRIPT', 60],
  ['REACT.JS', 20],
  ['BOOTSTRAP', 80],
  ['SASS', 85],
  ['JQUERY', 56]
]);

  // Optional; add a title and set the width and height of the chart
  var options = { 'title':'My Skills', 'width':700, 'height':780};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('skills'));
  chart.draw(data, options);
}