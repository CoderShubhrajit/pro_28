class SlingShot
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: launcher.body, pointB: pointB, stiffness: 0.4, length: 20
        }
        this.slingShot = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.slingShot);
    }
       fly()
       {
          this.slingShot.bodyA = null;
       }
    display(){
        if (this.slingShot.bodyA){
            strokeWeight(6);
            line(this.slingShot.bodyA.position.x,this.slingShot.bodyA.position.y,this.pointB.x,this.pointB.y);
        }  
    }
}