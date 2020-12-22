const buildMaze = require('./buildMaze');
const buildMazeFullArray = require('./buildMazeFullArray');
const positionInitial = require('./positionInitial');
const mazeStart = require('./mazeStart');

buildMaze.then(data => {
  const fullMaze = buildMazeFullArray(data);
  const initialPosition = positionInitial(fullMaze);

  setInterval(()=>{
    console.clear();
    // Subiu
    mazeStart(fullMaze, initialPosition)
  },1000)


});