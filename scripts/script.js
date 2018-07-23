'use strict';

let play = prompt("Do you want to play a game?");

if(play.toLowerCase()==='yes') {
    let name = prompt("What is your name?");
    // Set the values for the game
    let playerHealth = 40, grantHealth = 10, wins = 0;

    // main game loop
    while(playerHealth > 0) {
        // Calculate damage
        let playerDamage = Math.floor(Math.random()*2+1);
        let grantDamage = Math.floor(Math.random()*2+1);

        // Grant is taking damage first.
        grantHealth -= grantDamage;
        console.log(`${name} deals ${grantDamage} damage to Grant!  Grant has ${grantHealth} health remaining!`);

        // Check if the player killed Grant
        if(grantHealth <= 0) {
            console.log('Grant dies!');
            wins++;
            // Was this the third win?  If so, the player wins, break the loop
            if(wins >= 3) {
                console.log(`Grant fails to rise again!  ${name} is victorious!`);
                break;
            } else {
                // Otherwise reset Grant's health and try again
                console.log(`But Grant rises from the grave to fight again!`);
                grantHealth = 10;
            }
        }

        // Deal damage to the player
        playerHealth -= playerDamage;
        console.log(`Grant deals ${playerDamage} damage to ${name}.  ${name} has ${playerHealth} health remaining!`);
        // If the player died, go ahead and print that out.
        // The loop will then end when next checks the conditional
        if(playerHealth <= 0) {
            console.log(`Grant is victorious, ${name} has fallen!`);
        }
    }
}