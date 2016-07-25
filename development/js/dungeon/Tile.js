'use strict';

// Moet een tile zich wel bewust zijn van de map. De map moet zich bewust zijn van de tile:
// Wanneer een tile invloed heeft op andere tiles, dit in de map organiseren (bijvoorbeeld verlichting)

class Tile {

    constructor({ x, y, id, width, height, color, texture, name, map }) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.texture = texture;
      this.name = name;
      this.map = map;
    }

    isVisibleTo() {

    }

    render(ctx, opacity = 1) {

    }
}

export default Tile;
