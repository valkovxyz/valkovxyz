import {
  ProjectsBox,
  ProjectsContainer, ProjectsImage,
  ProjectsInfo, ProjectsMoreDetailsButton,
  ProjectsTitle
} from '@/components/projects/projects.styles';
import Link from 'next/link';

export const ProjectsComponent = ({ data }) => {
  return (
    <>
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
              <ProjectsImage key={project.id} src={project.screenshots.split(',')[0].toString()} alt={'screen'} width={280} height={170}/>
            </>
          </ProjectsBox>)}
      </ProjectsContainer>
    </>
  )
}