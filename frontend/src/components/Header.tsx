import React from 'react';
import { Button } from '../components/ui/button';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <div>
                <Button variant="outline" className="mr-2">Profile</Button>
                <Button variant="outline">Logout</Button>
            </div>
        </header>
    );
};

export default Header;