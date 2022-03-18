let a=100
let b=450
let stopKabelek = 280;
let arduinoColor;
let lastValue = 0;
let originalValue;

function setup() {
  createCanvas(1000, 1000);
  arduinoColor = color(115,17,240)
}

function draw() {
  background(220);
  noStroke()
  usb(a,b)

  a = map(potentiometer, 0, 1023, -300, 300)

  if (lastValue > originalValue){
    console.log("Increasing");
    if(a > stopKabelek) {
      a = stopKabelek;
    } else {
      a+= 2
    }
  }else if (lastValue < originalValue) {
      console.log("Decreasing");
      a-= 2
      
  }
  
  lastValue = originalValue;            

  //bigboiblu
  fill(arduinoColor);
  rect(300,400,500,300);

  //rect
  fill(0)
  rect(520,550,200,60)

  for(let i =0;i<=9;i++) {
      fill(200)
      square(525+i*20, 550, 10)
  }

  for(let i =0;i<=9;i++) {
    fill(200)
    square(525+i*20, 600, 10)
}


  //blacktop
  fill(0)
  rect(630,420,150,20)

   //blacktop2
   fill(0)
   rect(500,420,80,20)

     //blacktop2
     fill(114)
     rect(320,550,80,10)

      //blacktop2
      fill(60)
      rect(320,570,80,10)

     
   
   //1
   fill(180)
   rect(330,410,30)

   //2
   fill(180)
   rect(430,480,50)

   //2
   fill(8)
   rect(430,560,50)



   plus(420,425)
   plus(700,640)
   plus(720,500)
   plus(430,650)


  //black na ledy
  noStroke(0);
  fill(0,0,0);
  rect(300,275,500,50);

  //kabelek
  fill(255,0,0)
  rect(700,325,10,75);

  //kabelek2
  fill(0,255,0)
  rect(710,325,10,75);

  //kabelek2
  fill(0,0,255)
  rect(720,325,10,75);

  //usbport
  fill(100)
  rect(290,450,100,70)

  //4
  fill(255,0,0)
  circle(650,670,15)

  //5
  fill(0,255,0)
  circle(620,670,15)

  //6
  fill(0,0,255)
  circle(590,670,15)

  //3
  fill(50)
  rect(290,600,80,50)

  //circle
  stroke(255)
  noFill()
  strokeWeight(4)
  circle(670,500,55,55)

   //circle2
   stroke(255)
   noFill()
   strokeWeight(4)
   circle(617,500,55,55)

   rect(606,500,20,1)

   rect(660,500,20,1)
   
   rect(615,491,1,20)

  if(lightMeasure == 255) światełka() 

  if (buttonClick == 1){
    arduinoColor = color(5,121,76)
  } else if (buttonClick == 0){
    arduinoColor = color(115,17,240)
  }
  

}
//a=100 b=450
function usb(a,b) {


  //usb grey
  fill(125)
  rect(a-25,b+5,60,60)

  //usb black
  fill(0)
  rect(a-100,b,100,70)

  // usb dot1
  fill(0)
  rect(a+5,b+20,10)

  //usb dot2
  fill(0)
  rect(a+5,b+40,10)

  //kabelek usb
  fill(0)
  rect(a-400,b+30,400,10)

 
}

function światełka(k,l) {
  for(let i=0; i < 8; i++){
    let randomColor = color(random(255),random(255),random(255));
    let y=300
    let x=330
    fill(randomColor);
    circle(x+63*i,y,40)
}
  serialWriteRGB(random(255),random(255),random(255)) 
}

function plus (h,g) {
 //2
 fill(255)
 rect(h,g,40,10) 

   //2.5
   fill(255)
   rect(h +15,g-14,10,40)
}
