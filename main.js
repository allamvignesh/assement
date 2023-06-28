
const ctx = document.getElementById('myChart');
const temps = [23, 29, 58, 75, 33, 20, 73, 49];

new Chart(ctx, {
    type: 'line',
    data: {
        labels: temps.map((x)=>{return x+"%"}),
        datasets: [{
            label: "temperature",
            data: temps,
            fill: true,
            backgroundColor: "#5c9ce5",
            pointStyle: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    display: false,
                },
                grid: {
                    lineWidth: 0,
                }
            }
        }
    }
});
