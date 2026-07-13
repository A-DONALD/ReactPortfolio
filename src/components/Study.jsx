import React from 'react';

function Study({ title, schoolName, period, location, additionalDetails, imageSrc }) {
    return (
        <div className="flex flex-col h-full text-left bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:border-slate-500 dark:hover:border-blue-600 transition-colors">
            <div className="flex items-start gap-4">
                <img src={imageSrc} alt={schoolName} className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center" />
                <div>
                    <h3 className="text-lg text-gray-900 dark:text-white font-bold">{title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{schoolName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{location} · {period}</p>
                </div>
            </div>
            {additionalDetails && (
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">{additionalDetails}</p>
            )}
        </div>
    );
};

export default Study
