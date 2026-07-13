import React from "react";

function Certificate({ title, imageSrc, organization, date, url }) {

    const content = (
        <div className="flex flex-col h-full text-left bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md border-2 border-transparent hover:border-slate-600 dark:hover:border-blue-600 transition-colors">
            <div className="flex items-center justify-center mb-4 h-32">
                {imageSrc ? (
                    <img src={imageSrc} alt={title} className="max-h-32 object-contain rounded-md" />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-slate-700 dark:bg-blue-700 text-white flex items-center justify-center text-2xl font-bold">
                        {organization ? organization[0] : '?'}
                    </div>
                )}
            </div>
            <h3 className="text-lg text-gray-900 dark:text-white font-bold mb-1">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{organization}</p>
            {date && <p className="text-sm text-gray-500 dark:text-gray-500">{date}</p>}
        </div>
    );

    if (!url) {
        return content;
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
            {content}
        </a>
    );
};

export default Certificate
