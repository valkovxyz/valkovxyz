import Link from 'next/link';
import { ProjectsContainer } from '@/components/projects/projects';
import {
  ProjectsBox,
  ProjectsImage, ProjectsInfo,
  ProjectsMoreDetailsButton,
  ProjectsTitle
} from '@/components/projects/projects.styles';


export const Projects = ({ data }) => {
  console.log(data)
  return (
    <ProjectsContainer>
      {data.map((project) =>
        <ProjectsBox key={project.id}>
          <>
            <ProjectsInfo>
              <ProjectsTitle>
                {project.name}
              </ProjectsTitle>
              <Link href="project/[id]" as={`/project/${project.id}`}>
                <ProjectsMoreDetailsButton>
                  More details...
                </ProjectsMoreDetailsButton>
              </Link>
            </ProjectsInfo>
            {project.screenshots.split(',').map(screen => (
              <ProjectsImage key={project.id} src={screen} alt={'screen'} width={280} height={170}/>
            ))}
          </>
        </ProjectsBox>)}
    </ProjectsContainer>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/projects`)
  const data = await res.json()
  return {
    props: {data}
  }
}

export default Projects;