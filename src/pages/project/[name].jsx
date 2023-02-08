import {useRouter} from 'next/router';
import {Layout} from "@/components/layout/layout";
import { useEffect, useState } from 'react';
import { console } from 'next/dist/compiled/@edge-runtime/primitives/console';

const Project = ({project}) => {

    console.log(project)

    const router = useRouter()
    const {name} = router.query

    console.log(name)

    useEffect(() => {
        console.log(name)
    })

    return (
        <Layout>
            <div>Project : {name}</div>
        </Layout>
    )
}


export default Project

export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/projects')
    const data = await response.json()

    const paths = data.map(project => {
        return {
            params: {
                name: `${project.name.toString()}`
            }
        }
    })
    return {
    paths,
    fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const response = await fetch(`http://localhost:3000/api/project?id=${params.name}`)
    const project = await response.json()

    console.log(project)

    return {
        props: {
            project
        }
    }
}


