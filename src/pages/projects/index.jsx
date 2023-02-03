import Link from 'next/link';
import { Layout } from '@/components/container/layout';
import { ProjectsContainer } from '@/components/projects/projects';


export const Projects = ({ data }) => {
  console.log(data)
  return (
      <ProjectsContainer>
        {data.map((project) =>
          <div key={project.id}>
            <Link href="project/[name]" as={`/project/${project.name}`}> {project.name}</Link>
          </div>)}
      </ProjectsContainer>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/projects`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default Projects;