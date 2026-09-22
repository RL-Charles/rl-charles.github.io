---
title: Blink Financial Intelligence
role: Co-Founder & Lead Engineer
company: Blink Financial Intelligence
logo: /assets/images/blinkos-wordmark.svg
image: /assets/images/blinkos-wordmark.svg
tools: ["Python", "FastAPI", "React", "TypeScript", "LangGraph", "DuckDB", "PostgreSQL", "Redis", "AWS Bedrock", "Docker"]
skills:
  - group: Libraries, Services, & Databases
    items: ["LangGraph", "AWS Bedrock", "DuckDB", "PostgreSQL", "Redis"]
  - group: Frameworks
    items: ["FastAPI", "React", "Vite", "Tailwind CSS"]
  - group: Devops & Security
    items: ["Docker Compose", "Token Encryption", "Auth0"]
order: 0
---

## Overview

As co-founder and lead engineer, I built Blink Financial Intelligence to bring company financial data into one place for analysis, reports, and decisions. The [live application](https://blinkos.app) includes onboarding, data imports, dashboards, report review, and chat.

## What I built

- **Client:** A React application for uploads, dashboards, reports, decisions, and chat, with Auth0 sign-in and WebSocket analysis progress.
- **API and integrations:** FastAPI routes for company access, document processing, and Xero, QuickBooks, and Procore connections.
- **Data layer:** A separate DuckDB file for each company's financial facts, PostgreSQL for companies, documents, and reports, and Redis for jobs, progress events, caching, and DuckDB write locks.
- **Financial analysis:** A LangGraph workflow that computes metrics, gathers business context when useful, analyzes liquidity, profitability, and risk, then produces a report, chart specifications, and decisions. AWS Bedrock powers model calls and a separate data-aware chat agent.

## Architecture

![BlinkOS architecture showing the React client, FastAPI, business inputs, company data stores, analysis services, AWS Bedrock, and results](/assets/images/blinkos-architecture.svg)

[Open the architecture diagram at full size](/assets/images/blinkos-architecture.svg)

Business owners upload CSV, XLSX, or PDF files and connect accounting systems. FastAPI parses or syncs that data into company records. Analysis reads the financial facts and sends progress, interview questions, and results back to the client.

## Interface preview

![BlinkOS dashboard with financial metrics, charts, and analysis cards](/assets/images/blinkos_homepage.png)
*Financial overview with sample data.*

![BlinkOS cash flow forecasting screen](/assets/images/blinkos_cashflow.jpg)
*Cash flow view.*
