import { useState } from "react";

function MediaCard({ iconSrc, networkName, link }) {

    return (
        <a href={link}>
            <div className="relative w-64 h-64 rounded-md p-4 m-4 text-center transition-all duration-300 border-4 hover:border-orange-400" >
                <div className="relative h-3/4">
                    <img
                        src={iconSrc}
                        alt={networkName}
                        className="w-40 h-40 mx-auto mt-4 rounded-3xl object-cover transition-all duration-300"
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0">
                    <p className="text-4xl font-bold flex items-center justify-center transition-all duration-300 opacity-70 text-gray-600 hover:opacity-100 hover:text-black" >
                        {networkName}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default MediaCard