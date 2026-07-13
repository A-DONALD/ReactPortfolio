import React from 'react';
import ExperienceCard from '../components/ExperienceCard.jsx';
import { experiences } from '../lib/data';

function Experience() {
    return (
        <section id='experience' className='py-4'>
            <div className='container mx-auto px-4 text-center'>
                <h1 className="text-4xl text-gray-700 dark:text-white py-8 font-bold mb-4">Experience</h1>
                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
