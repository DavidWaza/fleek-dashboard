 export const LineChartData = {
  labels: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
  ],
  datasets: [
    {
      label: "Spent time",
      data: [3000, 4500,5000, 6000, 7000, 8000, 9000],
      borderColor: "rgb(255, 0, 0)",
      borderWidth: 1,
    },
  ],
};

export const BarChartData = {
    labels: [
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
    ],
    datasets: [
      {
        label: "Statistics",
        data: [0, 1, 2, 3, 5],
        borderColor: ["rgb(54, 162, 235, 1)"],
        backgroundColor:["rgba(255, 99, 132, 0.2)"],
        borderWidth:1,
        borderRadius: 160,
        width:10,
      },
    ],
  };
