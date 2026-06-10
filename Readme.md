# 🔬 AgentEval AI

### Autonomous AI Agent Quality Monitor

**Microsoft Agents League Hackathon 2026 — Reasoning Agents Track**

**Foundry IQ · Multi-Step Reasoning · Drift Detection · Automated RCA**

---

## 🚀 Overview

Modern AI agents evolve continuously through prompt updates, model upgrades, retrieval changes, and configuration modifications. While these improvements are intended to enhance performance, even minor changes can silently degrade output quality.

Organizations deploying copilots and autonomous agents often lack a standardized mechanism to monitor quality, detect regressions, and identify root causes before end users are impacted.

**AgentEval AI** solves this challenge by continuously evaluating AI agent outputs, detecting performance drift, and automatically performing root cause analysis (RCA) to explain quality degradation and recommend corrective actions.

---

## 🎯 Problem Statement

Microsoft Copilot experiences are now embedded across products, platforms, and enterprise workflows.

As AI systems evolve:

* Prompt modifications may reduce answer quality.
* Model upgrades can introduce unexpected behaviors.
* Configuration changes can impact reasoning consistency.
* Retrieval pipelines may drift from expected performance.
* Quality degradation often remains unnoticed until users report issues.

AgentEval provides continuous quality monitoring and automated diagnostics for AI agents, enabling proactive detection and remediation.

---

## 🏗️ System Architecture

![AgentEval Architecture](assets/agenteval-architecture.png)

### End-to-End Evaluation Pipeline

AgentEval continuously monitors AI agent quality through a multi-stage reasoning workflow orchestrated by Microsoft Foundry IQ.

#### Data Sources

AgentEval can ingest logs and conversations from:

* Azure Monitor
* Azure Cosmos DB
* File/API exports
* Custom enterprise data sources

#### Log Ingestion & Normalization

Incoming agent interactions are normalized into a common schema:

```json
{
  "user_input": "...",
  "agent_output": "...",
  "timestamp": "...",
  "agent_id": "..."
}
```

Validation, deduplication, and schema enforcement occur before evaluation.

#### Foundry IQ Orchestrated Pipeline

##### Step 1 — Static Pre-Flight Scanner

A deterministic rule engine scans responses for:

* Fake URLs
* Phone numbers
* Impossible SLA claims
* Dangerous advice patterns
* Policy violations

##### Step 2 — LLM-as-Judge Evaluation

Claude evaluates outputs across five quality dimensions:

| Dimension           | Weight |
| ------------------- | ------ |
| Accuracy            | 25%    |
| Relevance           | 20%    |
| Hallucination Risk  | 25%    |
| Reasoning Coherence | 15%    |
| Safety              | 15%    |

Produces structured JSON quality reports and risk assessments.

##### Step 3 — Drift Detection

Compares historical baseline quality against current production performance.

Severity levels:

* Minor
* Moderate
* Severe
* Critical

Automatically triggers Root Cause Analysis when quality drops exceed predefined thresholds.

##### Step 4 — Root Cause Analysis (RCA)

Identifies degradation patterns through:

* Baseline comparison
* Pattern extraction
* Hypothesis generation

##### Step 5 — Evidence Correlation & Remediation

Ranks likely causes by:

* Confidence
* Impact
* Effort required

Generates:

* Recommended fixes
* RCA reports
* Post-mortem drafts

---

## ✨ Key Features

### 📊 Multi-Dimensional Quality Evaluation

Evaluates AI responses across five critical dimensions:

* Accuracy
* Relevance
* Hallucination Risk
* Reasoning Coherence
* Safety

### 📈 Automated Drift Detection

Detects quality degradation through baseline versus current performance comparisons.

### 🔍 Root Cause Analysis

Uses multi-step reasoning to identify probable causes of performance regressions.

### 💡 Actionable Recommendations

Generates ranked remediation suggestions based on impact and implementation effort.

