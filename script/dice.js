
// DICE GAME

    // Settings variables for the dices
    let userNumber;
    let aiNumber;

    
    document.getElementById("random-number").addEventListener("click", function() {
    
        userNumber = Math.floor(Math.random() * 6 + 1);
        aiNumber = Math.floor(Math.random() * 6 + 1);

        let userDice = document.querySelector(".user-dice");
        let aiDice = document.querySelector(".ai-dice");


        switch (userNumber) {
            case 1:
                userDice.classList.add("dice1");
                userDice.classList.remove("dice2", "dice3", "dice4", "dice5", "dice6");
            break;
            case 2: userDice.classList.add("dice2");
                userDice.classList.remove("dice1", "dice3", "dice4", "dice5", "dice6");
            break;
            case 3: userDice.classList.add("dice3");
                userDice.classList.remove("dice1", "dice2", "dice4", "dice5", "dice6");
            break;
            case 4: userDice.classList.add("dice4");
                userDice.classList.remove("dice1", "dice2", "dice3", "dice5", "dice6");
            break;
            case 5: userDice.classList.add("dice5");
                userDice.classList.remove("dice1", "dice2", "dice3", "dice4", "dice6");
            break;
            case 6: userDice.classList.add("dice6");
                userDice.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5");
            break;
        }
        
        switch (aiNumber) {
            case 1:
                aiDice.classList.add("dice1");
                aiDice.classList.remove("dice2", "dice3", "dice4", "dice5", "dice6");
            break;
            case 2: aiDice.classList.add("dice2");
                aiDice.classList.remove("dice1", "dice3", "dice4", "dice5", "dice6");
            break;
            case 3: aiDice.classList.add("dice3");
                aiDice.classList.remove("dice1", "dice2", "dice4", "dice5", "dice6");
            break;
            case 4: aiDice.classList.add("dice4");
                aiDice.classList.remove("dice1", "dice2", "dice3", "dice5", "dice6");
            break;
            case 5: aiDice.classList.add("dice5");
                aiDice.classList.remove("dice1", "dice2", "dice3", "dice4", "dice6");
            break;
            case 6: aiDice.classList.add("dice6");
                aiDice.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5");
            break;
        }



        document.getElementById("user-number").innerHTML = "Your number is: " + userNumber + "!";
        document.getElementById("ai-number").innerHTML = "My number is: " + aiNumber + "!";

        if (userNumber > aiNumber) {
            document.getElementById("winner").innerHTML = "YOU WON!";
        } else if (userNumber < aiNumber) {
            document.getElementById("winner").innerHTML = "I WON!";
        } else {
            document.getElementById("winner").innerHTML = "WE ARE EVEN! THROW IT AGAIN!";
        }
    
    });