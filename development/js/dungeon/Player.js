class Player {
  constructor() {
    this.position = {
      x:4,
      y:0
    }
    this.x = 4;
    this.y = 0;
    this.width = 20;
    this.height = 20;
  }

  // dit werkt dan weer niet...

  getBounds(grid) {
    return {
      x: this.position.x * grid.width,
      y: this.position.y * grid.height
    }
  }

  getCenter(grid) {
    return {
      x: (this.position.x * grid.width) + Math.round(grid.width/2),
      y: this.position.y * grid.height + Math.round(grid.width/2)
    }
  }

  render(ctx) {
    let pos = this.getCenter({width: 100, height: 100});
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 40, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.minimapCtx.stroke();
  }
}

export default Player;
