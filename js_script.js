
function playDiceGame(){

    let roll1 = getRandomNumber();
    let roll2 = getRandomNumber();
    console.log("roll 1 " + roll1);
    console.log("roll 2 " + roll2);

    let Rollsum = roll1 + roll2;

    
    console.log("Rollsum " + Rollsum);

    if(roll1 == roll2 && roll1 % 2 ==0){
        document.getElementById("divMessage").textContent = "Win!"
    }
    else if(Rollsum == 5 || Rollsum == 10){
        document.getElementById("divMessage").textContent = "Lose!"
    }
    else{
        document.getElementById("divMessage").textContent = "Re roll!"
    }

    document.getElementById("divRoll1").textContent = "Dice roll 1 " + roll1;
    document.getElementById("divRoll2").textContent = "Dice roll 2 " + roll2;
    document.getElementById("divRollSum").textContent = "Dice roll Sum " + Rollsum;
}

function getRandomNumber(){
    let number = Math.random() *6;

    number = Math.floor(number) +1;

    number = Math.ceil(number);


    return number;
}
