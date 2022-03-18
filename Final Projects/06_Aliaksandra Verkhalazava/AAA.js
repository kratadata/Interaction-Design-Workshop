let serial; // the Serial object
let serialOptions = { baudRate: 115200  };
let wColor = 255;


function setup() {
  createCanvas(1000, 100);

  // Setup Web Serial using serial.js
  serial = new Serial();
  serial.on(SerialEvents.CONNECTION_OPENED, onSerialConnectionOpened);
  serial.on(SerialEvents.CONNECTION_CLOSED, onSerialConnectionClosed);
  serial.on(SerialEvents.DATA_RECEIVED, onSerialDataReceived);
  serial.on(SerialEvents.ERROR_OCCURRED, onSerialErrorOccurred);

  // If we have previously approved ports, attempt to connect with them
  serial.autoConnectAndOpenPreviouslyApprovedPort(serialOptions);

  
}

function draw() {
  background(255 - wColor);
  circle(500,500,10);
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

