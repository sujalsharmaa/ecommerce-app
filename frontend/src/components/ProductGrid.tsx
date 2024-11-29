
import React, { useMemo } from 'react';

// Utility function to shuffle an array
const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const ProductGrid: React.FC = () => {
    const products = [
        { name: 'Mouse', icon: '/images/Amazon-com-Explore.png', price: '$15' },
        { name: 'Headphones', icon: '/images/Amazon-in-headphones-wireless.png', price: '$50' },
        { name: 'Mobiles', icon: '/images/Amazon-in-mobile.png', price: '$300' },
        { name: 'Laptop', icon: '/images/Amazon-in-laptop.png', price: '$800' },
        { name: 'Watch', icon: '/images/Amazon-in-watch.png', price: '$100' },
        { name: 'Speakers', icon: '/images/Amazon-in-speaker.png', price: '$70' },
        { name: 'TV', icon: '/images/Amazon-in-tv.png', price: '$500' },
        { name: 'Keyboard', icon: '/images/Amazon-in-keyboard.png', price: '$30' },
        { name: 'Monitor', icon: '/images/Amazon-in-monitor.png', price: '$200' },
        { name: 'SSD', icon: '/images/Amazon-in-ssd.png', price: '$150' },
        { name: 'Printer', icon: '/images/Amazon-in-printer.png', price: '$100' },
        { name: 'Charger', icon: '/images/Amazon-in-charger.png', price: '$25' },
    ];

    // Shuffle the indices of the 4 child divs
    const shuffledIndices = useMemo(() => shuffleArray([0, 1, 2, 3]), []);

    return (
        <div className="flex space-x-4 bg-gray-200">
            {shuffledIndices.map((index) => (
                <div key={index} className="flex-1">
                    {index < 3 ? (
                        <div className="grid grid-cols-2 p-2 m-2">
                            {products.slice(index * 4, index * 4 + 4).map((product) => (
                                <div
                                    key={product.name}
                                    className="border border-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
                                >
                                    <img
                                        src={product.icon}
                                        alt={product.name}
                                        className="w-full h-32 object-cover rounded-t-xl"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                        <p className="text-sm text-gray-600">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="border border-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out p-2">
                            <img
                                src={products[9].icon}
                                alt={products[9].name}
                                className="w-full h-fit object-cover rounded-t-xl"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{products[9].name}</h3>
                                <p className="text-sm text-gray-600">{products[9].price}</p>
                                <p className="text-sm text-green-500">Cashback Offer!</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
