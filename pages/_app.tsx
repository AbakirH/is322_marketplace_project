import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/card.css";
import "../styles/products.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
