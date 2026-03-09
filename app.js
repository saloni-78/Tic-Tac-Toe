let squares=document.querySelectorAll(".square");
let start="X";
let count=0;
let para=document.querySelector("p");
let finish=document.querySelector(".finish");
let resetbtn=document.querySelector(".reset");
let box=document.querySelector(".box");
let startbtn=document.querySelector(".start");

const winPatterns = [
    [0,1,2],
    [0,3,6], 
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const enabledboxes= () => {
    for(let square of squares){
        square.disabled=false;
        square.innerText="";
    }
};

const gameDraw= () => {
    para.innerText="Game is Draw";
    finish.classList.remove("hide");
    box.classList.add("hide");
    resetbtn.classList.add("hide");

};

const showWinner= (winner) => {
    para.innerText="Congraluations! Winner is "+winner;
    finish.classList.remove("hide");
    box.classList.add("hide");
    resetbtn.classList.add("hide");
};


const checkWinner= () => {
    for(let pattern of winPatterns){
        let pos1=squares[pattern[0]].innerText;
        let pos2=squares[pattern[1]].innerText;
        let pos3=squares[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2==pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;

};

for(let square of squares){
    square.addEventListener("click",() => {
        if(start=="X"){
            square.innerText="X";
            square.style.color="red";
            start="O";
        }
        else{
            square.innerText="O";
            square.style.color="blue";
            start="X";
        }
        count++;
        square.disabled=true;
        let isWinner=checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    }
    );      
};

startbtn.addEventListener("click", () => {
    finish.classList.add("hide");
    box.classList.remove("hide");
    resetbtn.classList.remove("hide");
    start="X";
    count=0;
    enabledboxes();


});

resetbtn.addEventListener("click", () => {
    start="X";
    count=0;
    enabledboxes();
});

