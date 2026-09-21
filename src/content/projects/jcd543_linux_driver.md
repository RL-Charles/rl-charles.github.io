---
title: JCD543 Linux Display Driver
subtitle: Experimental C driver for a USB display controller on Linux
tools: ["C", "Linux", "USB", "DRM"]
github_repo: https://github.com/RL-Charles/jcd543-mct-t6-linux-driver
order: 1
---

I am developing and testing a Linux driver for the JCD543 dock's MCT USB display controller. The repository documents the guarded hardware experiments, build steps, and current limitations.

![Simple diagram of a ThinkPad connected by USB-C to a JCD543 dock, then by MCT HDMI to one HP X27q monitor](/assets/images/jcd543-tested-setup.svg)

*The experimental driver has produced one 1920 × 1080, 60 Hz display on this specific setup.*
