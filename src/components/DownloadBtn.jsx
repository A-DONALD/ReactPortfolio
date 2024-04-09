import React from "react";

function DownloadButton({ btnName, fileURL, dwnldName }) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = dwnldName;
        link.click();
    };

    return (
        <button className="px-5 py-3" onClick={handleDownload}>{btnName}</button>
    );
};

export default DownloadButton