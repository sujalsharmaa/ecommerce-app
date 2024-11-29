// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <h4>Build with love in Indore by sujalsharma</h4>
                    <h4 className="font-semibold mb-2">Get to Know Us</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/seller">Become a Seller</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Help & FAQs</h4>
                    <ul>
                        <li><Link to="/help">Help</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Follow Us</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Contact Us</h4>
                    <p>123 E-commerce St.</p>
                    <p>City, State</p>
                    <p>Email: support@ecommerce.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
