---
title: Blink Financial Intelligence
subtitle: Financial analysis software for small businesses
tools: ["React", "TypeScript", "FastAPI", "Python", "LangGraph", "DuckDB", "PostgreSQL", "Redis", "AWS Bedrock", "Docker", "Tailwind CSS"]
image: /assets/images/blinkos_logo.png
order: 0
---

Blink helps small businesses review their finances in one place. It brings together financial statements and transaction data, then uses an AI-assisted workflow to prepare analysis and reports. The [live application](https://blinkos.app) is available to explore; its source repositories are private.

## What I built

- A React interface for onboarding, financial dashboards, and reviewing reports.
- A FastAPI backend that imports financial data and runs a LangGraph analysis workflow. The workflow can ask the user for business context before producing a report.
- A Xero integration for syncing statements and journal entries, with OAuth, encrypted refresh tokens, and shared rate limiting.
- A DuckDB analytics layer for working with transaction data, alongside PostgreSQL for application data and Redis for caching and coordination.

## Interface preview

The dashboard screenshot is marked as sample data.

![Blink dashboard showing financial metrics, charts, and analysis cards with sample data](/assets/images/blinkos_homepage.png)
*Financial overview with sample data.*

![Blink cash flow forecasting screen](/assets/images/blinkos_cashflow.jpg)
*Cash flow view.*
