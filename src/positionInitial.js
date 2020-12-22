// Busca pelo inicio do labirinto
const initialPosition = function positionInitial(buildMaze){
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

  module.exports = initialPosition;