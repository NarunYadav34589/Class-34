class Monstergang{
    constructor(x,y,r)
      {
          var options = { 
              'restitution':0.5,
              'friction':1.0,
              'density':200,
              'isStatic':true
      };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("monsterfire.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var santaPos=this.body.position;		
              push()
              translate(santaPos.x, santaPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r, this.r)
              pop()
              
      }
  }
  