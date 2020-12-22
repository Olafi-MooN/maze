// Mostra o array como uma string
const showMaze = function showMaze(maze) {
    maze.map(item => {
      console.log(item.toString().split(',').join(''));
      setTimeout(() => {
        console.clear();
      }, 1000)
      
    })
  }

module.exports = showMaze;