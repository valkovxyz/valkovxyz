import { GlobalStyle } from '@/styles/global.styles';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { Wrapper } from '@/components/wrapper/wrapper';
import { Menu } from '@/components/menu/menu';
import { Content } from '@/components/content/content';
import { Layout } from '@/components/layout/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/loadingscreen/loadingscreen';

export default function AppComponent({ Component, pageProps }) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

/*  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })*/

  return (
    <>
      <GlobalStyle/>

      <Layout>
        <Header/>
        <Wrapper>
          <Menu/>
          <Content>
            <Component {...pageProps} />
          </Content>


        </Wrapper>
        <Footer/>
      </Layout>
    </>
  )
}


