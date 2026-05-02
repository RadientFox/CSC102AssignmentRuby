
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
    let number = Math.random() + 6;

    number = Math.floor(number) +1;

    number = Math.ceil(number);


    return number;
}

    // function validates input based on client (assignment) requirements
 function validate(){
            //first name var
            let firstName = document.getElementById("txtFirstName").value;

            console.log("firstName= " + firstName);


            
            //last name var
            let lastName = document.getElementById("txtLastName").value;

            console.log("lastName= " + lastName);



              
            //zip code var
            let zip = document.getElementById("txtZip").value;

            console.log("zip= " + zip);


            // var to hold first name + " " + last name

            let fullName = firstName + " " + lastName;

            console.log("fullName=" + fullName);


            // var to hold message to show user
            let message = "";

            // full name does not go past 20 chatachters
            if (fullName.length > 20 || fullName.length <= 1){

                message = "Enter a name less then 20 Characters";
            }
            // zip code to only have 5 characters
            else if (zip.length != 5){

                message = "Enter a 5 difit zip code";
            }
            // when everything is stated corectly
            else{
                message = "secret word is validation!";
            }

            console.log("message= " + message);

            document.getElementById("divMessage").textContent = message;
        }
