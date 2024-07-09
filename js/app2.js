const words = ["pains"];
const keys = document.querySelectorAll(".letter-key");
const letterBox = document.querySelectorAll(".letter-box");
const enterKey = document.querySelector(".enter-key");
const deleteKey = document.querySelector(".delete-key");

let wordOfTheDay = "PAINS";

//let user enter word in boxes
//when user clicks enter each letter is compared 
    //cannot enter if there is an empty letter-box
//after all the comparisons are finished we can add input to the next row
//if user clicks delete before enter is clicked, delete the last value

//validate each word after enter is clicked
//fix the no. of guesses problem


let noOfGuesses = 0;
let enterClicked = false;
let emptyBoxes = 0;
let keyValue = '';
let enteredWord = [];



enterKey.addEventListener("click", event => {
        enterClicked = true;
        // console.log ("enter key is clicked");
            for (i=0; i<wordOfTheDay.length; i++){
                if (letterBox[i].innerText === wordOfTheDay.charAt(i)){
                    keys[i].style.backgroundColor = "green";
                    letterBox[i].style.backgroundColor = "green";
                    console.log(`the letters are matching in letter ${wordOfTheDay.charAt(i)}`);
                    
                }
                else if (letterBox[i].innerText === wordOfTheDay.charAt(i+1)
                || letterBox[i].innerText === wordOfTheDay.charAt(i+2)
                || letterBox[i].innerText === wordOfTheDay.charAt(i+3)
                || letterBox[i].innerText === wordOfTheDay.charAt(i+4)
                || letterBox[i].innerText === wordOfTheDay.charAt(i+5)
                || letterBox[i].innerText === wordOfTheDay.charAt(i-1)
                || letterBox[i].innerText === wordOfTheDay.charAt(i-2)
                || letterBox[i].innerText === wordOfTheDay.charAt(i-3)
                || letterBox[i].innerText === wordOfTheDay.charAt(i-4)
                || letterBox[i].innerText === wordOfTheDay.charAt(i-5)
            ){
                keys[i].style.backgroundColor = "yellow";
                letterBox[i].style.backgroundColor = "yellow";    
                console.log(`letter ${letterBox[i].innerText} exists in the word but not in the right position`);
                }
                else {
                    keys[i].style.backgroundColor = "grey";
                    letterBox[i].style.backgroundColor = "grey";
                    console.log(`no letter matches the letter ${letterBox[i].innerText} entered in word of the day`);
                }
        }
    }

);

let counterKey = 0;
keys.forEach((key) => {
    key.addEventListener("click", event => {
        keyValue = event.target.innerHTML;
        
        for (i=0; i<5;i++){
            
            switch (noOfGuesses){
                case 0:
                    makeAWord1(keyValue);
                  
                   
                    break;
                case 1:
                    makeAWord2(keyValue);
                    break;
                case 2:
                    makeAWord3(keyValue);
                    break;
                case 3:
                    makeAWord4(keyValue);
                    break;
                case 4:
                    makeAWord5(keyValue);
                    break;
                case 5:
                    makeAWord6(keyValue);
                    break;
                default:
                    break;
            }};
            counterKey++;
           
           
    })

});

function makeAWord1 (word){
    if (counterKey <=4){
        letterBox[counterKey].innerText = word;
    }
    else {
        
        return;
    }    
}

function makeAWord2 (word){
    if (counterKey <=9 && counterKey>=5){
        letterBox[counterKey].innerText = word;
      
    }
    else {
        return;
    }    
}

function makeAWord3 (word){
    if (counterKey <=14 && counterKey>=10){
        letterBox[counterKey].innerText = word;
        
    }
    else {
        return;
    }    
}

function makeAWord4 (word){
    if (counterKey <=19 && counterKey>=15){
        letterBox[counterKey].innerText = word;
        
    }
    else {
        return;
    }    
}

function makeAWord5 (word){
    if (counterKey <=24 && counterKey>=20){
        letterBox[counterKey].innerText = word;
        
    }
    else {
        return;
    }    
}

function makeAWord6 (word){
    if (counterKey <=29 && counterKey>=25){
        letterBox[counterKey].innerText = word;
        
    }
    else {
        return;
    }    
}
