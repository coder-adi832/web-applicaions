const apikey = "20487a7a35bd35e86fcc6d5865e8348a";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid="

async function run(){
    const city_temp = "Delhi"
    const city = document.getElementById('name').value;

    const response = await fetch(url+apikey+"&q=" + city);
    let data = await response.json();
    console.log(data)

    document.getElementById("city").innerHTML=data.name;
    document.getElementById("temp").innerHTML=data.main.temp +"&#176;C" ;
    document.getElementById("humidity").innerHTML=data.main.humidity+"%";
    document.getElementById("wind").innerHTML=data.wind.speed;
    
    let photo = data.weather.main;
    if(photo == "Rain" || photo == "Thunderstorm"){
        document.getElementById("climate").src = "media/rainy.png";
    }
    else if(photo == "Clear" || photo == "Drizzle" ){
        document.getElementById("climate").src = "media/sun.png";
    }
    else if(photo == "Clouds" || photo == "Drizzle"){
        document.getElementById("climate").src = "media/cloudy.png";
    }
    else{
        document.getElementById("climate").src = "media/cloudy.png";
    }

}
let input = document.getElementById("name");

input.addEventListener("keypress",function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        document.getElementById("search_btn").click();
    }
});

