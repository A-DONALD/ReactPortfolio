import { useState } from "react";

function MediaCard({ iconSrc, networkName, link }) {

    return (
        <a href={link}>
            <div className="relative dark:bg-gray-800 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-md p-2 sm:p-4 m-2 sm:m-4 text-center transition-all duration-300 border-4 border-gray-300 dark:border-gray-700 hover:border-orange-400 dark:hover:border-blue-900" >
                <div className="relative h-3/4">
                    <img
                        src={iconSrc}
                        alt={networkName}
                        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mt-2 sm:mt-4 rounded-3xl object-cover transition-all duration-300"
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0">
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center transition-all duration-300 opacity-70 text-gray-600 hover:opacity-100 hover:text-black" >
                        {networkName}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default MediaCard
