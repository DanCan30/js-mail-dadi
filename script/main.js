// MEMBER AUTENTICATION

// Creating an array of mails
const memberList = [
    "user1@gmail.com", 
    "user2@gmail.com", 
    "user3@gmail.com", 
    "user4@gmail.com", 
    "user5@gmail.com", 
    "user6@gmail.com", 
    "user7@gmail.com", 
    "user8@gmail.com", 
    "user9@gmail.com", 
    "user10@gmail.com", 
    "user11@gmail.com", 
    "user12@gmail.com", 
    "user13@gmail.com", 
    "user14@gmail.com", 
    "user15@gmail.com"
];

// Creating a variable for the input
let userInput;
let member;
let memberCheck = false;
let logged = "Congratulation, You are a member."
let error = "We are sorry, You are not a member, please sign."

document.getElementById("submit").addEventListener("click", function() {

    // Saving the user input in a variable
    userInput = document.getElementById("user-email-input").value;

    // Checking if the user input is in the memberList array
    for ( let i = 0; i < memberList.length ; i++) {

        member = memberList[i];

        if (userInput === member) {
            memberCheck = true;
        }
    }

    // Depending on the check value a different message will appear on screen
    if (memberCheck == true) {
        document.getElementById("message").innerHTML = logged;
    } else {
        document.getElementById("message").innerHTML = error;
    }
});
