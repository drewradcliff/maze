// initialize maze map
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let playerPosition = []
let playerTop, playerLeft

const mapDiv = document.body.querySelector('#map')

// Initialize map
for (let row=0; row<map.length; row++) {
    // create row div
    let rowDiv = document.createElement('div')
    rowDiv.id = 'row'
    mapDiv.appendChild(rowDiv)

    for (let col=0; col<map[row].length; col++) {
        // create cell div
        let newCell = document.createElement('div')
        rowDiv.appendChild(newCell)
        // cell is start position
        if (map[row][col] === 'S') {
            // set player start coordinates
            playerPosition = [row, col]
            playerTop = row*50
            playerLeft = col*50
        }
        // cell is wall
        else if (map[row][col] === 'W') {

        }
        // cell is finish
        else if (map[row][col] === 'F') {

        }
        // cell is empty
        else {

        }
    }
}

// add player to page
let player = document.createElement('div')
player.id = 'player'
player.style.top = playerTop
player.style.left = playerLeft
mapDiv.appendChild(player)

// event listener
document.addEventListener('keydown', move);

// move player
function move(e) {
    if (e.code === "ArrowDown") {
        if (map[row][col-1] === ' ' || 'F') {
            playerTop += 10
        }
    }
    if (e.code === "ArrowUp") {
        if (map[row][col+1] === ' ' || 'F') {
            playerTop -= 10
        }
    }
    if (e.code === "ArrowLeft") {
        if (map[row-1][col] === ' ' || 'F') {
            playerLeft -= 10
        }
    }
    if (e.code === "ArrowRight") {
        if (map[row+1][col] === ' ' || 'F') {
            playerLeft += 10
        }
    }
  
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
  }
  