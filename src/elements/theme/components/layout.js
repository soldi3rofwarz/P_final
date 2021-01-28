import React from 'react';
import Header from './header';
import Footer from './footer';

export const Layout = (props) => {
    const {
        children,
    } = props;

    return (
    <>
        <Header />
        {children}
       {/**<Footer/>**/}
    </>);
};