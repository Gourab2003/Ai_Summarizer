import React from 'react';
import Container from 'react-bootstrap/Container';

const CallToAction: React.FC = () => {
    return (
        <section className="call-to-action py-5 text-center">
            <Container>
                <h2 className="fw-bold mb-4">Ready to Summarize Smarter?</h2>
                <p className="lead mb-4">Experience the power of AI-driven text summarization. Get started today!</p>
                <button className="cta-button">Try Now</button>
            </Container>

            {/* Styles */}
            <style>
                {`
                .call-to-action {
                    background: linear-gradient(to right, #232526, #414345);
                    color: white;
                    padding: 4rem 2rem;
                    text-align: center;
                }
                
                .cta-button {
                    background: linear-gradient(to right, #6a11cb, #2575fc);
                    border: none;
                    padding: 1rem 2rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: white;
                    border-radius: 50px;
                    box-shadow: 0 0 15px rgba(106, 17, 203, 0.6);
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    margin-top: 1.5rem;
                }
                
                .cta-button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 25px rgba(106, 17, 203, 0.8);
                }

                .lead {
                    font-size: 1.25rem;
                    opacity: 0.85;
                }
                
                h2 {
                    font-size: 2.5rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
                }
                `}
            </style>
        </section>
    );
};

export default CallToAction;
