
let serial; // the Serial object
let serialOptions = { baudRate: 115200  };
let bgColor = 255;

let timestampLastTransmit = 0;
const MIN_TIME_BETWEEN_TRANSMISSIONS_MS = 1000;

function setup() {
  createCanvas(800, 800);

  background(255);
  fill(0)
  rect(width/2, 0, width/2, height);

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
 
  if(mouseX < width/2) {
    serialWriteData("255");
  }else {
    serialWriteData("0");
  }
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
 // bg = parseInt(newData);
  console.log("onSerialDataReceived", newData);
}

//extra function to send data from p5.js to Arduino
function serialWriteData(writeData) {
  if (serial.isOpen()) {
    const timeSinceLastTransmitMs = millis() - timestampLastTransmit;
    if (timeSinceLastTransmitMs > MIN_TIME_BETWEEN_TRANSMISSIONS_MS) {
      serial.writeLine(writeData);
      timestampLastTransmit = millis();
      console.log("serialWriteData", writeData);
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