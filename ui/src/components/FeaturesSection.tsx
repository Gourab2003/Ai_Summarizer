import React from 'react';
import Container from 'react-bootstrap/Container';

const FeaturesSection: React.FC = () => {
  return (
    <section
      className="features-section py-5"
      style={{ background: 'linear-gradient(to right, #232526, #414345)' }}
    >
      <Container>
        <h2
          className="text-center mb-5 fw-bold animate-fade-in"
          style={{
            color: '#f8f9fa',
            fontSize: '2.5rem',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          Why Choose Our AI Summarizer?
        </h2>
        <div className="row">
          {/* Feature Cards */}
          {[
            {
              icon: 'bi bi-lightning',
              title: 'Instant Summaries',
              description:
                'Experience lightning-fast summarization, providing key insights in seconds and saving you valuable time.',
              borderColor: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
            },
            {
              icon: 'bi bi-check-circle',
              title: 'Accuracy Redefined',
              description:
                'Leverage state-of-the-art AI algorithms to get coherent and reliable summaries, preserving the core essence of the content.',
              borderColor: 'linear-gradient(45deg, #43cea2, #185a9d)',
            },
            {
              icon: 'bi bi-shield-lock',
              title: 'Your Privacy, Our Priority',
              description:
                'Rest assured knowing your documents are processed securely and with complete confidentiality, adhering to the highest data protection standards.',
              borderColor: 'linear-gradient(45deg, #ff512f, #dd2476)',
            },
          ].map((feature, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div
                className="card h-100 shadow-lg border-0 position-relative animate-fade-in"
                style={{
                  background: '#2a2d32',
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Moving Border Effect */}
                <div
                  className="moving-border"
                  style={{
                    content: '""',
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    borderRadius: '15px',
                    border: '3px solid transparent',
                    background: feature.borderColor,
                    backgroundClip: 'padding-box, border-box',
                    backgroundOrigin: 'padding-box, border-box',
                    animation: 'moveBorder 4s linear infinite',
                  }}
                ></div>

                {/* Glow Effect */}
                <div
                  className="glow-effect"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${feature.borderColor.split(',')[0]}, transparent 70%)`,
                    transform: 'translate(-50%, -50%)',
                    opacity: '0',
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                ></div>

                <div className="card-body text-center" style={{ padding: '2rem', position: 'relative', zIndex: 1 }}>
                  <i className={`${feature.icon} fs-1 mb-3`} style={{ fontSize: '3rem', color: '#f8f9fa' }}></i>
                  <h5 className="card-title fw-bold" style={{ color: '#f8f9fa', fontSize: '1.5rem' }}>
                    {feature.title}
                  </h5>
                  <p className="card-text" style={{ fontSize: '1.1rem', color: 'rgba(248, 249, 250, 0.8)' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Keyframe Animation for Moving Border */}
      <style>
        {`
          @keyframes moveBorder {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .animate-fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease-out forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .card:hover .glow-effect {
            opacity: 0.5;
          }
        `}
      </style>
    </section>
  );
};

export default FeaturesSection;