const showMaze = require('./showMaze');

const mazeStart = function mazeStart(fullMaze, initialPosition) {
    if (fullMaze[initialPosition.y - 1][initialPosition.x] === '0') {
        fullMaze[initialPosition.y - 1][initialPosition.x] = 'e';
        
        showMaze(fullMaze);
        initialPosition.y += - 1; 
        initialPosition.x;
        console.log(initialPosition.y, initialPosition.x)
      }
      // Vai para direita
      else if (fullMaze[initialPosition.y][initialPosition.x +1] === '0') {
        fullMaze[initialPosition.y][initialPosition.x +1] = 'e';
  
        showMaze(fullMaze);
        initialPosition.y; 
        initialPosition.x += +1;
        console.log(initialPosition.y, initialPosition.x)
      }
      // vai para esquerda
      else if (fullMaze[initialPosition.y][initialPosition.x -1] === '0') {
        fullMaze[initialPosition.y][initialPosition.x -1] = 'e';
  
        showMaze(fullMaze);
        initialPosition.y; 
        initialPosition.x += -1;
        console.log(initialPosition.y, initialPosition.x)
      }
      //vai para baixo
      else if (fullMaze[initialPosition.y + 1][initialPosition.x] === '0') {
        fullMaze[initialPosition.y + 1][initialPosition.x] = 'e';
        
        showMaze(fullMaze);
        initialPosition.y += + 1; 
        initialPosition.x;
        console.log(initialPosition.y, initialPosition.x)
      }
      // vai pra cima -> se pra baixo == 1, se esquerda == 1, se direita == 1
      else if (fullMaze[initialPosition.y + 1][initialPosition.x] === '1' && fullMaze[initialPosition.y][initialPosition.x +1] === '1' && fullMaze[initialPosition.y][initialPosition.x -1] === '1') {
        fullMaze[initialPosition.y - 1][initialPosition.x] = 'e';
        showMaze(fullMaze);
        initialPosition.y += - 1; 
        initialPosition.x;
        console.log(initialPosition.y, initialPosition.x)
      } 
       
      // vai pra baixo -> se pra cima == 1, se esquerda == 1, se direita == 1
      else if (fullMaze[initialPosition.y - 1][initialPosition.x] === '1' && fullMaze[initialPosition.y][initialPosition.x +1] === '1' && fullMaze[initialPosition.y][initialPosition.x -1] === '1') {
        fullMaze[initialPosition.y + 1][initialPosition.x] = 'e';
        showMaze(fullMaze);
        initialPosition.y += + 1; 
        initialPosition.x;
        console.log(initialPosition.y, initialPosition.x)
      } 
      // vai pra baixo -> se pra cima == e, se esquerda == 1, se direita == 1
      else if (fullMaze[initialPosition.y - 1][initialPosition.x] === 'e' && fullMaze[initialPosition.y][initialPosition.x +1] === '1' && fullMaze[initialPosition.y][initialPosition.x -1] === '1') {
        fullMaze[initialPosition.y + 1][initialPosition.x] = 'e';
        showMaze(fullMaze);
        initialPosition.y += + 1; 
        initialPosition.x;
        console.log(initialPosition.y, initialPosition.x)
      }
  
      // vai pra esquerda -> se pra cima == 1, se baixo == 1, se direita == 1
      else if (fullMaze[initialPosition.y - 1][initialPosition.x] === '1' && fullMaze[initialPosition.y + 1][initialPosition.x] === '1' && fullMaze[initialPosition.y][initialPosition.x +1] === '1') {
        fullMaze[initialPosition.y][initialPosition.x -1] = 'e';
        showMaze(fullMaze);
        initialPosition.y; 
        initialPosition.x += - 1;
        console.log(initialPosition.y, initialPosition.x)
      }
      // vai pra esquerda -> se pra cima == 1, se baixo == 1, se direita == e
      else if (fullMaze[initialPosition.y - 1][initialPosition.x] === '1' && fullMaze[initialPosition.y + 1][initialPosition.x] === '1' && fullMaze[initialPosition.y][initialPosition.x +1] === 'e') {
        fullMaze[initialPosition.y][initialPosition.x -1] = 'e';
        showMaze(fullMaze);
        initialPosition.y; 
        initialPosition.x += - 1;
        console.log(initialPosition.y, initialPosition.x)
      }
      // vai pra direita -> se pra cima == 1, se baixo == 1, se esquerda == 1
      else if (fullMaze[initialPosition.y - 1][initialPosition.x] === '1' && fullMaze[initialPosition.y + 1][initialPosition.x] === '1' && fullMaze[initialPosition.y][initialPosition.x -1] === '1') {
        fullMaze[initialPosition.y][initialPosition.x +1] = 'e';
        showMaze(fullMaze);
        initialPosition.y; 
        initialPosition.x += + 1;
        console.log(initialPosition.y, initialPosition.x)
      }
      // vai pra direita -> se pra cima == 1, se baixo == 1, se esquerda == e
      else if (fullMaze[initialPosition.y - 1][initialPosition.x] === '1' && fullMaze[initialPosition.y + 1][initialPosition.x] === '1' && fullMaze[initialPosition.y][initialPosition.x -1] === 'e') {
        fullMaze[initialPosition.y][initialPosition.x +1] = 'e';
        showMaze(fullMaze);
        initialPosition.y; 
        initialPosition.x += + 1;
        console.log(initialPosition.y, initialPosition.x)
      }
      else {
        console.log('chegou ao destino')
      } 
}

module.exports = mazeStart;