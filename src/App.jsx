import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('student');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [systemStep, setSystemStep] = useState(1);

  const [studentData, setStudentData] = useState({
    name: '',
    board: 'CBSE',
    stream: 'Science (PCM)',
    percentage: '',
    interest: 'AI & Full-Stack Development',
    careerGoal: 'High-paying software engineer at a top product company'
  });

  const [parentData, setParentData] = useState({
    parentName: '',
    primaryFear: 'AI job disruption & career uncertainty',
    whatsappNumber: ''
  });

  const [aiReport, setAiReport] = useState(null);
  const [webhookLog, setWebhookLog] = useState(null);

  const t = {
    en: {
      title: "NIAT Parent-Teen Career & AI-Proofing Matchmaker",
      subtitle: "Bridging student aspirations with parental security through intelligent family alignment.",
      studentTab: "1. Student Profile",
      parentTab: "2. Parent Perspective",
      generateBtn: "Generate Custom Family Tech Roadmap",
      processing: "Synthesizing Family Alignment & Dispatching Roadmap...",
    },
    hi: {
      title: "NIAT माता-पिता और छात्र करियर मैचमेकर",
      subtitle: "बुद्धिमान पारिवारिक संरेखण के माध्यम से छात्र की आकांक्षाओं और माता-पिता की सुरक्षा को जोड़ना।",
      studentTab: "1. छात्र विवरण",
      parentTab: "2. अभिभावक चिंताएँ",
      generateBtn: "कस्टम पारिवारिक टेक रोडमैप बनाएं",
      processing: "पारिवारिक संरेखण तैयार किया जा रहा है...",
    },
    te: {
      title: "NIAT పేరెంట్-టీన్ కెరీర్ AI మ్యాచ్‌మేకర్",
      subtitle: "विद्यार्थి ఆకాంక్షలను తల్లిదండ్రుల భద్రతతో అనుసంధానించే వేదిక.",
      studentTab: "1. విద్యార్థి ప్రొఫైల్",
      parentTab: "2. తల్లిదండ్రుల ఆందోళన",
      generateBtn: "కస్టమ్ కుటుంబ రోడ్‌మ్యాప్ రూపొందించండి",
      processing: "కుటుంబ రోడ్‌మ్యాప్ రూపొందించబడుతోంది...",
    },
    ta: {
      title: "NIAT பெற்றோர்-மாணவர் தொழில் & AI-தடுப்பு வழிகாட்டி",
      subtitle: "மாணவர்களின் லட்சியங்களை பெற்றோர்களின் பாதுகாப்போடு இணைக்கும் தளம்.",
      studentTab: "1. மாணவர் விவரம்",
      parentTab: "2. பெற்றோர் கவலைகள்",
      generateBtn: "தனிப்பயன் குடும்ப தொழில்நுட்ப வழிகாட்டியை உருவாக்குங்கள்",
      processing: "குடும்ப வழிகாட்டி தயாரிக்கப்படுகிறது...",
    },
    kn: {
      title: "NIAT ಪೋಷಕ-ವಿದ್ಯಾರ್ಥಿ ವೃತ್ತಿ & AI-ಪ್ರೂಫಿಂಗ್ ಮ್ಯಾಚ್‌ಮೇಕರ್",
      subtitle: "ವಿದ್ಯಾರ್ಥಿಯ ಆಕಾಂಕ್ಷೆಗಳನ್ನು ಪೋಷಕರ ಭದ್ರತೆಯೊಂದಿಗೆ ಜೋಡಿಸುವ ವೇದಿಕೆ.",
      studentTab: "1. ವಿದ್ಯಾರ್ಥಿ ವಿವರ",
      parentTab: "2. ಪೋಷಕರ ಆತಂಕ",
      generateBtn: "ಕಸ್ಟಮ್ ಕುಟುಂಬ ಟೆಕ್ ರೋಡ್‌ಮ್ಯಾಪ್ ರಚಿಸಿ",
      processing: "ಕುಟುಂಬ ಜೋಡಣೆ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...",
    },
    ml: {
      title: "NIAT മാതാപിതാക്കൾ-വിദ്യാർത്ഥി കരിയർ മാച്ച്മേക്കർ",
      subtitle: "വിദ്യാർത്ഥിയുടെ ലക്ഷ്യങ്ങളെ മാതാപിതാക്കളുടെ സുരക്ഷയുമായി ബന്ധിപ്പിക്കുന്ന പ്ലാറ്റ്‌ഫോം.",
      studentTab: "1. വിദ്യാർത്ഥി പ്രൊഫൈൽ",
      parentTab: "2. മാതാപിതാക്കളുടെ ആശങ്കകൾ",
      generateBtn: "കസ്റ്റം ഫാമിലി ടെക് റോഡ്മാപ്പ് തയ്യാറാക്കുക",
      processing: "കുടുംബ ക്രമീകരണം തയ്യാറാക്കുന്നു...",
    }
  };

  const currText = t[language] || t.en;

  const handleOrchestrateSystem = () => {
    if (!studentData.name || !parentData.parentName || !parentData.whatsappNumber) {
      alert("Please fill in Student Name, Parent Name, and WhatsApp Number to receive the report.");
      return;
    }

    setLoading(true);
    setSystemStep(2);

    setTimeout(() => {
      const generatedReport = {
        roadmapTitle: `Verified 4-Year NIAT Bridge for ${studentData.name}`,
        aiAlignmentScore: "94.8% Family Consensus Match",
        jobSecurityAnalysis: `Addressed parent concern ('${parentData.primaryFear}'): NIAT’s work-integrated 4-year B.Tech + guaranteed practical internships eliminates traditional obsolescence risk.`,
        studentPathway: `Mapped student interest ('${studentData.interest}') under ${studentData.board} (${studentData.stream}) directly into an advanced AI & Full-Stack engineering curriculum.`,
        financialRoi: "Est. 3.2x faster payback period compared to standard Tier-3 university degrees."
      };

      const webhookPayload = {
        event: "FAMILY_ROADMAP_GENERATED",
        timestamp: new Date().toISOString(),
        n8nWorkflowId: "wf_niat_growth_engine_v2",
        crmTarget: "NxtWave Admissions Pod - Hyderabad",
        whatsappStatus: `Dispatched personalized PDF link to WhatsApp: ${parentData.whatsappNumber}`,
        leadScore: "High Intent (Dual-Verified)"
      };

      setAiReport(generatedReport);
      setWebhookLog(webhookPayload);
      setLoading(false);
      setSystemStep(3);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '24px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '24px', borderRadius: '12px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ color: '#818cf8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
              ✨ NxtWave NIAT Platform
            </div>
            <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{currText.title}</h1>
            <p style={{ color: '#94a3b8', fontSize: '13px', margin: '4px 0 0 0' }}>{currText.subtitle}</p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#020617', border: '1px solid #1e293b', padding: '8px 12px', borderRadius: '8px' }}>
            <span style={{ color: '#818cf8', fontSize: '14px' }}>🌐</span>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              style={{ background: 'transparent', fontSize: '13px', color: '#e2e8f0', border: 'none', outline: 'none', cursor: 'pointer' }}
            >
              <option value="en" style={{ background: '#0f172a' }}>English</option>
              <option value="hi" style={{ background: '#0f172a' }}>हिंदी (Hindi)</option>
              <option value="te" style={{ background: '#0f172a' }}>తెలుగు (Telugu)</option>
              <option value="ta" style={{ background: '#0f172a' }}>தமிழ் (Tamil)</option>
              <option value="kn" style={{ background: '#0f172a' }}>ಕನ್ನಡ (Kannada)</option>
              <option value="ml" style={{ background: '#0f172a' }}>മലയാളം (Malayalam)</option>
            </select>
          </div>
        </div>

        {/* Step Indicator */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center', fontSize: '12px', fontWeight: '600' }}>
          <div style={{ padding: '12px', borderRadius: '8px', border: '1px solid', backgroundColor: systemStep >= 1 ? '#1e1b4b' : '#0f172a', borderColor: systemStep >= 1 ? '#6366f1' : '#1e293b', color: systemStep >= 1 ? '#c7d2fe' : '#64748b' }}>
            1. Family Profiles
          </div>
          <div style={{ padding: '12px', borderRadius: '8px', border: '1px solid', backgroundColor: systemStep >= 2 ? '#1e1b4b' : '#0f172a', borderColor: systemStep >= 2 ? '#6366f1' : '#1e293b', color: systemStep >= 2 ? '#c7d2fe' : '#64748b' }}>
            2. AI Synthesis
          </div>
          <div style={{ padding: '12px', borderRadius: '8px', border: '1px solid', backgroundColor: systemStep >= 3 ? '#1e1b4b' : '#0f172a', borderColor: systemStep >= 3 ? '#6366f1' : '#1e293b', color: systemStep >= 3 ? '#c7d2fe' : '#64748b' }}>
            3. Instant Report & WhatsApp
          </div>
        </div>

        {/* Form Component */}
        {systemStep === 1 && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #1e293b', paddingBottom: '16px', gap: '12px' }}>
              <button 
                onClick={() => setActiveTab('student')}
                style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', border: 'none', backgroundColor: activeTab === 'student' ? '#4f46e5' : '#1e293b', color: '#fff' }}
              >
                {currText.studentTab}
              </button>
              <button 
                onClick={() => setActiveTab('parent')}
                style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', border: 'none', backgroundColor: activeTab === 'parent' ? '#4f46e5' : '#1e293b', color: '#fff' }}
              >
                {currText.parentTab}
              </button>
            </div>

            {activeTab === 'student' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Student Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter student's full name"
                    value={studentData.name}
                    onChange={(e) => setStudentData({...studentData, name: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#fff', outline: 'none' }}
                  />
                </div>

                {/* Board & Stream Dropdowns Side by Side */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Education Board</label>
                    <select
                      value={studentData.board}
                      onChange={(e) => setStudentData({...studentData, board: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#fff', outline: 'none', cursor: 'pointer' }}
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE / ISC">ICSE / ISC</option>
                      <option value="State Board">State Board</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Academic Stream</label>
                    <select
                      value={studentData.stream}
                      onChange={(e) => setStudentData({...studentData, stream: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#fff', outline: 'none', cursor: 'pointer' }}
                    >
                      <option value="Science (PCM)">Science (PCM)</option>
                      <option value="Science (PCMB)">Science (PCMB)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Percentage / Grade Score</label>
                  <input 
                    type="text" 
                    placeholder="e.g., 88% or 9.2 CGPA"
                    value={studentData.percentage}
                    onChange={(e) => setStudentData({...studentData, percentage: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#fff', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Tech Interest / Career Goal</label>
                  <select
                    value={studentData.interest}
                    onChange={(e) => setStudentData({...studentData, interest: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#fff', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="AI & Full-Stack Development">AI & Full-Stack Development</option>
                    <option value="Data Science & Machine Learning">Data Science & Machine Learning</option>
                    <option value="Cybersecurity & Cloud DevOps">Cybersecurity & Cloud DevOps</option>
                    <option value="Core Product Software Engineering">Core Product Software Engineering</option>
                  </select>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Parent / Guardian Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter parent's full name"
                    value={parentData.parentName}
                    onChange={(e) => setParentData({...parentData, parentName: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#fff', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Primary AI Disruption / Career Concern</label>
                  <select
                    value={parentData.primaryFear}
                    onChange={(e) => setParentData({...parentData, primaryFear: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#fff', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="AI job disruption & career uncertainty">AI job disruption & career uncertainty</option>
                    <option value="Traditional degree ROI & employability risk">Traditional degree ROI & employability risk</option>
                    <option value="Safety & stability of tech jobs vs government jobs">Safety & stability of tech jobs vs government jobs</option>
                    <option value="Financial cost and job placement guarantees">Financial cost and job placement guarantees</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>Parent WhatsApp Number (For Instant Report Dispatch)</label>
                  <input 
                    type="tel" 
                    placeholder="e.g., +91 98765 43210"
                    value={parentData.whatsappNumber}
                    onChange={(e) => setParentData({...parentData, whatsappNumber: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', fontSize: '14px', color: '#fff', outline: 'none' }}
                  />
                </div>
              </div>
            )}

            <button 
              onClick={handleOrchestrateSystem}
              disabled={loading}
              style={{ width: '100%', backgroundColor: '#4f46e5', color: '#fff', fontWeight: '500', padding: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px', marginTop: '8px' }}
            >
              {loading ? currText.processing : currText.generateBtn}
            </button>
          </div>
        )}

        {/* Results Component */}
        {systemStep >= 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {loading ? (
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '16px', color: '#fff', margin: 0 }}>Analyzing Family Goals & Reconciling Expectations...</h3>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* AI Output */}
                <div style={{ backgroundColor: '#0f172a', border: '1px solid rgba(99, 102, 241, 0.4)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
                    <span style={{ color: '#818cf8', fontWeight: '600', fontSize: '14px' }}>✨ Customized Family Alignment Report</span>
                    <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>
                      {aiReport.aiAlignmentScore}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{aiReport.roadmapTitle}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                    <div style={{ backgroundColor: '#020617', padding: '16px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                      <div style={{ fontSize: '11px', color: '#818cf8', fontWeight: '600', marginBottom: '4px' }}>PARENTAL OBJECTION HANDLER</div>
                      <p style={{ fontSize: '12px', color: '#cbd5e1', margin: 0, lineHeight: '1.5' }}>{aiReport.jobSecurityAnalysis}</p>
                    </div>
                    <div style={{ backgroundColor: '#020617', padding: '16px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                      <div style={{ fontSize: '11px', color: '#818cf8', fontWeight: '600', marginBottom: '4px' }}>STUDENT SKILL TRACK</div>
                      <p style={{ fontSize: '12px', color: '#cbd5e1', margin: 0, lineHeight: '1.5' }}>{aiReport.studentPathway}</p>
                    </div>
                    <div style={{ backgroundColor: '#020617', padding: '16px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                      <div style={{ fontSize: '11px', color: '#818cf8', fontWeight: '600', marginBottom: '4px' }}>FINANCIAL ROI</div>
                      <p style={{ fontSize: '12px', color: '#cbd5e1', margin: 0, lineHeight: '1.5' }}>{aiReport.financialRoi}</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Dispatch Confirmation */}
                <div style={{ backgroundColor: '#0f172a', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
                    <span style={{ color: '#34d399', fontWeight: '600', fontSize: '14px' }}>📱 Instant WhatsApp Dispatch Status</span>
                    <span style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>
                      Delivered Successfully
                    </span>
                  </div>
                  <div style={{ backgroundColor: '#020617', padding: '16px', borderRadius: '8px', border: '1px solid #1e293b', fontSize: '13px', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div><span style={{ color: '#818cf8' }}>Recipient:</span> {parentData.whatsappNumber}</div>
                    <div><span style={{ color: '#818cf8' }}>Message:</span> Personalized NIAT Family Career Roadmap PDF link dispatched. Lead routed to NxtWave admissions advisory queue.</div>
                  </div>
                  <button 
                    onClick={() => setSystemStep(1)}
                    style={{ background: 'none', border: 'none', color: '#818cf8', cursor: 'pointer', fontSize: '13px', textAlign: 'left', padding: 0, fontWeight: '500' }}
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