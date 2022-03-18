let serial; // the Serial object
let serialOptions = { baudRate: 115200  };

let timestampLastTransmit = 0;
const MIN_TIME_BETWEEN_TRANSMISSIONS_MS = 500;

let potentiometer, lightMeasure, buttonClick;

function serialSetup() {

  serial = new Serial();
  serial.on(SerialEvents.CONNECTION_OPENED, onSerialConnectionOpened);
  serial.on(SerialEvents.CONNECTION_CLOSED, onSerialConnectionClosed);
  serial.on(SerialEvents.DATA_RECEIVED, onSerialDataReceived);
  serial.on(SerialEvents.ERROR_OCCURRED, onSerialErrorOccurred);

  // If we have previously approved ports, attempt to connect with them
  serial.autoConnectAndOpenPreviouslyApprovedPort(serialOptions);
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
  
    if (newData.startsWith("potentiometer")) {
       newData = newData.slice(4).trim();
       potentiometer  = parseFloat(newData);
       potentiometer = map(potent, 0, 1023, 0, width);
    }
  
    if (newData.startsWith("light")) { 
        newData = newData.slice(5).trim();
        lightMeasure = parseInt(newData);
   }
  
   if (newData.startsWith("button")) { 
      newData = newData.slice(6).trim();
      buttonClick = parseInt(newData);
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