import React from 'react';
import '../index.css'
import '../App.css'

const Header: React.FC = () => {
    return (
        <header className="flex justify-between fixed top-0 left-0 w-full h-10 shadow">
            <h1 className="text-lg leading-10 ml-4">art innovation</h1>
        </header>
        )
}

export default Header;