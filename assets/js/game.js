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
    while (playerHealth > 0 && enemyHealth > 0) {
        // Ask the player if they'd like to fight or run.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        // If player picks "skip" confirm and then stop the loop.
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirm player wants to skip.
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave fight.
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // Subtract money from playerMoney for skipping.
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
        // Remove enemy's health by subracting the amount set in the playerAttack variable.
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining!"
        );
        
        // Check the enemy's health.
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // Award player money for winning
            playerMoney = playerMoney + 20;

            // Leave while() loop since enemy is dead.
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Remove player's health by subtracting the amount set in the enemyAttack variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            
            //Leave while() loop if player is dead.
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
// Check player's health to make sure game over isn't achieved.
if (playerHealth > 0) {
    for(var i=0; i < enemyNames.length; i++) {
    // Let the player know what round they are in, remember that array starts at value 0
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // Pick a new enemy to fight based on the index of the enemyNames array.
    var pickedEnemyName = enemyNames[i];

    // Reset enemyHealth before starting a new fight.
    enemyHealth = 50;

    // Use debugger to pause scipt from running to check and see what's going on at that moment in the code.
    //debugger;

    // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter.
    fight(pickedEnemyName);
}
} 
/* Obsolete / Old Code
// Use a for loop to increment enemyNames to fight all opponents.
for(var i = 0; i < enemyNames.length; i++) {
    
    // Sets the current combatant as the var pickedEnemyName with the value located at the index position i - 1.
    var pickedEnemyName = enemyNames[i];
    
    // Resets enemy health to full (50) before each new battle.
    enemyHealth = 50;
    
    // Use the debugger to pause scipt from running and check what's going on at that moment in the code. 
    //debugger;
    
    // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter.
    fight(pickedEnemyName)
}
*/