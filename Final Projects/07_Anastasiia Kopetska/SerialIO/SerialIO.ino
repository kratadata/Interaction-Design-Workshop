#include <Adafruit_NeoPixel.h>
#define NUMPIXELS 8
#define NEOPIXEL_PIN 7

Adafruit_NeoPixel pixels(NUMPIXELS, NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800);

const int POTENTIOMETER = A5;
const int PHOTORESISTOR = A0;
const int BUTTON_PIN = 2;

const int DELAY_MS = 5;
const int NUM_COLORS = 3;

const int maxValue = 1023;
int lastValue = -1;
int incomingValues[NUM_COLORS];

boolean lastButtonState = LOW;
boolean currentState = LOW;


void setup() {
  Serial.begin(115200);
  pixels.begin();
}

void loop() {


  int currentValue = analogRead(POTENTIOMETER);
  int pRes = analogRead(PHOTORESISTOR);
  boolean buttonState = digitalRead(BUTTON_PIN);

  // The fraction of the circle diameter
  if (lastValue != currentValue) {
    float sizeFrac = currentValue;
    Serial.print("potentiometer ");
    Serial.println(sizeFrac);
  }

  lastValue = currentValue;
  delay(DELAY_MS);

  pRes = map(sensorValue, sensorMin, sensorMax, 0, 255);
  pRes = constrain(sensorValue, 0, 255);
  if (pRes > 120) {
    Serial.print("light ");
    Serial.println(255);
  } else {
    Serial.print("light ");
    Serial.println(0);
  }

  // Toggle Button ON/OFF
  if (buttonState != lastButtonState) {
    lastButtonState = buttonState;
    if (buttonState == LOW) {
      currentState = (currentState == HIGH) ? 0 : 1;
      Serial.print("button ");
      Serial.println(currentState);
    }
  }

  // check if reading over serial
  // color neopixels depeniding on the sliders
  if (Serial.available() > 0) {
    pixels.clear();
    // read string until the endo of the line
    String rcvdSerialData = Serial.readStringUntil('\n');
    split(rcvdSerialData, incomingValues, NUM_COLORS);

    for (int j = 0; j < NUM_COLORS; j++) {
      for (int i = 0; i < NUMPIXELS; i++) {
        pixels.setPixelColor(i, pixels.Color(incomingValues[0], incomingValues[1], incomingValues[2]));
      }
      pixels.show();
      delay(DELAY_MS);
    }
  }
}

//function to split the array into individual messages
void split(String inputString, int returnData[], int numOfValues) {
  int index = 0;
  int lastPos = 0;

  for (int i = 0; i < inputString.length(); i++) {
    if (inputString.charAt(i) == ',' && index < numOfValues) {
      String tempStr = inputString.substring(lastPos, i);
      returnData[index] = tempStr.toInt();
      index++;
      lastPos = i + 1;
    }
  }
}
