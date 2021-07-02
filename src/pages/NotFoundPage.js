import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {

    
return(
    <div className='page-wrapper'>
        <Header />
        <main className='min-h-[80.75vh] flex flex-row justify-content-center items-center'>
            <code className='bg-[#111] p-1 bg-opacity-95 text-2xl'>
                404: PAGE NOT FOUND
            </code>
        </main>
        <Footer />
    </div>
)
}


export default NotFoundPage;