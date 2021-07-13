class Bob{
    constructor(x,y,r){
     var option={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
     }
     this.body=Bodies.circle(x,y,r,option);
     this.x=x;
     this.y=y;
     this.r=r;
     

     World.add(world,this.body);
      }
      
      display(){
         push()
         fill("purple");
         translate(this.body.position.x,this.body.position.y,this.r);
         ellipseMode(CENTER);
         ellipse(0,0,50,50);
         /*imageMode(CENTER);
         image(this.image,0,0,this.r,this.r);*/
         pop()
      }
}
        
     
