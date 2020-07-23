// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("canceledSupplementedCanceledTrip");
var myPieChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["All Trips", "UberX", "Pool", "Express Pool"],
    datasets: [{
      label: "Supplemented Canceled Trip",
      backgroundColor: ['rgba(26, 26, 26, 1)', 'rgba(3, 42, 102, 1)', 'rgba(189, 17, 52, 1)', 'rgba(254, 213, 48, 1)'],
      hoverBackgroundColor: ['#000000', '#00114D', '#A4001B', '#E5BC17'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      data: [27.4, 30.4, 18.72, 14.2],
    }, {
      label: "Non-Supplemented Canceled Trip",
      backgroundColor: ['rgba(26, 26, 26, 0.2)', 'rgba(3, 42, 102, 0.2)', 'rgba(189, 17, 52, 0.2)', 'rgba(254, 213, 48, 0.2)'],
      hoverBackgroundColor: ['rgba(26, 26, 26, 0.3)', 'rgba(3, 42, 102, 0.3)', 'rgba(189, 17, 52, 0.3)', 'rgba(254, 213, 48, 0.3)'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      data: [72.4, 69.6, 81.28, 85.8]
    }]
  }, 
  options: {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
      // position: 'bottom'
    },
    cutoutPercentage: 60,
  },
});
