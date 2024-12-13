import React, { useState } from 'react';

function HighVoltageEthicsDecisionTool() {
  const [scenario, setScenario] = useState(null);
  const [selectedResponse, setSelectedResponse] = useState(null);

  const scenarios = [
    {
      id: 1,
      title: "The Substation Safety Dilemma",
      description: 
        "You're Dr. Marcus Chen, a senior high voltage engineering specialist working for GridTech Solutions. During a routine inspection of a new 345kV substation in a densely populated suburban area, you discover a critical design flaw in the grounding system. The current configuration could potentially create ground fault conditions that might lead to electrical arcing or equipment failure. The substation is scheduled to go live in just 17 days, and your finding would require a complete redesign that could cost the company $2.3 million and delay the project by several months.",
      options: [
        {
          text: "Immediately report the finding and recommend a complete redesign of the grounding system",
          ethical_score: 10,
          feedback:
            "By prioritizing public safety over project timeline and cost, you demonstrate the highest standard of professional engineering ethics. Your decision could prevent potential electrical accidents that could result in loss of life or catastrophic infrastructure damage. The IEEE Code of Ethics explicitly requires engineers to prioritize public safety above all other considerations.",
        },
        {
          text: "Propose minor modifications that appear to address the issue while minimizing project disruption",
          ethical_score: 2,
          feedback:
            "Attempting to conceal or minimize a critical safety vulnerability is a severe ethical violation. In high voltage engineering, such a decision could potentially expose hundreds of residents to life-threatening electrical risks. Your professional responsibility demands absolute transparency and commitment to safety, regardless of financial or scheduling pressures.",
        },
        {
          text: "Conduct additional comprehensive testing to validate the exact nature and extent of the grounding system vulnerability",
          ethical_score: 8,
          feedback:
            "Your approach demonstrates professional diligence and responsible engineering practice. By seeking more detailed information, you balance the need for thorough investigation with the potential urgency of safety concerns. Additional testing can provide concrete data to support a definitive recommendation.",
        },
      ],
      resources: [
        { name: "IEEE Code of Ethics", url: "https://www.ieee.org/about/corporate/governance/code-of-ethics.html" },
        { name: "High Voltage Safety Standards", url: "https://standards.ieee.org/industry-connections/ec/high-voltage-safety/" },
      ],
    },
    {
      id: 2,
      title: "Aging Transmission Line Integrity Challenge",
      description: 
        "As the lead engineer for Regional Power Transmission, you're responsible for a 230kV transmission line that was originally installed in 1972. Recent thermal imaging and partial discharge tests reveal significant corona damage and insulation degradation. Replacing the entire line would cost approximately $18 million and require temporarily cutting power to three industrial complexes and two residential areas. However, continuing to operate the line could risk a catastrophic failure.",
      options: [
        {
          text: "Recommend immediate full line replacement, accepting the significant cost and operational disruption",
          ethical_score: 10,
          feedback:
            "By choosing comprehensive replacement, you prioritize public safety and infrastructure reliability over short-term economic considerations. Your decision demonstrates the core engineering principle of preventing potential catastrophic failures through proactive maintenance and replacement.",
        },
        {
          text: "Propose a minimal repair strategy that temporarily extends the line's operational life",
          ethical_score: 3,
          feedback:
            "Attempting to extend the life of critically degraded high voltage infrastructure is an extremely dangerous approach. The potential for a cascading failure that could result in widespread power outages, equipment damage, and potential loss of life far outweighs any short-term cost savings.",
        },
        {
          text: "Develop a phased replacement strategy that minimizes operational disruption while systematically addressing the most critical sections",
          ethical_score: 8,
          feedback:
            "Your nuanced approach balances safety, operational continuity, and economic considerations. By developing a strategic phased replacement, you demonstrate advanced engineering problem-solving that maintains infrastructure integrity while minimizing potential risks.",
        },
      ],
      resources: [
        { name: "CIGRE Technical Brochures on Transmission Line Integrity", url: "https://www.cigre.org/technical-publications" },
        { name: "High Voltage Equipment Lifecycle Management", url: "https://www.powereng.com/transmission-line-management" },
      ],
    },
    {
      id: 3,
      title: "Electromagnetic Interference (EMI) Mitigation Dilemma",
      description: 
        "You're leading a high voltage transmission project near a sensitive medical research facility. Preliminary electromagnetic interference (EMI) studies suggest that the proposed 500kV transmission line could potentially interfere with critical medical imaging equipment used in advanced neurological research. Rerouting the line would add 37 kilometers and approximately $12 million to the project cost.",
      options: [
        {
          text: "Recommend a complete line rerouting to eliminate potential EMI risks",
          ethical_score: 10,
          feedback:
            "By prioritizing the integrity of critical medical research and potential patient safety, you demonstrate exceptional professional ethics. Your decision recognizes that the potential scientific and medical implications far outweigh the additional project costs.",
        },
        {
          text: "Proceed with the original route and propose minimal EMI mitigation techniques",
          ethical_score: 2,
          feedback:
            "Risking interference with medical research equipment represents a profound ethical failure. The potential disruption to critical scientific research and potential impact on medical diagnostics cannot be justified by cost considerations.",
        },
        {
          text: "Conduct extensive EMI modeling and develop a comprehensive shielding and mitigation strategy",
          ethical_score: 8,
          feedback:
            "Your approach demonstrates sophisticated engineering problem-solving. By thoroughly investigating EMI mitigation strategies, you seek a balanced solution that addresses both technical requirements and potential research impacts.",
        },
      ],
      resources: [
        { name: "IEEE Standard for Electromagnetic Compatibility", url: "https://standards.ieee.org/standard/1613-2009.html" },
        { name: "EMI Mitigation Techniques in High Voltage Systems", url: "https://www.ieeeusa.org/tech-topics/emi-mitigation" },
      ],
    }
  ];

  const handleScenarioSelect = (selectedScenario) => {
    setScenario(selectedScenario);
    setSelectedResponse(null);
  };

  const handleResponseSelect = (response) => {
    setSelectedResponse(response);
  };

  const resetScenario = () => {
    setScenario(null);
    setSelectedResponse(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#00796b",
          fontSize: "2.8rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        High Voltage Engineering Ethics Decision Tool
      </h1>

      <div
        style={{
          background: "white",
          borderRadius: "15px",
          padding: "30px",
          width: "100%",
          maxWidth: "900px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
        }}
      >
        {!scenario ? (
          <div>
            <h2
              style={{
                textAlign: "center",
                color: "#004d40",
                fontSize: "1.8rem",
                marginBottom: "20px",
              }}
            >
              Select an Ethical Scenario
            </h2>
            <div>
              {scenarios.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleScenarioSelect(s)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    margin: "10px 0",
                    backgroundColor: "#00796b",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#004d40")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#00796b")}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2
              style={{
                color: "#004d40",
                fontSize: "1.6rem",
                marginBottom: "15px",
                borderBottom: "2px solid #00796b",
                paddingBottom: "10px",
              }}
            >
              {scenario.title}
            </h2>
            <p
              style={{
                color: "#5a6d7f",
                marginBottom: "20px",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              {scenario.description}
            </p>

            {!selectedResponse ? (
              <div>
                {scenario.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleResponseSelect(option)}
                    style={{
                      width: "100%",
                      padding: "15px",
                      margin: "10px 0",
                      backgroundColor: "#e0f7fa",
                      color: "#00796b",
                      border: "1px solid #00796b",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#b2dfdb")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#e0f7fa")}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <div
                  style={{
                    backgroundColor: "#f1f8e9",
                    padding: "20px",
                    margin: "15px 0",
                    borderRadius: "8px",
                    border: "1px solid #00796b",
                  }}
                >
                  <strong style={{ color: "#00796b", display: "block", marginBottom: "10px" }}>
                    Your Response:
                  </strong>
                  <p style={{ color: "#004d40" }}>{selectedResponse.text}</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#e3f2fd",
                    padding: "20px",
                    margin: "15px 0",
                    borderRadius: "8px",
                    border: "1px solid #1976d2",
                  }}
                >
                  <strong style={{ color: "#1976d2", display: "block", marginBottom: "10px" }}>
                    Feedback:
                  </strong>
                  <p style={{ color: "#004d40" }}>{selectedResponse.feedback}</p>
                </div>

                {scenario.resources && (
                  <div style={{ marginTop: "20px" }}>
                    <h3 style={{ color: "#004d40", fontSize: "1.2rem", marginBottom: "10px" }}>
                      Additional Resources:
                    </h3>
                    <ul>
                      {scenario.resources.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#00796b",
                              textDecoration: "none",
                              fontSize: "1rem",
                            }}
                            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={resetScenario}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HighVoltageEthicsDecisionTool;