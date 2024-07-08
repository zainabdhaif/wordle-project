//1- create accepted words arrray
//2- create banned words array
//3- make the clicked letter box display the value of the alphabet key that is clicked, in-order
//in 

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