### 📝 Automated Post-Mortems

Creates incident summaries and investigation reports for engineering teams.

### 📡 Real-Time Monitoring

Provides continuous observability into AI agent quality metrics.

---

## ☁️ Microsoft Foundry IQ Integration

AgentEval leverages **Microsoft Foundry IQ** as its orchestration and observability layer.

### Pipeline Stages

#### Step 1: Output Sampling

Collect AI agent responses from production logs.

#### Step 2: Quality Scoring

Use an LLM-as-Judge framework to evaluate outputs across five quality dimensions.

#### Step 3: Drift Detection

Perform statistical comparisons across time windows to identify degradation trends.

#### Step 4: Root Cause Analysis

Apply multi-step reasoning to determine likely causes of quality regressions.

#### Step 5: Remediation & Reporting

Generate fix recommendations, RCA reports, and post-mortem drafts.

---

## 🛠️ Technology Stack

| Layer           | Technology              | Purpose                       |
| --------------- | ----------------------- | ----------------------------- |
| Orchestration   | Microsoft Foundry IQ    | Multi-step reasoning workflow |
| Backend         | FastAPI + Python        | REST API services             |
| Quality Scoring | Claude API              | LLM-as-Judge evaluation       |
| Drift Detection | Python Statistics       | Trend and regression analysis |
| RCA Engine      | Claude API + Foundry IQ | Root cause reasoning          |
| Frontend        | React                   | Live monitoring dashboard     |

---

## 📂 Project Structure

```text
AgentEval/
│
├── assets/
│   └── agenteval-architecture.png
│
├── agenteval_main.py
├── agenteval_routes.py
├── quality_scorer.py
├── drift_detector.py
├── rca_engine.py
├── AgentEval.jsx
│
├── AgentEval_README.md
├── AgentEval_ARCHITECTURE.docx
└── AgentEval_SUBMISSION.docx
```

---

## ⚡ Quick Start

### Backend Setup

```bash
python -m venv venv
source venv/bin/activate

pip install -r agenteval_requirements.txt

echo "ANTHROPIC_API_KEY=your_key" > .env

uvicorn agenteval_main:app --reload --port 8000
```

### Frontend Setup

```bash
npm install
npm run dev
```

---

## 🧪 API Example

### Evaluate a Single Agent Response

```http
POST /api/v1/eval/single
```

Example Request:

```json
{
  "response": "Sample AI agent output"
}
```

Example Response:

```json
{
  "overall_score": 86,
  "risk_level": "LOW",
  "accuracy": 90,
  "relevance": 85,
  "hallucination_risk": 92,
  "reasoning": 80,
  "safety": 88
}
```

---

## 📊 Outputs

AgentEval generates four operational outputs:

### Live Dashboard

* Quality scores
* Drift charts
* Historical trends

### Drift Alerts

Notifications through:

* Microsoft Teams
* Slack
* Email

### RCA Reports

Detailed analysis of:

* Root causes
* Confidence scores
* Recommended fixes

### Post-Mortem Drafts

Auto-generated incident summaries for engineering and leadership review.

---

## 📈 Future Enhancements

* Azure OpenAI integration
* Azure AI Foundry deployment templates
* Real-time streaming evaluations
* Historical trend visualizations
* Multi-agent benchmarking
* CI/CD quality gates for AI deployments
* Enterprise observability integrations

---

## 👨‍💻 Author

**Kaushal Shivaprakashan**


Seattle, Washington, USA

GitHub: https://github.com/kaushalshivaprakashan

LinkedIn: https://linkedin.com/in/kaushalshivaprakash

---

## 🏆 Hackathon Submission

Built for the **Microsoft Agents League Hackathon 2026** under the **Reasoning Agents Track**, demonstrating how AI systems can autonomously monitor, evaluate, diagnose, and improve the quality of other AI agents.

---

## 📜 License

MIT License

Copyright (c) 2026 Kaushal Shivaprakashan
