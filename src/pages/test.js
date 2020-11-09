import { connectToDatabase } from '../util/mongodb';

import '../styles/less/pages/test.less';

export default function Home({ isConnected }) {
    return (
        <div className="test">
            Some Test Page
        </div>
    )
}

export async function getServerSideProps(context) {
    const { client } = await connectToDatabase()

    const isConnected = await client.isConnected() // Returns true or false

    return {
        props: { isConnected },
    }
}
