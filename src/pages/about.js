import React from 'react';

import '../styles/less/pages/about.less';

const REACT_JS_LINK = 'http://reactjs.org';

export default function About(props) {

    return (
        <div className='about'>
            <p>luigi</p>
            <img className='about__image' src="/leon.png"/>
            <p>developer</p>
            <p>
                <a href={REACT_JS_LINK}>
                    <span className='about__text--lightskyblue'><b>react</b></span>
                    .
                    <span className='about__text--lightcoral'>js</span>
                </a>
            </p>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}