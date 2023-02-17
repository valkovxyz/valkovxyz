
import Me from '../../../public/avatar.png'
import {
  HomePageAboutMeContainer, HomePageAboutMeImage,
  HomePageAdditionalInfoContainer, HomePageAdditionalInfoProjects, HomePageAdditionInfoContacts,
  HomePageContainer, HomePageLink, HomePageText, HomePageTextAdditional
} from '@/components/homesection/homepage.styles';

export const Homepage = () => {
  return (
    <HomePageContainer>
      <HomePageAboutMeContainer>
        <HomePageText>
          Hello! <br/>
          My name is Artem Valkov. <br/>
          I`&apos;m Software Engineer. <br/>
        </HomePageText>
        <HomePageAboutMeImage
          src={Me}
          alt="artem_valkov"
          width={200}
          height={200}
        />
      </HomePageAboutMeContainer>
      {/*<HomePageAdditionalInfoContainer>
        <HomePageAdditionalInfoProjects>
          <HomePageTextAdditional>
            My projects
          </HomePageTextAdditional>
          <HomePageLink
            href={'/projects'}
          >
            See more.
          </HomePageLink>
        </HomePageAdditionalInfoProjects>
        <HomePageAdditionInfoContacts>
          <HomePageTextAdditional>
            Have questions or suggestions?
          </HomePageTextAdditional>
          <HomePageLink
            href={'/contacts'}
          >Contact me </HomePageLink>
        </HomePageAdditionInfoContacts>
      </HomePageAdditionalInfoContainer>*/}
    </HomePageContainer>
  )
}