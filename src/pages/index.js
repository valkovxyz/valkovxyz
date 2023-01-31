import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Container} from '@/components/container/container';
import {Menu} from '@/components/menu/menu';
import {AboutMe} from "@/components/aboutme/aboutme";

const Home = () => {
    return (
        <>
            <Container>
                <AboutMe/>
            </Container>
        </>
    )
}

export default Home
