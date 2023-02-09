import { ProjectsComponent } from '@/components/projects/projects';

export const Projects = ({ data }) => {
  console.log(data)
  return (
    <>
      <ProjectsComponent data={data}/>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/projects`)
  const data = await res.json()
  return {
    props: { data }
  }
}

export default Projects;