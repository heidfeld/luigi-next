//import Test from '@heidfeld/luigi-framework';

export default function Ekstraklasa(props) {

    const data = {
        headers: [
            {id: headerId1, name: 'header 1'},
            {id: headerId2, name: 'header 2'},
            {id: headerId3, name: 'header 3'},
        ],
        rows: [
            {
                [headerId1]: toSimpleDataDTO(1, 'r1'),
                [headerId2]: toSimpleDataDTO(2, 'r2'),
                [headerId3]: toSimpleDataDTO(3, 'r3')
            },
            {
                [headerId1]: toSimpleDataDTO('test1', 'test1'),
                [headerId2]: toSimpleDataDTO('test2', 'test2'),
                [headerId3]: toSimpleDataDTO('test3', 'test3')
            },
            {
                [headerId1]: toSimpleDataDTO('xd', 'xd'),
                [headerId2]: toSimpleDataDTO('xh', 'xh'),
                [headerId3]: toSimpleDataDTO('xc', 'xc')
            },
        ]
    };

    return (
        <div>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}