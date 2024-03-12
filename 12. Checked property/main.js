/*
.checked = property that determines the checked state of an HTML checkbox or radio button element
*/
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subsResult = document.getElementById("subsResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subsResult.textContent = `You are Subscribed!`;
    }
    else{
        subsResult.textContent = `AYEE!!!, You are not Subscribed!!!`;
    }
    if(visaBtn.checked){
        payResult.textContent = `The payment has been done from VISA card`;
    }
    else if(mastercardBtn.checked){
        payResult.textContent = `The payment has been done from MASTERCARD card`;
    }
    else if(paypalBtn.checked){
        payResult.textContent = `The payment has been done from PAYPAL account`;
    }
    else{
        payResult.textContent = `AYEE!!!, Payment hasn't been done`;
    }
}