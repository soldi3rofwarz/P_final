import React from 'react';

const Layout = (props) => {
    
    return (
        <>
            
            <section className="layout">
                {props.children}
            </section>
       
        </>
    );

};

export default Layout;