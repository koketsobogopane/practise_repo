//Create a grid of 5x5 blocks
// The horizontal blocks are the letters A-E
// The vertical blocks are the numbers 1-5
// Eg. Bottom left block is A1, top right block is J5
// The user needs to input the start position of a ping ball on the grid and how many moves left or right (L or R) and how many moves up or down (U or D)
// The user must also input the position of the pong ball
// An example of a user input: “A2 2R 2U D4” -> the ping ball is at A2 and the movement is 2 blocks right and then 2 blocks up, the pong

/**
 * Creates the grid for the game as an array
 * @returns {Array}
 */
const grid = () => {
    const horizontalLabel = [ 'A', 'B', 'C', 'D', 'E']
    const verticalLabel   = ['1','2','3','4','5'];

    const pad = '.'

    const grid = []

    const topRow = [' ',...horizontalLabel]
    grid.push(topRow)

    for ( let row of verticalLabel ) {
        const columnArr = [ row ]
        for ( let col of horizontalLabel) {
            columnArr.push(pad)
        }
  
        grid.push(columnArr)
    
    }

    return grid
}



function playGame ( playerInput ) {

    const playGround = grid()
    console.log (playGround)
 

}



playGame()