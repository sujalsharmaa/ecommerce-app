// src/pages/ProductPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the product ID from the URL

    // Replace this with your real product fetching logic
    const product = {
        name: `Product ${id}`,
        image: '/path-to-image.jpg',
        description: 'This is a great product.',
        price: '$99.99',
    };

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div className="flex-1 md:ml-8 mt-4 md:mt-0">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-gray-600 mt-4">{product.description}</p>
                        <p className="text-2xl font-semibold mt-4">{product.price}</p>
                        <button
                            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg"
                            onClick={() => {/* Add to cart logic */ }}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductPage;
