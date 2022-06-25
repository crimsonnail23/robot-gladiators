//game states
//WIN - defeat all robots
//          *fight all enemy robots
//          *defeat each enemy robots
//lose - players loses all health
//
//player values

var playerName = window.prompt("what is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

//you can log mulitple values at once like this:

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["roborto", "amy android", "robo trumble"];

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function(enemyName) {

    //alert the players they are starting the round

        window.alert("Welcome to Robot Gladiators!");

    // ask players if they want to skip or go
    
    var promptFight = window.prompt("Would you like to fight or skip this battle? enter FIGHT or SKIP to choose");

    //if player chooses to fight

    if (promptFight === "fight" || promptFight ==="FIGHT" ) {

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

        enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.

        console.log(

            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

        );

    // check enemy's health

    if (enemyHealth <= 0) {

        window.alert(enemyName + " has died.");

    }

    else {

        window.alert(enemyName + " still has " + enemyHealth + " health left.")

    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

            playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.

        console.log(

            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."

        );
        
    if (playerHealth <= 0) {

        window.alert(playerName + " has died.")

    }    

    else {

        window.alert(playerName + " still has " + playerHealth + " health left.");

    }

    // if player chooses to skip

} else if (promptFight === "skip" || promptFight === "SKIP") {
    
    //confirm player wants to skip the fight

    var confirmSkip = window.confirm("are you sure you want to quit?")

    // if yes (true) leave fight

    if (confirmSkip) {

    window.alert(playerName + " has chosen to skip the fight!");

    //subtract money from player money
    
    playerMoney = playerMoney - 2;

    }

    //if no (false), ask question again by asking fight() again.

    else {

        fight();
    }

} else {

    window.alert("you need to choose a valid option")

}



}



for(var i=0; i < enemyNames.length; i++){

    fight(enemyNames[i]);



}





