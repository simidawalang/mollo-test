import React from 'react';

const Pill = ({children, variant, className, size}) => {
    return (
        <div className={`pill ${className} ${variant} ${size}`}>
            {children}
        </div>
    );
};

export default Pill;