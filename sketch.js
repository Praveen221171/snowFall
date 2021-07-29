var engine, world,snow,snow1,snow2,snow3


function preload() {

snow=loadImage("snow3.jpg")




  
}


function setup() {
  createCanvas(800,400);
  

  engine=Matter.Engine.create()

world=engine.world
snow1=new snowFall (100,50)
snow2=new snowFall (100,60)

}










function draw() {
  background(snow);  

  Matter.Engine.update(engine)

snow1.display()
snow2.display()





  
}