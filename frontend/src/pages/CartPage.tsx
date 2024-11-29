// src/pages/CartPage.tsx
import React from 'react';
import Layout from '../components/Layout';

const CartPage: React.FC = () => {
    // Replace this with your real cart fetching logic
    const cartItems = [
        { id: 1, name: 'Product 1', price: '$99.99', quantity: 1, image: '/path-to-image.jpg' },
        { id: 2, name: 'Product 2', price: '$149.99', quantity: 2, image: '/path-to-image.jpg' },
    ];

    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                <div className="ml-4 flex-1">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-500">Price: {item.price}</p>
                                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <button
                                    className="ml-4 text-red-600"
                                    onClick={() => {/* Remove from cart logic */ }}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="md:ml-8 mt-4 md:mt-0">
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h2 className="text-xl font-semibold">Order Summary</h2>
                            <p className="text-gray-600 mt-2">Total: ${totalPrice.toFixed(2)}</p>
                            <button
                                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg w-full"
                                onClick={() => {/* Proceed to checkout logic */ }}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
