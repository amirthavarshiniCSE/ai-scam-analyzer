import re
from models import ScamAnalysisResult

class AdvancedScamDetectorEngine:
    def __init__(self):
        self.urgency_keywords = ["urgent", "immediately", "expires today", "act now", "suspended", "verify now", "final warning"]
        self.financial_keywords = ["bank", "account", "otp", "pin", "cvv", "wallet", "crypto", "upi", "refund", "transfer", "kyc"]
        self.suspicious_link_patterns = [r"bit\.ly", r"tinyurl", r"goo\.gl", r"free", r"secure-login", r"update-account"]

    def analyze(self, sender: str, message: str, device_ip: str, velocity: float) -> ScamAnalysisResult:
        score = 0.0
        indicators, evidence = [], {}
        msg_lower = message.lower()

        # 1. Psychological & Urgency Manipulation
        urgency_hits = [kw for kw in self.urgency_keywords if kw in msg_lower]
        if urgency_hits:
            score += 25.0
            indicators.append("Urgency & Coercion Manipulation")
            evidence["Urgency Vectors"] = f"Detected psychological pressure triggers: {', '.join(urgency_hits)}"

        # 2. Credential Harvesting Intent
        fin_hits = [kw for kw in self.financial_keywords if kw in msg_lower]
        if fin_hits:
            score += 30.0
            indicators.append("Sensitive Financial Data Request")
            evidence["Asset Risk"] = f"Targeting restricted assets: {', '.join(fin_hits)}"

        # 3. Phishing Links
        link_hits = any(re.search(pat, msg_lower) for pat in self.suspicious_link_patterns) or "http" in msg_lower
        if link_hits:
            score += 25.0
            indicators.append("Malicious / External Redirect Link")
            evidence["Network Vector"] = "External shortened URL or phishing redirect identified."

        # 4. Behavioral Velocity
        if velocity > 0.7:
            score += 20.0
            indicators.append("Abnormal Transaction Velocity")
            evidence["Velocity Anomaly"] = f"High frequency rate from IP: {device_ip} (Velocity: {velocity*100:.1f}%)"

        score = min(score, 100.0)

        # Interventions mapped to AI Defense Lab rubric
        if score >= 75.0:
            risk_level, action = "CRITICAL", "IMMEDIATE BLOCK & ALERT"
            explanation = "High probability of targeted phishing. Automated quarantine executed."
        elif score >= 45.0:
            risk_level, action = "HIGH", "STEP-UP AUTHENTICATION REQUIRED"
            explanation = "Suspicious behavioral anomalies detected. Secondary verification required."
        elif score >= 20.0:
            risk_level, action = "MEDIUM", "USER WARNING BANNER"
            explanation = "Mild urgency indicators present. Displaying interactive safety warning."
        else:
            risk_level, action = "LOW", "ALLOW"
            explanation = "Standard communication profile. No malicious indicators found."

        # Mock NetworkX Logic for Fraud Ring
        nodes = [sender, device_ip, "Target User"]
        edges = [(sender, "Target User"), (device_ip, sender)]
        if score > 50:
            nodes.append("Known Scam Database Cluster")
            edges.append((sender, "Known Scam Database Cluster"))

        return ScamAnalysisResult(
            risk_level=risk_level,
            risk_score=score,
            confidence=0.92 if indicators else 0.98,
            indicators=indicators,
            evidence_breakdown=evidence,
            recommended_action=action,
            explanation=explanation,
            graph_nodes=nodes,
            graph_edges=edges
        )