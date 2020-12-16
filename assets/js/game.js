/*This creates a prompt that will ask the user
to name their robot.
the segment var playerName stores this
information as the playerName variable.*/
var playerName = window.prompt("What is your robot's name?");

/*This creates a window that will display the newly
created varialbe, playerName.*/
//window.alert(playerName);

/*This will publish the playerName variable to the
developer console, useful for testing &
troubleshooting.*/
console.log(playerName);
//The following will log a string.
console.log("This logs a string, good for leaving yourself a message.");
//This will do math and log the result.
console.log(10 + 10);
//This will log a string followed by a stored variable.
console.log("Our robot's name is " + playerName);

//This creates a function named "fight".
function fight() {
    window.alert("The fight has begun!");
}

//and this will run the function "fight".
//fight();