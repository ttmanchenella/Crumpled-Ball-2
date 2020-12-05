class Paper {
    constructor(x,y,z) {
        this.image = loadImage("paper.png")
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.x = x;
        this.y = y;
        this.z = z;
        this.body = Bodies.circle(this.x, this.y, this.z/2, options);
        World.add(world, this.body);
    }

    display() {
        var position = this.body.position;

        push();
        translate(position.x, position.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);    
        image(this.image, 0, 0, this.z, this.z);
        pop();
    }
}