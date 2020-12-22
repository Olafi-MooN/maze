function buildMazeFullArray(nameArrayMaze) {
    var newLabirinto = nameArrayMaze.map(item => {
      return item.split('');
  
    });
    return newLabirinto;
  }

module.exports = buildMazeFullArray;