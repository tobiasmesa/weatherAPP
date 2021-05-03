
const API_KEY = 'e8889a2b037ee8859fd3d5cf7c99ace3'; 
const unit = 'metric'; 


const fetchData = position => {

    const {latitude, longitude} = position.coords; 
    console.log("lat: ", latitude);
    console.log("long: ", longitude);

    fetch(`http://api.openweathermap.org/data/2.5/weather?units=${unit}&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=sp`)
        .then(response => response.json())
        .then(data => setWeatherdata(data))
}


const setWeatherdata = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: (data.weather[0].description),
        humidity: '%' + data.main.humidity, 
        wind: data.wind.speed + 'Km/h',
        temperature: parseInt(data.main.temp) + '°C'  ,
        date: getDate(),

    }

    Object.keys(weatherData).forEach( key => {
        setTextContent(key, weatherData[key]);

        cleanUp();
    });

}

const cleanUp = () => { 
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    
    container.style.display = "flex";
    loader.style.display = "none";


}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData); 
}


const setTextContent = (element, text) => {
    document.getElementById(element).textContent = text;
}


const getDate = () => {
    let date = new Date(); 
    return `${('0' + date.getDate()).slice(-2)}-${ ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}




/* ('0' + MyDate.getDate()).slice(-2) + '/'
             + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/'
             + MyDate.getFullYear();     */ 


/*const url = ' http://openweathermap.org/img/wn/' + '10d' +'@2x.png';

const name = document.getElementById("name"); 

var img = document.createElement('img');

img.setAttribute('src',url)

*/


// api key e8889a2b037ee8859fd3d5cf7c99ace3
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}




/*fetch(url)
.then(res => res.json())
.then(data => {

    let name = document.getElementById('name')
    
    name.innerHTML = `<p>${data.alerts['severity']}</p>` 

    console.log(data)
})
.catch(err => console.log(err))*///
