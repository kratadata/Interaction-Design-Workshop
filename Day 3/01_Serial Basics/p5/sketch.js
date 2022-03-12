
let serial; // the Serial object
let serialOptions = { baudRate: 115200  };

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
}

function draw() {
  background(255);
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
}

//extra function to send data from p5.js to Arduino
function serialWriteData(writeData) {
  if (serial.isOpen()) {
    console.log("serialWriteData", writeData);
    serial.writeLine(writeData);
  } 
}   

function mouseClicked() {
  if (!serial.isOpen()) {
    serial.connectAndOpen(null, serialOptions);
  }
}