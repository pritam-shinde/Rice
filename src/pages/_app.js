import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Header, Footer } from '../components/components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
