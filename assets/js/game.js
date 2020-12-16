var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // 1) Alert players that they are starting the round.
    window.alert("Welcome to Robot Gladiators!");

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
};
fight();