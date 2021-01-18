class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 100
          } 
          this.pointB=pointB;
          this.slingshot = Constraint.create(options);
          World.add(myWorld,this.slingshot);
    }
    display(){
      if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
    
        
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
    }
      fly(){
    
          this.slingshot.bodyA = null;
      }
    }

    