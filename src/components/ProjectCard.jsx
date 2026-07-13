import React from 'react';

function ProjectCard({ title, imageSrc, details, projectLink }) {
    return (
        <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 bg-white dark:bg-gray-800 p-4 shadow-md rounded-md cursor-pointer border-4 border-slate-700 text-left lg:text-center h-full">
            <div className="shrink-0 lg:w-full flex items-center justify-center lg:mb-2">
                <img src={imageSrc} alt={title} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-72 lg:h-72 object-cover rounded-md" />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-xl text-gray-900 dark:text-white font-bold mb-1 lg:mb-2">{title}</h3>
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-2">{details}</p>
                <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm lg:text-base">
                    Voir le projet
                </a>
            </div>
        </div>
    );
};

export default ProjectCard
