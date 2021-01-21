class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.12,
            length: 10
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA===null){
           return;
        }

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
    
    fly(){
    this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}