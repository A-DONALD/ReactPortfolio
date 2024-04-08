import React from 'react';

function ProjectCard({ title, imageSrc, details, projectLink }) {
    return (
        <div className="bg-white p-4 mb-4 mx-2 w-80 shadow-md rounded-md cursor-pointer border-4 border-slate-500">
            <div className="flex items-center justify-center mb-2">
                <img src={imageSrc} alt={title} className="h-72 w-72 object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{details}</p>
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Voir le projet
            </a>
        </div>
    );
};

export default ProjectCard