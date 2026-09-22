---
title: HP | Poly
role: Software Application Engineer
company: HP | Poly
logo: /assets/images/hp_poly_logo.png
image: /assets/images/hp_poly_pc_headset.jpeg
tools: ["Python", "TypeScript", "C++", "Rust", "NestJS", "GraphQL", "Ansible", "Azure"]
skills:
  - group: Languages
    items: ["Python", "TypeScript", "C++", "Rust", "Bash"]
  - group: Frameworks
    items: ["NestJS", "React", "Pytest", "Playwright"]
  - group: Data & APIs
    items: ["GraphQL", "MongoDB", "REST"]
  - group: Dev / Ops
    items: ["Git", "Jenkins", "Ansible", "Azure"]
lead_image: /assets/images/e70_touchcontroller_mini.jpeg
lead_image_alt: Poly E70 camera, touch controller, and dock
order: 1
---

## Overview

Building scalable testing processes and infrastructure that verify communication between
Poly's hardware devices and their client applications, spanning low-level device libraries
up through full-stack integration-test frameworks.

- **Architected a full-stack automated testing framework** for peripheral IoT devices using NestJS and GraphQL, replacing a legacy system to improve end-to-end testing consistency and performance.
- **Managed 100+ lab devices and on-premises networks** with Ansible, streamlining configuration and reducing setup time by 90%.
- **Designed and maintained REST API infrastructure** for internal testing, supporting cross-platform compatibility (Linux, macOS, Windows, x86, ARM).
- **Engineered high-performance C++ and Rust native extensions for Python** to handle low-latency, real-time device-communication testing.

## Distributed testing architecture

![Distributed device testing architecture showing the cloud test control plane, Windows and macOS lab hosts, operating system drivers, and connected Poly cameras, headsets, and USB devices](/assets/images/hp-poly-test-architecture.svg)

[Open the architecture diagram at full size](/assets/images/hp-poly-test-architecture.svg)

The cloud control plane assigned tests and configuration to agents running across the lab's Windows and macOS hosts. Each host exercised the client application and communicated with attached hardware through operating system drivers and native device libraries. Device events, assertions, logs, and final results traveled back through the host to the cloud system that started the run.
