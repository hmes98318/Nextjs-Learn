import Head from 'next/head';
import Layout, { siteTitle } from '../public/components/layout';

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 Not Found</title>
            </Head>
            <div>404 - Page Not Found</div>
        </Layout>
    );
}