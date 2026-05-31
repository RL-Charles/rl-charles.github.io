---
title: Under The Sea
subtitle: OpenGL Computer Graphics — Interactive Boid Simulation
tools: ["C++", "OpenGL", "GLSL Shaders", "GLFW / GLEW", "GLM", "Linux"]
image: /assets/gifs/under_the_sea.gif
github_repo: https://github.com/RL-Charles/Under-The-Sea
order: 1
---

Developed on Linux (Debian).

## Overview
Developed a fully functional 3D graphics engine from the ground up on Linux, simulating an underwater ecosystem where fish exhibit realistic flocking patterns. Guiding the fish is a user-controlled attraction target that doubles as a dynamic point light source, casting real-time specular highlights across fish scales.

![Under The Sea simulation](/assets/gifs/under_the_sea.gif)

## Key Technical Features
* **Boid Flocking Behavior**: Implemented separation, alignment, and cohesion rules in C++ based on Craig Reynolds' boids algorithm.
* **Guided Target & Lighting Integration**: Created a user-guided Boid Control Point (BCP). The coordinates of this target are fed directly into the GLSL shader program as a point-light source, dynamically illuminating the boids as they converge on it.
* **Custom Vertex Shader Animation**: Wrote a GLSL vertex shader that applies time-dependent sinusoidal displacement to simulate natural, wavy fish swimming movements at runtime.
* **Vector Reflection Physics**: Engineered custom 3D vector collision resolution for boundary containment (bouncing fish off of the skybox bounds) and inter-boid collision avoidance using dot products and reflection vectors.
* **Dual Camera Projections**: Integrated an Arcball Camera (locked to orbit the moving target sphere) and a Free-Flight Camera, toggled dynamically via user keys.

## System Architecture

