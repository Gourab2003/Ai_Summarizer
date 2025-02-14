import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <Container>
                <div className="footer-content">
                    <h4 className="footer-logo">SummarizeAI</h4>
                    <p className="footer-text">AI-powered text summarization for faster, smarter reading.</p>
                    <div className="social-icons">
                        <a href="#" className="social-link">🔵</a>
                        <a href="#" className="social-link">🐦</a>
                        <a href="#" className="social-link">🔗</a>
                    </div>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} SummarizeAI. All rights reserved.</p>
                </div>
            </Container>
            
            {/* Styles */}
            <style>
                {`
                .footer-section {
                    background: linear-gradient(to right, #141E30, #243B55);
                    color: #ffffff;
                    text-align: center;
                    padding: 3rem 0;
                    position: relative;
                    overflow: hidden;
                }
                
                .footer-logo {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    letter-spacing: 1px;
                }
                
                .footer-text {
                    font-size: 1.1rem;
                    opacity: 0.85;
                    max-width: 600px;
                    margin: 0 auto 1.5rem;
                }
                
                .social-icons {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 1.5rem;
                }
                
                .social-link {
                    font-size: 1.5rem;
                    text-decoration: none;
                    color: rgba(255, 255, 255, 0.7);
                    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
                }
                
                .social-link:hover {
                    transform: scale(1.2);
                    color: #ffffff;
                }
                
                .footer-copy {
                    font-size: 0.9rem;
                    opacity: 0.75;
                    margin-top: 1rem;
                }
                `}
            </style>
        </footer>
    );
};

export default Footer;
