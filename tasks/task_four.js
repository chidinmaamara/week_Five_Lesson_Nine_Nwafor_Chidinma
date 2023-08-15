let input = document.getElementById('weather')
let town = document.getElementById('name')
let temp = document.getElementById('temp')
let description = document.getElementById('description')
let btn = document.getElementById('getweather')
let weatherCont = document.getElementById('container')

btn.addEventListener('click',getweather)

async function getweather(){
    try{
        const city = input.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ed4a99814dc9ce62b8c17ae4dbc56adc`;
        
        const response = await fetch(url)
        const data = await response.json();

        
        if(response.ok){
            let iconData = data.weather[0].icon
            let icons = document.getElementById('icons')
            icons.src = `http://openweathermap.org/img/wn/${iconData}.png`
            town.innerText = data.name
            temp.innerText = Math.round(data.main.temp -273.15) + ' degrees'
            description.innerText = data.weather[0].description
            
        }else{
            alert('Wrong location')
            weatherCont.innerHTML = `<p>Error</p>`
        }
    }
    catch(error){
        weatherCont.innerHTML = `<p>Error: ${error}`
    }
}

