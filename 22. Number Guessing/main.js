const minNum = 1;
const maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(ans);
let attempts = 0
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("TOO LOW! TRY AGAIN!!!");
        }
        else if(guess > ans){
            window.alert("TOO HIGH! TRY AGAIN!!!");
        }
        else {
            window.alert(`CORRECT!!! The answer was ${ans}. It tooks you ${attempts} attempts to complete this procedure`);
            running = false;
        }
    }
}