import React from 'react';

import './ErrorIndicator.scss';

const ErrorIndicator = () => {

    return (
        <div className="error-indicator">
            <div className="error-indicator__title">
                Извините, сервер временно недоступен. Попробуйте позже
            </div>
        </div>
    );

};

export default ErrorIndicator
