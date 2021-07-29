class snowFall {

constructor (x,y){
var Options= {

    friction:0.1,
    density:1 


}
this.radius=20
this.body=Matter.Bodies.circle(x,y,20,Options)
this.image=loadImage("snowflake.png")


Matter.World.add(world, this.body)



}

display(){

//circle( this.body.position.x,this.body.position.y ,this.radius)

image(this.image, this.body.position.x,this.body.position.y,20,20 );

    
}





}








