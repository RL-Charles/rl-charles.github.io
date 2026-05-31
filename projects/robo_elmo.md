---
layout: default
title: Robot Elmo
github_repo: https://github.com/RL-Charles/Under-The-Sea

---

<div class="experience-box" markdown="1">
# Robotic Elmo
CSCI 250 Final Python Based Computing  
Spring 2022
<hr>
## Languages & Tools Used

**Languages Used:** Python  
**Libraries Used:** Numpy, Pandas, Matplotlib, Linux  
**Developed On:** Ubuntu  


<div style="text-align: center;">
<img src="{{ site.baseurl }}/assets/images/robo_elmo_front.jpg" alt="Elmo Front" cnetwidth="600" height="600">
</div>


## Group
Charles Mowbray & Thadeus Triandos

## Description
Our project is a doll that records and interprets sound and acceleration data. The doll is meant to be played with as a toy.
While the doll is recording data if it determines the sound or acceleration levels to be inadequate it plays a sound corresponding
to what it determined to be out of the set thresholds. Therefore, the challenge is to do different activities with the doll without tripping any of its sensors.

## Hardware
Microphone- The Microphone collected audio data and sound levels. This Sensor was used to determine the level of sound the doll was experiencing.  
Accelerometer- The Acceleromter records the dolls acceleration. This senser was implemented in order to determine if the doll was being moved and at what rate.  
Button- The button was used to take user input and change the mode the doll is in.  
Speaker- Used this [speaker](https://www.amazon.com/dp/B09H66LGDD/ref=cm_sw_r_sms_api_i_34ESD0MBK2YBDVASY0S9?_encoding=UTF8&psc=1) in order to play audio clips specifically wav files  

<div style="text-align: center;">
<img src="{{ site.baseurl }}/assets/images/bread_board_elmo.jpg" alt="Elmo Front" cnetwidth="600" height="470">
</div>

## Data
**Collect**: We took output from the accelerometer and recorder then stored that data in np arrays.  
**Process**: We then adjusted the data for the time delay from being on and the button being pushed as well as output the data to an external file.  
**Display**: We graphed the np arrays for the recorder and accelerometer.  
**Interpret**: When the a threshold for the accelerometer or recorder was met then we would play a sound. We could then look at this graphed data and see when a sound bite was played.  

## Code
```
import RPi.GPIO as GPIO
import string
import accUtil as acc
import numpy as np
import matplotlib.pyplot as plt
import adcUtil as adc
import time, threading, logging
import pigpio
import sys
# pydub new library we found online
from pydub import AudioSegment
from pydub.playback import play
# Function for threaded eye flashing
def flashEye(delay, timer):
    while(True):
        GPIO.output(rightEyePin, True)
        GPIO.output(leftEyePin, True)
        time.sleep(1)
        GPIO.output(rightEyePin, False)
        GPIO.output(leftEyePin, False)
        time.sleep(1)
        if(eyesOn == False):
            break
            
    print("Eyes Flashing should stop")
```
```
# Turn off eyes if already on 
rightEyePin = 24
leftEyePin = 23

GPIO.setmode(GPIO.BCM)

GPIO.setup(rightEyePin, GPIO.OUT)
GPIO.setup(leftEyePin, GPIO.OUT)

GPIO.setwarnings(False)
GPIO.output(rightEyePin,False )
GPIO.output(leftEyePin,False )

# Accelerometer initialization
class Accelerometer:
    
    # Constructor for initialization of accelerometer data collection
    def __init__(self, tref, chan):
        self.tref = tref
        self.channel = chan
        self.timeArr = np.array([])
        self.x = np.array([])
        self.y = np.array([])
        self.z = np.array([])
        
    def getTref(self):
        return self.tref
    
    def setTref(self, tref):
        self.tref = tref
        
    # Records and appends for time as well as each dimension of the accelerometer    
    def read(self):
        ax,ay,az = acc.readACC()
        
        self.timeArr = np.append(self.timeArr, time.time()-tref)
        self.x = np.append(self.x, ax)
        self.y = np.append(self.y, ay)
        self.z = np.append(self.z, az)
        return
    
    def getX(self):
        return self.x[len(self.x)- 1]
    
    # Saves the accelerometer data recorded to a file with an input name
    def save(self, name):
        np.savez(name, a=self.timeArr, b=self.x, c=self.y, d=self.z)
    
    # Graphs accelerometer data
    def plot(self):
        plt.plot(self.timeArr, self.x, 'b', self.timeArr, self.y, 'r', self.timeArr, self.z,'o' )
        plt.ylabel('Data')
        plt.xlabel('Time')
        plt.legend(["X", "Y", "Z"])
        plt.title("Acceleration graph period")
        plt.show()
```
```
# Main Code


# Initailize the lights in the eyes
rightEyePin = 24
leftEyePin = 23
GPIO.setmode(GPIO.BCM)
GPIO.setup(rightEyePin, GPIO.OUT)
GPIO.setup(leftEyePin, GPIO.OUT)

# Turn Eyes on
GPIO.setwarnings(False)
GPIO.output(rightEyePin,True )
GPIO.output(leftEyePin,True )

# Initailize buttons
buttonPin = 13
GPIO.setup(buttonPin, GPIO.IN, pull_up_down = GPIO.PUD_UP)

# Initialize the thread for the eyes
t = threading.Thread(target = flashEye, args = (1, 5))
eyesOn = True


# Initialize recording device
audioArr = np.array([])
envelopeArr = np.array([])
timeArr = np.array([])


# Play first bell sound to tell that its on
wav_file = AudioSegment.from_file(file = "tacoBellBong.wav", 
                                  format = "wav")

play(wav_file)

# leave eyes on and wait til button is pressed
while(True):
    time.sleep(.2)
    if(GPIO.input(buttonPin) == 0):
        GPIO.output(rightEyePin, False)
        GPIO.output(leftEyePin, False)
        play(wav_file)

        print("should Have started eyes")
        break

        
        
# Initialize babooey and laugh
bab_file = AudioSegment.from_file(file = "Baba.wav", 
                                  format = "wav")
laugh_file = AudioSegment.from_file(file = "Having Fun.wav", 
                                  format = "wav")

# Start eye flashing thread        
t.start()
print("Threading started")

# Wait a second before recording data in order to not read
# the button twice when pushed the first time
time.sleep(1)

# Initialize Accelerometer pieces
chan = 0
tref = time.time()
AccDevice = Accelerometer(tref, chan)


# Starts recording data and continues to record and play any sounds
# when a threshhold for the x or the sound is met
while(True):
    
    AccDevice.read()
    if(AccDevice.getX() > 1):
        play(laugh_file)
    
    timeArr = np.append(timeArr, time.time()-tref)
    Vaudio = adc.readADC(channel = 0) 
    audioArr = np.append(audioArr, Vaudio)
    
    if(Vaudio > .5):
        play(bab_file)
    
    Venvelope = adc.readADC(channel = 1)
    envelopeArr = np.append(envelopeArr, Venvelope)
    
    
    if(GPIO.input(buttonPin) == 0):
        eyseON = False
        print("should Have stopped")
        break
    
# Save accelerometer data to an external file then plot it
AccDevice.save("AccelerometerData")
AccDevice.plot()


# Save audio data to an external file
np.savez('RecorderArrays', a=timeArr, b=envelopeArr, c=audioArr)

# Plot audio data
plt.plot(timeArr, audioArr, 'b', timeArr, envelopeArr, 'r')
plt.ylabel('Data')
plt.xlabel('Time')
plt.legend(["audio", "envelope"])
plt.title("audio graph period")
plt.show()

# Turn off eyes 
GPIO.output(rightEyePin, False)
GPIO.output(leftEyePin, False)
```

<hr>
</div>

[← Back to Portfolio](/)