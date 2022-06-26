//game states
//WIN - defeat all robots
//          *fight all enemy robots
//          *defeat each enemy robots
//lose - player's health is 0 or less.
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

    



    while(playerHealth > 0 && enemyHealth > 0) {

    // ask players if they want to skip or go
    
    var promptFight = window.prompt("Would you like to fight or skip this battle? enter FIGHT or SKIP to choose");

    if (promptFight === "skip" || promptFight === "SKIP") {
    
        //confirm player wants to skip the fight
    
        var confirmSkip = window.confirm("are you sure you want to quit?")
    
        // if yes (true) leave fight
    
        if (confirmSkip) {
    
        window.alert(playerName + " has chosen to skip the fight!");
    
        //subtract money from player money
        
        playerMoney = playerMoney - 10;
    
        console.log("playerMoney ", playerMoney);
    
        break;
    
        }

    }

   

   

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

        enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.

        console.log(

            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

        );

    // check enemy's health

    if (enemyHealth <= 0) {

        window.alert(enemyName + " has died.");

    //award player for winning    

        playerMoney = playerMoney +20;

        break;

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

        window.alert(playerName + " has died.");

        break;

    }    

    else {

        window.alert(playerName + " still has " + playerHealth + " health left.");

    }

    

 

    //if no (false), ask question again by asking fight() again.


    }

} 



//function to start a new game.

var startGame = function(){

    //reset player stats

    playerHealth=100;

    playerAttack=10;

    playerMoney=10;



for(var i=0; i < enemyNames.length; i++){

    if(playerHealth>0) {

        window.alert("welcome to robot gladiators! Round " + (i+1))

        var pickedEnemyName=enemyNames[i];

        enemyHealth=50;

        fight(pickedEnemyName);
    }

    else {
        window.alert("you have lost your robot battles. Game Over!");

        break;

    }


}

// after the loop ends, player is either out of health or enemies to fight, so run the endGame function

endGame();

};

// to eng the game.

var endGame = function()  {

    if(playerHealth>0){

    window.alert("Great job! you have survived the game! you now have a score of " + playerMoney +".");
    }

    else {

        window.alert("you havve lost");

    }

    var playAgainConfirm = window.confirm("would you like to play again?");

    if (playAgainConfirm) {
        // restart the game

        startGame();

    }

    else {

        window.alert("thank you for playing the game!");

    }

}


//start the game when the page loads.

startGame();





