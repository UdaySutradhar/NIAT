import React, { useState } from 'react';
import { 
  Sparkles, Users, MessageSquare, ShieldCheck, Cpu, 
  ArrowRight, CheckCircle2, Globe, Send, RefreshCw, Layers 
} from 'lucide-react';

export default function NIATGrowthSystem() {
  const [activeTab, setActiveTab] = useState('student');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [systemStep, setSystemStep] = useState(1); 

  const [studentData, setStudentData] = useState({
    name: 'Rahul Sharma',
    stream: 'Science (PCM - 88%)',
    interest: 'AI & Full-Stack Development',
    careerGoal: 'High-paying software engineer at a top product company'
  });

  const [parentData, setParentData] = useState({
    parentName: 'Alok Sharma',
    primaryFear: 'AI job disruption & traditional degree ROI',
    budgetConstraint: 'Looking for verified 4-year career security'
  });

  const [aiReport, setAiReport] = useState(null);
  const [webhookLog, setWebhookLog] = useState(null);
  const t = {
    en: {
      title: "NIAT Parent-Teen Career & AI-Proofing Matchmaker",
      subtitle: "Component 1: Dual-Perspective Input Engine | Component 2: LLM Synthesis Agent | Component 3: n8n Webhook & WhatsApp CRM",
      studentTab: "1. Student Profile",
      parentTab: "2. Parent Perspective",
      generateBtn: "Synthesize Family Tech Roadmap (Trigger AI & n8n)",
      processing: "Orchestrating LLM Agent & n8n Webhook Pipeline...",
      successHeader: "Family Alignment Roadmap Generated Successfully",
    },
    hi: {
      title: "NIAT माता-पिता और छात्र करियर मैचमेकर",
      subtitle: "घटक 1: छात्र और अभिभावक इनपुट | घटक 2: AI सिंथेसिस एजेंट | घटक 3: n8n और WhatsApp ऑटोमेशन",
      studentTab: "1. छात्र विवरण",
      parentTab: "2. अभिभावक चिंताएँ",
      generateBtn: "पारिवारिक रोडमैप तैयार करें (AI और Webhook ट्रिगर करें)",
      processing: "AI एजेंट और n8n पाइपलाइन निष्पादित हो रही है...",
      successHeader: "पारिवारिक संरेखण रोडमैप सफलतापूर्वक तैयार हो गया है",
    },
    te: {
      title: "NIAT పేరెంట్-టీన్ కెరీర్ AI మ్యాచ్‌మేకర్",
      subtitle: "కాంపోोनెంట్ 1: డ్యూయల్ ఇన్‌పుట్ | కాంపోనెంట్ 2: AI ఏజెంట్ | కాంపోనెంట్ 3: n8n వాట్సాప్ ఆటోమేషన్",
      studentTab: "1. విద్యార్థి ప్రొఫైल",
      parentTab: "2. తల్లిదండ్రుల ఆందోళన",
      generateBtn: "కుటుంబ టెక్ రోడ్‌మ్యాప్ రూపొందించండి",
      processing: "AI మరియు n8n వెబ్‌హుక్ రన్ అవుతోంది...",
      successHeader: "కుటుంబ రోడ్‌మ్యాప్ విజయవంతంగా సృష్టించబడింది",
    }
  };

  const currText = t[language] || t.en;

  const handleOrchestrateSystem = async () => {
    setLoading(true);
    setSystemStep(2);

    setTimeout(() => {
      const generatedReport = {
        roadmapTitle: `Verified 4-Year NIAT Bridge for ${studentData.name}`,
        aiAlignmentScore: "94.8% Family Consensus Match",
        jobSecurityAnalysis: `Addressed parent concern ('${parentData.primaryFear}'): NIAT’s work-integrated 4-year B.Tech + guaranteed practical internships eliminates traditional obsolescence risk.`,
        studentPathway: `Mapped student interest ('${studentData.interest}') directly into an advanced AI & Full-Stack engineering curriculum with zero theory padding.`,
        financialRoi: "Est. 3.2x faster payback period compared to standard Tier-3 university degrees."
      };

      const webhookPayload = {
        event: "FAMILY_ROADMAP_GENERATED",
        timestamp: new Date().toISOString(),
        n8nWorkflowId: "wf_niat_growth_engine_v2",
        crmTarget: "NxtWave Admissions Pod - Hyderabad",
        whatsappStatus: "Dispatched personalized PDF link to +91 98765 XXXXX",
        leadScore: "High Intent (Dual-Verified)"
      };

      setAiReport(generatedReport);
      setWebhookLog(webhookPayload);
      setLoading(false);
      setSystemStep(3);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> NxtWave NIAT Growth Architecture
            </div>
            <h1 className="text-2xl font-bold text-white">{currText.title}</h1>
            <p className="text-slate-400 text-sm mt-1">{currText.subtitle}</p>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg">
            <Globe className="w-4 h-4 text-indigo-400" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-sm text-slate-200 focus:outline-none cursor-pointer"
            >
              <option value="en" className="bg-slate-900">English</option>
              <option value="hi" className="bg-slate-900">हिंदी (Hindi)</option>
              <option value="te" className="bg-slate-900">తెలుగు (Telugu)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold">
          <div className={`p-3 rounded-lg border ${systemStep >= 1 ? 'bg-indigo-950/40 border-indigo-500/50 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            1. Dual-User Input Form
          </div>
          <div className={`p-3 rounded-lg border ${systemStep >= 2 ? 'bg-indigo-950/40 border-indigo-500/50 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            2. LLM Synthesis Agent API
          </div>
          <div className={`p-3 rounded-lg border ${systemStep >= 3 ? 'bg-indigo-950/40 border-indigo-500/50 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            3. n8n Webhook & WhatsApp CRM
          </div>
        </div>

        {systemStep === 1 && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-6">
            <div className="flex border-b border-slate-800 pb-4 gap-4">
              <button 
                onClick={() => setActiveTab('student')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'student' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {currText.studentTab}
              </button>
              <button 
                onClick={() => setActiveTab('parent')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'parent' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {currText.parentTab}
              </button>
            </div>

            {activeTab === 'student' ? (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Student Name</label>
                  <input 
                    type="text" 
                    value={studentData.name}
                    onChange={(e) => setStudentData({...studentData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Board Stream & Percentage / Status</label>
                  <input 
                    type="text" 
                    value={studentData.stream}
                    onChange={(e) => setStudentData({...studentData, stream: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Tech Interest / Ambition</label>
                  <input 
                    type="text" 
                    value={studentData.interest}
                    onChange={(e) => setStudentData({...studentData, interest: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Parent / Guardian Name</label>
                  <input 
                    type="text" 
                    value={parentData.parentName}
                    onChange={(e) => setParentData({...parentData, parentName: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Primary Career / AI Disruption Fear</label>
                  <input 
                    type="text" 
                    value={parentData.primaryFear}
                    onChange={(e) => setParentData({...parentData, primaryFear: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">ROI & Degree Security Expectations</label>
                  <input 
                    type="text" 
                    value={parentData.budgetConstraint}
                    onChange={(e) => setParentData({...parentData, budgetConstraint: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <button 
              onClick={handleOrchestrateSystem}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" /> {currText.processing}
                </>
              ) : (
                <>
                  {currText.generateBtn} <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}

        {systemStep >= 2 && (
          <div className="space-y-6 animate-fadeIn">
            {loading ? (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center space-y-4">
                <RefreshCw className="w-10 h-10 animate-spin text-indigo-500 mx-auto" />
                <h3 className="text-lg font-semibold text-white">Running LLM Semantic Synthesis & n8n Webhook Pipeline...</h3>
                <p className="text-sm text-slate-400">Reconciling student technical goals with parental security parameters...</p>
              </div>
            ) : (
              <div className="space-y-6">
                
                <div className="bg-slate-900 border border-indigo-500/40 rounded-xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                      <Cpu className="w-5 h-5" /> Component 2: LLM Agent Roadmap Synthesis
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-medium">
                      {aiReport.aiAlignmentScore}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{aiReport.roadmapTitle}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                      <div className="text-xs text-indigo-400 font-semibold mb-1">Parental Objection Handler</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{aiReport.jobSecurityAnalysis}</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                      <div className="text-xs text-indigo-400 font-semibold mb-1">Student Skill Track</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{aiReport.studentPathway}</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                      <div className="text-xs text-indigo-400 font-semibold mb-1">Financial ROI Projection</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{aiReport.financialRoi}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-emerald-500/40 rounded-xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Send className="w-5 h-5" /> Component 3: n8n Automation & WhatsApp Webhook Dispatch
                    </div>
                    <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-medium">
                      Status: 200 OK (Triggered)
                    </span>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                    <div className="text-slate-500">// Automated Webhook Payload transmitted to NxtWave CRM & WhatsApp API</div>
                    <div><span className="text-indigo-400">Workflow ID:</span> {webhookLog.n8nWorkflowId}</div>
                    <div><span className="text-indigo-400">Target CRM:</span> {webhookLog.crmTarget}</div>
                    <div><span className="text-indigo-400">WhatsApp Action:</span> {webhookLog.whatsappStatus}</div>
                    <div><span className="text-indigo-400">Lead Classification:</span> {webhookLog.leadScore}</div>
                  </div>

                  <button 
                    onClick={() => setSystemStep(1)}
                    className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 mt-2"
                  >
                    ← Test Another Family Profile
                  </button>
                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}