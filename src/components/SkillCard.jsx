import React from 'react';

function SkillCard({ title }) {
    return (
        <span className="inline-block text-sm md:text-base font-medium text-gray-900 dark:text-white px-3 py-1.5 bg-slate-300 dark:bg-gray-700 rounded-full shadow-sm">
            {title}
        </span>
    );
};

export default SkillCard
