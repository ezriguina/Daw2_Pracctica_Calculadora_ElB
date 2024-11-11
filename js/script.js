const display = document.getElementById("Pantalla");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value="";
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calcular(){
    try{
 
     display.value =eval(display.value);
     
    }catch(error){
    display.value="Error";
    }
 }
 
