import React from 'react';
import Container from 'react-bootstrap/Container';

const HowItWorks: React.FC = () => {
    return (
        <section className="how-it-works py-5">
            <Container>
                <h2 className="text-center mb-5 fw-bold">How It Works</h2>
                <div className="row justify-content-center">
                    {[ 
                        {
                            step: '1',
                            title: 'Upload & Submit',
                            description: 'Simply upload your document or paste the text directly into our interface.',
                            icon: '📄', // Add an emoji or icon for visual appeal
                        },
                        {
                            step: '2',
                            title: 'AI Analyzes & Extracts',
                            description: 'Our AI automatically analyzes the content, extracting key insights and core arguments.',
                            icon: '🤖', // Add an emoji or icon for visual appeal
                        },
                        {
                            step: '3',
                            title: 'Instant Summary',
                            description: 'Receive an instant, concise, and well-structured summary within seconds.',
                            icon: '⚡', // Add an emoji or icon for visual appeal
                        },
                    ].map((item, index) => (
                        <div className="col-md-4 text-center mb-4" key={index}>
                            <div className="glass-card">
                                <div className="step-indicator">
                                    <span className="step-icon">{item.icon}</span>
                                    <span className="step-number">{item.step}</span>
                                </div>
                                <h5 className="fw-bold mt-3">{item.title}</h5>
                                <p className="step-description mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Styles */}
            <style>
                {`
                .how-it-works {
                    background: linear-gradient(to right, #232526, #414345);
                    color: white;
                    position: relative;
                    overflow: hidden;
                }
                
                h2 {
                    font-size: 2.75rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
                    margin-bottom: 3rem !important;
                }
                
                .glass-card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 2.5rem 1.5rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .glass-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
                }
                
                .step-indicator {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: linear-gradient(to right, #6a11cb, #2575fc);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    box-shadow: 0 0 20px rgba(106, 17, 203, 0.6);
                    transition: transform 0.3s ease-in-out;
                }
                
                .step-icon {
                    font-size: 2.5rem;
                    opacity: 0.8;
                    transition: opacity 0.3s ease-in-out;
                }
                
                .step-number {
                    position: absolute;
                    bottom: -10px;
                    right: -10px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: white;
                    backdrop-filter: blur(5px);
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
                }
                
                .step-indicator:hover {
                    transform: scale(1.1);
                }
                
                .step-indicator:hover .step-icon {
                    opacity: 1;
                }
                
                h5 {
                    font-size: 1.75rem;
                    margin-top: 1rem;
                    color: white;
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
                }
                
                .step-description {
                    font-size: 1rem;
                    font-weight: 300;
                    color: rgba(255, 255, 255, 0.9);
                    opacity: 0.8;
                    transition: opacity 0.3s ease-in-out;
                }
                
                .glass-card:hover .step-description {
                    opacity: 1;
                }
                `}
            </style>
        </section>
    );
};

export default HowItWorks;