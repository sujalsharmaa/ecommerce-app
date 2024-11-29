// src/components/ProductRectangles.tsx
import React from 'react';

const products = [
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
    // { id: 20, name: 'sale', image: '/images/big-sale-offer-Google-Search.png' },
    
];

// Function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

// Function to generate a random light color
const getRandomLightColor = (): string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const avg = (r + g + b) / 3;
    const factor = 0.6;
    return avg > 170 ? `rgb(${r}, ${g}, ${b})` : `rgb(${Math.min(r + 255 * factor, 255)}, ${Math.min(g + 255 * factor, 255)}, ${Math.min(b + 255 * factor, 255)})`;
};

const ProductRectangles: React.FC = () => {
    // Shuffle products
    const shuffledProducts = shuffleArray([...products]);

    // Generate cashback boxes with single products
    const cashbackBoxes = [
        { id: 13, name: 'Special Offer 1', image: '/images/Amazon-com-Explore.png', cashback: '10% Cashback' },
        { id: 14, name: 'Special Offer 2', image: '/images/Amazon-in-mobile.png', cashback: '15% Cashback' }
    ];
    const shuffledCashbackBoxes = shuffleArray([...cashbackBoxes]);

    // Integrate cashback boxes randomly into rectangles
    const allProducts = [...shuffledProducts, ...shuffledCashbackBoxes];
    const rectangles = [];
    for (let i = 0; i < 20; i += 5) {
        rectangles.push(allProducts.slice(i, i + 5));
    }

    return (
        <div className="container mx-auto p-4 flex">
            <div className="flex-1 space-y-4">
                {rectangles.map((rectangle, index) => (
                    <div key={index} className="flex flex-wrap gap-4">
                        {rectangle.map(product => (
                            <div
                                key={product.id}
                                className="flex-1 border rounded-lg p-4"
                                style={{ backgroundColor: getRandomLightColor(), maxWidth: 'calc(20% - 1rem)' }}
                            >
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                    {product && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-center p-2">
                                            <p className="text-sm font-semibold">{product.name}</p>
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold text-center mt-2">{product.name}</h3>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex-1 bg-blue-500 ml-4 rounded-lg items-center justify-center">
                <img
                    src={"/images/big-sale-offer-Google-Search.png"}
                    alt="Cashback Offer"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default ProductRectangles;
