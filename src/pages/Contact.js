import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {

    
return(
    <div className='page-wrapper'>
        <Header />
        <main className='min-h-[80.75vh]'>
            <div className='h-[40vh] w-full'>
                <h1 className='pt-8 pr-8 text-3xl text-right sm:pt-16 sm:pr-16 sm:text-6xl'>Contact</h1>
            </div>
            <div className='h-[40vh] text-2xl pl-4 sm:pl-8'>
                <a href='https://www.linkedin.com/in/zachary-eggert-2a4629204/'><h3>Linkedin</h3></a>
                <a href='https://twitter.com/eggert_zachary'><h3>Twitter</h3></a>
                <a href='https://www.instagram.com/an0therprince/'><h3>Instagram</h3></a>
                <a href='mailto:eggert.zachary@gmail.com'><h3>eggert.zachary@gmail.com</h3></a>
            </div>
        </main>
        <Footer />
    </div>
)
}


export default Contact;