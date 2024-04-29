const boxes = document.querySelectorAll(".box")
const reset = document.querySelector("#reset-btn")
const winnertext = document.querySelector("#msg")
const newgame = document.querySelector("#new-btn")
const msgContainer = document.querySelector(".msg-container")

let turnO = true

const winnigCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = 'O'
            turnO=false
        } else{
            box.innerText = 'x'
            turnO = true
        }
    
        box.disabled = true
        winner()
    })
})

const gameWinner = (winner) =>{
    winnertext.innerHTML = `Congratulation ${winner} you are winner`
    msgContainer.classList.remove("hide")
    disablebox( )

}

const  winner = () =>{
    for( let pattern of winnigCombination){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 !='' && val2 !='' && val3 !=''){
            if(val1=== val2 && val2 === val3){
                gameWinner(val1)
            }
        }
    }
}

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const resetGame = () => {
    turnO = true
    enablebox()
    msgContainer.classList.add("hide")
}

reset.addEventListener('click', resetGame)
newgame.addEventListener('click', resetGame)