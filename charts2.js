google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Fechas","Eficiencia", "Productividad", "Perseverancia", "tu gfa","xd" ],
    ["02-15",1,6,11,11, 14],
    ["04-15",2,7,12,15, 11],
    ["08-15",3,8,13,9, 10],
    ["09-15",4,9,14,6, 10],
    ["11-15",5,10,15,8, 9],
    ["12-15",6,11,16,10, 8]
  ]);

  var view = new google.visualization.DataView(data);

  var options = {
    width: 1200,
    height: 800,
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    seriesType: 'bars',
    series: {
      3: {type: 'line'},
      4: {type: 'line'}
    },
    isStacked: true
  };

  var chart = new google.visualization.ComboChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}