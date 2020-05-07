window.onload=init;

async function init(){
	const url='https://api.openweathermap.org/data/2.5/weather?q=Fresno,us&APPID=87e3c3bb474cc0be0e7747a2d9d2f1fb&units=imperial';
        const response = await fetch(url);
        const data = await response.json();
	document.getElementById("MyData").innerHTML = "The Current Temp is: " + data.main.temp + "F, Click for today's low";
}

async function getAPI(){
    const api='https://api.openweathermap.org/data/2.5/weather?q=Fresno,us&APPID=87e3c3bb474cc0be0e7747a2d9d2f1fb&units=imperial';
    const response = await fetch(api);
    const data = await response.json();
    document.getElementById("DailyLow").innerHTML = data.main.temp_min + "F";
}
function Click(){
	document.getElementById('Vacation').style.visibility = "visible";
}
