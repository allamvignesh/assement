
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


let nextCity = document.getElementById('next_city');
let prevCity = document.getElementById('prev_city');
let cities = document.getElementsByClassName('city');
let citySlider = document.getElementsByClassName('city_slider_button');

function getActiveCity(cities) {
    for (let i = 0; i < cities.length; i++) {
        if(cities[i].classList.contains("active"))
            return i
    }
}

function removeActiveCitySlider(citySlider) {
    for (let i = 0; i < citySlider.length; i++) {
        citySlider[i].classList.remove("active")
    }
}


nextCity.onclick = () => {
    let currActive = getActiveCity(cities);
    if (currActive == cities.length-1) 
        return false
    
    cities[currActive].classList.remove("active");
    cities[currActive].classList.add("done");
    cities[currActive+1].classList.remove("soon");
    cities[currActive+1].classList.add("active");

    removeActiveCitySlider(citySlider);
    citySlider[currActive+1].classList.add("active");
}

prevCity.onclick = () => {
    let currActive = getActiveCity(cities);
    if (currActive == 0) 
        return false
    
    cities[currActive].classList.remove("active");
    cities[currActive].classList.add("soon");
    cities[currActive-1].classList.remove("done");
    cities[currActive-1].classList.add("active");

    removeActiveCitySlider(citySlider);
    citySlider[currActive-1].classList.add("active");
}

let cityTemps = document.querySelectorAll(".temperature .temp h1")
let degreeToogle = document.querySelector("#degree_toggle")

degreeToogle.onclick = () => {
    let degree = document.querySelectorAll(".degree_slider span");
    if (degreeToogle.checked) {
        degree[0].classList.remove("active");
        degree[1].classList.add("active");
        for (let i = 0; i < cityTemps.length; i++) {
            let temp = parseFloat(cityTemps[i].innerHTML);
            cityTemps[i].innerHTML = ((temp * (9/5) + 32)).toPrecision(3) + "°";
        }
    } else {
        degree[0].classList.add("active");
        degree[1].classList.remove("active");
        for (let i = 0; i < cityTemps.length; i++) {
            let temp = parseFloat(cityTemps[i].innerHTML);
            cityTemps[i].innerHTML = ((temp - 32)*(5/9)).toPrecision(3) + "°";
        }
    }
}