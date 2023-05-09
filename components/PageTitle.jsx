import React from 'react';

function PageTitle({ children }) {
    return (
        <h2 className='text-center text-6xl font-bold leading-tight tracking-tight'>
            <span className="gradientText_gAnimation">{children}</span>
        </h2>
    )
}

export { PageTitle }