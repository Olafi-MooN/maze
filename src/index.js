// Importações necessario para ler o labirinto
var fs = require("fs");
var readline = require('readline')

// Armazena os dados do labitinto em um array
const labirinto = [];

// Inicia a leitura e faz a execução do labirinto
function executeMaze(){
  // Cria a interface de leitura do labrinto
  const rl = readline.createInterface({
    input: fs.createReadStream(__dirname+'/file.txt'),
    output: process.stdout,
    terminal: false
  });

  // Adiciona o labirinto dentro de uma matriz
  rl.on('line', function (line) { // Ler linha por linha
    labirinto.push(line);
  }).on('close', function () { // Quando termina a leitura
    return start(); // Inicia o labirinto
  });
}

// Constroi o array do labirinto
function buildMaze(nameArrayMaze) {
  var newLabirinto = nameArrayMaze.map(item => {
    return item.split('');

  });
  return newLabirinto;
}

// Busca pelo inicio do labirinto
function positionInitial(buildMaze){
  let position = {
    x: '',
    y: '',
    lengthY: ''
  }
  buildMaze.map((item, i) => {
    let length = item.length;
    item.map((item, index) => {
      if(item === 'e'){
        position.y = i;
        position.x = index;
        position.lengthY = length -1;
      }
    });
  });
  return position;
}

// Mostra o array como uma string
function showMaze(maze) {
  maze.map(item => {
    console.log(item.toString().split(',').join(''));
    setTimeout(() => {
      console.clear();
    }, 1000)
    
  })
}
  
// Inicia o Maze
function start(){
  let newMaze = buildMaze(labirinto);
  let position = positionInitial(newMaze);

  console.log('Iniciando o MAZE...');
  /* 
    Para cada interação é necessário verificar qual posição tem '0'
    Quando o '0' é encontrado e necessário mudar o valor da posição para uma letra
  */
  setInterval(()=>{
      console.clear();
      // Subiu
      if (newMaze[position.y - 1][position.x] === '0') {
        newMaze[position.y - 1][position.x] = 'e';
        
        showMaze(newMaze);
        position.y += - 1; 
        position.x;
        console.log(position.y, position.x)
      }
      // Vai para direita
      else if (newMaze[position.y][position.x +1] === '0') {
        newMaze[position.y][position.x +1] = 'e';

        showMaze(newMaze);
        position.y; 
        position.x += +1;
        console.log(position.y, position.x)
      }
      // vai para esquerda
      else if (newMaze[position.y][position.x -1] === '0') {
        newMaze[position.y][position.x -1] = 'e';

        showMaze(newMaze);
        position.y; 
        position.x += -1;
        console.log(position.y, position.x)
      }
      //vai para baixo
      else if (newMaze[position.y + 1][position.x] === '0') {
        newMaze[position.y + 1][position.x] = 'e';
        
        showMaze(newMaze);
        position.y += + 1; 
        position.x;
        console.log(position.y, position.x)
      }
      // vai pra cima -> se pra baixo == 1, se esquerda == 1, se direita == 1
      else if (newMaze[position.y + 1][position.x] === '1' && newMaze[position.y][position.x +1] === '1' && newMaze[position.y][position.x -1] === '1') {
        newMaze[position.y - 1][position.x] = 'e';
        showMaze(newMaze);
        position.y += - 1; 
        position.x;
        console.log(position.y, position.x)
      } 
       
      // vai pra baixo -> se pra cima == 1, se esquerda == 1, se direita == 1
      else if (newMaze[position.y - 1][position.x] === '1' && newMaze[position.y][position.x +1] === '1' && newMaze[position.y][position.x -1] === '1') {
        newMaze[position.y + 1][position.x] = 'e';
        showMaze(newMaze);
        position.y += + 1; 
        position.x;
        console.log(position.y, position.x)
      } 
      // vai pra baixo -> se pra cima == e, se esquerda == 1, se direita == 1
      else if (newMaze[position.y - 1][position.x] === 'e' && newMaze[position.y][position.x +1] === '1' && newMaze[position.y][position.x -1] === '1') {
        newMaze[position.y + 1][position.x] = 'e';
        showMaze(newMaze);
        position.y += + 1; 
        position.x;
        console.log(position.y, position.x)
      }

      // vai pra esquerda -> se pra cima == 1, se baixo == 1, se direita == 1
      else if (newMaze[position.y - 1][position.x] === '1' && newMaze[position.y + 1][position.x] === '1' && newMaze[position.y][position.x +1] === '1') {
        newMaze[position.y][position.x -1] = 'e';
        showMaze(newMaze);
        position.y; 
        position.x += - 1;
        console.log(position.y, position.x)
      }
      // vai pra esquerda -> se pra cima == 1, se baixo == 1, se direita == e
      else if (newMaze[position.y - 1][position.x] === '1' && newMaze[position.y + 1][position.x] === '1' && newMaze[position.y][position.x +1] === 'e') {
        newMaze[position.y][position.x -1] = 'e';
        showMaze(newMaze);
        position.y; 
        position.x += - 1;
        console.log(position.y, position.x)
      }
      // vai pra direita -> se pra cima == 1, se baixo == 1, se esquerda == 1
      else if (newMaze[position.y - 1][position.x] === '1' && newMaze[position.y + 1][position.x] === '1' && newMaze[position.y][position.x -1] === '1') {
        newMaze[position.y][position.x +1] = 'e';
        showMaze(newMaze);
        position.y; 
        position.x += + 1;
        console.log(position.y, position.x)
      }
      // vai pra direita -> se pra cima == 1, se baixo == 1, se esquerda == e
      else if (newMaze[position.y - 1][position.x] === '1' && newMaze[position.y + 1][position.x] === '1' && newMaze[position.y][position.x -1] === 'e') {
        newMaze[position.y][position.x +1] = 'e';
        showMaze(newMaze);
        position.y; 
        position.x += + 1;
        console.log(position.y, position.x)
      }
      else {
        console.log('chegou ao destino')
      }

    },1000)
  
  
}

executeMaze();