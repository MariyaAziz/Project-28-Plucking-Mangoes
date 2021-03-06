class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.launcher=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
        var pos=this.launcher.bodyA.position;
        var pointB=this.pointB;
        line(pos.x,pos.y,pointB.x,pointB.y);
        }
    }

    fly(){
        this.launcher.bodyA=null;
    }

    attach(body){
        this.launcher.bodyA=body;
    }
}