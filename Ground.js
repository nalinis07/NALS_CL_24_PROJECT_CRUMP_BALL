// Ground CLASS 
class Ground {
    constructor (x,y,width, height, color) {
        var options = {
            isStatic : true
        }
        this.width = width;
        this.height = height;
        this.color = color;
        this.body = Bodies.rectangle (x, y, width, height, options);
        World.add (world, this.body);

        console.log (this);
        
        
    }

    display () {
        var pos = this.body.position;

        rectMode (CENTER);
        fill (this.color);
        //console.log (pos.x + " " + pos.y);
        console.log (this.width + " " + this.height);
        rect (pos.x, pos.y, this.width, this.height);
        

    }

};