//step1: add a words array to store all the possible words
//step2: have a banned words array that includes all the words that cannot be entered
//step3: add the visual alphabets for inputs
//step4: somehow make the letter-boxes accept and show the input from the alphabets clicked
//

const keys = document.querySelectorAll(".letter-key");
const letterBox = document.querySelectorAll(".letter-box");
let keyValue ='';
let letterBoxValue = '';



keys.forEach((key) =>{
    key.addEventListener ("click", event =>{
        if (event.target.className === "letter-key"){
            console.log("alphabet key is clicked");
            keyValue = event.target.innerHTML;
            console.log(keyValue);
    
        }
    });
});


letterBox.forEach((LB) => {
    LB.addEventListener ("click", event =>{
        if (event.target.className === "letter-box"){
            console.log("letter box is clicked");
            letterBoxValue = event.target.innerHTML;
            console.log(letterBoxValue);
    
        }
    });
    
})


