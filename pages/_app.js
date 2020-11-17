import { ListContextProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ListContextProvider>
      <Component {...pageProps} />
    </ListContextProvider>
  );
}

export default MyApp;
