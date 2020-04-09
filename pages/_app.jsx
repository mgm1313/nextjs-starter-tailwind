/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import "../css/style.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
