class ball{
      constructor(x,y, vx,vy){
      this.x=x;
      this.y=y;
      this.vx = vx;
      this.vy = vy;
      this.fs =  ['#F0202060','#20F02060','#2020F060'][Math.floor(3*Math.random())];
      let canvas = document.querySelector('canvas');
      this.ctx = canvas.getContext('2d');
 }
  
    drawspot(fs){
       this.ctx.fillStyle = fs; 
       this.ctx.beginPath();       
       this.ctx.arc(this.x, this.y, 7,0,6.3);
       this.ctx.fill();
    }
  
    dostep(){
       this.drawspot('white');
      
       this.x+= this.vx;
       this.y+= this.vy;
       if (this.x > 300 || this.x <0){
          this.vx = -this.vx;
       }
       if (this.y > 150 || this.y < 0){
