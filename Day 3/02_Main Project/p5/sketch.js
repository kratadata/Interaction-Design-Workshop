
let shapeFraction = 0; // tracks the new shape fraction off serial
let serial; // the Serial object
let serialOptions = { baudRate: 115200  };
let wColor = 255;
let maxDiameter, circleDiameter, minDia, maxDia;
let multi = 0;

var rslider,gslider,bslider = 0;

let timestampLastTransmit = 0;
const MIN_TIME_BETWEEN_TRANSMISSIONS_MS = 500;

function setup() {
  createCanvas(800, 800);

  // Setup Web Serial using serial.js
  serial = new Serial();
  serial.on(SerialEvents.CONNECTION_OPENED, onSerialConnectionOpened);
  serial.on(SerialEvents.CONNECTION_CLOSED, onSerialConnectionClosed);
  serial.on(SerialEvents.DATA_RECEIVED, onSerialDataReceived);
  serial.on(SerialEvents.ERROR_OCCURRED, onSerialErrorOccurred);

  // If we have previously approved ports, attempt to connect with them
  serial.autoConnectAndOpenPreviouslyApprovedPort(serialOptions);

  rslider = createSlider(0, 255, 0, 5);
  gslider = createSlider(0, 255, 0, 5);
  bslider = createSlider(0, 255, 0, 5);
  rslider.position(width/2 - 300, 30);
  gslider.position(width/2 - 75, 30);
  bslider.position (width/2 + 150, 30);

}

function draw() {
  background(255 - wColor);

  var r = rslider.value();
  var g = gslider.value();
  var b = bslider.value();

  noStroke(); // turn off outline
  fill(wColor); // white circle

  // Get x,y center of drawing Canvas
  let xCenter = width / 2;
  let yCenter = height / 2;

  if (multi == 1) {
     for (let i = 100; i < width - 50; i+= 50){
        for (let j = 100; j < height - 50; j+= 50){
          maxDiameter = min(40,50);
          circleDiameter = maxDiameter * shapeFraction;
          circle (i,j, circleDiameter);
     }
    }

  } else {
    maxDiameter = min(width/2, height/2);
    circleDiameter = maxDiameter * shapeFraction;
    circle(xCenter, yCenter, circleDiameter);
  }

  serialWriteRGB(r,g,b)
}

function onSerialErrorOccurred(eventSender, error) {
  console.log("onSerialErrorOccurred", error);
}

function onSerialConnectionOpened(eventSender) {
  console.log("onSerialConnectionOpened");
}

function onSerialConnectionClosed(eventSender) {
  console.log("onSerialConnectionClosed");
}

function onSerialDataReceived(eventSender, newData) {
  console.log("onSerialDataReceived", newData);

  if (newData.startsWith("size")) {
     newData = newData.slice(4).trim();
     shapeFraction = parseFloat(newData);
  }

  if (newData.startsWith("light")) { 
      newData = newData.slice(5).trim();
      wColor = parseInt(newData);
 }

 if (newData.startsWith("button")) { 
    newData = newData.slice(6).trim();
    multi = parseInt(newData);
}
  
}

function serialWriteRGB(_r,_g,_b) {
  if (serial.isOpen()) {
    const timeSinceLastTransmitMs = millis() - timestampLastTransmit;
    const data = [_r.toString(), _g.toString(), _b.toString(), '\n']; 
    if (timeSinceLastTransmitMs > MIN_TIME_BETWEEN_TRANSMISSIONS_MS) {
      serial.writeLine(data);
      timestampLastTransmit = millis();
      console.log("Writing to serial: ", data);
    
    }else {
      console.log("Time since last transmit was "  + timeSinceLastTransmitMs + "ms");
    }
  }
}   
function mouseClicked() {
  if (!serial.isOpen()) {
    serial.connectAndOpen(null, serialOptions);
  }
}