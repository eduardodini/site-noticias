import React from 'react';
import NewsCard from '../components/newsbox/newscard';

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
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    );
};

export default Politics;