function guessNumber(){

    const rangeFrom = +prompt(`Input the range from`);
    const rangeTo = +prompt(`Input the range to (range has to be 10 steps more than 'range from')`);

        if(rangeFrom + 10  == rangeTo) {

            let randomNum = Math.floor(Math.random() * (rangeTo - rangeFrom)) + rangeFrom;
            console.log(randomNum);

            let result = 4;
            while(result >= 1) {

                    let attempts = +prompt(`Guess the number. You have ${result} attempts!`);
                    if(attempts == randomNum) {
                        alert(`You won!`);
                        break;
                    } else {

                        if(res == 1 ) {
                            alert(` You've lost. Press 'ok' to return and begin new game`);
                        } else {
                            alert(`Incorrect! Please, put correct numbers`);
                        }
                    }
                result--;
            }

        } else {

            alert ("Please write the correct number");
        } 
}