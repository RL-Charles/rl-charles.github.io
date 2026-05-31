---
title: Robotic Elmo
subtitle: Sensor-driven interactive toy — CSCI 250 final, Spring 2022
tools: ["Python", "NumPy", "Pandas", "Matplotlib", "Raspberry Pi", "Linux"]
image: /assets/images/bread_board_elmo.jpg
order: 3
---

Developed on Ubuntu / Raspberry Pi.

![Elmo front](/assets/images/robo_elmo_front.jpg)

## Group
Charles Mowbray & Thadeus Triandos

## Description
A doll that records and interprets sound and acceleration data, meant to be played with
as a toy. While recording, if the doll determines the sound or acceleration levels to be
inadequate it plays a corresponding sound for whatever it determined to be out of the set
thresholds. The challenge is to do different activities with the doll without tripping any
of its sensors.

## Hardware
- **Microphone** — collected audio data and sound levels to determine how much sound the doll was experiencing.
- **Accelerometer** — recorded the doll's acceleration to determine whether it was being moved and at what rate.
- **Button** — took user input to change the doll's mode.
- **Speaker** — played `.wav` audio clips.

![Breadboard Elmo](/assets/images/bread_board_elmo.jpg)

## Data Pipeline
- **Collect**: output from the accelerometer and recorder stored in NumPy arrays.
- **Process**: adjusted data for the time delay between power-on and the button press, and wrote the data to an external file.
- **Display**: graphed the recorder and accelerometer arrays.
- **Interpret**: when an accelerometer or recorder threshold was met, a sound played — visible afterward in the graphed data.

## Code
```python
import RPi.GPIO as GPIO
import numpy as np
import matplotlib.pyplot as plt
import time, threading
from pydub import AudioSegment
from pydub.playback import play


# Threaded eye flashing
def flashEye(delay, timer):
    while True:
        GPIO.output(rightEyePin, True)
        GPIO.output(leftEyePin, True)
        time.sleep(1)
        GPIO.output(rightEyePin, False)
        GPIO.output(leftEyePin, False)
        time.sleep(1)
        if not eyesOn:
            break
    print("Eyes flashing should stop")


class Accelerometer:
    """Records and graphs accelerometer data."""

    def __init__(self, tref, chan):
        self.tref = tref
        self.channel = chan
        self.timeArr = np.array([])
        self.x = np.array([])
        self.y = np.array([])
        self.z = np.array([])

    def read(self):
        ax, ay, az = acc.readACC()
        self.timeArr = np.append(self.timeArr, time.time() - tref)
        self.x = np.append(self.x, ax)
        self.y = np.append(self.y, ay)
        self.z = np.append(self.z, az)

    def save(self, name):
        np.savez(name, a=self.timeArr, b=self.x, c=self.y, d=self.z)

    def plot(self):
        plt.plot(self.timeArr, self.x, 'b', self.timeArr, self.y, 'r', self.timeArr, self.z, 'o')
        plt.ylabel('Data')
        plt.xlabel('Time')
        plt.legend(["X", "Y", "Z"])
        plt.title("Acceleration over period")
        plt.show()
```
