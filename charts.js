google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(init);
function init() {
      var rowdata1 = [
        ["Fechas","Eficiencia", "Productividad", "Perseverancia", "tu gfa","xd" ],
        ["02-15",1,6,11,11, 14],
        ["04-15",2,7,12,15, 11],
        ["08-15",3,8,13,9, 10],
        ["09-15",4,9,14,6, 10],
        ["11-15",5,10,15,8, 9],
        ["12-15",6,11,16,10, 8]
      ];
      var rowdata2 = [
        ["Fechas x2 saludos","Eficiencia x2 saludos", "Productividad x2 saludos", "Perseverancia x2 saludos", "tu gfa x2 saludos","xd x2 saludos" ],
        ["02-17",8,6,5,11,11],
        ["04-17",7,7,12,15,9],
        ["08-17",6,8,3,20,15],
        ["09-17",5,9,9,6,9],
        ["11-17",4,10,10,8,18],
        ["12-17",3,11,11,10,15]
      ];

      var data = [];
      data[0] = google.visualization.arrayToDataTable(rowdata1);
      data[1] = google.visualization.arrayToDataTable(rowdata2);


      var options = {
        width: 1500,
        height: 800,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        seriesType: 'bars',
        series: {
          3: {type: 'line'},
          4: {type: 'line'}
        },
        isStacked: true,
        animation:{
          duration: 1000,
          easing: 'out'
        },
      };

      var current = 0;
      // Create and draw the visualization.
      var chart = new google.visualization.ComboChart(document.getElementById('columnchart_values'));
      var button = document.getElementById('b1');
      function drawChart() {
        // Disabling the button while the chart is drawing.
        button.disabled = true;
        google.visualization.events.addListener(chart, 'ready',
            function() {
              button.disabled = false;
              button.value = 'Switch to ' + (current ? 'tu gfa xd x1' : 'tu gfa xd x2');
            });
        options['title'] = (current ? 'tu gfa xd x2' : 'tu gfa xd x1');

        chart.draw(data[current], options);
      }
      drawChart();

      button.onclick = function() {
        current = 1 - current;
        drawChart();
      }
}