import {
  ProjectsBox,
  ProjectsContainer, ProjectsImage,
  ProjectsInfo, ProjectsMoreDetailsButton,
  ProjectsTitle
} from '@/components/projects/projects.styles';
import Link from 'next/link';

export const ProjectsComponent = ({ data = [] }) => {
  return (
    <>
      <ProjectsContainer>
        {data.map((project) =>
          <Link key={project.id} href="project/[id]" as={`/project/${project.id}`}>
          <ProjectsBox >
            <>
              <ProjectsInfo>
                <ProjectsTitle>
                  {project.name}
                </ProjectsTitle>
              </ProjectsInfo>
              <ProjectsImage key={project.id} src={project.screenshots.split(',')[0].toString()} alt={'screen'} width={280} height={170}/>
            </>
          </ProjectsBox>
          </Link>
        )}
      </ProjectsContainer>
    </>
  )
}