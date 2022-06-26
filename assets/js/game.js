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


var randomNumber = function(min, max) {

    var value=Math.floor(Math.random() * (max - min +1)+ min);

    return value;

}


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
        
        playerMoney = Math.max(0,playerMoney - 10);
    
        console.log("playerMoney ", playerMoney);
    
        break;
    
        }

    }

   
//creates a random value for the damage.
        var damage = randomNumber(playerAttack -3, playerAttack);

    

        enemyHealth = Math.max(0, enemyHealth - damage);

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

           var damage = randomNumber(enemyAttack -3, enemyAttack) 

            playerHealth = Math.max(0, playerHealth - damage);

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

        enemyHealth=randomNumber(40,60);

        fight(pickedEnemyName);

        //if we're not at the last enemy in the array

        if (playerHealth > 0 && i < enemyNames.length -1){

            var storeConfirm=window.confirm("the fight is over visit the store before the next round.")

            if(storeConfirm) {

            shop()
            }
        }
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


//create a shop

var shop = function(){

    var shopOptionPrompt = window.prompt(

        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store, please type 'REFILL', 'UPGRADE', or 'LEAVE'"

    );

    //use switch to carry out action

    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":

        if(playerMoney >= 7) {

        window.alert("refill health by 20 for 7 dollars");

        //increase health and decrease money

        playerHealth= playerHealth + 20;
        playerMoney= playerMoney - 7;}

        else {

            window.alert("you do not have enough money.")
        }

        break;
        
        case "UPGRADE":
        case "upgrade":

        if(playerMoney >= 7){

        window.alert("upgrade attack by 6 for 7 dollars");

        //increase attack and decrease money

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        }

        else{

            window.alert("you do not have enough money")

        }


        break;
        case "LEAVE":
        case "leave":

        window.alert("leaving the store");

        break;

        default:
            window.alert("you did not pick a valid option, try again");

            shop();

            break;

    }
};

//start the game when the page loads.

startGame();





