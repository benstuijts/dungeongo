'use strict';

// Moet een tile zich wel bewust zijn van de map. De map moet zich bewust zijn van de tile:
// Wanneer een tile invloed heeft op andere tiles, dit in de map organiseren (bijvoorbeeld verlichting)

class Map {
  constructor({ name = "random Dungeon", id }) {
    this.name = name;
    this.id = id;
  }

  loadMap() {
    
  }


  randomDungeon( width=10, height=10 ) {
    let map = [],x,y;
    for(x=0; x<width; x++) {
      map[x] = [];
      for(y=0; y<height;y++) {
        map[x][y] = new Tile({
          x:x, y:y
        });
      }
    }
    // add some walls:

    for(x=0; x<width*3; x++) {
      let RND_x = Math.round(Math.random() * (width-1));
      let RND_y = Math.round(Math.random() * (height-1));
      map[RND_x][RND_y].id = 1;
    }

    map[this.player.x][this.player.y].id = 0;
    return map;
  }

  render(ctx) {

  }

}

export default Map;
