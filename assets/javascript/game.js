// Set your vars
var wins = 0;
var losses = 0;
var userScore = 0;
var getRandomNumber;
var clownYeehawVal, contemplativeYeehawVal, madYeehawVal, sadYeehawVal;

$(document).ready( function() {
// Assign the value
    getRandomNumber ();
// Assign Onclick Functions
    $("#clown-yeehaw-img").on("click", function(){
        userScore = userScore + clownYeehawVal;
        $("#user-score").text(userScore);
        updateWinsLosses ();
    });

    $("#contemplative-yeehaw-img").on("click", function(){
        userScore = userScore + contemplativeYeehawVal;
        $("#user-score").text(userScore);
        updateWinsLosses ();
    });

    $("#mad-yeehaw-img").on("click", function(){
        userScore = userScore + madYeehawVal;
        $("#user-score").text(userScore);
        updateWinsLosses ();
    });

    $("#sad-yeehaw-img").on("click", function(){
        userScore = userScore + sadYeehawVal;
        $("#user-score").text(userScore);
        updateWinsLosses (); 
    });

});
    // Making emoji val & score function
    function getRandomNumber (){
        myRandomNumber = Math.floor(Math.random() * (30 - 1 + 1) + 1);
        $("#score-goal").text(myRandomNumber);
        clownYeehawVal = Math.floor(Math.random()*(15-1+1)+1);
        contemplativeYeehawVal = Math.floor(Math.random()*(15-1+1)+1);
        madYeehawVal = Math.floor(Math.random()*(15-1+1)+1);
        sadYeehawVal = Math.floor(Math.random()*(15-1+1)+1);
    }
    // For wins & losses
    function updateWinsLosses () {
    if (userScore === myRandomNumber) {
        wins = wins + 1;
        $("#wins").text(wins);
        $("#win-lose-message").text("YER DARN TOOTIN'!");
        reset();
    }
    else if (userScore > myRandomNumber){
        losses = losses + 1;
        $("#losses").text(losses);
        $("#win-lose-message").text("DANG NABBIT!");
        reset();
    }
}
    function reset() {
        userScore = 0;
        $("#user-score").text(userScore);
        getRandomNumber ();
    }

