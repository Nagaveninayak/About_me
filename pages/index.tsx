import { Overview } from '@/components/Overview/Overview';
import React from 'react';

function HomePage() {
    return (
        <>
            <div className='flex flex-row backdrop-blur'>
                <h1 className='text-white  basis-2/12 text-center'> Left Side</h1>
                <div className='basis-8/12 '>
                    <Overview />
                </div>
                <h1 className='text-white  basis-2/12 text-center'> Right Side</h1>
            </div>
        </>

    )
}

export default HomePage;
