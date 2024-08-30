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
      return "Muy caliente";
    } else if (distance < 70) {
      return "Mucho calor" ;
    } else if (distance < 90) {
      return "Caliente";
    } else if (distance < 130) {
      return "Calido";
    } else if (distance < 210) {
      return "Frio";
    } else if (distance < 390) {
      return "Muy frio";
    } else {
      return "Congelado";
    }
  }
  
  
  