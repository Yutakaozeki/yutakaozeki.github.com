(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    const hand = document.getElementById('hand');

    // const hanSound = new Audio('media/open.mp3');
    const diceSound = new Audio('media/dice.mp3');
    const clickSound = new Audio('media/click.mp3')

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
    
    instructions();

    function instructions(){
        document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
        clickSound.play();
        })

        document.querySelector('.close').addEventListener('click', function(event){
            event.preventDefault();
            document.getElementById('overlay').className = 'hidden';
            clickSound.play();
            })
    }

    startGame.addEventListener('click', function(){
        //randomly set the game index...
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML = '<button id="quit">Wanna Quit?</button>';
        clickSound.play();
        //add event listener for the new button
        document.getElementById('quit').addEventListener('click', function(){
            clickSound.play();
            location.reload();
        })
        
        setUpTurn();
    })

    function setUpTurn(){
        game.innerHTML = `<p class="turn>Roll the dice for ${gameData.players[gameData.index]}`;

        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

        document.getElementById('roll').addEventListener('click', function(){
            diceSound.play();
            throwDice();
        })
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6) + 1;
        gameData.roll2 = Math.floor(Math.random()*6) + 1;

        game.innerHTML = `<p class="turn">Roll the dice for ${gameData.players[gameData.index]}</p></div>`;

        //put out the images
        game.innerHTML += `<div id="dice"><img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}"></div>`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;
        
        moveHand();
        //if two 1's are rolled
        if(gameData.rollSum ==2){
            game.innerHTML += '<p class="message">Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;

            //temporary operator
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            //show current score

            setTimeout(setUpTurn, 2000);
            }

        //if either die is a 1
        else if(gameData.roll1 ===1 || gameData.roll2 === 1){
            //switch player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            game.innerHTML += `<p class="message">Sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000);
        }
        else{
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                // hanSound.play();
                setUpTurn();
                // moveHand();
                clickSound.play();
            })

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                clickSound.play();
            })

            checkWinningCondition();
        }
    }
    
    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<div id="win"><h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2></div>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else{
            score.innerHTML = `<strong><div id="score1">${gameData.players[0]}: ${gameData.score[0]}</div> <div id="score2">${gameData.players[1]}: ${gameData.score[1]}</div></strong>`
        }
    }

    function moveHand(){
        hand.style.top = '-300px';
        hand.style.left = '0px';
        hand.style.zIndex = "1";
        setTimeout(function(){
            hand.style.top = '-500px';
            hand.style.left = '50px';
            hand.style.zIndex = "-1";
        }, 700)
    }

})();