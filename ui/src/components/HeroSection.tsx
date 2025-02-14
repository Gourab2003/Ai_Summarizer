import { Container, Button } from "react-bootstrap";
import { LightningCharge } from "react-bootstrap-icons";

function HeroSection() {
  return (
    <div className="hero-section text-center text-light py-5 position-relative">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      <Container className="py-5">
        {/* Headline */}
        <h1 className="display-3 fw-bolder mb-4 text-shadow animate-fade-in">
          Unlock Instant Insights: AI-Powered Text Summarization
        </h1>

        {/* Subtext */}
        <p className="lead fs-4 text-white-50 mb-5 animate-fade-in animate-delay-1">
          Cut through the noise. Get concise, accurate summaries of articles, papers, and documents in seconds with our AI-driven summarizer.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="d-flex gap-4 justify-content-center animate-fade-in animate-delay-2">
          <Button
            href="/summarize"
            variant="primary"
            size="lg"
            className="cta-btn d-flex align-items-center"
          >
            <LightningCharge className="me-2" size={24} />
            Summarize Now
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="cta-btn-outline"
          >
            Learn More
          </Button>
        </div>

        {/* Image / Illustration */}
        <div className="mt-6 animate-fade-in animate-delay-3">
    <img
        src="https://cdn.analyticsvidhya.com/wp-content/uploads/2019/06/Text-Summarization.jpg"
        alt="AI Summarization Example"
        className="w-100 img-fluid shadow-lg"
        style={{ height: "500px", borderRadius: "12px" }}
    />
</div>

      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .hero-section {
            background: linear-gradient(to right, #232526, #414345); /* Dark Grayish Gradient */
            padding-top: 8rem;
            padding-bottom: 8rem;
            overflow: hidden;
            position: relative;
          }

          .hero-overlay {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://wallpapercave.com/wp/wp7599708.jpg') center/cover no-repeat;
            opacity: 0.15;
            z-index: -1;
          }

          .text-shadow {
            text-shadow: 3px 3px 8px rgba(0,0,0,0.8);
          }

          .cta-btn {
            background-color: rgba(0, 30, 61, 0.48);
            border-color: rgb(61, 61, 255);
            padding: 16px 32px;
            font-size: 1.2rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease-in-out;
          }

          .cta-btn:hover {
            background-color: #0056b3;
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          }

          .cta-btn-outline {
            padding: 16px 32px;
            font-size: 1.2rem;
            border-radius: 12px;
            border: 2px solid rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease-in-out;
          }

          .cta-btn-outline:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
          }

          /* Animations */
          .animate-fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-delay-1 {
            animation-delay: 0.3s;
          }

          .animate-delay-2 {
            animation-delay: 0.6s;
          }

          .animate-delay-3 {
            animation-delay: 0.9s;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Spacing Adjustments */
          .mb-4 {
            margin-bottom: 2rem !important;
          }

          .mb-5 {
            margin-bottom: 3rem !important;
          }

          .mt-6 {
            margin-top: 4rem !important;
          }

          .py-5 {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        `}
      </style>
    </div>
  );
}

export default HeroSection;