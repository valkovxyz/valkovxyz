import { AboutMeContainer, AboutMeText } from '@/components/aboutme/aboutme.styles';
import Image from 'next/image';
import Me from '../../../public/avatar.png'

export const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeText>
        Hello! <br/>
        My name is Artem Valkov. <br/>
        I`&apos;m Software Engineer. <br/>
      </AboutMeText>
      <Image
        src={Me}
        alt='artem_valkov'
        width={200}
        height={200}
      />
    </AboutMeContainer>
  )
}