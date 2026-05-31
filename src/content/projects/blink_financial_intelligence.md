---
title: Blink Financial Intelligence
subtitle: AI-powered CFO & automated financial intelligence platform for SMBs
tools: ["React", "TypeScript", "FastAPI", "Python", "LangGraph", "DuckDB", "PostgreSQL", "Redis", "AWS Bedrock", "Docker", "Tailwind CSS"]
image: /assets/images/blinkos_logo.png
github_client: https://github.com/RL-Charles/blink-client
github_backend: https://github.com/RL-Charles/Blinkos_backend
order: 0
---

Blink Financial Intelligence is a production AI-driven CFO platform. It securely ingests raw business financial data (P&L sheets, balance sheets, and journal transactions) and processes it through a multi-agent orchestration pipeline to deliver CFO-grade insights, automated hiring/budgeting decisions, and synthesized reports for business owners. The live platform is available at [blinkos.app](https://blinkos.app).

## Tech Stack & Repositories

The system is split into two specialized, load-bearing repositories:
* **Live Application**: [blinkos.app](https://blinkos.app)
* **Frontend**: [blink-client](https://github.com/RL-Charles/blink-client) — React, Vite, Tailwind CSS, React Router v7, Auth0.
* **Backend**: [Blinkos_backend](https://github.com/RL-Charles/Blinkos_backend) — Python, FastAPI, LangGraph, DuckDB, PostgreSQL, Redis, AWS Bedrock.

---

## CFO Analysis Agent (LangGraph Pipeline)

At the core of the backend is an asynchronous, multi-agent LangGraph system. It automates the analytical workflow a human CFO would perform over several days:

```
[Doc Ingestion] ──> [Review] ──> [Chat Interview] ──> [Financial Analysis] ──> [Report Synthesis]
```

1. **Document Review**: Scans uploaded spreadsheets, CSVs, or connected ERP tables.
2. **Contextual Interview**: Prompts the user dynamically over WebSockets to fill in qualitative business gaps.
3. **Multi-Dimension Analysis**: Evaluates liquidity, profitability, workforce allocation, and risk metrics.
4. **Report Synthesis**: Generates structured markdown summaries, action items, and data visualizations.

---

## Key Technical Features

### 1. High-Performance Local Analytics (DuckDB + Redis)
To enable instantaneous financial computations on raw journals without bloating cloud databases, the system deploys **DuckDB** as a fast, in-memory analytical database:
* Utilizes a tenant-isolated storage paradigm.
* Integrated a **Redis distributed lock** to prevent concurrent query collisions.
* Implemented caching for computed reports and structured decisions inside Redis.

### 2. Xero API Integration & Rate-Limiter
Designed an automated, self-healing sync pipeline connecting to Xero via OAuth 2.0:
* **Sync Engine**: Periodically fetches P&Ls, Balance Sheets, and journal entries.
* **Rate-Limit Guard**: Built a shared **token-bucket rate limiter** (55 calls/min cap) protecting multi-tenant requests from violating Xero API limits.
* **Encryption**: Secured stored refresh tokens in PostgreSQL using Fernet AES-256 encryption.

### 3. Responsive Analytics Dashboard
A clean, interactive React app built with Tailwind CSS and React Router v7:
* Multi-step wizard funnel gathers business benchmarks and workforce configurations.
* Streaming WebSocket connection provides real-time node-by-node execution logs for the LangGraph agent.
* Displays dynamic data-visualization charts reflecting cash flow forecasts and labour-capacity metrics.

---

## Interface Preview

Below are screenshots captured during active development, illustrating system behavior and design iterations:

![BlinkOS User Homepage](/assets/images/blinkos_homepage.png)
*The BlinkOS main dashboard landing page for logged-in users.*

![Cash Flow Forecasting](/assets/images/blinkos_cashflow.jpg)
*Real-time cash flow forecasting and financial engine validation.*
