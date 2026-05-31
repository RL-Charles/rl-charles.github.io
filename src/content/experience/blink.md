---
title: Blink Financial Intelligence
role: Co-Founder & Lead Engineer
company: Blink Financial Intelligence
logo: /assets/images/blinkos_logo.png
image: /assets/images/blinkos_logo.png
tools: ["Python", "FastAPI", "React", "TypeScript", "LangGraph", "DuckDB", "PostgreSQL", "Redis", "AWS Bedrock", "Docker"]
skills:
  - group: AI & Databases
    items: ["LangGraph", "AWS Bedrock", "DuckDB", "PostgreSQL", "Redis"]
  - group: Frameworks
    items: ["FastAPI", "React", "Vite", "React Router v7", "Tailwind CSS"]
  - group: Devops & Security
    items: ["Docker Compose", "Xero OAuth 2.0", "Fernet Token Encryption", "Auth0"]
lead_image: /assets/images/blinkos_architecture.png
lead_image_alt: BlinkOS Multi-Agent & Multi-Tenant System Architecture Diagram
order: 0
---

## Overview

Architected and built Blink Financial Intelligence (live at [blinkos.app](https://blinkos.app)) from the ground up, engineering a multi-agent AI system that translates raw business transactions, P&Ls, and balance sheets into CFO-grade advisory reports.

* **Designed & implemented a 7-node LangGraph pipeline** using AWS Bedrock and Python, automating complete financial reviews including qualitative WebSocket-driven chat interviews.
* **Engineered a tenant-isolated analytics layer using DuckDB**, speeding up calculations and query generation times by 80% compared to legacy setups.
* **Developed a secure Xero API sync engine** utilizing OAuth 2.0 and AES-256 Fernet encryption, implementing custom token-bucket rate limiting to scale concurrent data pulls safely.
* **Built a React 18 client application** with React Router v7, supporting complex data onboarding, real-time event streaming, and 12 modular analysis dashboards.
