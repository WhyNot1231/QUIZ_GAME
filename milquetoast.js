let questions=4;
let curQ=1;
let numRight=0;
let correctOne;

let b1=document.getElementById("btn1");
let b2=document.getElementById("btn2");
let b3=document.getElementById("btn3");
let b4=document.getElementById("btn4");

let createQuestion=function(questionText, choice0, choice1, choice2, choice3, correctChoice){
    document.getElementById("question").innerText=questionText;
    document.getElementById("choice0").innerText=choice0;
    document.getElementById("choice1").innerText=choice1;
    document.getElementById("choice2").innerText=choice2;
    document.getElementById("choice3").innerText=choice3;
    correctOne=correctChoice;
};

let run=function(){
    b1.onclick=function(){checkCorrect(this)};
    b2.onclick=function(){checkCorrect(this)};
    b3.onclick=function(){checkCorrect(this)};
    b4.onclick=function(){checkCorrect(this)};

    if(curQ===1){
        createQuestion("How many keys are on a grand piano?", "Fallout 76", "At least 1", "88", "OVER 9000","choice2");
        b3=correctOne;
    }else if(curQ===2){
        createQuestion("What are the notes of guitar strings in standard tuning from order of lowest to highest?","EADGBe", "NAHFAM", "Press F to pay respects", "THICC", "EADGBe");
        b1=correctOne;
    }else if(curQ===3){
        createQuestion("What instrument family is the cello in?", "Brass", "Woodwind", "String bois", "Bang-boom-crash instruments", "String bois")
        b3=correctOne;
    }else if(curQ===4){
        createQuestion("Who created music?", "The Giant Flying Spaghetti Monster", "The Beatles", "Some caveman banging on a rock", "Elon Musk", "Some caveman banging on a rock")
        b3=correctOne;
    }else{
        let title=document.getElementById("title");
        title.innerText="Your Results";
        let questionText=document.getElementById("question");
        questionText.innerHTML="You scored " + numRight + " out of " + questions;
        document.getElementById("buttons").innerHTML=" ";

    }

    let progress=document.getElementById("progress");
    progress.innerText="Question " + curQ + " of " + questions + ".";
};

let checkCorrect=function(button){
    if(button===correctOne){
        numRight++;
    }
    curQ++;
    run();
};


/*let q1=function(){
    let q1=document.getElementById("question");
    q1.innerText="How many keys are on a standard grand piano?";
    let c1a=document.getElementById("choice1");
    c1a.innerText="Fallout 76";
    let c2a=document.getElementById("choice2");
    c2a.innerText="At least 1";
    let c3a=document.getElementById("choice3");
    c3a.innerText="88";
    let c4a=document.getElementById("choice4");
    c4a.innerText="OVER 9000";
    let b1a=document.getElementById("btn1");
    let b2a=document.getElementById("btn2");
    let b3a=document.getElementById("btn3");
    let b4a=document.getElementById("btn4");
    if(b3a.onclick || b2a.onclick){
        q2();
        score++;
    }else if(b1a.onclick){
        loseScrn();
    }else if(b2a.onclick){
        loseScrn();
    }else if(b4a.onclick){
        loseScrn();
    }
};

let q2=function(){
    let q1=document.getElementById("question");
    q1.innerText="What are the notes of guitar strings tuned to standard in order of lowest to highest?";
    let c1b=document.getElementById("choice1");
    c1b.innerText="DECAF";
    let c2b=document.getElementById("choice2");
    c2b.innerText="Press F to pay respects";
    let c3b=document.getElementById("choice3");
    c3b.innerText="CCCCCC";
    let c4b=document.getElementById("choice4");
    c4b.innerText="EADGBE";
    let b1b=document.getElementById("btn1");
    let b2b=document.getElementById("btn2");
    let b3b=document.getElementById("btn3");
    let b4b=document.getElementById("btn4");
    if(b4b.onclick){
        q3();
        score++;
    }else if(b1b.onclick){
        loseScrn();
    }else if(b2b.onclick){
        loseScrn();
    }else if(b3b.onclick){
        loseScrn();
    }
};
let q3=function(){
    let q1=document.getElementById("question");
    q1.innerText="How many keys are on a standard grand piano?";
    let c1b=document.getElementById("choice1");
    c1b.innerText="76";
    let c2b=document.getElementById("choice2");
    c2b.innerText="At least 1";
    let c3b=document.getElementById("choice3");
    c3b.innerText="88";
    let c4b=document.getElementById("choice4");
    c4b.innerText="OVER 9000";
    let b1a=document.getElementById("btn1");
    let b2a=document.getElementById("btn2");
    let b3a=document.getElementById("btn3");
    let b4a=document.getElementById("btn4");
};




loseScrn=function(){
    let loseHead=document.createElement("H1");
    loseHead.innerText="YOU LOSE! RELOAD";

};*/