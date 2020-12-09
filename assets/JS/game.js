var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack= 10;
var playerMoney = 10;

console.log( playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
    // console.log(enemyNames[i]);
    // console.log(i);
    // console.log(enemyNames[i] + " is at " + i + " index");
// }

var fight = function(enemyName) {
    // window.alert("Welcome to Robot Gladiators!");
while(enemyHealth > 0) {    
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked" + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
);
if (enemyHealth <= 0) {
    window.alert(enemyNames[i] + " has died!");
}
else {
    window.alert(enemyNames[i] + " still has" + enemyHealth + " health remaining.");
}

playerHealth = playerHealth - enemyAttack;
console.log(
enemyNames[0] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health remaining.")
}
} else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!")
            playerMoney = playerMoney - 2
            console.log(playerMoney);
        } else {
            fight();
        };
} else {
    window.alert("You need to choose a valid option. Try again!");
}
}
}

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    fight(pickedEnemyName);
}

//Game States
// "WIN" - Player robot has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat all enemy robots
// "LOSE" - Player robot's health is zero or less