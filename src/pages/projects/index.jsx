import { ProjectsComponent } from '@/components/projects/projects';

export const Projects = ({ data }) => {

  return (
    <>
      <ProjectsComponent data={data}/>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://valkov.xyz/api/projects`)
  const data = await res.json()
  return {
    props: { data }
  }
}


/*export const getStaticProps = async () => {

  const response = await fetch(`https://valkov.xyz/api/projects`)
  const data = await response.json()

  return {

    props: {
      data
    }
  }
}*/

export default Projects;