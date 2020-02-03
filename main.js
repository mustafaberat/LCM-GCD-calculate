function clickedButton(){
    calculateGCD();
    calculateLCM();
}

function calculateGCD(){
    try {
        var number1 = parseFloat(document.getElementById("number1").value);
        var number2 = parseFloat(document.getElementById("number2").value);
        if(Number.isInteger(number1) && Number.isInteger(number2)){
            document.getElementById("number1").style.border = "1px solid #333";
            document.getElementById("number2").style.border = "1px solid #333";
            if(number1>number2){
                var dividend  = number1;
                var divisor = number2;
            } else{
                var dividend  = number2;
                var divisor = number1;
            }
    
            remainder = dividend % divisor
            while (remainder != 0){
                dividend = divisor
                divisor = remainder
                remainder = dividend % divisor
            }
    
            document.getElementById("GCD-result").innerHTML = divisor;
        } else{
            document.getElementById("number1").style.border = "2px solid red";
            document.getElementById("number2").style.border = "2px solid red";
        }

    } catch (error) {
        console.log(error)
    }
}

function calculateLCM(){
    try {
        var number1 = parseFloat(document.getElementById("number1").value);
        var number2 = parseFloat(document.getElementById("number2").value);
        if(Number.isInteger(number1) && Number.isInteger(number2)){
            document.getElementById("number1").style.border = "1px solid #333";
            document.getElementById("number2").style.border = "1px solid #333";
            var max = (number1>number2) ? number1 : number2
            while (true){
                if(max%number1 == 0 && max%number2 == 0){
                    var LCM = max;
                    break;
                } else{
                    ++max;
                }
            }
            document.getElementById("LCM-result").innerHTML = max;
        } else{
            document.getElementById("number1").style.border = "2px solid red";
            document.getElementById("number2").style.border = "2px solid red";
        }
    } catch (error) {
        console.log(error);
    }
}