import React from "react";

function Certificate({ title, imageSrc, organization, date, url }) {

    return (
        <a href={url}>
            <div className="bg-white p-4 mb-4 mx-2 w-96 shadow-md rounded-md cursor-pointer border-4 border-white hover:border-r-slate-600 hover:border-t-slate-600 hover:border-b-orange-600 hover:border-l-orange-600" >
                <div className="flex items-center justify-center mb-2">
                    <img src={imageSrc} alt={title} className=" w-80 object-cover rounded-md" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-2">{organization}</p>
                <p className="text-gray-600 mb-2">{date}</p>
            </div>
        </a>
    );
};

export default Certificate