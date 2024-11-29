// src/components/RandomProductTiles.tsx
import React from 'react';

// List of images to use
const images = [
    '/images/Amazon-com-Explore.png',
    '/images/Amazon-in-headphones-wireless.png',
    '/images/Amazon-in-mobile.png',
    '/images/Amazon-in-laptop.png',
    '/images/Amazon-in-watch.png',
    '/images/Amazon-in-speaker.png',
    '/images/Amazon-in-tv.png',
    '/images/Amazon-in-keyboard.png',
    '/images/Amazon-in-monitor.png',
    '/images/Amazon-in-ssd.png',
    '/images/Amazon-in-printer.png',
    '/images/Amazon-in-charger.png',
];

// Function to generate random dimensions
const getRandomSize = () => {
    const width = Math.floor(Math.random() * (300 - 150 + 1)) + 150; // Random width between 150 and 300
    const height = Math.floor(Math.random() * (300 - 150 + 1)) + 150; // Random height between 150 and 300
    return { width, height };
};

const RandomProductTiles: React.FC = () => {
    // Generate a random number of tiles between 6 and 12
    const numberOfTiles = Math.floor(Math.random() * (12 - 6 + 1)) + 6;
    const tiles = Array.from({ length: numberOfTiles }, (_, index) => {
        const { width, height } = getRandomSize();
        return {
            id: index,
            image: images[index % images.length],
            width,
            height,
        };
    });

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tiles.map((tile) => (
                    <div
                        key={tile.id}
                        className="relative border rounded-lg overflow-hidden"
                        style={{ width: tile.width, height: tile.height }}
                    >
                        <img src={tile.image} alt={`Tile ${tile.id}`} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 text-center">
                            <h3 className="text-lg font-semibold">Product {tile.id + 1}</h3>
                            <p className="text-sm">$Price</p>
                            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomProductTiles;
