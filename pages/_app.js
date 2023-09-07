import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [locationData, setLocationData] = useLocalStorageState(
    "favoriteLocations",
    {
      defaultValue: [],
    }
  );
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        locationData={locationData}
        setLocationData={setLocationData}
      />
    </>
  );
}
