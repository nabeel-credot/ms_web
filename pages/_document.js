import Document, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import Script from "next/script";
import { FB_PIXEL_ID } from "../facebook/pixel";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    initialProps.path = ctx.pathname;
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ 
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-KKZCPMG');`
          }}>
          </script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          {/* {<title>MS</title>} */}

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,maximum-scale=1"
          />
          <meta name="google-site-verification" content="FyoanYdl4RFJBMDc5Bam8-Ff1fNZ4QUz8qD42edHfww" />
          {/* <link rel="icon" href="favicon.png" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript dangerouslySetInnerHTML={{ 
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKZCPMG" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}>
          </noscript>

          <div className="page">
            <div className="wrapper">
              <Main />
            </div>
          </div>
          <NextScript />
          {/* <Script src="https://kit.fontawesome.com/61cf1a298d.js" crossOrigin="anonymous"></Script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
