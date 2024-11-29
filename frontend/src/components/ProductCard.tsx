// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
    name: string;
    image: string;
    price: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, onAddToCart }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-500 mt-2">{price}</p>
                <button
                    onClick={onAddToCart}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
