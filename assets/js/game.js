// Create variable playerName and create a window that prompts the user to provide a name for their robot.
var playerName = window.prompt("What is your robot's name?");
// Creates starting values for the player's robot and puts some cash in their pocket.
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
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
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};
fight();