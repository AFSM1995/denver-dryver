// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("diaStartingTrips");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    
    datasets: [{
      data: [0, 61, 4, 0],
      backgroundColor: ['#1A1A1A', '#032A66', '#BD1134'],
      hoverBackgroundColor: ['#000000', '#00114D', '#A4001B'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }, {
      data: [65],
      backgroundColor: ['#1A1A1A'],
      hoverBackgroundColor: ['#000000'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
    labels: ["Trips Starting At DIA", "UberX", "Pool", "Express Pool"]
  }, 
  options: {
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
