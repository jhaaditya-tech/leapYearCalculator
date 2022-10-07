//Leap Year Calculator
function isLeap(year) {
if (userInput%4===0){
    if (userInput%100===0){
        if (userInput%400===0){
            return "Leap year.";
        }
        else{
            return "Not leap year.";
        }
    }
    else{
        return "Leap Year.";
    }
}
else{
    return "Not leap Year.";
}   

}

var userInput=prompt("Please enter the year: ")
isLeap(userInput);
