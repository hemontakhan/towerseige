class Block {
    constructor(x, y, width, height) {
        var options = {
             isStatic: false,
             'friction':2
    
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        
        World.add(world, this.body);
       }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill(103,209,234);
        rect(0, 0, this.width, this.height);
        if(this.body.speed<2){
        } else{
          
          World.remove(world,this.body);
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y);
 
       }

        pop();


    }
}