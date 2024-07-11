

const keys = document.querySelectorAll(".letter-key");

const letterBox = document.querySelectorAll(".letter-box");
const enterKey = document.querySelector(".enter-key");
const deleteKey = document.querySelector(".delete-key");
let wordlist = ["HAPPY", "FIRST", "TODAY"];
const wordOfTheDay = wordlist[Math.floor(Math.random()* wordlist.length)];





let noOfGuesses = 0;
let enterClicked = false;
let emptyBoxes = 0;
let keyValue = '';
let enteredWord = [];


deleteKey.addEventListener("click", event => {
    if (enterClicked === false){
        let lastNonEmptyIndex = -1;
        for (let i = 0; i < letterBox.length; i++) {
          if (letterBox[i].innerText !== "") {
            lastNonEmptyIndex = i;
          }
        }
      
        // If there are any non-empty letter boxes, clear the last one
        if (lastNonEmptyIndex !== -1) {
          letterBox[lastNonEmptyIndex].innerText = "";
          keys[lastNonEmptyIndex].style.backgroundColor = "";
          letterBox[lastNonEmptyIndex].style.backgroundColor = "";
          counterKey--;
        }
    }
    // Get the index of the last non-empty letter box
    
  });
  

enterKey.addEventListener("click", event => {
    if (enterClicked) return;
    
    enterClicked = true;
    const start = noOfGuesses * 5;
    const end = start + 5;

    for (let i = start; i < end; i++) {
        const letter = letterBox[i].innerText;
        if (letter === wordOfTheDay.charAt(i % 5)) {
            letterBox[i].style.backgroundColor = "green";
        } else if (wordOfTheDay.includes(letter)) {
            letterBox[i].style.backgroundColor = "yellow";
        } else {
            letterBox[i].style.backgroundColor = "grey";
        }
    }

    noOfGuesses++;
    enterClicked = false; // Allow inputs for the next guess
        
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
