---
title: Under The Sea
subtitle: OpenGL Computer Graphics — Boid Simulation
tools: ["C / C++", "OpenGL", "GLEW", "Shaders", "Linux"]
image: /assets/gifs/under_the_sea.gif
github_repo: https://github.com/RL-Charles/Under-The-Sea
order: 1
---

Developed on Linux (Debian).

## Overview
- Developed a 3D graphic simulation of fish under the sea leveraging the OpenGL library.
- Built dynamic lighting with Phong shaders, geometry shaders for natural movement, and texture shaders to map onto surfaces.
- Used Pixar's write-ups on shading and [Ben Eater's boids](https://github.com/beneater/boids/blob/master/boids.js) algorithm as references.

## Description
Developed a fully functional graphics engine from the ground up on Linux, using the
boids algorithm to mimic flocking-fish patterns and loading the shaders onto the
graphics card at runtime. The user can interact with and control where the school of
fish is directed.

![Under The Sea simulation](/assets/gifs/under_the_sea.gif)
