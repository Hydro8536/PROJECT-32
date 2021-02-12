class Box {
  constructor(x, y, width, height){
    var options ={
  restitution : 0.4,
  friction : 0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width = width;
      this.height = height;
      World.add(world, this.body);
    this.image = loadImage("sprites/wood1.png");
  }
  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++;
    }
    }
display(){
  console.log(this.body.speed);
  if(this.body.speed<3){
  push();
  translate(this.body.position.x, this.body.position.y);
  rectMode(CENTER);
  rect( 0, 0, this.width, this.height);
  pop();
  }else{
  World.remove(world,this.body);
  push();
  this.Visibility=this.Visibility-5;
  tint(255,this.Visibility);
  rect( 0, 0, this.width, this.height);
  pop();
  }
  
  }

};

