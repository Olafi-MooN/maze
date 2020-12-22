var fs = require("fs");
var readline = require('readline')

const buildMaze = new Promise( (resolve, reject) => {
    // Cria a interface de leitura do labrinto
    var labirinto = [];

    const rl = readline.createInterface({
      input: fs.createReadStream(__dirname+'/file.txt'),
      output: process.stdout,
      terminal: false
    });
    
    // Adiciona o labirinto dentro de uma matriz
    rl.on('line', function (line) { // Ler linha por linha
      labirinto.push(line);
    }).on('close', function () { // Quando termina a leitura
      return resolve(labirinto);
    });

})

module.exports = buildMaze;