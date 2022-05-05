import Head from "next/head";

import Layout from "../components/layout/Layout";
import ErrorModal from "../components/modal/notifModal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ErrorModal />
      <Head>
        <title>Web Alumni</title>
        <meta
          property="og:title"
          content="Web Alumni smart city"
          key="Web Alumni"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
