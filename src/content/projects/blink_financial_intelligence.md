---
title: Blink Financial Intelligence
subtitle: Financial analysis software for small businesses
tools: ["React", "TypeScript", "FastAPI", "Python", "LangGraph", "DuckDB", "PostgreSQL", "Redis", "AWS Bedrock", "Docker", "Tailwind CSS"]
image: /assets/images/blinkos_logo.png
order: 0
---

Blink brings company financial data into one place for analysis, reports, and decisions. The React client supports uploads, dashboards, and chat. FastAPI handles company access, integrations, and analysis jobs. The [live application](https://blinkos.app) is available to explore; its source repositories are private.

![BlinkOS architecture showing the React client, FastAPI, business inputs, company data stores, analysis services, and results](/assets/images/blinkos-architecture.svg)

[Open the architecture diagram at full size](/assets/images/blinkos-architecture.svg)

## How the application works

1. Business owners upload CSV, XLSX, or PDF files and connect Xero or QuickBooks for accounting data. Procore supplies project jobs and budgets.
2. FastAPI parses uploads and syncs integrations. Each company's financial facts live in a separate DuckDB file. PostgreSQL stores companies, documents, and reports; Redis supports jobs, progress events, caching, and DuckDB write locks.
3. A LangGraph workflow computes metrics, asks for business context when useful, analyzes liquidity, profitability, and risk, then produces a report, chart specifications, and decisions. AWS Bedrock powers its model calls and a separate data-aware chat agent.
4. The React client displays dashboards, reports, decisions, and chat. WebSockets stream analysis progress and interview questions.

## Interface preview

![BlinkOS dashboard with financial metrics, charts, and analysis cards](/assets/images/blinkos_homepage.png)
*Financial overview with sample data.*

![BlinkOS cash flow forecasting screen](/assets/images/blinkos_cashflow.jpg)
*Cash flow view.*
