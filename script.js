// initialize maze map
// const default_map = 'WWWWWWWWWWWWWWWWWW,F       W  W     W,WWWWWWW W WWWWWW W,S W   W        W W,W W W WWWWWWW WW W,W W W       W    W,W W WWWWWWW WWWW W,W W W     W      W,W W WWWWW WWWWWWWW,W                W,WWWWWWWWWWWWWWWWWW'
const default_map = 'WWWWWWWWWWWWWWWWWWWWW,W   W     W     W W W,W W W WWW WWWWW W W W,W W W   W     W W   W,W WWWWWWW W WWW W W W,W         W     W W W,W WWW WWWWW WWWWW W W,W W   W   W W     W W,W WWWWW W W W WWW W F,S     W W W W W W WWW,WWWWW W W W W W W W W,W     W W W   W W W W,W WWWWWWW WWWWW W W W,W       W       W   W,WWWWWWWWWWWWWWWWWWWWW'
// document.getElementById('text-map').textContent = default_map
let map = document.getElementById('text-map').textContent = default_map.split(',')

const button = document.getElementById('mapButton')
button.onclick = function() {
    map = document.getElementById('text-map').value.split(',')
    document.getElementById("map").innerHTML = ""
    initGame()
}

let playerPosition = []
let finishPosition = []
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

                newCell.dataset.type = 'start'
            }
            // cell is wall
            else if (map[row][col] === 'W') {
                newCell.dataset.type = 'wall'
            }
            // cell is finish
            else if (map[row][col] === 'F') {
                newCell.dataset.type = 'finish'
                finishPosition = [row, col]
            }
            // cell is empty
            else {
                newCell.dataset.type = 'empty'
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
    player.style.top = playerTop + "px";
    player.style.left = playerLeft + "px";

    // finish maze detected
    if (playerPosition.toString() === finishPosition.toString()) {
        alert('You completed the maze!')
        location.reload()
    }
}

initGame()