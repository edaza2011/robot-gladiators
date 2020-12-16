// Game States
// "WIN" - Player robot has defeated all enemy-robots.
//  *Fight all enemy-robots.
//  *Defeat each enemy-robot.
// "LOSE" - Player robot's health is zero or less.

// Create variable playerName and create a window that prompts the user to provide a name for their robot.
var playerName = window.prompt("What is your robot's name?");
// Creates starting values for the player's robot and puts some cash in their pocket.
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
//console.log(playerName);
//console.log(playerAttack, playerHealth, playerMoney);

//var enemyName = "Roborto";
// Create an array of enemyNames for multiple combatants; commented out single enemy name line above.
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

//Display the array of enemy names in the console:
//console.log(enemyNames)

//Display each element of the array in the console, one by one:
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);

//Display the number of enemyNames in the enemyNames array.
//console.log(enemyNames.length)

/*
//Use a for loop to display the word "apple" three times in the console.
//The i is the iterator, and this will be logged as well. 
for(var i= 0; i < 3; i++) {
    console.log("apple", i);
};
*/
//for(var i = 0; i < enemyNames.length; i++) {
//    console.log(enemyNames[i]);
//    console.log(i);
//    console.log(enemyNames[i] + " is at " + i + " index.");
//}
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // 1) Alert players that they are starting the round.
    window.alert("Welcome to Robot Gladiators!");

    // 1.25) Ask the player if they want to skip the fight. Creates a variable promptFight to track the response.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Type 'FIGHT' or 'SKIP' to choose."
    );
    //console.log(promptFight);

    // 1.5 If the player chose to fight, then fight.
    if (promptFight === "fight" || promptFight === "FIGHT") {

    // 2) Subtract the value of "playerAttack" from the value of "enemyHealth" and use that result to update the "playerHealth" variable.
    enemyHealth = enemyHealth - playerAttack;

    // 3) Log a resulting message to the console to know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // 3.5) Check enemy's health and report to the player.
    if (enemyHealth <= 0) {
        window.alert(enemyName + " is now a pile of scrap!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // 4) Subtract the value of "enemyAttack" from the value of "playerHealth" and use that result to update the "playerHealth" variable.
    playerHealth = playerHealth - enemyAttack;

    // 5) Log a resulting message to the console to know that it worked. 
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // 5.5) Check player's health and report to the player.
    if (playerHealth <= 0) {
        window.alert(playerName + " has been reduced to a pile of scrap!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }
    // If player chose to skip, no fight and a penalty.
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // Confirm that the player wants to skip this fight.
        var confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");

        // If yes, (true), leave the fight.
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye!");
            // Penalize the player for skipping by subtracting money.
            playerMoney = playerMoney - 2;
            // Report that the money is actually being lost.
            console.log("You dropped some cash scrambling away. You now have $" + playerMoney);
        }
        // If no, (false), ask question again by running fight() again.
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};
// Run fight function to start game.
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}