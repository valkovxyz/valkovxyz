import { ProjectsComponent } from '@/components/projects/projects';

export const Projects = ({ data }) => {
  console.log(data)

  return (
    <>
      <ProjectsComponent data={data}/>
    </>
  )
}

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const res = await fetch(`https://valkov.xyz/api/projects`)
  const data = await res.json()
  return {
    props: { data }
  }
}
export default Projects;


/*export const getStaticProps = async () => {

  const response = await fetch(`https://valkov.xyz/api/projects`)
  const data = await response.json()

  return {

    props: {
      data
    }
  }
}*/
