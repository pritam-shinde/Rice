import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Header, Footer } from '../components/components'
import Script from 'next/script'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="facebook-domain-verification" content="9ituueu5p1lwsbqnsjhyzrlznqne8x" />
        <meta name="google-site-verification" content="a2fLv_LFYkZ05eqWXw6BXHmgfLFLtpCGzW4NPjKZDMw" />   
      </Head>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-56F872C');`
        }
      </Script>



      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
