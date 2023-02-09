import { GlobalStyle } from '@/styles/global.styles';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { Wrapper } from '@/components/wrapper/wrapper';
import { Menu } from '@/components/menu/menu';
import { Content } from '@/components/content/content';
import { Layout } from '@/components/layout/layout';

export default function AppComponent({ Component, pageProps }) {
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


