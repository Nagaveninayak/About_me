import React, { useRef } from 'react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Overview } from '@/components/Overview/Overview';

function HomePage() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Navbar aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
            <div className='flex flex-row backdrop-blur-[3px] mb-5'>
                <nav className='text-white  basis-2/12 text-center'> Left Side</nav>
                <section className='basis-8/12 '>
                <Overview aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
                </section>
                <nav className='text-white  basis-2/12 text-center'> Right Side</nav>
            </div>
            <Footer />
        </>

    )
}

export default HomePage;
