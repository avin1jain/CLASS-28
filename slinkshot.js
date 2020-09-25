class slinkshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.slink = Constraint.create(options);
        World.add(world, this.slink);
    }
    fly(){this.slink.bodyA=null}
    display(){
        if(this.slink.bodyA){
        var pointA = this.slink.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}