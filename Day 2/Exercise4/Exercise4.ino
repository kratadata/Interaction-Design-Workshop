const int potmeter = A0;
const int LED = 3;
int inputVal = 0;


void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  inputVal = analogRead(potmeter);
  analogWrite(LED, inputVal/4);
  delay(100);
}
