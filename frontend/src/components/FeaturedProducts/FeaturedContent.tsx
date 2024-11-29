// src/components/FeaturedContent.tsx
import React, { useEffect, useRef } from 'react';
import './FeaturedContent.tsx.css'; // Import the CSS for styling

const featuredProducts = [
    { id: 1, name: 'Wireless Mouse', price: '$29.99', image: '/images/Amazon-in-headphones-wireless.png' },
    { id: 2, name: 'Gaming Keyboard', price: '$59.99', image: '/images/Amazon-in-keyboard.png' },
    { id: 3, name: '4K Monitor', price: '$399.99', image: '/images/Amazon-in-monitor.png' },
    { id: 3, name: '4K Monitor', price: '$399.99', image: '/images/Amazon-in-ac.png' }
    // Add more products as needed
];

const FeaturedContent: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div className="featured-container flex">
            {/* Video Section */}
            <div className="featured-video flex justify-center items-center">
                <video ref={videoRef} className="video mx-10" autoPlay muted loop>
                    <source src="images/my-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Products on Sale */}
            <div className="products-on-sale flex">
                {featuredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedContent;
