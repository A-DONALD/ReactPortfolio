import React from 'react';

function ExperienceCard({ role, company, location, period, details }) {
    return (
        <div className="text-left bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:border-slate-500 dark:hover:border-blue-600 transition-colors">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-xl text-gray-900 dark:text-white font-bold">{role} · {company}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{period}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{location}</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300">
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard
