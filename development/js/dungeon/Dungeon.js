'use strict';

import Player from './Player';
import pathFinding from 'pathfinding';

class Dungeon {
  constructor({ name="Random Dungeon", tileSize={width:100, height: 100} }) {
    this.player = new Player();
    this.name = name;
    this.tileSize = tileSize;
    this.map = "map";

    this.canvasMiniMap = document.getElementById("minimap");
    this.canvasDungeon = document.getElementById("dungeon");
    this.minimapCtx = this.canvasMiniMap.getContext("2d");
    this.dungeonCtx = this.canvasDungeon.getContext("2d");

    this.getMap = new Promise((resolve, reject)=>{
      let map = this.randomDungeon();
      map ? resolve(map) : reject({error: "error"});
    });

    this.firstMount();
  }

  firstMount() {

    console.log('Building ' + this.name);
    this.getMap.then((result)=>{
      this.map = result;
      this.minimap();

      console.log(this.map[9][9]);

      let matrix = this.createGrid(result);
      let grid = new pathFinding.Grid(matrix);
      let finder = new pathFinding.AStarFinder();

      //let path = finder.findPath(1,2,4,2,new pathFinding.Grid(matrix));

      /*
      Be aware that grid will be modified in each path-finding,
      and will not be usable afterwards. If you want to use a
      single grid multiple times, create a clone for it before
      calling findPath.
      */

      //console.log(path);

      // test our find method:

      let path = this.findPathTo(this.player, this.map[1][6]); // returns array with tiles whoch should have walls.
      console.log(path);

      // Check if there are any walls on this path:
      let visibleFlag = true;
      path.forEach((tile) => {
        if(this.map[tile.x][tile.y].id == 1) {
          visibleFlag = false;
        }
      });

      if(visibleFlag) {
        console.log('tile is visible to player');
      } else {
        console.log('tile is NOT visible to player');
      }


      this.render();
    }).catch();

    // ----------------------

    // ----------------------
    /*
    this.loadDungeon()
        .then((result) => {
          this.map = result
          console.log(this.name);
          console.log(this.map);

          this.minimap();

        }, (error) => {
          console.log(error);
        });
      */

  }

  createGrid(map) {
    let x,y, matrix = [];
    for(x=0;x<map.length; x++) {
      matrix[x] = [];
      for(y=0; y<map[0].length; y++) {
        matrix[x][y] = map[x][y].id;
      }
    }
    return matrix;
  }

  loadDungeon() {

    return new Promise((resolve, reject) => {
      console.log('get map with API call');
      let map = this.randomDungeon();
      map ? resolve(map) : reject({error: "error"});
    });

  }

