import React from 'react';

function SkillCard({ title }) {
    return (
        <div className="mb-4 text-gray-900 p-4 h-20 w-4/6 bg-slate-300 rounded-md shadow-md mx-auto">
            <div className="flex justify-center">
                <h3 className="text-lg font-semibold items-center">{title}</h3>
            </div>
        </div>
    );
};

export default SkillCard