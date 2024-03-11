console.log('game starting')

const game = document.querySelector('#game')
const pointDisplay = document.querySelector('#point-display')
const timeDisplay = document.querySelector('#time-display')

const allBoards = document.querySelectorAll('.board')
const btn = document.querySelector('.btn')

let gameStarts = null

// when the stat game button clicks game started
btn.addEventListener('mousedown', function() {
   gameStarting()
})

function gettingRandomBoard() {
   allBoards.forEach((board) => {
      board.classList.remove('mole')
   })

   let randomBoard = allBoards[Math.floor(Math.random() * allBoards.length)]
   randomBoard.classList.add('mole')
   console.log(randomBoard)
}


function gameStarting() {
   // gameStarts = setInterval(gettingRandomBoard, 700)

}


