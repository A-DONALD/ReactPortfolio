import React from 'react';

function Study({ schoolLogo, title, schoolName, period, location, additionalDetails }) {

    return (
        <div className="relative bg-gray-200 dark:bg-gray-800 rounded-full p-4 mb-4 max-w-80vw md:max-w-480px mx-auto">
            <div className="flex items-center">
                <img src={schoolLogo} alt={schoolName} className="w-24 h-24 rounded-full mr-4 dark:bg-gray-300" />
                <div className='ml-4'>
                    <h3 className="text-lg text-gray-900 dark:text-white font-bold">{title}</h3>
                    <p className='text-gray-700 dark:text-gray-400'>{schoolName}</p>
                    <p className='text-gray-700 dark:text-gray-400'>{location}</p>
                    <p className='text-gray-700 dark:text-gray-400'>{period}</p>
                </div>
            </div>
        </div>
    );
};

export default Study