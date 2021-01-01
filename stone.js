class Stone
{
    constructor()
    {
        var options = {
            'restitution': 0.8,
            'density': 1.0
        }
        this.body = Bodies.rectangle(100,445,20,20,options);
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        //this.image.x = this.body.position.x;
        //this.image.y = this.body.position.y;
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,20,20);
        pop();
       /* imageMode(CENTER);
        image(this.image,100,465,40,40);*/
    }
}