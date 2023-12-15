var btn = $("#btn");
var score = $("#score");
var textArea = $("#textarea");

var startTime, endTime, totalTime;

function calculate_speed(totalTime) {
    var totalText = textArea.val().trim();
    var actualLetters, typingSpeed;

    var totalLetters = totalText.replace(/\s/g, '');

    if (totalLetters === '') {
        actualLetters = 0;
    } else {
        actualLetters = totalLetters.length;
    }

    if (actualLetters !== 0) {
        typingSpeed = (actualLetters / totalTime) * 60;
        typingSpeed = Math.round(typingSpeed);

        score.html("<p>You have typed <strong>" + actualLetters + "</strong> letters in <strong>" + totalTime + "</strong> seconds, and your speed is <strong>" + typingSpeed + "</strong> letters per minute</p>");
    } else {
        score.html("<p>Your score will be displayed here.</p>");
    }

    textArea.attr("placeholder","Type something to get your typing speed");
}

function startTyping() {
    btn.text("Done");
    var date = new Date();
    startTime = date.getTime();
}

function endTyping() {
    btn.text("Start");
    var date = new Date();
    endTime = date.getTime();

    totalTime = (endTime - startTime) / 1000; // Divide by 1000 to get seconds

    calculate_speed(totalTime);
}

btn.on("click", () => {
    switch (btn.text().toLowerCase()) {
        case 'start':
            startTyping();
            break;
        case 'done':
            endTyping();
            break;
    }
});
