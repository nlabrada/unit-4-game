// Set your vars
var wins = 0;
var losses = 0;
var userScore = 0;
var getRandomNumber;
var clownYeehawVal, contemplativeYeehawVal, madYeehawVal, sadYeehawVal;

$(document).ready( function() {
// Initially hide the game div
    $("#game-div").hide();

// Once start btn is clicked, show that game div!
    $("#start-btn").on("click", function(){
        $("#home-div").hide();
        $("#game-div").show();
    })

// The function that drives our game!
// Need to get those random numbers, boi
    getRandomNumber ();

// For when the clown's clicked 🤡
    $("#clown-yeehaw-img").on("click", function(){
        userScore = userScore + clownYeehawVal;
        $("#user-score").text(userScore);
        updateWinsLosses ();
    });

// For when the thinking one's clicked 🤔
    $("#contemplative-yeehaw-img").on("click", function(){
        userScore = userScore + contemplativeYeehawVal;
        $("#user-score").text(userScore);
        updateWinsLosses ();
    });

// For when the mad one's clicked 😡
    $("#mad-yeehaw-img").on("click", function(){
        userScore = userScore + madYeehawVal;
        $("#user-score").text(userScore);
        updateWinsLosses ();
    });

// For when the sad one's clicked 😔
    $("#sad-yeehaw-img").on("click", function(){
        userScore = userScore + sadYeehawVal;
        $("#user-score").text(userScore);
        updateWinsLosses (); 
    });
});

// Giving each emoji a random val and
// Assigning random val to be reached
    function getRandomNumber (){
        myRandomNumber = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        $("#score-goal").text(myRandomNumber);
        clownYeehawVal = Math.floor(Math.random()*(10-1+1)+1);
        contemplativeYeehawVal = Math.floor(Math.random()*(10-1+1)+1);
        madYeehawVal = Math.floor(Math.random()*(10-1+1)+1);
        sadYeehawVal = Math.floor(Math.random()*(10-1+1)+1);
    };
    
// For wins & losses, update the scores accordingly
    function updateWinsLosses () {
        if (userScore === myRandomNumber) {
            wins = wins + 1;
            $("#wins").text(wins);
            alert("Ya darn tootin!");
            reset();
        }
        else if (userScore > myRandomNumber){
            losses = losses + 1;
            $("#losses").text(losses);
            alert("Dang nabbit!");
            reset();
        }
    };

// To restart the game
    function reset() {
        userScore = 0;
        $("#user-score").text(userScore);
        getRandomNumber ();
    };

