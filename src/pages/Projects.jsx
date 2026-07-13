import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../lib/data';

function Projects() {
    return (
        <section id='projects' className='py-4 text-center'>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl text-gray-700 dark:text-white py-2 font-bold mb-6">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
