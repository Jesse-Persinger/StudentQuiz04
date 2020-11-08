// Makin it purty

// Variables

var title = document.getElementById("startBut");

var questionEl = document.getElementById("question");

var question = ["Which is a function", "What is a variable", "Which is proper syntex", "What sybol incloses an array", "How do you add javascript to html"]

var secondsLeft = 10;

var scoreEl = document.getElementById("score");

var score = scoreEl.textContent;

var choice1El = document.getElementById("answer1");

var choice2El = document.getElementById("answer2");

var choice3El = document.getElementById("answer3");

var choice4El = document.getElementById("answer4");

var choice1 = ["function(){}", "answer2", "answer3", "answer4", "answer5"];

var choice2 = ["Var =", "A value given to a string", "answer3", "answer4", "answer5"];

var choice3 = ["const =", "answer2", "var ice = cold", "answer4", "answer5"];

var choice4 = ["document.window", "answer2", "answer3", "[]", "answer5"];

var submit = ["answer1abc", "answer2", "answer3", "answer4", "answer5"];

var page = 0;

//Functions

function page1(){
    if(page==0){
    title.textContent = "Question 1 of 4";
    questionEl.textContent = question[0];
    choice1El.textContent = choice1[0];
    choice2El.textContent = choice2[0];
    choice3El.textContent = choice3[0];
    choice4El.textContent = choice4[0];
    page = 1;
    console.log(page);
    }
    };

    function page2(){
        if(page==1){
        title.textContent = "Question 2 of 4";
        questionEl.textContent = question[1];
        choice1El.textContent = choice1[1];
        choice2El.textContent = choice2[1];
        choice3El.textContent = choice3[1];
        choice4El.textContent = choice4[1];
        page = 2
        console.log(page);
        scoreEl = 1;
        }
     }

     function page3(){
         if(page==2){
        title.textContent = "Question 3 of 4";
        questionEl.textContent = question[2];
        choice1El.textContent = choice1[2];
        choice2El.textContent = choice2[2];
        choice3El.textContent = choice3[2];
        choice4El.textContent = choice4[2];
        page = 3;
        console.log(page);
        scoreEl = 3;
     }
    }

     function page4(){
         if(page==3){
        title.textContent = "Question 4 of 4";
        questionEl.textContent = question[3];
        choice1El.textContent = choice1[3];
        choice2El.textContent = choice2[3];
        choice3El.textContent = choice3[3];
        choice4El.textContent = choice4[3];
        page = 4;
        console.log(page);
        scoreEl = 4;
     }
    }

     function page5(){
         if(page==4){
        title.textContent = "Question 5 of 5";
        questionEl.textContent = question[4];
        choice1El.textContent = choice1[4];
        choice2El.textContent = choice2[4];
        choice3El.textContent = choice3[4];
        choice4El.textContent = choice4[4];
        page = 5;
        console.log(page);
        scoreEl = 5;
     }
    }

    function final(){
        if(page==4){
            title.textContent = "Complete"
            questionEl.textContent = scoreEl + " of 4";
        choice1El.textContent = "";
        choice2El.textContent = "";
        choice3El.textContent = "";
        choice4El.textContent = "";
        }
    }

    function timeout(){
        alert("Out of time")
    }


//initialize and page 1
scoreEl.textContent = score;
setInterval(function() {
    timer.innerHTML = secondsLeft--;
}, 1000);
console.log(page)

//
    document.getElementById("startBut").onclick = 
    function(){
        page1()
    }
    // page 2
 document.getElementById("answer1but").onclick = 
 function(){
     page2()
 }
 
 
// page 3
 document.getElementById("answer2but").onclick = 
 function(){
     page3()
 }

 //page 4
document.getElementById("answer3but").onclick = 
function(){
    page4()
}

//page 5
document.getElementById("answer4but").onclick = 
function(){
    final()
}


//on init alert start quiz


//change question to first in array


//change answers to first array


//start timer


//onclick submit


//check answer against stored value


//add to score else alert incorect


//change questions and answers to secound array.