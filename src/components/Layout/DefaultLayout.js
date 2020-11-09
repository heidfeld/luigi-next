import React from 'react';
import Head from 'next/head';
import Navigation from "../Navigation/Navigation";

const DefaultLayout = ({children}) => {

    return (
        <div className="container">
            <Head>
                <title>Luigi</title>
            </Head>

            <header>
                <div className="logo"/>
                <nav>
                    <Navigation/>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <small>Copyright © 2020</small>
            </footer>
        </div>
    );

};

export default DefaultLayout;
