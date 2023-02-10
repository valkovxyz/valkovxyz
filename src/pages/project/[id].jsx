import {useRouter} from 'next/router';
import { Project } from '@/components/project/project';
import App from 'next'
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

export async function getServerSideProps(context) {
    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
    const { id } = context.query
    const response = await fetch(`https://valkov.xyz/api/project?id=${id}`)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}


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
    fallback: true
    }
}*/

/*export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`https://valkov.xyz/api/project?id=${params.id}`)
    const data = await response.json()

    return {

        props: {
            data
        }
    }
}*/



