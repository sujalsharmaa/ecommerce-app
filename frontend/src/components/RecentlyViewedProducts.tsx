// src/components/RecentlyViewedProducts.tsx
import React, { useState } from 'react';

const recentlyViewedProducts = [
    { id: 1, name: 'Mouse', image: '/images/Amazon-com-Explore.png' },
    { id: 2, name: 'Headphones', image: '/images/Amazon-in-headphones-wireless.png' },
    { id: 3, name: 'Mobiles', image: '/images/Amazon-in-mobile.png' },
    { id: 4, name: 'Laptop', image: '/images/Amazon-in-laptop.png' },
    { id: 5, name: 'Watch', image: '/images/Amazon-in-watch.png' },
    { id: 6, name: 'Speakers', image: '/images/Amazon-in-speaker.png' },
    { id: 7, name: 'TV', image: '/images/Amazon-in-tv.png' },
    { id: 8, name: 'Keyboard', image: '/images/Amazon-in-keyboard.png' },
    { id: 9, name: 'Monitor', image: '/images/Amazon-in-monitor.png' },
    { id: 10, name: 'SSD', image: '/images/Amazon-in-ssd.png' },
    { id: 11, name: 'Printer', image: '/images/Amazon-in-printer.png' },
    { id: 12, name: 'Charger', image: '/images/Amazon-in-charger.png' },
    { id: 13, name: 'AC 1', image: '/images/Amazon-in-ac (1).png' },
    { id: 14, name: 'AC 2', image: '/images/Amazon-in-ac.png' },
    { id: 15, name: 'Books 1', image: '/images/Amazon-in-books (1).png' },
    { id: 16, name: 'Books 2', image: '/images/Amazon-in-books.png' },
    { id: 17, name: 'Camera 1', image: '/images/Amazon-in-camera-dslr (1).png' },
    { id: 18, name: 'Camera 2', image: '/images/Amazon-in-camera-dslr.png' },
    { id: 19, name: 'Washing Machine 1', image: '/images/Amazon-in-washing-machine (1).png' },
];

const RecentlyViewedProducts: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleProducts = 8;

    const handlePrevClick = () => {
        setStartIndex((prevIndex) =>
            prevIndex - visibleProducts < 0 ? 0 : prevIndex - visibleProducts
        );
    };

    const handleNextClick = () => {
        setStartIndex((prevIndex) =>
            prevIndex + visibleProducts >= recentlyViewedProducts.length
                ? prevIndex
                : prevIndex + visibleProducts
        );
    };

    return (
        <div className="relative container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>
            <div className="relative">
                <button
                    onClick={handlePrevClick}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md"
                    disabled={startIndex === 0}
                >
                    &#8249;
                </button>
                <div className="flex overflow-hidden space-x-4 py-2">
                    {recentlyViewedProducts
                        .slice(startIndex, startIndex + visibleProducts)
                        .map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0 w-48 h-48 border-4 border-transparent rounded-2xl p-2 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#FF0050]"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(255,0,0,0.1) 0%, rgba(0,255,0,0.1) 50%, rgba(0,0,255,0.1) 100%)',
                                    borderImage: 'linear-gradient(to right, rgba(255,0,0,0.8), rgba(0,255,0,0.8), rgba(0,0,255,0.8))',
                                    borderImageSlice: 1,
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={`Recently viewed product ${product.id}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                </div>
                <button
                    onClick={handleNextClick}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md"
                    disabled={
                        startIndex + visibleProducts >=
                        recentlyViewedProducts.length
                    }
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default RecentlyViewedProducts;
