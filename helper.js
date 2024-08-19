// generate a random Number
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  
  // get the Distance of two points
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  
  // return an String depending on the distances
  let getDistanceHint = distance => {
    if (distance < 40) {
      return "Mucho calor";
    } else if (distance < 60) {
      return "Muy caliente";
    } else if (distance < 80) {
      return "Caliente";
    } else if (distance < 120) {
      return "Calido";
    } else if (distance < 200) {
      return "Frio";
    } else if (distance < 380) {
      return "Muy frio";
    } else {
      return "Congelado";
    }
  }
  
  
  