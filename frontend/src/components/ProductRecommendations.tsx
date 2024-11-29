// src/components/ProductRecommendations.tsx
import React, { useRef } from 'react';
import './ProductRecommendations.css'; // Import the CSS for additional styling

const recommendedProducts = [
    { id: 1, name: 'Mouse', price: '$99.99', image: '/images/Amazon-com-Explore.png' },
    { id: 2, name: 'Headphones', price: '$149.99', image: '/images/Amazon-in-headphones-wireless.png' },
    { id: 3, name: 'Mobiles', price: '$299.99', image: '/images/Amazon-in-mobile.png' },
    { id: 4, name: 'Laptop', price: '$999.99', image: '/images/Amazon-in-laptop.png' },
    { id: 5, name: 'Watch', price: '$199.99', image: '/images/Amazon-in-watch.png' },
    { id: 6, name: 'Speakers', price: '$129.99', image: '/images/Amazon-in-speaker.png' },
    { id: 7, name: 'TV', price: '$499.99', image: '/images/Amazon-in-tv.png' },
    { id: 8, name: 'Keyboard', price: '$59.99', image: '/images/Amazon-in-keyboard.png' },
    { id: 9, name: 'Monitor', price: '$229.99', image: '/images/Amazon-in-monitor.png' },
    { id: 10, name: 'SSD', price: '$119.99', image: '/images/Amazon-in-ssd.png' },
    { id: 11, name: 'Printer', price: '$89.99', image: '/images/Amazon-in-printer.png' },
    { id: 12, name: 'Charger', price: '$19.99', image: '/images/Amazon-in-charger.png' },
];

const ProductRecommendations: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (scrollOffset: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
            <div className="flex items-center">
                {/* Previous Button */}
                <button
                    onClick={() => scroll(-300)}
                    className="scroll-button left-0"
                >
                    ❮
                </button>
                <div
                    ref={scrollContainerRef}
                    className="scroll-container"
                >
                    {recommendedProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-700">{product.price}</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                    ))}
                </div>
                {/* Next Button */}
                <button
                    onClick={() => scroll(300)}
                    className="scroll-button right-0"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default ProductRecommendations;
