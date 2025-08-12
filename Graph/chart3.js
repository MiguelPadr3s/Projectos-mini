document.addEventListener("DOMContentLoaded", function () {
  const ctx3 = document.getElementById("linechart").getContext("2d");
  const linechart = new Chart(ctx3, {
    type: "line",
    data: {
      labels: ["Safari", "Chrome", "Firefox", "CriOS", "Opera", "Others"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 10, 5, 8, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Example Data 1",
          data: [7, 15, 13, 9, 6, 11],
          backgroundColor: "rgba(0, 200, 83, 0.2)",
          borderColor: "rgba(0, 200, 83, 1)",
          borderWidth: 1,
        },
        {
          label: "Example Data 2",
          data: [10, 8, 14, 12, 7, 9],
          backgroundColor: "rgba(33, 150, 243, 0.2)",
          borderColor: "rgba(33, 150, 243, 1)",
          borderWidth: 1,
        },
        
      ],
    },
    options: {},
  });
});
