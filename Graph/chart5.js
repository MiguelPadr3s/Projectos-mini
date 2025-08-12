document.addEventListener("DOMContentLoaded", function () {
  const ctx5 = document.getElementById("mixedchart").getContext("2d");
  const mixedchart = new Chart(ctx5, {
    data: {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          type: "bar",
          label: "Bar Dataset",
          data: [10, 20, 30, 40],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          type: "line",
          label: "Line Dataset",
          data: [50, 50, 50, 50],
          fill: false,
          borderColor: "rgb(54, 162, 235)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
