
const prompt = require('prompt-sync')();

let temperaturaCelcius = Number(prompt('Inserte temperatura en Celcius: '));

while(isNaN(temperaturaCelcius)){
    console.log("valor invalido. Debe ser numérico.");
    temperaturaCelcius = Number(prompt('Inserte temperatura en Celcius: '));
}

function convertirFahrenheitKelvin(celcius){
    let temperaturaFahrenheit = (celcius * 1.8) + 32;
    let temperaturaKelvin = (celcius +  273.15);
    console.log('La temperatura en Fahrenheit es: ', temperaturaFahrenheit);
    console.log('La temperatura en Kelvin es: ', temperaturaKelvin);
}

convertirFahrenheitKelvin(temperaturaCelcius);