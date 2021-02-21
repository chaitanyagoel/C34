class SlingShot{
    constructor(bodyA, p1){
        var options = {
            bodyA: bodyA,
            pointB: p1,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = p1;
        this.sling = Matter.Constraint.create(options);
        Matter.World.add(world, this.sling);
    }


    fly(){
        this.sling.bodyA=null
    }
    display(){
    if(this.sling.bodyA){

    
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("yellow")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
} 
}