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

var clear = function () {
    hero = '';
    currentEnemy = '';

    heroPlacement = $('.heroPlacement');
    enemyPlacement = $('.enemyPlacement');

    heroStats = {};
    enemyStats = {};

    heroDivId = '';
    currentEnemyDivId = '';
};

var attackFunction = function () {
    var newHeroHP = heroStats['HP'] - enemyStats['counterAttackPower'];
    var newEnemyHP = enemyStats['HP'] - heroStats['attackPower'];
    heroStats['HP'] = newHeroHP;
    enemyStats['HP'] = newEnemyHP;
    $(heroDivId).find('span').text(newHeroHP);
    $(currentEnemyDivId).find('span').text(newEnemyHP);
    heroStats['attackPower'] += heroStats['attackIncrement'];
};

$(document).ready(function () {

    $('.character').on('click', function () {
        if (hero === '') {
            $(this).css({ 'background': 'yellow' });
            hero = $(this).attr('id');
            heroDivId = '#' + hero;
            console.log('The current hero is: ' + hero);
            console.log('The heroDivId is: ' + heroDivId);

            $(heroPlacement).append($(heroDivId));
            $('#ptag').text('Select your first enemy.');
            $(this).css({'background': 'linear-gradient(158deg, #238dd5, #eaf3e7, #8039b0)', 'background-size': '800% 800%', '-webkit-animation': 'heroColor 2s ease infinite', '-moz-animation': 'heroColor 2s ease infinite', 'animation': 'heroColor 2s ease infinite'})
            $(this).find('span').css({'color': 'black'});

            //selecting the other character divs
            $('.character').not($(this)).each(function () {
                $(this).css({ 'background': 'darkslategrey' });
                $(this).css({ 'color': 'white'});
            });
            //attaching the proper stats to the current hero.
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
            };

        } else if (currentEnemy === '') {
            $('#ptag').text('Fight!');
            currentEnemy = $(this).attr('id');
            currentEnemyDivId = '#' + currentEnemy;
            $(enemyPlacement).append($(currentEnemyDivId));
            $(this).css({'background': 'linear-gradient(191deg, #a75732, #c6923a, #265810)', 'background-size': '800% 800%', '-webkit-animation': 'enemyColor 5s ease infinite', '-moz-animation': 'enemyColor 5s ease infinite', 'animation': 'enemyColor 5s ease infinite'});
            //attaching the proper character stats to the current enemy.
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
            };
        } else {
        };
    }); //closes click event

    $('.btn-attack').on('click', function () {
        if (hero !== '' && currentEnemy !== '') {
            attackFunction();
        }
        if (heroStats['HP'] <= 0) {
            alert('You lost!');
            clear();
        } else if (enemyStats['HP'] <= 0) {
            alert(`You defeated ${enemyStats['name']}!`);
            $(currentEnemyDivId).hide();
            currentEnemy = '';
            enemyStats = {};
            currentEnemyDivId = '';
            $(currentEnemyDivId).empty();
            $('#ptag').text('Please select a new enemy to battle!');
        };
    });

});  //closes click event
   //closes document ready