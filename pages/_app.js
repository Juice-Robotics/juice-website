import '../styles/globals.css'
import SEO from '../next-seo.config';
import {DefaultSeo} from 'next-seo'

function MyApp({ Component, pageProps }) {
  return <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} dark={true} />
  </>
}

export default MyApp
