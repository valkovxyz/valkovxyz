import { ProjectsContainerStyled } from '@/components/projects/projects.styles';

export const ProjectsContainer = ({ children }) => {
  return (
    <>
      <ProjectsContainerStyled>
        {children}
      </ProjectsContainerStyled>
    </>
  )
}