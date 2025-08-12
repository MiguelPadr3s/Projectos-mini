document.addEventListener("DOMContentLoaded", function () {
  const ctx8 = document.getElementById("bubblechart").getContext("2d");
  const bubblechart = new Chart(ctx8, {
    type: "bubble",
    data: {
      datasets: [
        {
          label: "First Dataset",
          data: [
            {
              x: 20,
              y: 30,
              r: 15,
            },
            {
              x: 40,
              y: 10,
              r: 10,
            },
          ],
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
      options: {},
    },
  });
});
