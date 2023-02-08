import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Layout} from '@/components/layout/layout';
import {Menu} from '@/components/menu/menu';
import {AboutMe} from "@/components/aboutme/aboutme";
import { HomeSection } from '@/components/homesection/homesection';

const Home = () => {
    return (
        <>
                <HomeSection/>
                <HomeSection/>
                <HomeSection/>
        </>
    )
}

export default Home
