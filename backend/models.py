from pydantic import BaseModel
from typing import List, Dict, Tuple

class TelemetryRequest(BaseModel):
    sender_id: str
    message: str
    device_ip: str
    velocity_score: float

class ScamAnalysisResult(BaseModel):
    risk_level: str
    risk_score: float
    confidence: float
    indicators: List[str]
    evidence_breakdown: Dict[str, str]
    recommended_action: str
    explanation: str
    graph_nodes: List[str]
    graph_edges: List[Tuple[str, str]]