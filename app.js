console.log('game starting')

const game = document.querySelector('#game')
const pointDisplay = document.querySelector('#point-display')
const timeDisplay = document.querySelector('#time-display')

const allBoards = document.querySelectorAll('.board')
const btn = document.querySelector('.btn')

let gamePoint = 0
let gameStarts = null

// when the stat game button clicks game started
btn.addEventListener('mousedown', function() {
   gameStarting()
})

// getting the random board and added the mole
function gettingRandomBoard() {
   allBoards.forEach((board) => {
      board.classList.remove('mole')
   })

   let randomBoard = allBoards[Math.floor(Math.random() * allBoards.length)]
   randomBoard.classList.add('mole')
   console.log(randomBoard)
}

// adding points 
allBoards.forEach((board) => {
   board.addEventListener('mousedown', function() {
      if (board.classList.contains('mole')) {
         console.log('point added')
         gamePoint++
         pointDisplay.textContent = gamePoint
      }
   })
})


function gameStarting() {
   // gameStarts = setInterval(gettingRandomBoard, 700)

}


