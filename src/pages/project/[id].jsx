import {useRouter} from 'next/router';
import {Layout} from "@/components/layout/layout";

const Project = ({project}) => {

    const router = useRouter()
    const {id} = router.query
        console.log(project)

    return (
        <Layout>
            <div>Project : {id}</div>
            <h1>{project.githubUrl}</h1>
        </Layout>
    )
}


export default Project

/*export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/projects')
    const data = await response.json()

    const paths = data.map(project => {
        return {
            params: {
                id: `${project.id.toString()}`
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
    const response = await fetch(`http://localhost:3000/api/project?id=${params.id}`)
    const project = await response.json()

    return {

        props: {
            project
        }
    }
}*/

export async function getServerSideProps(context) {
    const { id } = context.query
    const response = await fetch(`http://localhost:3000/api/project?id=${id}`)
    const project = await response.json()

    return {
        props: {
            project
        }
    }
}


