import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Container} from '@/components/container/container';
import {Menu} from '@/components/menu/menu';
import {AboutMe} from "@/components/aboutme/aboutme";
import { HomeSection } from '@/components/homesection/homesection';

const Home = () => {
    return (
        <>
            <Container>
                <HomeSection/>
                <HomeSection/>
                <HomeSection/>
            </Container>
        </>
    )
}

export default Home
