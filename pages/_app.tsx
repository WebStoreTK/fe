import Head from "next/head";
import Layout from "../src/commons/layout";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "../src/commons/style/global.style";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>CAFE KIOSK</title>
      </Head>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
