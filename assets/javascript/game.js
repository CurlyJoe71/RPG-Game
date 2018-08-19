$(document).ready(function() {

    var hero;

    var currentEnemy;

    var attackPower = 0;

    var counterAttackPower = 0;

    var currentPhase = 1;

    var heroHealth = 100;

    var enemyHP = 100;

    // need function to calculate damage
    shotsFired = function() {
        // $('#heroHP').text(100);
        console.log(heroHealth);
        $('span').text(heroHealth);
    };


    console.log('Initial state of hero is: ' + hero);
   
    $('.character').on('click', function() {

        if (currentPhase === 1) {
            $(this).css({'background': 'yellow'});
            hero = $(this).attr('id');
            currentPhase ++;
            console.log('The current hero is: ' + hero);
            //add way to move other characters, maybe use append?
            
        } else if (currentPhase === 2) {
            $(this).css({'background': 'red'});
            currentEnemy = $(this).attr('id');
            currentPhase++;
            console.log('The current enemy is: ' + currentEnemy);

        } else if (currentPhase === 3){

        };
            
    });  //closes click event
})      //closes document ready



    //idea: create vaiables for each character that corresponds to their current role, i.e. "hero", "enemy", "currentEnemy" 
    //what woud each variable do or change, exactly?

    //or do I create a string value "hero" "enemy" "currentEnemy" and assign those out to each character accordingly?

// Need to use if statements to run different phases of the game.
// Phase 1 - any character will change to hero
// Phase 2 - the other characters become enemies, change the background to red, move to lower part of screen
//Phase 3 - choose first enemy to fight, that enemy moves to bottom of screen, use only Counter Attack number

// if (phase === 1) { characters are green }
// else if (phase === 2) {change x or y position of enemies, change color, assign "counter attack" value}
// else {move clicked enemy to bottom, assign currentEnemy}
