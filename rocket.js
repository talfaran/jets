class Rocket {
    constructor(color, size){
      this.color = color;
      this.size = size;
    }
    engageSecondaryEngines () { 
      console.log('Secondary Engines Engaged!');
     };
  }
  
  module.exports = Rocket;