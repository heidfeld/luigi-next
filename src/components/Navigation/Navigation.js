import React from 'react';
import Link from 'next/link';

import '../../styles/less/components/Navigation/Navigation.less';

const Navigation = (props) => {

    return (
        <div className="navigation">
            <ul className="navigation__container">
                <li className="navigation__container__tab">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className="navigation__container__tab">
                    <Link href="/game">
                        <a>Game</a>
                    </Link>
                </li>
                <li className="navigation__container__tab">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </div>
    );

};

export default Navigation;
