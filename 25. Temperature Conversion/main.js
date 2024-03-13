const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const myResult = document.getElementById("myResult");

let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        myResult.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        myResult.textContent = temp.toFixed(1) + "°C";
    }
    else{
        myResult.textContent = "Select a unit";
    }
}