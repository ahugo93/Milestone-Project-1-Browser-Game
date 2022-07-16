window.onload = function(){

    var alphabet = 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    var categories;         
    var chosenCategory;     
    var getHint ;          
    var word ;              
    var guess ;             
    var guesses = [ ];      
    var attempts ;             
    var counter ;
    var space;

    var showAttemptCount =
    document.getElementById('attemptsLeft');
    var showCategory =
    document.getElementById('scatagory');
    var getHint =
    document.getElementById('hint');
    var showClue = 
    document.getElementById('clue');


    var buttons = function(){
        myButtons =
        document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i <alphabet.length; i++){
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }
    var selectCat = function (){
        if (chosenCategory === categories[0]){
            categoryName.innerHTML = "The category is Famous Athletes";
        }else if (chosenCategory === categories[1]){
            categoryName.innerHTML = "The category is New York City slang";
        }else if (chosenCategory === categories[2]){
            categoryName.innerHTML = "The category is New York City eats";
        }
        }
    }
    result = function(){
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++){
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class','guess');
            if (word[i] === "_"){
                guess.innerHTML = "_";
                space = 1;
            } else{
                guess.innerHTML= "_";
            }
            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }
    comments = function(){
        showAttemptCount.innerHTML = "You have " + attempts + " tries left";
        if (attempts < 1){
            showAttemptCount.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++){
            if (counter + space === guesses.length){
                showAttemptCount.innerHTML= "You Win!";
            }
        }
    }
    var animate = function(){
        var drawMe = attempts;
        drawArray[drawMe]();
    }

    canvas = function(){
        myStickman = document.getElementById('stickman');
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

    head = function (){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60,25,10,0, Math.PI*2, true);
        context.stroke();
    }
    draw  = function( $pathFromX, $pathFromY, $pathToX, $pathToY){

        context.moveto($pathFromX, $pathFromY);
        context.lineTo($pathToX, $pathToY);
        context.stroke();
    }

    frame1 = function(){
        draw(0, 150, 150, 150);
    };
    frame2 = function(){
        draw(10, 0, 10, 600);
    };
    frame3 = function(){
        draw(0, 5, 70, 5);
    };
    frame4 = function(){
        draw(60, 5, 60, 15);
    };

    torso = function(){
        draw(60, 36, 60, 70);
    };
    rightArm = function(){
        draw(60, 46, 100, 50);
    };
    leftArm = function(){
        draw(60, 46, 20, 50);
    };
    rightLeg = function(){
        draw(60, 70, 100, 100);
    };
    leftLeg = function(){
        draw (60, 70, 20, 100);
    };
    drawArray = [leftLeg, rightLeg, rightArm, leftArm, torso, head, frame4,frame3, frame2, frame1];

    check = function(){
        list.onclick = function(){
            var guess = (this.innerHTML);
            this.setAttribute('class', 'active');
            this.onclick = null;
            for(var i = 0; i < word.length; i++){
                if(word[i] === guess){
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1){
                attempts -= 1;
                comments();
                animate();
            }else{
                comments();
            }
        }
    }
play = function(){

    categories = [
        ["Michael Jordan", "Serena Williams", "Leonel Messi", "Rafael Nadal", "Megan Rapinoe", "Sue Bird"],
        ["Bet","Yerrr","Youre wilding", "Ohdee", "Brick", "Deadass"],
        ["Bacon Egg and Cheese", "Chopped Cheese", "Bagel with Cream Cheese", "Pizza", "Cheesecake", "Hotdog"]
    ];
    chosenCategory = 
    categories[Math.floor(Math.random() * categories.length)];
    word =
    chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "_");
    console.log(word);
    buttons();

    guesses = [ ];
    attempts = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
}
play();

hint.onclick = function(){
    hints = [
        ["Jumpman 23", "One of the worlds most decorated Tennis stars", "Soccer superstar from Argentina", "Spanish tennis superstar", "USWNT World cup champion", "One of the greatest WNBA players"],
        ["Similar to saying sure or ok", "A typical greeting", "Youre getting carried away now", "An excessive amount", "A description of cold weather", "Being absolutely serious"],
        ["Typical breakfast sandwich", "Similar to a cheeseburger", "Pairs perfect with a regular coffee", "Get it by the slice", "Famous dessert", "Can be found at most stands in the city"]
    ];
    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: " + hints [categoryIndex][hintIndex];
};

document.getElementById('reset').onclick = 
function(){
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = " ";
    context.clearRect(0, 0, 400, 400);
    play();
}