// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import ProductIcons from '../components/ProductIcons';
import Carousel from '../components/Carousel';
import ProductRecommendations from '../components/ProductRecommendations';
import RecentlyViewedProducts from '../components/RecentlyViewedProducts';
import ProductRectangles from '../components/ProductRectangles';
import Footer from '../components/Footer';
import ProductGrid from '@/components/ProductGrid';

import BrandMarquee from '../components/BrandMarquee';
import FeaturedContent from '../components/FeaturedProducts/FeaturedContent';
import { shuffleArray } from '../utils/shuffleArray';

const Home: React.FC = () => {
    // List of components to shuffle
    const components = [
        <ProductRecommendations key="ProductRecommendations" />,
        <ProductRectangles key="ProductRectangles" />,
        <RecentlyViewedProducts key="RecentlyViewedProducts" />,
        <BrandMarquee key="BrandMarquee" />,
        <FeaturedContent key="FeaturedContent" />,
        <ProductGrid key="ProductGrid"/>
    ];

    // Shuffle components
    const shuffledComponents = shuffleArray(components);

    return (
        <>
            <Navbar />
            <ProductIcons />
            <Carousel />
            {shuffledComponents}
            {shuffledComponents}
            <Footer />
        </>
    );
};

export default Home;
