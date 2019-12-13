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

let r, c
let playerPosition = []
let playerTop, playerLeft

const mapDiv = document.body.querySelector('#map')

const initGame = () => {
    // Initialize map
    for (row=0; row<map.length; row++) {
        // create row div
        let rowDiv = document.createElement('div')
        rowDiv.id = 'row'
        mapDiv.appendChild(rowDiv)

        for (col=0; col<map[row].length; col++) {
            // create cell div
            let newCell = document.createElement('div')
            rowDiv.appendChild(newCell)
            // cell is start position
            if (map[row][col] === 'S') {
                // set player start coordinates
                playerPosition = [row, col]
                playerTop = row*50
                playerLeft = col*50

                newCell.style.backgroundColor = 'lime'
            }
            // cell is wall
            else if (map[row][col] === 'W') {
                newCell.style.backgroundColor = 'gray'
            }
            // cell is finish
            else if (map[row][col] === 'F') {
                newCell.style.backgroundColor = 'red'
            }
            // cell is empty
            else {
                newCell.style.backgroundColor = 'lightblue'
            }
        }
    }
    // add player to page
    let player = document.createElement('div')
    player.id = 'player'
    player.style.top = playerTop
    player.style.left = playerLeft
    mapDiv.appendChild(player)
    player.style.top = playerTop + "px";
    player.style.left = playerLeft + "px";

    // event listener
    document.addEventListener('keydown', move);

    console.log('bang')
}

// move player
function move(e) {
    if (e.code === "ArrowDown") {
        if (map[playerPosition[0]+1][playerPosition[1]] !== 'W' && playerPosition[0] < map.length-1) {
            // add new coordinates
            playerPosition[0]++
            // move player div position
            playerTop += 50
        }
    }
    if (e.code === "ArrowUp") {
        if (map[playerPosition[0]-1][playerPosition[1]] !== 'W' && playerPosition[0] > 0) {
            // add new coordinates
            playerPosition[0]--
            // move player div position
            playerTop -= 50
        }
    }
    if (e.code === "ArrowLeft") {
        if (map[playerPosition[0]][playerPosition[1]-1] !== 'W' && playerPosition[1] > 0) {
            // add new coordinates
            playerPosition[1]--
            // move player div position
            playerLeft -= 50
        }
    }
    if (e.code === "ArrowRight") {
        if (map[playerPosition[0]][playerPosition[1]+1] !== 'W' && playerPosition[1] < map[0].length-1) {
            // add new coordinates
            playerPosition[1]++
            // move player div position
            playerLeft += 50
        }
    }
    console.log(playerPosition)
    player.style.top = playerTop + "px";
    player.style.left = playerLeft + "px";
}

initGame()