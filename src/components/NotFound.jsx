import React from "react";
import errorImage from "../assets/errorImage.jpg";

const NotFound = () => {
    return (
        <main className="error-main">
            <span className="error-image-container">
                <img className="error-image" src={errorImage} />
            </span>
            <span className="error-text">Error 404</span>
            <span className="error-desc">Page Not Found</span>
        </main>
    );
};

export default NotFound;
