import React from 'react';

function Study({ schoolLogo, title, schoolName, period, location, additionalDetails }) {

    return (
        <div className="relative bg-slate-200 rounded-full p-4 mb-4 max-w-80vw md:max-w-480px mx-auto">
            <div className="flex items-center">
                <img src={schoolLogo} alt={schoolName} className="w-24 h-24 rounded-full mr-4" />
                <div className='ml-4'>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p>{schoolName}</p>
                    <p>{location}</p>
                    <p>{period}</p>
                </div>
            </div>
        </div>
    );
};

export default Study