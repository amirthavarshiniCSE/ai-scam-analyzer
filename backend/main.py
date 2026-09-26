from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import TelemetryRequest, ScamAnalysisResult
from engine import AdvancedScamDetectorEngine

app = FastAPI(title="AegisTrust Security API", version="1.0")
engine = AdvancedScamDetectorEngine()

# Allow Next.js frontend to communicate
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/analyze", response_model=ScamAnalysisResult)
async def analyze_telemetry(req: TelemetryRequest):
    return engine.analyze(
        sender=req.sender_id,
        message=req.message,
        device_ip=req.device_ip,
        velocity=req.velocity_score
    )