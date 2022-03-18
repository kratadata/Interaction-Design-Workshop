let randomCol  = color(random(255),random(255),random(255));
let a1,b1,c1;
let tlo;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(255);
  if(lightMeasure == 0){
    tlo = color(255,0)
  } else {
    tlo = color(255,200)
  }

  pionowepaski();
  lewypasek();
  prawypasek();
  noStroke();
  fill(tlo);
  rect(0,0,1000);
  triangles(potentiometer);
  

 
}
  
function lewypasek(){
  for(let i=5;i<=width;i+=8){
    stroke(255);
    if (i<=width/2){
      line(1,i,1+i,i);
    } else{
      line(1,i,width-i,i);
    }
  for(let i=1;i<=width;i+=8){
    stroke(255,0,0);
    if (i<=width/2){
      line(1,i,1+i,i);
    } else{
      line(1,i,width-i,i);
    }
    }
  }
}

function prawypasek(){
  for(let i=5;i<=width;i+=8){
    stroke(255);
    if(i<=width/2){
      line(width,i,width-i,i);
    } else{
      line(width,i,i,i);
    }
  }
  for(let i=1;i<=width;i+=8){
    stroke(255,0,0);
    if(i<=width/2){
      line(width,i,width-i,i)
    } else{
      line(width,i,i,i);
    }
  }
}
function pionowepaski(){
  for(let i=1;i<=width;i+=8){
    stroke(255,0,0);
    strokeWeight(4)
    let y = 1;
    line(i,y,i,height);
  }
}
function triangles(a){
  let kolor
  if (buttonClick == 0){
    kolor = color(random(255),random(255),random(255),120);
    serialWriteRGB(random(255),random(255),random(255))
  } else{
    kolor = color(255,255,255,120);
    serialWriteRGB(255,255,255)
  }
  fill(kolor);
  triangle(a,500,a-500,0,a-500,1000);
  triangle(500,a,1000,a-500,0,a-500);
  triangle(1000-a,500,1500-a,0,1500-a,1000);
  triangle(500,1000-a,0,1500-a,1000,1500-a);
}
