import {useRouter} from 'next/router';
import { Project } from '@/components/project/project';

const ProjectPage = ({data}) => {

    const router = useRouter()
    const {id} = router.query
        console.log(data)

    return (
        <>
            <Project data={data}/>
        </>
    )
}


export default ProjectPage

/*export async function getStaticPaths() {
    const response = await fetch('https://valkov.xyz/api/projects')
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
    const response = await fetch(`https://valkov.xyz/api/project?id=${params.id}`)
    const project = await response.json()

    return {

        props: {
            project
        }
    }
}*/

export async function getServerSideProps(context) {
    const { id } = context.query
    const response = await fetch(`https://valkov.xyz/api/project?id=${id}`)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}


