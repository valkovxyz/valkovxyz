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

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
    }
  }, [])

  return (
    <>
      <GlobalStyle/>

      <Layout>

        <Menu/>
        <Header/>
        <Wrapper>
          {loading
            ? <LoadingScreen/>
            : <Content>
              <Component {...pageProps} />
            </Content>
          }

        </Wrapper>
        <Footer/>
      </Layout>
    </>
  )
}


