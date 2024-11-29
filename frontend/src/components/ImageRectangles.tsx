import React from 'react';

const ImageRectangles: React.FC = () => {
    const products = [
        { id: 1, image: '/images/Amazon-com-Explore.png' },
        { id: 2, image: '/images/Amazon-in-headphones-wireless.png' },
        { id: 3, image: '/images/Amazon-in-mobile.png' },
        { id: 4, image: '/images/Amazon-in-laptop.png' },
        { id: 5, image: '/images/Amazon-in-watch.png' },
        { id: 6, image: '/images/Amazon-in-speaker.png' },
        { id: 7, image: '/images/Amazon-in-tv.png' },
        { id: 8, image: '/images/Amazon-in-keyboard.png' },
        { id: 9, image: '/images/Amazon-in-monitor.png' },
        { id: 10, image: '/images/Amazon-in-ssd.png' },
        { id: 11, image: '/images/Amazon-in-printer.png' },
        { id: 12, image: '/images/Amazon-in-charger.png' },
        { id: 13, image: '/images/Amazon-in-ac (1).png' },
        { id: 14, image: '/images/Amazon-in-ac.png' },
        { id: 15, image: '/images/Amazon-in-books (1).png' },
        { id: 16, image: '/images/Amazon-in-books.png' },
    ];

    // Define an empty array to store the image divs
    const imageDivs = [];

    for (let i = 0; i < products.length; i += 4) {
        const divContent = products.slice(i, i + 4).map((product) => (
            <img key={product.id} src={product.image} />
        ));

        imageDivs.push(
            <div key={i} className="flex gap-2">
                {divContent}
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 bg-red-500 flex flex-wrap gap-3">
            {imageDivs}
        </div>
    );
};

export default ImageRectangles;