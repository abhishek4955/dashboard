var ctx = document.getElementById("myChart").getContext("2d");

var data = {
  labels: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
  datasets: [{
    label: "Employer",
    data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
    backgroundColor: "#00308F",
    borderColor: "#1d91e5",
    barThickness: 20,
  },
  {
    label: "Employee",
    data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
    backgroundColor: "#3F00FF",
    borderColor: "#ff1744",
    barThickness: 20,
  },
  {
    label: "Total Interest",
    data: [20, 30, 40, 50, 60, 75, 85, 95, 105, 115, 125, 135],
    backgroundColor: "#7CB9E8",
    borderColor: "#00acc1",
    barThickness: 20,
  }]
};


var myChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          stepSize: 100000,
        }
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  }
});
