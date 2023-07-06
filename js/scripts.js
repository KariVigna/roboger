
// UI Logic
window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();

        let inputNum = document.getElementById("num-input").value;
        const result = beepBoop(inputNum);
        resultText = document.getElementById("result-text")
        resultText.innerText = result;
    };
};

// Business Logic

function beepBoop(num){
    let numbersArray = [];
    for(let i = 0; i <= num; i += 1){
        numbersArray.push(i);
    }

    let outputArray = [];

    numbersArray.forEach(function(element){ 
        element = element.toString()
        console.log(element.includes("3") === true)
        if (element.includes("3") === true) {
            outputArray.push("Won't you be my neighbor?");
        } else if (element.includes("2") === true) {
            outputArray.push("Boop");
        } else if (element.includes("1") === true) {
            outputArray.push("Beep");
        } else {
            outputArray.push(element);
        }
    });
    return outputArray;
};