import Layout from '@/components/templates/Layout';
import Head from 'next/head';
import Home from '../components/organisms/Home';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='next-portfolio' />
      </Head>
      <Home />
    </Layout>
  );
}
