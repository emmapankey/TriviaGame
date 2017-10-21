$(document).ready(function () {

    var clockRunning;

    var timerInterval;

    var clock = 121;

    var correctTotal = 0;

    var incorrectTotal = 0;

    var unanswerdTotal = 0;

    var correctAnswerArray = ["q1b", "q2b", "q3d", "q4b", "q5c", "q6c", "q7a", "q8b", "q9c", "q10d"];


    $('#submitButton').click(function () {
        submitAnswers();
    });

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
        clock--;
        $(".timer").text("Time Remaining: " + timeConverter(clock));
        if (clock <= 0) {
            // If the clock runs out the game ends any guesses entered by the user are submitted
            submitAnswers();
        }
    };

    //  Takes the current date time in seconds and converts it to minutes and seconds (mm:ss).
    function timeConverter(t) {
        var d = new Date(t * 1000);
        var e = d.toTimeString();
        var f = e.substr(3, 5);
        return f;
    }

    // Display the results
    function submitAnswers() {
        clearInterval(timerInterval);
        $(".container").hide();
        $("body").append($("<div id='results'></div>"));
        $("#results").append($("<p id='allDone'>All Done!</p>"));
        $("#results").append($("<p id='correct'>Correct Answers:</p>"));
        $("#results").append($("<p id='incorrect'>Incorrect Answers:</p>"));
        $("#results").append($("<p id='unanswered'>Unanswered:</p>"));

        // Loop through thorugh the array of correct answers and compare each position to the user's checked (or unchecked) answers
        for (var i = 0; i < 10; i++) {
            checkAnswer(i);
        }
        $("#correct").text("Correct Answers: " + correctTotal);
        $("#incorrect").text("IncorrectAnswers: " + incorrectTotal);
        $("#unanswered").text("Unanswered: " + unanswerdTotal);
    };

    // Calculate the user's score
    function checkAnswer(q_idx) {
        var correctAnswer = document.getElementById(correctAnswerArray[q_idx]);
        if (correctAnswer.checked === true) {
            correctTotal++;
        }
        // Input means input tags only aka the radio buttons
        // name= means the radio button name (q1, q2..)
        // :checked limits to the checked radio buttons
        // .length is the total number of buttons checked within the name group
        //    ($'input[name=q1]:checked').length > 0)
        else if ($('input[name=q' + (q_idx + 1) + ']:checked').length > 0) {
            incorrectTotal++;
        }
        else {
            unanswerdTotal++;
        }
    };

    // Calls function to start the game
    displayElements();

});


