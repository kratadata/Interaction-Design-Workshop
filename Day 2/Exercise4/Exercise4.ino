const int potmeter = A0;
const int LED = 3;
int inputVal = 0;


void setup() {
  pinMode(LED, OUTPUT);
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  inputVal = analogRead(potmeter);
  Serial.println(inputVal);
  analogWrite(LED, inputVal/4);
  delay(100);
}
