import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import selfie from '../assets/images/me.jpg';
// import selfie from '../assets/images/recent_me.png'

const About = () => {

    
return(
    <div className='page-wrapper'>
        <Header />
        <main>
            <section className='flex flex-row-reverse justify-between px-4 py-4'>
                <img 
                    className="rounded-full w-[192px]" 
                    alt='Zachary Eggert' 
                    src={selfie}
                />
                <h2 className='text-5xl'>About<br/>Me</h2>
            </section>
            <section>
                <p>
                    I am an up and coming web developer currently enrolled at the University of Washington.
                </p>
            </section>
        </main>
        <Footer />
    </div>
)

}


export default About;