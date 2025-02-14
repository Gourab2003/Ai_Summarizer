import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import FinalCTA from "../components/FinalCTA";

// import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <>
            
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <FinalCTA />
         
        </>
    );
}

export default Home;