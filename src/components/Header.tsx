import React from 'react';
import '../index.css'
import '../App.css'
import { Button } from './ui/button';

interface HeaderProps {
    state: string
    isOriginal: boolean
    setIsOriginal: (isOriginal: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ state,isOriginal,setIsOriginal }) => {
    return (
        <header className="flex justify-between fixed top-0 left-0 w-full h-10 px-3 shadow">
            <h1 className="text-lg leading-10 ml-4">art innovation</h1>
            {state === 'description'
            ?            <Button
            onClick={() => {
                setIsOriginal(!isOriginal)
            }}
            className='my-auto bg-white py-0 px-1 bg-opacity-0'
            variant="link"
            >
            {isOriginal
            ? 'original-img'
            : 'default-img'
            }</Button>
            : null
            }
        </header>
        )
}

export default Header;