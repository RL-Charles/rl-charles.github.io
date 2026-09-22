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
lead_image: /assets/images/blinkos-architecture.svg
lead_image_alt: BlinkOS architecture showing React, FastAPI, company data stores, financial analysis, and results
order: 0
---

## Overview

Architected and built Blink Financial Intelligence (live at [blinkos.app](https://blinkos.app)) to turn business transactions, P&Ls, and balance sheets into financial reports and decisions.

* **Built a LangGraph analysis workflow** that computes financial metrics, requests business context when needed, analyzes liquidity, profitability, and risk, then produces a report, charts, and decisions.
* **Engineered a company-isolated DuckDB data layer** for financial facts and analysis queries.
* **Developed the Xero sync engine** with OAuth 2.0, Fernet-encrypted tokens, and a shared token-bucket rate limiter.
* **Built the React 18 client** with onboarding, WebSocket analysis progress, and views for financial analysis, cash flow, labour, decisions, and forecasts.

[Open the architecture diagram at full size](/assets/images/blinkos-architecture.svg)
