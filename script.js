'use strict';

console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent = "correct number");
console.log(document.querySelector(".message").textContent);
console.log(document.querySelector(".score").textContent = 20)
// document.querySelector(".number").textContent = 15;
// document.querySelector(".guess").value = 15;



let luckyNumber = Math.trunc(Math.random() * 20) + 1;
let highest = 0;
console.log(typeof(luckyNumber));
let score = 20;
let displayMessage = (message) => {
    document.querySelector('.message').textContent = message ;
}
document.querySelector(".check").addEventListener("click", function(){
    const checkNumber = Number(document.querySelector(".guess").value);
    // console.log(typeof(checkNumber))
    
    if(!checkNumber){
        displayMessage ("No Number...");
    }else if(checkNumber === luckyNumber){
        displayMessage ("Correct Number ...");
        document.querySelector('body').style.background = "green";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = luckyNumber;
        if(score > highest){
            highest = score;
            document.querySelector(".highscore").textContent = highest;
        }
    }else if(checkNumber !== luckyNumber){
        if(score > 0){
            displayMessage ( checkNumber > luckyNumber ? "Too Height Number ..." : "Too Low Number ...");
            score -= 1;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage ("You Lose The Game ...");
            document.querySelector(".score").textContent = 0;
        }
    }
    

    // console.log(checkNumber);
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.background = "#222";
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = "";
    displayMessage("Start Guessing ...");
    luckyNumber = Math.trunc(Math.random() * 20) + 1;

})