import React, { useState } from 'react';

function EthicsDecisionTool() {
  const [scenario, setScenario] = useState(null);
  const [selectedResponse, setSelectedResponse] = useState(null);

  const scenarios = [
    {
      id: 1,
      title: "Safety Critical Design Dilemma",
      description:
        "You're designing a high-voltage electrical system for critical infrastructure. During testing, you uncover a potential safety vulnerability that would require significant redesign.",
      options: [
        {
          text: "Immediately report and recommend a complete redesign",
          ethical_score: 10,
          feedback:
            "Prioritizing safety demonstrates the highest professional integrity and protects potential users from critical risks.",
        },
        {
          text: "Minimize the issue in your report to avoid project delays",
          ethical_score: 2,
          feedback:
            "Concealing safety concerns is a severe ethical violation that could endanger lives and compromise professional standards.",
        },
        {
          text: "Conduct additional independent testing before making a decision",
          ethical_score: 8,
          feedback:
            "Seeking more information shows professional diligence and responsible engineering practice.",
        },
      ],
      resources: [
        { name: "NSPE Code of Ethics: Safety", url: "https://www.nspe.org/resources/ethics/code-ethics" },
        { name: "Coursera: Engineering Ethics", url: "https://www.coursera.org/learn/ethics-technology-engineering" },
      ],
    },
    {
      id: 2,
      title: "Environmental Impact Challenge",
      description:
        "Your team is developing a new power transmission technology that could be more efficient but requires rare earth mineral extraction with potential environmental consequences.",
      options: [
        {
          text: "Halt the project and research sustainable alternatives",
          ethical_score: 9,
          feedback:
            "Prioritizing environmental sustainability demonstrates forward-thinking and responsible engineering ethics.",
        },
        {
          text: "Proceed with minimal environmental mitigation efforts",
          ethical_score: 3,
          feedback:
            "Neglecting environmental concerns represents a significant ethical failure in modern engineering practice.",
        },
        {
          text: "Develop a comprehensive environmental restoration plan",
          ethical_score: 8,
          feedback:
            "Proactively addressing potential environmental impact shows a holistic and responsible engineering approach.",
        },
      ],
      resources: [
        { name: "FutureLearn: Responsible Innovation", url: "https://www.futurelearn.com/courses/responsible-innovation" },
        { name: "NSPE Environmental Ethics Resources", url: "https://www.nspe.org/resources/issues-and-advocacy/environmental-ethics" },
      ],
    },
    {
      id: 3,
      title: "Whistleblower Dilemma",
      description:
        "You discover your company is cutting corners on safety regulations in a way that could potentially harm workers or end-users, but speaking up might jeopardize your job.",
      options: [
        {
          text: "Report the issues through official internal channels",
          ethical_score: 9,
          feedback:
            "Following proper reporting procedures shows commitment to professional responsibility and workplace safety.",
        },
        {
          text: "Remain silent to protect your career",
          ethical_score: 2,
          feedback:
            "Prioritizing personal job security over potential harm to others is a serious ethical violation of engineering principles.",
        },
        {
          text: "Anonymously report to regulatory bodies",
          ethical_score: 7,
          feedback:
            "While anonymous reporting can be effective, it may not provide the most direct path to resolving the underlying issues.",
        },
      ],
      resources: [
        { name: "NSPE Code of Ethics: Whistleblowing", url: "https://www.nspe.org/resources/ethics/code-ethics" },
        { name: "Ethics and Reporting Resources", url: "https://www.whistleblowers.org/resources/" },
      ],
    },
    {
      id: 4,
      title: "AI Bias in Development",
      description:
        "Your team is developing an AI system for critical infrastructure. You recognize potential bias in the training data that could lead to discriminatory outcomes.",
      options: [
        {
          text: "Halt development and redesign the training approach",
          ethical_score: 10,
          feedback:
            "Proactively addressing potential ethical issues in AI development demonstrates responsible and principled engineering.",
        },
        {
          text: "Proceed with the current approach and hope for the best",
          ethical_score: 1,
          feedback:
            "Ignoring potential systemic biases is a severe ethical failure that could lead to harmful technological impacts.",
        },
        {
          text: "Implement additional bias testing and mitigation strategies",
          ethical_score: 8,
          feedback:
            "Seeking to understand and mitigate potential ethical challenges shows professional diligence and responsible innovation.",
        },
      ],
      resources: [
        { name: "Coursera: Ethics in AI", url: "https://www.coursera.org/learn/ai-ethics" },
        { name: "Stanford Encyclopedia of Philosophy: Ethics of AI", url: "https://plato.stanford.edu/entries/ethics-ai/" },
      ],
    },
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
        Ethics Decision Tool
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

export default EthicsDecisionTool;
