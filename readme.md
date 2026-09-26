<div align="center">

# 🛡️ AegisTrust Platform
### AI Defense Lab 2026 • Track 2 — Fraud & Identity Defense

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=EF4444&center=true&vCenter=true&width=700&lines=Real-Time+Scam+%26+Fraud+Detection+Engine;Explainable+AI+%E2%80%A2+Not+a+Black+Box;Built+with+FastAPI+%2B+Next.js+13+%2B+Framer+Motion" alt="Typing SVG" />

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge&logo=appveyor" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-005571?style=for-the-badge&logo=fastapi" />
  <img src="https://img.shields.io/badge/Frontend-Next.js%2013-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Motion-Framer%20Motion-EF4444?style=for-the-badge&logo=framer" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/amirthavarshiniCSE/ai-scam-analyzer?style=for-the-badge&color=gold" />
  <img src="https://img.shields.io/github/forks/amirthavarshiniCSE/ai-scam-analyzer?style=for-the-badge&color=blue" />
  <img src="https://img.shields.io/github/license/amirthavarshiniCSE/ai-scam-analyzer?style=for-the-badge&color=green" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge" />
</p>

<a href="#-quickstart">
  <img src="https://img.shields.io/badge/⚡_Quickstart-Jump_In-EF4444?style=for-the-badge" />
</a>
<a href="#-key-features">
  <img src="https://img.shields.io/badge/🚀_Features-See_More-005571?style=for-the-badge" />
</a>
<a href="#-live-demo">
  <img src="https://img.shields.io/badge/🎥_Demo-Watch_Now-black?style=for-the-badge" />
</a>

</div>

<br/>

## 📌 Table of Contents
<details open>
<summary>Click to expand</summary>

- [⚡ Overview](#-overview)
- [🏗️ System Architecture](#️-system-architecture)
- [🚀 Key Features](#-key-features)
- [🎥 Live Demo](#-live-demo)
- [🛠️ Quickstart](#-quickstart)
- [📊 Evaluation Telemetry Example](#-evaluation-telemetry-example)
- [🧭 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

</details>

---

## ⚡ Overview

**AegisTrust** is an enterprise-grade, real-time AI scam message analyzer and threat intelligence command center. Built for **AI Defense Lab 2026 (Track 2: Fraud & Identity Defense)**, the platform moves beyond binary classification with **explainable evidence extraction**, **behavioral velocity scoring**, and a **human-in-the-loop false-positive recovery loop**.

> 💡 **Why it matters:** Most scam detectors give you a score and nothing else. AegisTrust shows *why* — every flagged message comes with an evidence trail an analyst can actually audit.

---

## 🏗️ System Architecture

```mermaid
graph TD
    A[📡 Incoming Telemetry Stream] -->|Payload & Metadata| B(⚙️ FastAPI Security Engine)
    B --> C{🧠 Heuristic & NLP Pipeline}
    C -->|Risk Calculation| D[🕸️ NetworkX Fraud Clustering]
    D --> E[📦 JSON Threat Response]
    E --> F[💻 Next.js SaaS Dashboard]
    F -->|Framer Motion Physics| G[📊 Interactive Visualizer & Audit Logs]

    style A fill:#005571,color:#fff
    style B fill:#0EA5E9,color:#fff
    style C fill:#7C3AED,color:#fff
    style D fill:#059669,color:#fff
    style E fill:#F59E0B,color:#000
    style F fill:#000000,color:#fff
    style G fill:#EF4444,color:#fff
```

---

## 🚀 Key Features

<table>
<tr>
<td width="50%">

### 🔍 Multimodal Heuristic Engine
Detects psychological pressure triggers, urgency vectors, and obfuscated phishing URLs in real time.

### ⚖️ Proportional Intervention
Automatically routes threat telemetry into graded responses — **Immediate Block**, **User Warning Banner**, or **Clear**.

</td>
<td width="50%">

### 🔬 Explainable Evidence Audit
Breaks down exact threat components rather than returning a black-box score.

### 🔁 Analyst Review Loop
Integrated feedback mechanism for false-positive/false-negative reporting and full audit logging.

</td>
</tr>
</table>

---

## 🎥 Live Demo

<div align="center">

<!-- Replace with your actual demo GIF or hosted clip -->
<img src="https://your-image-host.com/aegistrust-demo.gif" width="80%" alt="AegisTrust Demo"/>

*Dashboard reacting live to an incoming scam payload — replace this GIF with your own screen recording.*

</div>

---

## 🛠️ Quickstart

<details open>
<summary><b>📦 Prerequisites</b></summary>

- Python 3.10+
- Node.js v16+

</details>

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/amirthavarshiniCSE/ai-scam-analyzer.git
cd ai-scam-analyzer
```

### 2️⃣ Launch the Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```
> Backend will be live at `http://localhost:8000`

### 3️⃣ Launch the Frontend (Next.js)
Open a second terminal window:
```bash
cd frontend
npm install
npm run dev
```
> Access the Command Center at `http://localhost:3000`

---

## 📊 Evaluation Telemetry Example

| Parameter | Sample Attack Payload | Expected Output |
|---|---|---|
| Sender ID | `HDFC-Alerts-Verify` | 🚩 Gateway Tagged |
| IP Address | `185.220.101.5` | 🕵️ Tor Exit / Proxy Flagged |
| Velocity Score | `0.85` | ⚡ High Velocity Trigger |
| Payload | *"URGENT: Account suspended in 2 hours. Click link..."* | 🔴 **CRITICAL (80/100)** |

---

## 🧭 Roadmap

- [x] Core heuristic + NLP scoring pipeline
- [x] Real-time dashboard with animated risk visualizer
- [ ] Multi-language scam detection
- [ ] Browser extension for inline warnings
- [ ] Public threat-intel API

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-thing`)
3. Commit your changes (`git commit -m 'Add amazing thing'`)
4. Push to the branch (`git push origin feature/amazing-thing`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">

---

<img src="https://img.shields.io/badge/Built%20with-%E2%9D%A4-EF4444?style=for-the-badge" />
<img src="https://img.shields.io/badge/AI%20Defense%20Lab-2026-005571?style=for-the-badge" />

**AegisTrust Platform** — Fraud & Identity Defense, done right.

</div>