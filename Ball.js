class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':1,
            'friction':0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        fill("yellow");
        ellipseMode(CENTER);
        stroke("blue");
        ellipse(pos.x,pos.y,this.radius);
        push();
        pop();

    
    }
}

