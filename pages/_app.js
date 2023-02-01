import Layout from "components/Layout";
import Head from "components/CustomHead";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>
      <Component {...pageProps} />
    </Layout>
  );
}
