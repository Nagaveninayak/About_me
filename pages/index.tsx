import { Navbar } from '@/components/Navbar';
import React from 'react';

function HomePage() {
    return (
        <div className='mx-3.5'>
            <Navbar />
            <h1 className="text-3xl font-bold underline text-red-700">
                Hello world!
            </h1>
        </div>
    )
}

export default HomePage;
