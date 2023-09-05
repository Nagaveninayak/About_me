import { Navbar } from '@/components/Navbar';
import { WelcomePage } from '@/components/WelcomePage';
import React from 'react';

function HomePage() {
    return (
        <div className='mx-3.5'>
            <Navbar />
            <WelcomePage />
            {/* <h1 className="text-3xl font-bold underline text-red-700">
                Hello world!
            </h1> */}
        </div>
    )
}

export default HomePage;
