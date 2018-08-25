var hero = '';
var currentEnemy = '';

var newHeroHP = 0;
var newEnemyHP = 0;

var heroPlacement = $('.heroPlacement');
var enemyPlacement = $('.enemyPlacement');

var heroStats = {};
var enemyStats = {};

var heroDivId = '';
var currentEnemyDivId = '';

var xwingfireAudio = document.getElementById('xwingfire');
var xwingexplodeAudio = document.getElementById('xwingexplode');

var enemyCount = 3;

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

var replaceClass1 = function () {
    var el = $(heroDivId).find('span');
    var newone = el.clone(true);
    el.before(newone);
    $('.' + el.attr('class') + ':last').remove();
}

var replaceClass2 = function () {
    var el2 = $(currentEnemyDivId).find('span');
    var newone2 = el2.clone(true);
    el2.before(newone2);
    $('.' + el2.attr('class') + ':last').remove();
}

var replaceClass3 = function () {
    var el3 = $(heroDivId);
    var newone3 = el3.clone(true);
    el3.before(newone3);
    $('.' + el3.attr('class') + ':last').remove();
}

var replaceClass4 = function () {
    var el4 = $(enemyPlacement);
    var newone4 = el4.clone(true);
    el4.before(newone4);
    $('.' + el4.attr('class') + ':last').remove();
}

var attackFunction = function () {
    if (enemyCount <= 0) {

    }
    newHeroHP = heroStats['HP'] - enemyStats['counterAttackPower'];
    newEnemyHP = enemyStats['HP'] - heroStats['attackPower'];
    heroStats['HP'] = newHeroHP;
    enemyStats['HP'] = newEnemyHP;
    $('#ptag').text(`${enemyStats['name']} has done ${enemyStats['counterAttackPower']} damage to your hero.`);
    $('#ptag2').text(`${heroStats['name']} has done ${heroStats['attackPower']} damage to ${enemyStats['name']}!`);

    xwingfireAudio.play();

    $('.heroPlacement').addClass('tada');
    $('.enemyPlacement').addClass('tada');

    $(heroDivId).find('span').addClass('blurAnimation').text(newHeroHP);
    replaceClass1();
    $(currentEnemyDivId).find('span').addClass('blurAnimation2').text(newEnemyHP);
    replaceClass2();

    // .css({'-webkit-animation': 'blur-out-expand 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) backwards', 'animation': 'blur-out-expand 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) backwards'});

    heroStats['attackPower'] += heroStats['attackIncrement'];
};

$(document).ready(function () {

    $('.character').on('click', function () {
        if (hero === '') {
            hero = $(this).attr('id');
            heroDivId = '#' + hero;
            console.log('The current hero is: ' + hero);
            console.log('The heroDivId is: ' + heroDivId);

            $(heroPlacement).append($(heroDivId));
            $('#ptag').text('Select your first enemy.');
            $(this).css({ 'border': '3px solid hsla(309, 100%, 32%, 1)', 'background': 'linear-gradient(158deg, #238dd5, #eaf3e7, #8039b0)', 'background-size': '800% 800%', '-webkit-animation': 'heroColor 2s ease infinite', '-moz-animation': 'heroColor 2s ease infinite', 'animation': 'heroColor 2s ease infinite' })
            $(this).find('span').css({ 'color': 'black' });

            //selecting the other character divs
            $('.character').not($(this)).each(function () {
                $(this).css({ 'border': '3px solid darkred', 'background': 'hsla(344, 100%, 19%, 0.72)' });
                $(this).css({ 'color': 'white' });
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
            $(this).css({ 'border': '3px solid red', 'background': 'linear-gradient(191deg, #a75732, #600, #265810)', 'background-size': '800% 800%', '-webkit-animation': 'enemyColor 5s ease infinite', '-moz-animation': 'enemyColor 5s ease infinite', 'animation': 'enemyColor 5s ease infinite' });
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
            setTimeout(function () {
                $('.heroPlacement').removeClass('tada');
            }, 1500);
            setTimeout(function () {
                $('.enemyPlacement').removeClass('tada');
            }, 1500);
            attackFunction();
        }
        if (heroStats['HP'] <= 0) {
            alert('You lost!');
            clear();
        }
        else if (enemyStats['HP'] <= 0) {
            enemyCount--;
            if (enemyCount <= 0) {
                alert('You killed all of the enemies! You\'re a badass!');
                $(currentEnemyDivId).hide();
                $('#ptag').text('Great job!');
                $('#ptag2').text('The universe is once again safe.');
                xwingfireAudio.pause();
                xwingexplodeAudio.play();
            } 
            else {
            $(currentEnemyDivId).hide();
            xwingfireAudio.pause();
            xwingexplodeAudio.play();
            alert(`You defeated ${enemyStats['name']}!`);
            currentEnemy = '';
            enemyStats = {};
            currentEnemyDivId = '';
            $(currentEnemyDivId).empty();
            $('#ptag').text('Please select a new enemy to battle!');
            $('#ptag2').empty();
            };
        };
    });

});  //closes click event
//closes document ready