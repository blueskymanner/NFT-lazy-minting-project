import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Metaverse Rights</title>
      <meta
        name="description"
        content=""
      />
    </Head>
    <Component {...pageProps} />
  </div>
)


export default MyApp
