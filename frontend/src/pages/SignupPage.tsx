// src/pages/SignupPage.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';

const SignupPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Handle signup logic
    };

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Signup</h1>
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 mt-2 border rounded-lg"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 mt-2 border rounded-lg"
                            placeholder="Create a password"
                        />
                    </div>
                    <button
                        onClick={handleSignup}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
                        Signup
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default SignupPage;
