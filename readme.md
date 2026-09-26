<div align="center">

# 🛡️ AegisTrust Platform
### **AI Defense Lab 2026 • Track 2 (Fraud & Identity Defense)**

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge&logo=appveyor" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-005571?style=for-the-badge&logo=fastapi" />
  <img src="https://img.shields.io/badge/Frontend-Next.js%2013-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Motion-Framer%20Motion-EF4444?style=for-the-badge&logo=framer" />
</p>

</div>

---

## ⚡ Overview

**AegisTrust** is an enterprise-grade, real-time AI scam message analyzer and threat intelligence command center. Built for **AI Defense Lab 2026 (Track 2: Fraud & Identity Defense)**, the platform moves beyond traditional binary classification by offering **explainable evidence extraction**, **behavioral velocity scoring**, and a **human-in-the-loop false-positive recovery loop**.

---

## 🏗️ System Architecture

```mermaid
graph TD
    A[Incoming Telemetry Stream] -->|Payload & Metadata| B(FastAPI Security Engine)
    B --> C{Heuristic & NLP Pipeline}
    C -->|Risk Calculation| D[NetworkX Fraud Clustering]
    D --> E[JSON Threat Response]
    E --> F[Next.js SaaS Dashboard]
    F -->|Framer Motion Physics| G[Interactive Visualizer & Audit Logs]