<div class="architecture-diagram" style="margin: 2rem 0; width: 100%; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; background: var(--bg-card); box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 480" width="100%" height="auto">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#36d6e7" />
      </marker>
      <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f5a623" />
      </marker>
    </defs>
    <style>
      .node-rect { fill: #111722; stroke: #1f2a3a; stroke-width: 1.25; rx: 6px; }
      .node-rect-accent { fill: #111722; stroke: #f5a623; stroke-width: 1.5; rx: 6px; }
      .node-rect-core { fill: #111722; stroke: #36d6e7; stroke-width: 1.5; rx: 6px; }
      .subgraph-rect { fill: rgba(17, 23, 34, 0.4); stroke: #2c3e57; stroke-width: 1.25; stroke-dasharray: 4 4; rx: 8px; }
      .node-title { font-family: "JetBrains Mono", "SF Mono", monospace; font-size: 11px; font-weight: bold; fill: #d8e0ec; text-anchor: middle; }
      .node-desc { font-family: "JetBrains Mono", "SF Mono", monospace; font-size: 9px; fill: #8a98ad; text-anchor: middle; }
      .subgraph-title { font-family: "JetBrains Mono", "SF Mono", monospace; font-size: 11px; font-weight: bold; fill: #8a98ad; }
      .edge-line { stroke: #1f2a3a; stroke-width: 1.25; fill: none; }
      .edge-line-active { stroke: #36d6e7; stroke-width: 1.25; fill: none; }
      .edge-line-amber { stroke: #f5a623; stroke-width: 1.25; fill: none; }
      .edge-text { font-family: "JetBrains Mono", "SF Mono", monospace; font-size: 9px; fill: #5e6b80; text-anchor: middle; }
    </style>
    <!-- Connectors (Global) -->
    <path class="edge-line-active" d="M 430,40 L 430,55" marker-end="url(#arrow)" />
    <text class="edge-text" x="430" y="49" dx="38">Instantiates</text>
    <path class="edge-line" d="M 330,82 L 305,82" marker-end="url(#arrow)" />
    <text class="edge-text" x="318" y="78">Inherits</text>
    <path class="edge-line" d="M 530,82 L 555,82" marker-end="url(#arrow)" />
    <text class="edge-text" x="543" y="78">Loads</text>
    <path class="edge-line" d="M 430,105 L 430,120" marker-end="url(#arrow)" />
    <text class="edge-text" x="430" y="114" dx="32">Compiles</text>
    <!-- FPEngine connection to loops -->
    <path class="edge-line-active" d="M 330,82 L 120,82 L 120,210" marker-end="url(#arrow)" />
    <text class="edge-text" x="120" y="140" dx="35">Updates (60 FPS)</text>
    <path class="edge-line-active" d="M 530,82 L 740,82 L 740,160 L 510,160 L 510,210" marker-end="url(#arrow)" />
    <text class="edge-text" x="510" y="180" dx="28">Renders</text>
    <!-- Subgraphs -->
    <!-- Update Loop Box -->
    <rect class="subgraph-rect" x="20" y="185" width="400" height="280" />
    <text class="subgraph-title" x="35" y="202">Update Loop (_updateScene)</text>
    <!-- Render Loop Box -->
    <rect class="subgraph-rect" x="440" y="185" width="400" height="280" />
    <text class="subgraph-title" x="455" y="202">Render Loop (_renderScene)</text>
    <!-- Update Loop Internals -->
    <path class="edge-line-active" d="M 120,255 L 120,280" marker-end="url(#arrow)" />
    <text class="edge-text" x="120" y="271" dx="28">WASD Target</text>
    <path class="edge-line-amber" d="M 200,305 L 235,305" marker-end="url(#arrow-amber)" />
    <text class="edge-text" x="218" y="301">Attracts</text>
    <path class="edge-line" d="M 320,325 L 320,345" marker-end="url(#arrow)" />
    <text class="edge-text" x="320" y="338" dx="20">Physics</text>
    <path class="edge-line" d="M 320,390 L 320,405" marker-end="url(#arrow)" />
    <path class="edge-line" d="M 240,370 L 120,370 L 120,405" marker-end="url(#arrow)" />
    <text class="edge-text" x="120" y="385" dx="38">Wall containment</text>
    <!-- Render Loop Internals -->
    <path class="edge-line" d="M 560,235 L 575,235" marker-end="url(#arrow)" />
    <path class="edge-line" d="M 510,255 L 510,270 L 765,270 L 765,235" marker-end="url(#arrow)" />
    <path class="edge-line" d="M 515,325 L 515,345" marker-end="url(#arrow)" />
    <path class="edge-line-active" d="M 570,370 L 625,370" marker-end="url(#arrow)" />
    <text class="edge-text" x="598" y="366">Draw call</text>
    <!-- Cross-connections: Shaders & Textures to Render -->
    <path class="edge-line-active" d="M 430,165 L 430,175 L 725,175 L 725,345" marker-end="url(#arrow)" />
    <text class="edge-text" x="660" y="171">Vertex Waves &amp; Phong Shading</text>
    <path class="edge-line" d="M 635,105 L 635,165 L 830,165 L 830,429 L 745,429" marker-end="url(#arrow)" />
    <text class="edge-text" x="780" y="161">Skin/Skybox Textures</text>
    <path class="edge-line" d="M 725,390 L 725,410" marker-end="url(#arrow)" />
    <!-- Global Nodes -->
    <rect class="node-rect" x="370" y="10" width="120" height="30" />
    <text class="node-title" x="430" y="28">main.cpp</text>
    <rect class="node-rect-core" x="330" y="60" width="200" height="45" />
    <text class="node-title" x="430" y="78">FPEngine (Core Engine)</text>
    <text class="node-desc" x="430" y="93">Inherits OpenGLEngine</text>
    <rect class="node-rect" x="180" y="60" width="120" height="45" />
    <text class="node-title" x="240" y="78">CSCI441 Lib</text>
    <text class="node-desc" x="240" y="93">Camera &amp; Math utils</text>
    <rect class="node-rect" x="560" y="60" width="150" height="45" />
    <text class="node-title" x="635" y="78">stb_image &amp; Textures</text>
    <text class="node-desc" x="635" y="93">Loads PNG/JPG assets</text>
    <rect class="node-rect" x="330" y="125" width="200" height="40" />
    <text class="node-title" x="430" y="142">GLSL Shaders</text>
    <text class="node-desc" x="430" y="155">wavy.v.glsl / wavy.f.glsl</text>
    <!-- Update Loop Nodes -->
    <rect class="node-rect" x="40" y="215" width="160" height="40" />
    <text class="node-title" x="120" y="232">Keyboard / Mouse Input</text>
    <text class="node-desc" x="120" y="245">GLFW event handling</text>
    <rect class="node-rect" x="40" y="285" width="160" height="40" />
    <text class="node-title" x="120" y="302">BCP (Yellow Sphere)</text>
    <text class="node-desc" x="120" y="315">Boid attraction target</text>
    <rect class="node-rect-accent" x="240" y="285" width="160" height="40" />
    <text class="node-title" x="320" y="302" fill="#f5a623">moveToBcp()</text>
    <text class="node-desc" x="320" y="315">Compute heading adjustments</text>
    <rect class="node-rect" x="240" y="350" width="160" height="40" />
    <text class="node-title" x="320" y="367">Collision Engine</text>
    <text class="node-desc" x="320" y="380">Physics update loop</text>
    <rect class="node-rect" x="40" y="410" width="160" height="38" />
    <text class="node-title" x="120" y="427">_collideFishWithWall()</text>
    <text class="node-desc" x="120" y="438">Reflection vectors at bounds</text>
    <rect class="node-rect" x="240" y="410" width="160" height="38" />
    <text class="node-title" x="320" y="427">_collideFishWithFish()</text>
    <text class="node-desc" x="320" y="438">Radius collision bounce</text>
    <!-- Render Loop Nodes -->
    <rect class="node-rect" x="460" y="215" width="100" height="40" />
    <text class="node-title" x="510" y="232">Camera Switch</text>
    <text class="node-desc" x="510" y="245">Toggles 1 or 2 keys</text>
    <rect class="node-rect" x="580" y="215" width="110" height="40" />
    <text class="node-title" x="635" y="232">Arcball Camera</text>
    <text class="node-desc" x="635" y="245">Orbits BCP target</text>
    <rect class="node-rect" x="710" y="215" width="110" height="40" />
    <text class="node-title" x="765" y="232">Free Cam</text>
    <text class="node-desc" x="765" y="245">Keyboard fly control</text>
    <rect class="node-rect-accent" x="460" y="285" width="110" height="40" />
    <text class="node-title" x="515" y="302" fill="#f5a623">Sunfish (Actor)</text>
    <text class="node-desc" x="515" y="315">50+ local boid states</text>
    <rect class="node-rect" x="630" y="285" width="190" height="40" />
    <text class="node-title" x="725" y="302">drawSkybox()</text>
    <text class="node-desc" x="725" y="315">Renders textured box bounds</text>
    <rect class="node-rect" x="460" y="350" width="110" height="40" />
    <text class="node-title" x="515" y="367">Draw Sunfish</text>
    <text class="node-desc" x="515" y="380">Loop through actors</text>
    <rect class="node-rect" x="630" y="350" width="190" height="40" />
    <text class="node-title" x="725" y="367">Render Fish</text>
    <text class="node-desc" x="725" y="380">Draw body cylinders, fins, eyes</text>
    <rect class="node-rect-core" x="540" y="410" width="200" height="38" />
    <text class="node-title" x="640" y="427">Final Frame Buffer</text>
    <text class="node-desc" x="640" y="438">Render output to screen</text>
  </svg>
</div>


## Simulation Controls
| Key / Input | Action |
|-------------|--------|
| **`W` / `A` / `S` / `D`** | Move the yellow attraction target (BCP) on the XZ-plane |
| **`1` / `2`** | Toggle active camera (1: Arcball target tracking, 2: Free-Flight Cam) |
| **`Mouse Drag`** | Look around (rotates camera angles theta & phi) |
| **`Scroll Wheel`** | Zoom camera in / out (Arcball mode) |
| **`Space` / `Shift+Space`** | Move camera forward / backward (Free-Flight mode) |
| **`Q` / `E`** | Orbit camera angle around the horizontal axis |
| **`ESC`** | Safely shutdown the graphics engine and exit |
