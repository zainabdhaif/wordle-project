const words = ["hello"];

const keys = document.querySelectorAll(".letter-keys");
const letterBox = document.querySelectorAll(".letter-box");
const enterKey = document.querySelector(".enter-key");
const deleteKey = document.querySelector(".delete-key");

let wordOfTheDay = words[0];

//let user enter word in boxes
//when user clicks enter each letter is compared 
    //cannot enter if there is an empty letter-box
//after all the comparisons are finished we can add input to the next row
//if user clicks delete before enter is clicked, delete the last value

let noOfGuesses = 0;
let enterClicked = false;
let emptyBoxes = 0;
let keyValue = '';


if (noOfGuesses === 0){

}

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

let counter = 0;
//first guess
if (noOfGuesses === 0){
    rowNum = 1;
        keys.forEach((key) =>{
            key.addEventListener("click", event =>{

                    keyValue = event.target.innerHTML;
                    
                    if (counter<=3){
                        
                        letterBox[counter].innerText= keyValue;
                       
                    }
                    counter++;
                    console.log(counter);
        })
      })
    noOfGuesses= 1;   
}