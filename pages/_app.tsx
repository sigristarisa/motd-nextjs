import "../styles/design_tokens.css";
import "../styles/globals.css";
import "../styles/utilities.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
