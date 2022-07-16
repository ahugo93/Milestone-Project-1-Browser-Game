var famousAthletes = [
    ["Michael Jordan", "Serena Williams", "Leonel Messi", "Rafael Nadal", "Megan Rapinoe", "Sue Bird"],
    ]

let answer = '';
let maxWrong = 10;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = famousAthletes[Math.floor(Math.random() * famousAthletes.length)];
}
function generateButtons(){
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
    `
    <button class= "btn btn-lg btn-primary m-2"
    id = '` + letter + `'
    onClick= "handleGuess ('` + letter + `')" >
    ` + letter + `
        </button>
    `
        ).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}
function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0){
        guessedWord();
    }else if (answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
    }
}


function guessedWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
function updateMistakes(){
    
}


document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();