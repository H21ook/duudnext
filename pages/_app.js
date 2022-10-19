import Head from "next/head";
import CustomLayout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Дуудлагын жолооч. +976 76766676. Duudlagiin jolooch</title>
        <meta
          name="description"
          content="+976 76766676. Даатгагдсан, найдвартай, түргэн шуурхай дуудлагын жолоочын үйлчилгээ. duudduud.mn Duudlagiin joloochiin uilchilgee"
        />
        <meta
          name="keywords"
          content="Duudlagiin jolooch, Duud, Дуудлагын жолооч, дууд"
        />
      </Head>
      <CustomLayout notFound={Component.name === "NotFound"}>
        <Component {...pageProps} />
      </CustomLayout>
    </>
  );
}

export default MyApp;
