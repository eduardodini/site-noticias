import React from 'react';
import NewsBox from '../components/newsbox/newsbox';

const Politics = () => {
    return (
        <div
            style={{
                display: 'grid',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
            <NewsBox />
        </div>
    );
};

export default Politics;