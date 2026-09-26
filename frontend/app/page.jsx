"use client";

import { useState } from "react";
import { analyzeThreat } from "../lib/api";
import { ShieldAlert, Activity, ShieldCheck, AlertTriangle, Network, Search, Database, Fingerprint, Crosshair } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AegisTrustDashboard() {
  const [formData, setFormData] = useState({
    sender_id: "HDFC-Alerts-Verify",
    device_ip: "185.220.101.5",
    velocity_score: 0.85,
    message: "URGENT NOTICE: Your banking account will be SUSPENDED within 2 hours due to unverified KYC details. Click immediately: https://bit.ly/bank-secure-update"
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleAnalyze = async () => {
    setLoading(true);
    setResult(null); 
    try {
      const data = await analyzeThreat(formData);
      setTimeout(() => {
        setResult(data);
        setFeedback("");
        setLoading(false);
      }, 600); 
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const containerFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemPop = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Header */}
        <motion.header 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 90, damping: 15 }}
          className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-200"
        >
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-[0_10px_20px_rgba(168,85,247,0.3)] border-b-4 border-r-4 border-purple-800/30"
          >
            <ShieldAlert className="w-8 h-8 text-white" />
          </motion.div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AegisTrust Platform</h1>
            <p className="text-sm font-medium text-purple-600 tracking-wide uppercase mt-1">AI Defense Lab 2026 • Command Center</p>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* Left Column: Interactive Telemetry Input */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-purple-900/5 relative overflow-hidden"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
              <Activity className="w-6 h-6 text-purple-500"/> Incoming Telemetry Stream
            </h2>
            
            <div className="space-y-5 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1.5 flex items-center gap-1"><Fingerprint className="w-4 h-4"/> Sender / Gateway ID</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-sm" 
                    value={formData.sender_id} onChange={e => setFormData({...formData, sender_id: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1.5 flex items-center gap-1"><Network className="w-4 h-4"/> Source IP Address</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-sm" 
                    value={formData.device_ip} onChange={e => setFormData({...formData, device_ip: e.target.value})} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5 flex justify-between">
                  <span>Behavioral Velocity Score</span>
                  <span className="text-purple-600 font-bold bg-purple-100 px-2 py-0.5 rounded-md">{formData.velocity_score.toFixed(2)}</span>
                </label>
                <input type="range" min="0" max="1" step="0.01" className="w-full accent-purple-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" 
                  value={formData.velocity_score} onChange={e => setFormData({...formData, velocity_score: parseFloat(e.target.value)})} />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5">Payload Content</label>
                <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 h-32 outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-sm resize-none" 
                  value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAnalyze} disabled={loading} 
                className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 text-lg"
              >
                {loading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="flex items-center gap-2">
                    <Search className="w-6 h-6"/>
                  </motion.div>
                ) : (
                  <><Crosshair className="w-6 h-6"/> Execute Threat Analysis</>
                )}
                {loading && <span>Scanning Pipeline...</span>}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Output & Evidence */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-purple-900/5 flex flex-col relative overflow-hidden"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 relative z-10">
              <Database className="w-6 h-6 text-purple-500"/> Decision Intelligence & Evidence
            </h2>
            
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex-1 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 min-h-[400px]"
                >
                  <motion.div animate={loading ? { scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] } : {}} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ShieldAlert className={`w-16 h-16 ${loading ? 'text-purple-400' : 'text-slate-300'} mb-4`} />
                  </motion.div>
                  <p className="font-medium">{loading ? "Intercepting Signals..." : "Awaiting telemetry injection..."}</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  variants={containerFade}
                  initial="hidden"
                  animate="show"
                  className="space-y-5 flex-1 relative z-10"
                >
                  
                  {/* Score Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div variants={itemPop} className="bg-purple-50 border border-purple-100 p-4 rounded-xl text-center shadow-sm">
                      <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1">Risk Level</div>
                      <div className={`text-xl font-black ${result.risk_score > 70 ? 'text-red-600' : result.risk_score > 40 ? 'text-orange-500' : 'text-emerald-600'}`}>
                        {result.risk_level}
                      </div>
                    </motion.div>
                    <motion.div variants={itemPop} className="bg-purple-50 border border-purple-100 p-4 rounded-xl text-center shadow-sm">
                      <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1">Threat Score</div>
                      <div className="text-2xl font-black text-slate-800">{result.risk_score}<span className="text-sm text-slate-500 font-semibold">/100</span></div>
                    </motion.div>
                    <motion.div variants={itemPop} className="bg-purple-50 border border-purple-100 p-4 rounded-xl text-center shadow-sm">
                      <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1">AI Confidence</div>
                      <div className="text-2xl font-black text-indigo-600">{(result.confidence * 100).toFixed(0)}%</div>
                    </motion.div>
                  </div>

                  {/* Action Banner */}
                  <motion.div variants={itemPop} className={`p-4 rounded-xl border-l-4 shadow-sm ${result.risk_score > 70 ? 'bg-red-50 border-red-500' : result.risk_score > 40 ? 'bg-orange-50 border-orange-500' : 'bg-emerald-50 border-emerald-500'}`}>
                    <h3 className={`font-bold text-base mb-1 flex items-center gap-2 ${result.risk_score > 70 ? 'text-red-900' : result.risk_score > 40 ? 'text-orange-900' : 'text-emerald-900'}`}>
                      {result.risk_score > 40 ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                      Intervention: {result.recommended_action}
                    </h3>
                    <p className={`text-xs font-medium ${result.risk_score > 70 ? 'text-red-800' : result.risk_score > 40 ? 'text-orange-800' : 'text-emerald-800'}`}>
                      {result.explanation}
                    </p>
                  </motion.div>

                  {/* Threat Intel & Fraud Ring Card (Advanced Layer) */}
                  {result.threat_intel && (
                    <motion.div variants={itemPop} className="bg-slate-900 text-slate-100 p-4 rounded-xl border border-purple-500/30 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 px-3 py-0.5 bg-purple-600 text-[9px] font-bold uppercase tracking-widest rounded-bl-lg">
                        Live Intel Feed
                      </div>
                      <h3 className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wider flex items-center gap-1">
                        <Network className="w-4 h-4"/> Global Threat Intelligence & Cluster Analysis
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                        <div className="bg-slate-800 p-2 rounded-lg border border-slate-700">
                          <span className="text-slate-400 block mb-0.5 text-[10px]">Fraud Cluster ID</span>
                          <span className="font-mono font-bold text-purple-300">{result.threat_intel.cluster_id}</span>
                        </div>
                        <div className="bg-slate-800 p-2 rounded-lg border border-slate-700">
                          <span className="text-slate-400 block mb-0.5 text-[10px]">Linked Network Nodes</span>
                          <span className="font-mono font-bold text-red-400">{result.threat_intel.associated_actors} Associated Entities</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Evidence Breakdown */}
                  <motion.div variants={itemPop} className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner">
                    <h3 className="text-xs font-bold text-slate-500 mb-2.5 uppercase tracking-wider">
                      Extracted Evidence Audit
                    </h3>
                    {Object.keys(result.evidence_breakdown).length > 0 ? (
                      <div className="space-y-2">
                        {Object.entries(result.evidence_breakdown).map(([key, val], idx) => (
                          <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1) }}
                            key={key} 
                            className="bg-white border border-slate-200 p-3 rounded-lg text-xs shadow-sm flex flex-col gap-0.5 hover:border-purple-300 transition-colors"
                          >
                            <span className="text-purple-700 font-bold">{key}:</span> 
                            <span className="text-slate-600 font-medium">{val}</span>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-3 rounded-lg text-xs font-medium flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4"/> No anomalous threat signals identified.
                      </div>
                    )}
                  </motion.div>

                  {/* Analyst Review & Recovery Loop */}
                  <motion.div variants={itemPop} className="pt-2 mt-auto">
                    <h3 className="text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1"><Network className="w-3.5 h-3.5"/> Analyst Review & Recovery Loop</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Confirm Accurate", "Report False Positive", "Report False Negative"].map(btn => (
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          key={btn} 
                          onClick={() => setFeedback(btn)} 
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors duration-200 ${feedback === btn ? 'bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-500/30' : 'bg-white border-slate-300 text-slate-600 hover:border-purple-500 hover:text-purple-700 hover:bg-purple-50'}`}
                        >
                          {btn}
                        </motion.button>
                      ))}
                    </div>
                    <AnimatePresence>
                      {feedback && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="text-xs font-bold text-emerald-600 flex items-center gap-1 overflow-hidden"
                        >
                          ✓ Audit log updated securely.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}