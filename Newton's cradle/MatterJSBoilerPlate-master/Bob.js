class Bob{
    constructor(x,y,diameter){
        var Properties={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.diameter=diameter;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,(this.diameter)/2,Properties);
        World.add(world,this.body)
    }

    display(){
        var position=this.body.position;
        push();
        translate(position.x,position.y)
        fill("pink");
        ellipseMode(CENTER);
        ellipse(0,0,this.diameter,this.diameter);
        pop();
    }
}


