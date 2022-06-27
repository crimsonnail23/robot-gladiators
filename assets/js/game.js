//game states
//WIN - defeat all robots
//          *fight all enemy robots
//          *defeat each enemy robots
//lose - player's health is 0 or less.
//
//player values






var fightOrSkip = function(){

      // ask player if they'd like to fight or skip using fightOrSkip function
  
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

      //conditional recursive function call

      if(promptFight ==="" || promptFight === null) {

        window.alert("You need to provide a valid answer please try again");

        return fightOrSkip();
      }

      promptFight= promptFight.toLowerCase();



        // if player picks "skip" confirm and then stop the loop
  
        if (promptFight === "skip" || promptFight === "SKIP") {
    
            // confirm player wants to skip
   
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    
            // if yes (true), leave fight
    
            if (confirmSkip) {
      
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      
                // subtract money from playerMoney for skipping
      
                playerInfo.playerMoney = playerInfo.money - 10;

                //return true if player wants to leave

                return true;
     
                shop();
            }

        }

 return false;
}



var fight = function(enemy) {

    while(playerInfo.health > 0 && enemy.health > 0) {

    // ask players if they want to skip or go
    
        if(fightOrSkip()){

            //if true leave fight by breaking lop

            break;

        }

   
//creates a random value for the damage.
        var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

    

        enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked.

        console.log(

            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."

        );

    // check enemy's health

    if (enemy.health <= 0) {

        window.alert(enemy.name + " has died.");

    //award player for winning    

        playerInfo.money = playerInfo.money +20;

        break;

    }

    else {

        window.alert(enemy.name + " still has " + enemy.health + " health left.")

    }

           var damage = randomNumber(enemy.attack -3, enemy.attack) 

            playerInfo.health = Math.max(0, playerInfo.health - damage);

    // Log a resulting message to the console so we know that it worked.

        console.log(

            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."

        );
        
    if (playerInfo.health <= 0) {

        window.alert(playerInfo.name + " has died.");

        break;

    }    

    else {

        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");

    }

    

 

    //if no (false), ask question again by asking fight() again.


    }

} 



//function to start a new game.

var startGame = function(){

    //reset player stats

    playerInfo.reset();



for(var i=0; i < enemyInfo.length; i++){

    if(playerInfo.health>0) {

        window.alert("welcome to robot gladiators! Round " + (i+1))

        

        var pickedEnemyObj=enemyInfo[i];

        pickedEnemyObj.health=randomNumber(40,60);

        fight(pickedEnemyObj);

        //if we're not at the last enemy in the array

        if (playerInfo.health > 0 && i < enemyInfo.length -1){

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

// to end the game.

var endGame = function()  {

    if(playerInfo.health>0){

    window.alert("Great job! you have survived the game! you now have a score of " + playerInfo.money +".");
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

            playerInfo.refillHealth();

        break;
        

        
        case "UPGRADE":
        case "upgrade":

           playerInfo.upgradeAttack();

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




var randomNumber = function(min, max) {

    var value=Math.floor(Math.random() * (max - min +1)+ min);

    return value;

};

var getPlayerName = function() {

    var name = "";

    while(name ==="" || name === null ) {

        name = prompt("what is your robot's name?")

    };

    console.log("your robot's name is ");

    return name;

};

var playerInfo = {

    name: getPlayerName(),

    health: 100,

    attack: 10,

    money: 10,

    reset: function(){

        this.health=100;

        this.attack=10;

        this.money=10;

    },

    refillHealth: function(){

        if(this.money >=7){

            window.alert("Refill Player's health by 20 for 7 dollars");

            this.health += 20;

            this.money  -= 7;

        }
        else {

            window.alert("you do not have enough money");

        };

    },

    upgradeAttack: function () {

        if(this.money>=7){

            window.alert("upgrade attack by 6 for 7 dollars");

            this.attack +=6;

            this.money -=7;

        }

    }

};

//you can log mulitple values at once like this:

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [

    {

        name: "roborto",
        attack: randomNumber (10,14)

    },

    {

        name: "amy android",
        attack: randomNumber (10,14)

    },

    {

        name: "robo trumble",
        attack: randomNumber (10,140)

    }

];

//start the game when the page loads.

startGame();





