import React from 'react';

const Pill = ({children, variant, className}) => {
    return (
        <div className={`${className} ${variant}`}>
            {children}
        </div>
    );
};

export default Pill;