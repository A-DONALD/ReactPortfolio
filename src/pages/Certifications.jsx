import React from 'react';
import Certificate from '../components/Certificate.jsx';
import { certificates } from '../lib/data';

function Certifications() {
    return (
        <section id='certifications' className='py-4'>
            <div className='container mx-auto px-4 text-center'>
                <h1 className="text-4xl text-gray-700 dark:text-white py-8 font-bold mb-4">Certifications</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {certificates.map((certificate, index) => (
                        <Certificate key={index} {...certificate} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
