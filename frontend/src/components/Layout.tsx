// src/components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow">
                <nav className="container mx-auto p-4">
                    {/* Navigation goes here */}
                </nav>
            </header>
            <main className="flex-1 container mx-auto p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center">
                    © 2024 My E-Commerce App
                </div>
            </footer>
        </div>
    );
};

export default Layout;
