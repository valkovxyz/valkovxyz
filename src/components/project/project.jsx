import {
  ProjectButton,
  ProjectButtonsContainer,
  ProjectContainer,
  ProjectInfo,
  ProjectTechnologies,
  ProjectTechnologiesContainer,
  ProjectTechnologyChip,
  ProjectTitle
} from '@/components/project/project.styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { ProjectImage, ProjectImageContainer } from '@/components/project/project.styles';


export const Project = ({ data }) => {
  const images = data.screenshots.split(', ')
  const technologies = data.technologies.split(`, `)
  console.log(data)

  return (
    <>
      <ProjectContainer>
        <Gallery>
          <ProjectImageContainer>
          {images.map(screen => (
            <Item style={{ borderRadius: "10px"}} key={screen} original={screen} width="1280" height="720">
              {({ ref, open}) => (
                <ProjectImage ref={ref} onClick={open} src={screen} width="520" height="292"  alt={screen}/>
              )}
            </Item>
          ))}
          </ProjectImageContainer>
        </Gallery>
        <ProjectInfo>
          <ProjectButtonsContainer>
            <ProjectTitle>
              {data.name}
            </ProjectTitle>
            <ProjectButton href={data.demoUrl} target="_blank">  View demo </ProjectButton>
            <ProjectButton href={data.githubUrl} target="_blank"> Source code </ProjectButton>
          </ProjectButtonsContainer>
          <ProjectTechnologiesContainer>
            <ProjectTitle>
              Technologies
            </ProjectTitle>
            <ProjectTechnologies>
              {technologies.map(technology => (
                <ProjectTechnologyChip key={technology}>
                  <p>{technology}</p>
                </ProjectTechnologyChip>
              )) }

            </ProjectTechnologies>
          </ProjectTechnologiesContainer>
        </ProjectInfo>
      </ProjectContainer>
    </>
  )
}