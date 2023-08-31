//Create a grid of 5x5 blocks
// The horizontal blocks are the letters A-E
// The vertical blocks are the numbers 1-5
// Eg. Bottom left block is A1, top right block is J5
// The user needs to input the start position of a ping ball on the grid and how many moves left or right (L or R) and how many moves up or down (U or D)
// The user must also input the position of the pong ball
// An example of a user input: “A2 2R 2U D4” -> the ping ball is at A2 and the movement is 2 blocks right and then 2 blocks up, the pong

function playGame ( playerInput ) {
    const moves = playerInput.split(' ')
    const horizontalLabel = [ 'A', 'B', 'C', 'D', 'E']
    const index = {
        'A':1,'B':2,'C':3,'D':4,'E':5 ,
    }
const pad = '.'

const grid = [horizontalLabel]

for ( let i = 0; i < 5; i++) {
    const row = [i+1]
    for (let ii = 0; ii< 5; ii++) {
        row.push(pad)
    }
  
    grid.push(row)
    
}

grid.push(horizontalLabel)

grid[moves[0][1]][index[moves[0][0]]] = 'P'


console.log(grid)

grid[moves[0][1]][moves[1][0]] = 'P'

console.log(grid)

}

playGame('A2 2R 2U D4')