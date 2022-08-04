//feed the questions here
let questions=[
    {
    ques : "Is java a compiled language or an interpreted language ?",
    ans : "Both",
    option : ["Complied","Interpreted", "Both", "None of these"]
},
{
    ques : "Who developed JAVA ?",
    ans : "James Gosling",
    option : ["James Gosling","Bjarne Stroustrup", "Guido van Rossum", "Brendan Eich"]
    
},
{
    ques : "Which laboratory was Java invented or developed in ?",
    ans : "Sun Microsystems",
    option : ["Bell Laboratory",
            "IBM",
             "Sun Microsystems", 
             "Johnson and Johnson"]
    
},
{
    ques : "Which of the following is FALSE about arrays on JAVA ?",
    ans : "Length of array can be changed after creation of array",
    option : ["A java array is always an object",
            "Length of array can be changed after creation of array",
             "Arrays in Java are always allocated on heap", 
             "None of the above"]
    
},
{
    ques : "What is the original name of Java Programming language ?",
    ans : "OAK",
    option : ["SPRUCE","PINE", "OAK", "TEEK"]
    
    }

];

//hide start button and show questions on click

let startbtn=document.querySelector("#start-btn");
let rulestart=document.querySelector(".rule-box .buttons .start-quiz")
let rulecancel=document.querySelector(".rule-box .buttons .cancel-quiz")
let quesbox=document.querySelector(".ques-box");
let rulebox=document.querySelector(".rule-box")

startbtn.onclick=()=>{
    startbtn.classList.remove("afterclick"); 
    startbtn.classList.add("aftersubmit");
    rulebox.classList.add("afterclick")
    //quesbox.classList.add("afterclick"); 
}
rulestart.onclick=()=>{
    rulebox.classList.remove("afterclick")
    quesbox.classList.add("afterclick"); 
}
rulecancel.onclick=()=>{
    document.location.reload();
}
//display questions

showQuestions();
function showQuestions(){
    let x =document.querySelector('.ques-box .ques-block');
    for(let i=0;i<questions.length;i++){
        x.innerHTML=x.innerHTML+"<section><div class='question'>"+questions[i].ques+"</div>"+
        "<div class='option'>"+questions[i].option[0]+"</div>"+
        "<div class='option'>"+questions[i].option[1]+"</div>"+
        "<div class='option'>"+questions[i].option[2]+"</div>"+
        "<div class='option'>"+questions[i].option[3]+"</div></section>";    
    }
}



let ques_count;
let correctans=0;
let wrongans=0;
let index=0

let section_list=document.querySelectorAll(".ques-box .ques-block section");
for(let i=0; i<section_list.length;i++){
    section_list[i].setAttribute("onmouseenter","quesNo(this)");
    for(let j=0;j<section_list[i].getElementsByClassName("option").length;j++){
        section_list[i].getElementsByClassName("option")[j].setAttribute("onclick","selectedOption(this)")
    }
}

function quesNo(number){
    // if(number[0].innerHTML="1"){
    //     ques_count=1;
    // }
    if(number.children[0].textContent=="Is java a compiled language or an interpreted language ?"){
        ques_count=0
    };
    if(number.children[0].textContent=="Who developed JAVA ?"){
        ques_count=1
    };
    if(number.children[0].textContent=="Which laboratory was Java invented or developed in ?"){
        ques_count=2
    };
    if(number.children[0].textContent=="Which of the following is FALSE about arrays on JAVA ?"){
        ques_count=3
    };
    if(number.children[0].textContent=="What is the original name of Java Programming language ?"){
        ques_count=4
    };
}

function selectedOption(answer){
    let userans=answer.innerHTML;
    //console.log(answer);
    let correct_opt=questions[ques_count].ans;

    if(userans==correct_opt){
        answer.style.backgroundColor="#0fcd28";
        blockClick(ques_count);
        correctans++;
    }
    else{
        answer.style.backgroundColor="#f40e2a";
        blockClick(ques_count);
        wrongans++;
    }
    ++ques_count;
}
    
//block clicking the options once selected
function blockClick(ques_count){
    for (let index = 0;index< 4; index++) {
        section_list[ques_count].getElementsByClassName("option")[index].classList.add("blockclick")
    }
}

//count wrong answer and corect answer and show alert 
//message if not al questions answered
let sub=document.querySelector(".ques-box #submit");
sub.onclick=()=>{
    if(wrongans+correctans==5){
        let res=document.querySelector("#result");
        let scor=document.querySelector(".score");

        quesbox.classList.remove("afterclick"); 
        startbtn.classList.add("aftersubmit"); 
        res.classList.add("afterclick");

        scor.innerHTML=correctans;
        res.scrollIntoView();

        displayMessage();
    }
    else{
        alert("Please answer all the questions !!!");
    }
}

//dipslay coorect and wrong answer
function displayMessage(){
    let m_disp=document.querySelector(".result .message-display");
    let i_disp=document.querySelector(".result .icon");
    if(correctans<3){
        m_disp.innerHTML="<h1> Oh snap , You can do it better </h1>";
        i_disp.innerHTML="<i class='fa-solid fa-heart-crack'></i>";
    }
    else{
        m_disp.innerHTML="<h1> Congratulations !!!, thats an impressive score. </h1>";
        i_disp.innerHTML="<i class='fa-solid fa-crown fa-2xl icon'></i>"
    }
}

//restart quiz
 function restart(){
    document.location.reload();
 }

 