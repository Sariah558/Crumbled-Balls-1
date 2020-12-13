class paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y, this.r/2)
        World.add(world, this.body);

        function keyPressed(){
            if (keyCode === UP_ARROW) {
              Matter.Body.applyForce(ellipseObject.body,ellipseObject.body.position,{x:85,y:-85});
              
            }
        }
    }
    display()
    {
        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeweight(3);
        fill(255,0,255);
        ellipse(0,0,this.r, this.r);
        pop()
    }
}



