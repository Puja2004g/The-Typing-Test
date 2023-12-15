// (actualwords/total time taken)*60
// var text = $("#textarea");
// var btn = $("#btn");
// var score = $("#score");

var startTime, endtime, totaltime;


function calculate_speed(totaltime){
    var total_words = text.value.trim();
    var actualwords, typing_speed;
    if(total_words===' '){
        actualwords=0;
    }
    else {
        actualwords= total_words.split(" ").lenght;
    }

    if(actualwords!==0){
        typing_speed=(actualwords/totaltime)*60;
        typing_speed=Math.round(typing_speed);

        score.html("<p>You have written <strong>" + actualwords +"</strong> words in <strong>" + totaltime +"</strong> seconds and you speed is <strong>" + typing_speed +"</strong> words per minute</p>");
    }
    else{
        score.html("<p>Your score will be displayed here.</p>");
    }
}

function startTyping(){
    $("button").text("Done");
    var date = new Date();
    startTime = date.getTime();
}

function endTyping(){
    $("button").text("Start");
    var date = new Date();
    endtime = date.getTime();

    var totaltime = (endtime - startTime)/1000;

    calculate_speed(totaltime);
}


$("button").on("click", ()=>{
    switch(btn.text.toLowerCase()){
        case 'start':
            // btn.removeAttr("disabled");
            startTyping();
            break;
        case 'done':
            // btn.attr("disabled", true);
            endTyping();
    }
})