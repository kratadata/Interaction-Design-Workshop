
#define OUTPUT_PIN 9
const int DELAY_MS = 10;

void setup() {
  Serial.begin(115200);
  //pinMode(OUTPUT_PIN, OUTPUT);
}

void loop() {


  //sending data 
  
  Serial.println(255);
  delay(DELAY_MS * 100);
  Serial.println(0);
  delay(DELAY_MS * 100);


  // receiving simple data
  // Check to see if there is any incoming serial data
  if(Serial.available() > 0){
    // read string until the end of the line
    String rcvdSerialData = Serial.readStringUntil('\n'); 
    digitalWrite(OUTPUT_PIN, rcvdSerialData.toInt());
  }   
    delay(DELAY_MS);

}
