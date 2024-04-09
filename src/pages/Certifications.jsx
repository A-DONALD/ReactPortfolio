import React from 'react';
import Certificate from '../components/Certificate.jsx';
import { certificates } from '../lib/data';

function Certifications() {
    return (
        <div id='certifications' className='container py-4 text-center'>
            <h1 className="text-4xl text-gray-900 dark:text-white py-8 font-bold mb-4">Certifications</h1>
            <div className="flex flex-wrap justify-center">
                {certificates.map((certificate, index) => (
                    <Certificate key={index} {...certificate} />
                ))}
            </div>
        </div>
    )
}

export default Certifications