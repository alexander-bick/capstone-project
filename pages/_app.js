import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [locationData] = useState(null);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} locationData={locationData} />
    </>
  );
}
