import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>{`Copyright © Eduardo D. DSW/IFSP ${year}`}</footer>;
}

export default Footer;