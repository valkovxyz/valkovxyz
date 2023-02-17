import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Layout} from '@/components/layout/layout';
import {Menu} from '@/components/menu/menu';
import {AboutMe} from "@/components/aboutme/aboutme";
import { Homepage } from '@/components/homesection/homepage';

const Home = () => {
    return (
        <>
                <Homepage/>
        </>
    )
}

export default Home
