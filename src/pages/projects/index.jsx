import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { ProjectsContainer } from '@/components/projects/projects';
import { ProjectBox, ProjectMoreDetailsButton, ProjectTitle } from '@/components/projects/projects.styles';


export const Projects = ({ data }) => {
  console.log(data)
  return (
      <ProjectsContainer>
        {data.map((project) =>
          <ProjectBox key={project.id}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <Link href="project/[name]" as={`/project/${project.name.replace(/ /g,'')}`}>
              <ProjectMoreDetailsButton>
                More details...
              </ProjectMoreDetailsButton>
            </Link>
          </ProjectBox>)}
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