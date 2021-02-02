var displayInput = document.getElementById("input");
var buttons = document.querySelectorAll("button");

buttons.forEach(elem => elem.addEventListener("click",handler));
    
function handler(e) {
    
    if(e.target.innerHTML === "clr"){
        displayInput.value = "";
    }
    else if(e.target.innerHTML === "ans") {
        displayInput.value = eval(displayInput.value);
    }
    else {
        displayInput.value += e.target.innerHTML;
    }
}

// var displayInput = document.getElementById("input");
// var container = document.getElementById("container");
// container.addEventListener("click",(e)=>{
//     let buttonText = e.target.innerHTML;
//     if(buttonText === "clr"){
//         displayInput.value = "";
//     }
//     else if(buttonText === "ans") {
//         displayInput.value = eval(displayInput.value);
//     }
//     else {
//         displayInput.value += e.target.innerHTML;
//     }
// });