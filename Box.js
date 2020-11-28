class box{
    constructor (x,y,width,height){
        var options={
            isStatic:true,
            // restitution:0,
            friction:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height, options)
        this.width=width
        this.height=height
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill('green')
        rect(pos.x,pos.y,this.width,this.height)  
              
    }
}