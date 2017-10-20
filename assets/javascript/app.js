$(document).ready(function () {

    var clockRunning;

    var timerInterval;

    var clock = 120;

    var correctTotal = 0;

    var incorrectTotal = 0;

    var unanswerdTotal = 0;


    //The CSS display property of .container is set to none to prevent the div from displaying for a split second after the HTML is parsed but before
    //the below line of jQuery kicks in to display the start game button  
    function displayElements() {
        $("body").append($("<button id='start'>Start</button>"));
        $("#start").click(function () {
            $("#start").hide();
            $('header').css({ 'margin-top': '50px' });
            $(".container").show();
            initializeTimer();
        });
    };

    // Initializes the timer after the questions have been displayed
    function initializeTimer() {
        clockRunning = true;
        if (clockRunning = true) {
            timerInterval = setInterval(decrement, 1000);
        }
    };

    // Starts the countdown
    function decrement() {
        count();
        clock--;
        $(".timer").text("Time Remaining: " + clock);
        if (clock <= 0) {
            clearInterval(timerInterval);
            // If the clock runs out the game ends any guesses entered by the user are submitted
            submitAnswers();
        }
        // If the user clicks the All Done button their guesses are also submitted   
        // $('#submitButton').click(submitAnswers());
        // document.getElementById("submitButton").onclick = submitAnswers();
    };

    function count() {
        var currentTime = timerInterval;
        var countTime = timeConverter(currentTime);
        $("#timer").text("Time Remaining: " + countTime);
    }

    function timeConverter(t) {

        //  Takes the current time in seconds and converts it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

    // Display the results
    function submitAnswers() {
        $(".container").hide();
        $("body").append($("<div id='results'></div>"));
        $("#results").append($("<p id='allDone'>All Done!</p>"));
        $("#results").append($("<p id='correct'>Correct Answers:</p>"));
        $("#results").append($("<p id='incorrect'>Incorrect Answers:</p>"));
        $("#results").append($("<p id='unanswered'>Unanswered:</p>"));
        isQuestion1();
        isQuestion2();
        isQuestion3();
        isQuestion4();
        isQuestion5();
        isQuestion6();
        isQuestion7();
        isQuestion8();
        isQuestion9();
        isQuestion10();
    };

    // Calculate the user's scores
    function isQuestion1() {
        var correctAnswer = document.getElementById("q1b");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else if (correctAnswer.checked === false) {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
        else { unanswerdTotal++ }
    };

    function isQuestion2() {
        var correctAnswer = document.getElementById("q2b");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    function isQuestion3() {
        var correctAnswer = document.getElementById("q3d");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    function isQuestion4() {
        var correctAnswer = document.getElementById("q4b");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    function isQuestion5() {
        var correctAnswer = document.getElementById("q5c");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    function isQuestion6() {
        var correctAnswer = document.getElementById("q6c");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    function isQuestion7() {
        var correctAnswer = document.getElementById("q7a");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    function isQuestion8() {
        var correctAnswer = document.getElementById("q8b");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    function isQuestion9() {
        var correctAnswer = document.getElementById("q9c");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    function isQuestion10() {
        var correctAnswer = document.getElementById("q10d");
        if (correctAnswer.checked === true) {
            correctTotal++;
            $("#correct").text("Correct Answers: " + correctTotal);
        }
        else {
            incorrectTotal++;
            $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        }
    };

    // Calls function to start the game
    displayElements();

});