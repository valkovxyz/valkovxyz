import { ProjectsComponent } from '@/components/projects/projects';

export const Projects = ({ data }) => {

  return (
    <>
      <ProjectsComponent data={data}/>
    </>
  )
}

/*
export async function getServerSideProps() {
  const res = await fetch(`https://valkov.xyz/api/projects`)
  const data = await res.json()
  return {
    props: { data }
  }
}
*/

export async function getStaticPaths() {
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
  const response = await fetch(`https://valkov.xyz/api/projects`)
  const data = await response.json()

  return {

    props: {
      data
    }
  }
}

export default Projects;