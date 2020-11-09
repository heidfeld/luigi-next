import React from 'react';
import DefaultLayout from "../components/Layout/DefaultLayout";

import '../styles/styles.less';

export default function MyApp({Component, pageProps}) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    );
};
