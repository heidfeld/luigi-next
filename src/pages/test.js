import { connectToDatabase } from '../util/mongodb';

import styles from '../styles/modules/test.module.less';

export default function Home({ isConnected }) {
    return (
        <div className={styles.test123}>
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
