import React from "react";

function DownloadButton({ btnName, fileURL, dwnldName }) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = dwnldName;
        link.click();
    };

    return (
        <div>
            <button onClick={handleDownload}>{btnName}</button>
        </div>
    );
};

export default DownloadButton