const words = ["hello"];

const keys = document.querySelectorAll(".letter-key");
const letterBox = document.querySelectorAll(".letter-box");
const enterKey = document.querySelector(".enter-key");
const deleteKey = document.querySelector(".delete-key");

let wordOfTheDay = words[0];

//let user enter word in boxes
//when user clicks enter each letter is compared 
    //cannot enter if there is an empty letter-box
//after all the comparisons are finished we can add input to the next row
//if user clicks delete before enter is clicked, delete the last value

let noOfGuesses = 2;
let enterClicked = false;
let emptyBoxes = 0;
let keyValue = '';



enterKey.addEventListener("click", event => {
    if (event.target.className === "enter-key" && emptyBoxes === 0){
        enterClicked = true;
        console.log ("enter key is clicked");
        let enterClickedCount = 1;
        if (enterClickedCount === 1){
            //do everything
        }
        else{
            return;
            //this is done to ensure that the process of showing the answer is not repeated as many times
            //as the user is clicking the enter value, it is shown only once
        }
    }

    else if (event.target.className === "enter-key" && emptyBoxes !== 0){
        return;
        //basically do nothing since there are empty boxes 
        //so we cannot enter any values
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
            }
           
            console.log(`first counterKey inner ${counterKey}`)};
            counterKey++;
           
           
    })

})
console.log(`first counterKey outer ${counterKey}`);

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
