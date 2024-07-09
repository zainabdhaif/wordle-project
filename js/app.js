//1- create accepted words arrray
//2- create banned words array
//3- make the clicked letter box display the value of the alphabet key that is clicked, in-order
//in 

const keys = document.querySelectorAll(".letter-key");
const letterBox = document.querySelectorAll(".letter-box");



let keyValue ='';
let letterBoxValue = '';
let rowNum = 0;
let letterBoxNum = 0;
let noOfGuesses = 0;

// if (noOfGuesses === 0){
//     const rowNow = document.querySelector("#first-row");
//     keys.forEach((key) =>{
//                 key.addEventListener("click", event =>{
//                     keyValue = event.target.innerHTML;
//                     for (i =0; i<5; i++){

//                             letterBox[i].innerText= keyValue;
        
//                     }
                    
//                 })
//             })
    

// }
// else if (noOfGuesses === 1){
//     const rowNow = document.querySelector("#second-row");
// }
// else if (noOfGuesses === 2){
//     const rowNow = document.querySelector("#third-row");
// }
// else if (noOfGuesses === 3){
//     const rowNow = document.querySelector("#fourth-row");
// }
// else if (noOfGuesses === 4){
//     const rowNow = document.querySelector("#fifth-row");
// }
// else if (noOfGuesses === 5){
//     const rowNow = document.querySelector("#sixth-row");
// }



// if (rowNum === 0 && letterBoxNum === 0 && noOfGuesses === 0){
//     letterBoxNum=1;
//     keys.forEach((key) =>{
//         key.addEventListener('click', event => {
//             if (event.target.className === "letter-key"){
//                 keyValue = event.target.innerHTML;
//                 console.log(`alphabet key is clicked ${keyValue}`);

//                 letterBox.forEach((LB)=>{
//                     LB.addEventListener("click", event =>{
//                         if (event.target.classList.contains('first')){
//                             LB.innerText = keyValue;
//                         }
//                         else if (event.target.classList.contains('second')){
//                             console.log("clicked second letter box");
//                             LB.innerText = keyValue;
//                         }
//                         else if (event.target.classList.contains('third')){
//                             console.log("clicked third letter box");
//                             LB.innerText = keyValue;
//                         }
//                         else if (event.target.classList.contains('fourth')){
//                             console.log("clicked fourth letter box");
//                             LB.innerText = keyValue;
//                         }
//                         else if (event.target.classList.contains('fifth')){
//                             console.log("clicked fifth letter box");
//                             LB.innerText = keyValue;
//                         }
//                     })
//                 })
                
//             }
//         }
//     )

// })};


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

//secondd guess
if (noOfGuesses === 1){
    rowNum = 2;
        keys.forEach((key) =>{
            key.addEventListener("click", event =>{

                    keyValue = event.target.innerHTML;
                    
                    if (counter>4 && counter<=8){
                        letterBox[counter].innerText= keyValue;
                        counter++;
                    }
                    console.log(counter);
        })
      })
    noOfGuesses= 2;   
}

//third guess
if (noOfGuesses === 2){
    rowNum = 3;
        keys.forEach((key) =>{
            key.addEventListener("click", event =>{

                    keyValue = event.target.innerHTML;
                    
                    if (counter<=12 && counter>8){
                        letterBox[counter].innerText= keyValue;
                        counter++;
                    }
                    console.log(counter);
        })
      })
    noOfGuesses= 3;   
}

//fourth guess
if (noOfGuesses === 3){
    rowNum = 4;
        keys.forEach((key) =>{
            key.addEventListener("click", event =>{

                    keyValue = event.target.innerHTML;
                    
                    if (counter<=16 && counter>12){
                        letterBox[counter].innerText= keyValue;
                        counter++;
                    }
                    console.log(counter);
        })
      })
    noOfGuesses= 4;   
}

//fifth guess
if (noOfGuesses === 4){
    rowNum = 5;
        keys.forEach((key) =>{
            key.addEventListener("click", event =>{

                    keyValue = event.target.innerHTML;
                    
                    if (counter<=20 && counter>16){
                        letterBox[counter].innerText= keyValue;
                        counter++;
                    }
                    console.log(counter);
        })
      })
    noOfGuesses= 5;   
}

//sixth guess
if (noOfGuesses === 5){
    rowNum = 6;
        keys.forEach((key) =>{
            key.addEventListener("click", event =>{

                    keyValue = event.target.innerHTML;
                    
                    if (counter<=24 && counter>20){
                        letterBox[counter].innerText= keyValue;
                        counter++;
                    }
                    console.log(counter);
        })
      })
      console.log('no more chances, sorry!!')  
}