import React from 'react';
import {Stage, Rect, Layer} from 'react-konva';

import '../styles/less/pages/game.less';

export default function Home(props) {
    return (
        <div>
            <div id="container"/>
            <Stage width={500} height={300} container={'container'}>
                <Layer>
                    <Rect x={100} y={100} width={100} height={100} fill={'white'} draggable={true}/>
                </Layer>
            </Stage>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}