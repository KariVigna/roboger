window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
    
        let inputNum = document.getElementById("num-input").value;
        const unfold = (accumulator, length) => length <= 0 ? accumulator : unfold([length, ...accumulator], length -1);
        let outputArray = unfold([], inputNum).join().split(", ");
        
        
        for (let i = 0; i < outputArray.length; i +=1) {
            if (inputNum.includes("1") === true)  {
                let contain1 = outputArray.toString().replace("1", "Beep!");
                let resultDisplay = document.createElement("p");
                document.body.append(contain1)};

            } 
            // else if (inputNum.includes("2") === true) {
            //     const resultDisplay = document.createElement("p");
            //     const contain2 = outputArray.toString().replace("2", "Boop!");
            //     return console.log(contain2) 
            //     document.body.append(contain2);
            
        
        
        
        // return outputArray.forEach(function(number) {
        //     if (number.includes("1") === true) {
        //         const resultDisplay = document.createElement("p");
        //         const contain1 = outputArray.toString().replace("1", "Beep!");
        //         return document.body.append(contain1);
        //     }
        //     else if (number.includes("2") === true) {
        //         const resultDisplay = document.createElement("p");
        //         const contain2 = outputArray.toString().replace("2", "Boop!")
        //         return document.body.append(contain2);
        //     }
        //     else {
        //     return document.body.append(number);}
        // });
        
        };
    };