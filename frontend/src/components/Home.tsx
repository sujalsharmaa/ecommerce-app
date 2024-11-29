// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import ProductIcons from '../components/ProductIcons';
import Carousel from '../components/Carousel';
import ProductRecommendations from '../components/ProductRecommendations';
import Footer from '../components/Footer';
import BrandMarquee from './BrandMarquee';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <ProductIcons />
            <Carousel />
            <ProductRecommendations />
    
            <Footer />
        </>
    );
};

export default Home;
