import React from 'react';

function SkillCard({ title }) {
    return (
        <div className="mb-4 p-4 h-24 w-4/6 bg-slate-300 rounded-md shadow-md mx-auto">
            <div className="flex items-center mb-2 justify-center">
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
        </div>
    );
};

export default SkillCard