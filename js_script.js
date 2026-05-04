
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
    let number = Math.random() * 6;

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


// image moving
   // create var to track intercal ik
    let intervalId =0;


    // function to move image
    function startMoveImage(){
    let memeImage = document.getElementById("memeImage");

        //setInterval to repeatedly run code
        //function(){} is an anonymous function - way to run a chunk of code 1 time as a funtion argument
        intervalId = setInterval( function(){

            // get random number for top and left
            let topCord = getRadnomNumber2();
            let leftCord = getRadnomNumber2();

            
    memeImage.style.left = leftCord +"px";
    memeImage.style.top = topCord + "px";

        }, 1000) // 1000miliseconds = 1 second




    //enable stop button
    document.getElementById("btnStop").disabled = false;

//disable start button
    document.getElementById("btnStart").disabled = true;
    }

    // function to stop image moving\
    function stopMoveImage(){
        // call JS function that stops set Interval from running
        clearInterval(intervalId)

        
    //disable stop button
    document.getElementById("btnStart").disabled = false;

//enable start button
    document.getElementById("btnStop").disabled = true;
    }

// function for a random number
    function getRadnomNumber2(){
        return Math.floor(Math.random() * 1000)


    }



    
        function checkPalin(event){

            //preven form from submitting
            event.preventDefault();

            // var to store users word
            let wordToTest = document.getElementById("txtWord").value;

            console.log("wordToTest= " + wordToTest);


            // canll function to test
            let bPalin = isPalin(wordToTest);

            let divMessage = document.getElementById("divMessage")

            // message for user bassed on value
            if(bPalin){ // if bPalin is equivalent to bPalin == true

                divMessage.textContent = "Is Palindrome";
            }
            else{
                divMessage.textContent = "Is not Palindrome";

            }
        }

        //function to test if a string is the same backwards and forwards
        function isPalin(strToTest){
            // convert all leters ro lowercase
            strToTest = strToTest.toLowerCase();
            //replace all indtances of /g of spaces /\s with an empty string
            strToTest = strToTest.replace(/\s/g, "");

            console.log("strToTest= " + strToTest);

            // new var to keep the original
            let strReverse = strToTest;


            // convert reverse string to array 
            strReverse = strReverse.split("").reverse().join("");

            console.log("strReverse= " + strReverse)

            //compare original string with reversed
            // if match returns true, otherwise is false
            if(strReverse == strToTest){
                return true;
            }

            // if get to this line it must not be palindrom so returns false
            return false;
        }



// function adds audio element to page

        function addAudio(){
            let divAudio = document.getElementById("divAudio");

            // creating an audio element
            let audioElement = document.createElement("audio");

            // set attributes to element
            //add ID so element is easier to work eith
            audioElement.setAttribute("id", "myAudio");

            audioElement.setAttribute("src","Breeze_idle.mp3");


            // volume
            audioElement.volume = .5;
            
            //aadding controls
            audioElement.setAttribute("controls", "controls");

            // add new audio element to the div that will host it
            divAudio.appendChild(audioElement);

            //disable the user from clicking add button after already added
            document.getElementById("btnAddAudio").hidden = true;

            document.getElementById("btnPlayAudio").hidden = false;
            document.getElementById("btnPauseAudio").hidden = false;


        }

// function to play the audio
    function playAudio(){
        // create a nickname to the audio element
        let myAudio = document.getElementById("myAudio");
        myAudio.play();

    }


    // function to pause the audio
    function pauseAudio(){
        // create a nickname to the audio element
        let myAudio = document.getElementById("myAudio");
        myAudio.pause();

    }