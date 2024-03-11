console.log('game starting')

const game = document.querySelector('#game')
const pointDisplay = document.querySelector('#point-display')
const timeDisplay = document.querySelector('#time-display')

const allBoards = document.querySelectorAll('.board')
const btn = document.querySelector('.btn')

let gamePoint = 0
let maxTime = 15
let gameTime = maxTime
let gameStarts = null
let gameTimeCount = null

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

// adding points user when click the mole
allBoards.forEach((board) => {
   board.addEventListener('mousedown', function() {
      if (board.classList.contains('mole')) {
         console.log('point added')
         gamePoint++
         pointDisplay.textContent = gamePoint
      }
   })
})

// decreasing the time when the game starts
function decreasingTime() {
   gameTime--
   timeDisplay.textContent = gameTime

   // when the time to zero the game will be end
   if (gameTime == 0) {
      // remove the mole in game when the game ends
      allBoards.forEach((board) => {
         board.classList.remove('mole')
      })
      clearInterval(gameStarts)
      clearInterval(gameTimeCount)
      console.log('the times up')
   }
}



function gameStarting() {
   gameStarts = setInterval(gettingRandomBoard, 700)
   gameTimeCount = setInterval(decreasingTime, 500)
}


