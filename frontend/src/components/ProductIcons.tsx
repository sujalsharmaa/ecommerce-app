// src/components/ProductIcons.tsx
import React from 'react';
import './ProductIcons.css'; // Import the CSS for additional styling

const productIcons = [
    { name: 'Mouse', icon: '/images/Amazon-com-Explore.png' },
    { name: 'Headphones', icon: '/images/Amazon-in-headphones-wireless.png' },
    { name: 'Mobiles', icon: '/images/Amazon-in-mobile.png' },
    { name: 'Laptop', icon: '/images/Amazon-in-laptop.png' },
    { name: 'Watch', icon: '/images/Amazon-in-watch.png' },
    { name: 'Speakers', icon: '/images/Amazon-in-speaker.png' },
    { name: 'TV', icon: '/images/Amazon-in-tv.png' },
    { name: 'Keyboard', icon: '/images/Amazon-in-keyboard.png' },
    { name: 'Monitor', icon: '/images/Amazon-in-monitor.png' },
    { name: 'SSD', icon: '/images/Amazon-in-ssd.png' },
    { name: 'Printer', icon: '/images/Amazon-in-printer.png' },
    { name: 'Charger', icon: '/images/Amazon-in-charger.png' },
];

const ProductIcons: React.FC = () => {
    return (
        <div className="product-icons-container mt-16">
            {productIcons.map((product, index) => (
                <div key={index} className="icon-wrapper">
                    <img src={product.icon} alt={product.name} className="product-icon" />
                    <span className="icon-label">{product.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ProductIcons;
