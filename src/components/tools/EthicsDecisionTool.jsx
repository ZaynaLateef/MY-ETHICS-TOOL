import React, { useState } from 'react';

function EthicsDecisionTool() {
  const [scenario, setScenario] = useState(null);
  const [selectedResponse, setSelectedResponse] = useState(null);

  const scenarios = [
    {
      id: 1,
      title: "Safety Critical Design Dilemma",
      description: "You're designing a high-voltage electrical system for critical infrastructure. During testing, you uncover a potential safety vulnerability that would require significant redesign.",
      options: [
        {
          text: "Immediately report and recommend a complete redesign",
          ethical_score: 10,
          feedback: "Prioritizing safety demonstrates the highest professional integrity and protects potential users from critical risks."
        },
        {
          text: "Minimize the issue in your report to avoid project delays",
          ethical_score: 2,
          feedback: "Concealing safety concerns is a severe ethical violation that could endanger lives and compromise professional standards."
        },
        {
          text: "Conduct additional independent testing before making a decision",
          ethical_score: 8,
          feedback: "Seeking more information shows professional diligence and responsible engineering practice."
        }
      ]
    },
    {
      id: 2,
      title: "Environmental Impact Challenge",
      description: "Your team is developing a new power transmission technology that could be more efficient but requires rare earth mineral extraction with potential environmental consequences.",
      options: [
        {
          text: "Halt the project and research sustainable alternatives",
          ethical_score: 9,
          feedback: "Prioritizing environmental sustainability demonstrates forward-thinking and responsible engineering ethics."
        },
        {
          text: "Proceed with minimal environmental mitigation efforts",
          ethical_score: 3,
          feedback: "Neglecting environmental concerns represents a significant ethical failure in modern engineering practice."
        },
        {
          text: "Develop a comprehensive environmental restoration plan",
          ethical_score: 8,
          feedback: "Proactively addressing potential environmental impact shows a holistic and responsible engineering approach."
        }
      ]
    },
    {
      id: 3,
      title: "Conflict of Interest Scenario",
      description: "You're evaluating bids for a major electrical infrastructure project. A vendor offering equipment is owned by a close relative who you know can deliver high-quality work.",
      options: [
        {
          text: "Recuse yourself completely from the decision-making process",
          ethical_score: 10,
          feedback: "Maintaining complete transparency and avoiding potential bias is the most ethical approach to professional decision-making."
        },
        {
          text: "Advocate for the vendor without disclosing the relationship",
          ethical_score: 1,
          feedback: "Hiding a personal connection is a severe breach of professional ethics that could lead to serious disciplinary action."
        },
        {
          text: "Fully disclose the relationship and allow a neutral review",
          ethical_score: 9,
          feedback: "Open communication and allowing independent evaluation demonstrates professional integrity."
        }
      ]
    },
    {
      id: 4,
      title: "Whistleblower Dilemma",
      description: "You discover your company is cutting corners on safety regulations in a way that could potentially harm workers or end-users, but speaking up might jeopardize your job.",
      options: [
        {
          text: "Report the issues through official internal channels",
          ethical_score: 9,
          feedback: "Following proper reporting procedures shows commitment to professional responsibility and workplace safety."
        },
        {
          text: "Remain silent to protect your career",
          ethical_score: 2,
          feedback: "Prioritizing personal job security over potential harm to others is a serious ethical violation of engineering principles."
        },
        {
          text: "Anonymously report to regulatory bodies",
          ethical_score: 7,
          feedback: "While anonymous reporting can be effective, it may not provide the most direct path to resolving the underlying issues."
        }
      ]
    },
    {
      id: 5,
      title: "AI and Ethical Technology Development",
      description: "Your team is developing an AI system for critical infrastructure. You recognize potential bias in the training data that could lead to discriminatory outcomes.",
      options: [
        {
          text: "Halt development and redesign the training approach",
          ethical_score: 10,
          feedback: "Proactively addressing potential ethical issues in AI development demonstrates responsible and principled engineering."
        },
        {
          text: "Proceed with the current approach and hope for the best",
          ethical_score: 1,
          feedback: "Ignoring potential systemic biases is a severe ethical failure that could lead to harmful technological impacts."
        },
        {
          text: "Implement additional bias testing and mitigation strategies",
          ethical_score: 8,
          feedback: "Seeking to understand and mitigate potential ethical challenges shows professional diligence and responsible innovation."
        }
      ]
    }
  ];

  const resourceLinks = [
    {
      name: "IEEE Code of Ethics",
      url: "https://www.ieee.org/about/corporate/governance/p7-8.html",
      color: "#1E90FF"
    },
    {
      name: "NSPE Code of Ethics",
      url: "https://www.nspe.org/resources/ethics/code-ethics",
      color: "#32CD32"
    },
    {
      name: "Engineering Ethics Resources",
      url: "https://www.engineeringethicist.com/resources",
      color: "#FF4500"
    },
    {
      name: "Responsible Innovation Guide",
      url: "https://www.responsibleinnovation.org",
      color: "#9400D3"
    },
    {
      name: "Professional Integrity Workshop",
      url: "https://www.ethicalengineering.org/workshops",
      color: "#FF1493"
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
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#FFFFFF', 
        fontSize: '2.5em',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        marginBottom: '30px'
      }}>
        Electrical Engineering Ethics Navigator
      </h1>

      <div style={{ 
        background: 'rgba(255,255,255,0.9)', 
        borderRadius: '15px', 
        padding: '30px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        {!scenario ? (
          <div>
            <h2 style={{ 
              textAlign: 'center', 
              color: '#333',
              marginBottom: '20px'
            }}>
              Choose an Ethical Scenario
            </h2>
            {scenarios.map((s) => (
              <button 
                key={s.id}
                onClick={() => handleScenarioSelect(s)}
                style={{
                  width: '100%',
                  padding: '15px',
                  margin: '10px 0',
                  backgroundColor: `hsl(${s.id * 60}, 70%, 60%)`,
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1em',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                {s.title}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <h2 style={{ 
              color: '#2c3e50', 
              marginBottom: '20px',
              borderBottom: '3px solid #3498db',
              paddingBottom: '10px'
            }}>
              {scenario.title}
            </h2>
            <p style={{ 
              color: '#34495e', 
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              {scenario.description}
            </p>

            {!selectedResponse ? (
              <div>
                {scenario.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleResponseSelect(option)}
                    style={{
                      width: '100%',
                      padding: '15px',
                      margin: '10px 0',
                      backgroundColor: `hsl(${index * 120}, 70%, 60%)`,
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '1em',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <div style={{ 
                  backgroundColor: '#e8f4f8', 
                  padding: '20px', 
                  margin: '10px 0',
                  borderRadius: '10px',
                  border: '2px solid #3498db'
                }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '10px' }}>
                    Your Response:
                  </strong>
                  <p style={{ color: '#34495e' }}>{selectedResponse.text}</p>
                </div>

                <div style={{ 
                  backgroundColor: '#e8f8f5', 
                  padding: '20px', 
                  margin: '10px 0',
                  borderRadius: '10px',
                  border: '2px solid #2ecc71'
                }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '10px' }}>
                    Ethical Feedback:
                  </strong>
                  <p style={{ color: '#34495e' }}>{selectedResponse.feedback}</p>
                </div>

                <div style={{ 
                  backgroundColor: '#f9e79f', 
                  padding: '20px', 
                  margin: '10px 0',
                  borderRadius: '10px',
                  border: '2px solid #f39c12'
                }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '10px' }}>
                    Additional Resources:
                  </strong>
                  {resourceLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        color: link.color,
                        textDecoration: 'none',
                        margin: '10px 0',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#000'}
                      onMouseOut={(e) => e.target.style.color = link.color}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginTop: '20px'
                }}>
                  <button 
                    onClick={resetScenario}
                    style={{
                      padding: '15px',
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '1em',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
                  >
                    Reset Scenarios
                  </button>
                  <a 
                    href="https://www.ieee.org/about/ethics.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      padding: '15px',
                      backgroundColor: '#2ecc71',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '10px',
                      fontSize: '1em',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#27ae60'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#2ecc71'}
                  >
                    IEEE Ethics Resources
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default EthicsDecisionTool;