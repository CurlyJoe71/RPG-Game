var hero = '';

var currentEnemy = '';

var heroPlacement = $('.heroPlacement');
var enemyPlacement = $('.enemyPlacement');

var heroStats = {};
var enemyStats = {};

var heroDivId = '';
var currentEnemyDivId = '';

//initial stats for each character
const character1Stats = { name: 'Akbar', ID: '#character1', HP: 100, attackPower: 20, counterAttackPower: 25, attackIncrement: 5 };
const character2Stats = { name: 'Chewbacca', ID: '#character2', HP: 150, attackPower: 20, counterAttackPower: 9, attackIncrement: 13 };
const character3Stats = { name: 'Boba Fett', ID: '#Character3', HP: 175, attackPower: 10, counterAttackPower: 3, attackIncrement: 6 };
const character4Stats = { name: 'Palpatine', ID: '#character4', HP: 200, attackPower: 30, counterAttackPower: 10, attackIncrement: 7 };

//displaying initial HP stats for each character
$('#character-1').find('span').text(character1Stats['HP']);
$('#character-2').find('span').text(character2Stats['HP']);
$('#character-3').find('span').text(character3Stats['HP']);
$('#character-4').find('span').text(character4Stats['HP']);

//need to somehow reassign the character object to a new variable to be used in functions

var attackFunction = function () {
    var newHeroHP = heroStats['HP'] - enemyStats['counterAttackPower'];
    var newEnemyHP = enemyStats['HP'] - heroStats['attackPower'];
    heroStats['HP'] = newHeroHP;
    enemyStats['HP'] = newEnemyHP;
    console.log('the new Hero HP is :' + newHeroHP);
    $(heroDivId).find('span').text(newHeroHP);
    $(currentEnemyDivId).find('span').text(newEnemyHP);
    heroStats['attackPower'] += heroStats['attackIncrement'];
    console.log('The hero\'s new attack power is: ' + heroStats['attackPower']);

}

var shotsFired = function () {
    // $('#heroHP').text(100);
    console.log(heroHealth);
    $('span').text(heroHealth);
};

// $('.btn-attack').on('click', attackFunction);

//I think I need an object that contains the details for each character. I can store their unique ID, and HP value, and whatever else I need to store
// const charactersObject = [
//     [character1: [

//         name: 'Akbar',
//         ID: "$('#character-1')",
//         heroHealth: 100,
//         counterAttackPower: 10]
//     ],
// ]

//function to assign power

// need function to calculate damage



console.log('Initial state of hero is: ' + hero);

$(document).ready(function () {

    $('.character').on('click', function () {
        if (hero === '') {
            $(this).css({ 'background': 'yellow' });
            hero = $(this).attr('id');
            heroDivId = '#' + hero;
            console.log('The current hero is: ' + hero);
            console.log('The heroDivId is: ' + heroDivId);

            $(heroPlacement).append($(heroDivId));
            $(heroDivId).find('span').css({ 'color': 'red'});
            $('#ptag').text('Select your first enemy.');

            //selecting the other character divs
            $('.character').not($(this)).each(function () {
                $(this).css({ 'background': 'purple' });
            });
            
            switch (hero) {
                case "character-1":
                    heroStats = character1Stats;
                    break;
                case "character-2":
                    heroStats = character2Stats;
                    break;
                case "character-3":
                    heroStats = character3Stats;
                    break;
                case "character-4":
                    heroStats = character4Stats;
                }

            //add way to move other characters, maybe use append?

        } else if (currentEnemy === '') {
            $('#ptag').text('Fight!');
            $(this).css({ 'background': 'red' });
            currentEnemy = $(this).attr('id');
            currentEnemyDivId = '#' + currentEnemy;
            $(enemyPlacement).append($(currentEnemyDivId));

            switch (currentEnemy) {
                case "character-1":
                    enemyStats = character1Stats;
                    break;
                case "character-2":
                    enemyStats = character2Stats;
                    break;
                case "character-3":
                    enemyStats = character3Stats;
                    break;
                case "character-4":
                    enemyStats = character4Stats;
                }
            console.log('The current enemy is: ' + currentEnemy);

        } else {
        };
    }); //closes click event
    
    

    $('.btn-attack').on('click', function() {
        if (hero !== '' && currentEnemy !== '') {
            attackFunction();
        }
        if (heroStats['HP'] <= 0) {
            alert('You lost!')
        } else if (enemyStats['HP'] <= 0) {
            alert('You defeated the enmey!');
            $(currentEnemyDivId).hide();
            currentEnemy = '';
            enemyStats = {};
            currentEnemyDivId = '';
            $(currentEnemyDivId).empty();
            $('#ptag').text('Please select a new enemy to battle!');
        }
    })

})  //closes click event
   //closes document ready



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
