import { GlobalStyle } from '@/styles/global.styles';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { LayoutStyled } from '@/components/container/layout.styles';
import { Wrapper } from '@/components/wrapper/wrapper';
import { Menu } from '@/components/menu/menu';
import { Content } from '@/components/content/content';
import { Layout } from '@/components/container/layout';

export default function App({ Component, pageProps }) {
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
