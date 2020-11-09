import '../styles/less/pages/about.less';

export default function About(props) {
    return (
        <div>
            About me...
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}