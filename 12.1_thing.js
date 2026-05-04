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



          let intervalId =0;


          
   

    function playRandomeGame(){
                event.preventDefault();
     
        intervalId = setInterval( function(){
        
            let random1 = getRandom();
            let random2 = getRandom();
            let random3 = getRandom();




    console.log("roll 1 " + random1);
    console.log("roll 2 " + random2);
    console.log("roll 2 " + random3);
    let Rolltotal = random1 + random2 + random3;
    console.log("Rolltotal " + Rolltotal);


    document.getElementById("divRandom1").textContent = "Dice roll 1 " + random1;
    document.getElementById("divRandom2").textContent = "Dice roll 2 " + random2;
    document.getElementById("divRandom3").textContent = "Dice roll 3 " + random3;
    document.getElementById("divRandomTotal").textContent = Rolltotal;

        }, 500)

    }


        function stopGame(){

        clearInterval(intervalId)

            let Rolltotal = document.getElementById("divRandomTotal").value;
    console.log("Rolltotal " + Rolltotal);



    
    if(Rolltotal == 5){
        document.getElementById("divMessageEnd").textContent = "Good Job"
    }
    else if(Rolltotal == 15){
        document.getElementById("divMessageEnd").textContent = "Try Again"
    }
    else{
        document.getElementById("divMessageEnd").textContent = "Loose"
    }
        
        }

        
function getRandom(){
    let number = Math.random() * 9;

    number = Math.floor(number) + 1;

    number = Math.ceil(number);


    return number;
}