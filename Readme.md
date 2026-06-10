# 🔬 AgentEval AI

### Autonomous AI Agent Quality Monitor

**Microsoft Agents League Hackathon 2026 — Reasoning Agents Track**

**Foundry IQ · Multi-Step Reasoning · Drift Detection · Automated RCA**

---

## 🚀 Overview

Modern AI agents continuously evolve through prompt updates, model upgrades, configuration changes, and deployment optimizations. While these improvements are intended to enhance performance, even small changes can introduce silent quality degradation.

Organizations deploying AI copilots and autonomous agents often lack a standardized mechanism to monitor agent quality over time, detect regressions, and identify root causes before end users are impacted.

**AgentEval AI** addresses this challenge by continuously evaluating agent outputs, detecting performance drift, and automatically performing root cause analysis (RCA) to explain quality degradation and recommend corrective actions.

---

## 🎯 Problem Statement

Microsoft Copilot experiences are now embedded across multiple products and services.

As AI systems evolve:

* Prompt modifications may reduce answer quality.
* Model upgrades can introduce unexpected behavior.
* Configuration changes can impact reasoning consistency.
* Retrieval pipelines may drift from expected performance.

These issues frequently remain undetected until users begin reporting problems.

AgentEval provides continuous quality monitoring and automated diagnostics for AI agents, enabling proactive detection and remediation.

---

## ✨ Key Features

### 1. Multi-Dimensional Quality Evaluation

Evaluates AI responses across five critical dimensions:

* Accuracy
* Relevance
* Hallucination Risk
* Reasoning Coherence
* Safety

---

### 2. Drift Detection

Continuously compares evaluation metrics across historical and current time windows to identify:

* Quality degradation
* Performance regressions
* Behavioral drift

---

### 3. Automated Root Cause Analysis

Uses multi-step reasoning to trace degradation signals back to likely causes, including:

* Prompt changes
* Model updates
* Retrieval failures
* Configuration drift

---

### 4. Actionable Recommendations

Generates ranked remediation recommendations based on:

* Expected impact
* Implementation effort
* Confidence level

---

### 5. Incident Post-Mortem Generation

Automatically creates structured incident summaries for engineering and operations teams.

---

## 🏗️ Architecture

```text
Production Agent Outputs
            │
            ▼
 ┌────────────────────┐
 │ Output Sampling    │
 └────────────────────┘
            │
            ▼
 ┌────────────────────┐
 │ Quality Scoring    │
 │ (LLM-as-Judge)     │
 └────────────────────┘
            │
            ▼
 ┌────────────────────┐
 │ Drift Detection    │
 └────────────────────┘
            │
            ▼
 ┌────────────────────┐
 │ Root Cause Analysis│
 └────────────────────┘
            │
            ▼
 Recommendations & Reports
```

---

## ☁️ Microsoft Foundry IQ Integration

AgentEval leverages **Microsoft Foundry IQ** as its orchestration and observability layer.

### Pipeline Stages

#### Step 1: Output Sampling

Collect production AI agent responses for evaluation.

#### Step 2: Quality Scoring

Use an LLM-as-Judge framework to score outputs across five quality dimensions.

#### Step 3: Drift Detection

Perform statistical comparisons across time windows to identify degradation trends.

#### Step 4: Root Cause Analysis

Apply multi-step reasoning to determine the most likely causes of quality regressions.

---

## 🛠️ Technology Stack

| Layer           | Technology              | Purpose                   |
| --------------- | ----------------------- | ------------------------- |
| Orchestration   | Microsoft Foundry IQ    | Multi-step agent workflow |
| Backend         | FastAPI + Python        | REST API services         |
| Quality Scoring | Claude API              | LLM-as-Judge evaluation   |
| Drift Detection | Python Statistics       | Quality trend analysis    |
| RCA Engine      | Claude API + Foundry IQ | Root cause reasoning      |
| Frontend        | React                   | Monitoring dashboard      |

---

## 📂 Project Structure

```text
AgentEval/
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

---

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

---

## 📈 Future Enhancements

* Azure OpenAI integration
* Real-time monitoring dashboards
* Historical trend visualization
* Multi-agent benchmarking
* Enterprise alerting and notifications
* CI/CD quality gates for AI deployments

---

## 👨‍💻 Author

**Kaushal Shivaprakashan**


GitHub: https://github.com/kaushalshivaprakashan

LinkedIn: https://linkedin.com/in/kaushalshivaprakash

---

## 📜 License

This project was developed as part of the **Microsoft Agents League Hackathon 2026**.

Feel free to fork, extend, and experiment with the platform.
