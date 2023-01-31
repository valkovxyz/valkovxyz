import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Container } from '@/components/container/container';
import { MenuLink } from '@/components/menu_link/menu_link';
import { Menu } from '@/components/menu/menu';

const Home = () => {
  return (
    <>
      <main>
        <Menu/>
        <Container>

        </Container>
      </main>

    </>
  )
}

export default Home