  minimap() {
    console.log('draw minimap');
    this.minimapCtx.clearRect(0, 0, this.canvasMiniMap.width, this.canvasMiniMap.height);
    let x,y;
    for(x=0;x<this.map.length; x++) {
      for(y=0; y<this.map[0].length; y++) {
        if(this.map[x][y].id == 1) {
            this.minimapCtx.fillRect(x*20,y*20,20,20);
        }

      }
    }
    let pos = this.player.getCenter({width: 20, height: 20});
    this.minimapCtx.beginPath();
    this.minimapCtx.arc(pos.x, pos.y, 10, 0, 2 * Math.PI, false);
    this.minimapCtx.fillStyle = 'green';
      this.minimapCtx.fill();
      this.minimapCtx.lineWidth = 2;
      this.minimapCtx.strokeStyle = '#003300';
      this.minimapCtx.stroke();
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

  findPathTo(actor, target) {
    let path = [];

    console.log(actor.x, actor.y, " TO ", target.x, target.y);

    let startX = actor.x,
        startY = actor.y,
        endX = target.x,
        endY = target.y,
        stepX = 0,
        stepY = 0,
        walkerX = startX,
        walkerY = startY,
        xDirectionComplete = false,
        yDirectionComplete = false,
        pathComplete = false;

    while(pathComplete == false) {

      // check if x coords reach endX
      if(walkerX == endX + 1 || walkerX == endX - 1) {
        xDirectionComplete = true;
      }

      // check if y coords reach endY
      if(walkerY == endY + 1 || walkerY == endY - 1) {
        yDirectionComplete = true;
      }

        console.log(`walker: ${walkerX}, ${walkerY} xComplete: ${xDirectionComplete} yComplete: ${yDirectionComplete} pathComplete: ${pathComplete}`);


        if(walkerX < endX && xDirectionComplete == false) {
          stepX = 1;
        }
        if(walkerX > endX && xDirectionComplete == false) {
          stepX = -1;
        }
        if(walkerY < endY && yDirectionComplete == false) {
          stepY = 1;
        }
        if(walkerY > endY && yDirectionComplete == false) {
          stepY = -1;
        }

        // walker gaat stap maken:
        walkerX = walkerX + stepX,
        walkerY = walkerY + stepY;

        path.push({
          x: walkerX,
          y: walkerY
        });

        // check diagonal move -> extra tiles added

        // check if endpoint is reached.
        if(walkerX == endX && walkerY == endY) {
          pathComplete = true;
        }
        if(xDirectionComplete && yDirectionComplete) {
          pathComplete = true;
        }




        stepX = 0; stepY = 0;
    }
    return path;
  }


  render() {
    // 1 first draw tile on whicj player stands
    let ctx = this.dungeonCtx,x,y;
    //let {x,y} = this.player.getBounds({width: 100, height: 100});
    let playerX = this.player.x,
        playerY = this.player.y;

    //this.map[playerX][playerY].render(ctx);

    // 2 draw adjecent tiles

    for(x = playerX - 4; x < playerX + 5; x++) {
      for(y = playerY - 4; y < playerY + 5; y++) {

        console.log('tiles d.istance to player:' + Math.abs(x - playerX));

        // Is a tile visible to the player => no walls are between tile en players position.
        /*

          <-----  player ----->
            1             2
        */
        let drawThisTile = true;
        if(playerX > x) {
          // direction 1
          for(let checkX=x+1; checkX<playerX;checkX++) {
            try {
              if(this.map[checkX][y].id == 1) {
                drawThisTile = false;
              }
            } catch(error) {

            }

          }
        }

        if(playerX < x) {
          // direction 2
          for(let checkX = playerX+1; checkX < x;checkX++) {
            try {
              if(this.map[checkX][y].id == 1) {
                drawThisTile = false;
              }
            } catch(error) {

            }

          }
        }

        if(playerY > y) {
          // direction up
          for(let checkY=y-1; checkY<playerY;checkY++) {
            try {
              if(this.map[x][checkY].id == 1) {
                drawThisTile = false;
              }
            } catch(error) {

            }

          }
        }

        if(playerY < y) {
          // direction down
          for(let checkY=playerY+1; checkY<y;checkY++) {
            try {
              if(this.map[x][checkY].id == 1) {
                drawThisTile = false;
              }
            } catch(error) {

            }

          }
        }

        //let opacity = 1 - ((Math.abs(x - playerX)) * 0.3);
        let opacity = 1;

        if(typeof this.map[x][y] != 'undefined') {
          if(drawThisTile) {
            this.map[x][y].render(ctx, opacity);
          }
          //drawThisTile ? this.map[x][y].render(ctx, opacity) : false ;
        }

      }
    }

    // Draw the player
    this.player.render(ctx);



  }
}

class Tile {
  constructor({ x, y, id = 0, width=100, height=100}) {
    this.id = id;
    this.floorTexture = null;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height= height;
    this.color = 'lightgrey';

  }



  isVisibleTo(actor) {

    // redeneer vanuit de player naar de tile toe.
    // wanneer in de weg van de player naar de tile een wall bevindt, is de tile niet zichtbaar voor de player.
    // PATH FINDER!


    //let pathToActor = this.findPathTo(actor); // returns array with tiles whoch should have walls.

    // not here, should be in dungeon class (access to map prop)!



  }


  render(ctx, opacity = 1) {

    if(this.id == 0) {
      ctx.fillStyle = 'lightgrey';
    } else {
      ctx.fillStyle = 'black';
    }



    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);
    ctx.font = "20x Arial";
    ctx.fillStyle = "red";
    ctx.fillText("id = " + this.id,this.x*this.width+20,this.y*this.height+30);
    ctx.fillText("color = " + this.color,this.x*this.width+20,this.y*this.height+50);
    ctx.restore();
  }
}

export default Dungeon;
