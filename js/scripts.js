window.onload = function() {
    console.log("page loaded!");
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        console.log("form submitted!");
    
        let inputNum = document.getElementById("num-input").value;
        // let theResult = document.querySelector("span#result");
        const unfold = (accumulator, length) => length <= 0 ? accumulator : unfold([length, ...accumulator], length -1);
        let outputArray = unfold([], inputNum).join().split(",");
        
        return outputArray.forEach(function(number) {
            let resultDisplay = document.getElementById(result);
            console.log(number);
            
        });
        
        }; 
    };
