import { MenuContainer, MenuStyled, MenuLink } from '@/components/menu/menu.styles';
import ProjectIcon from '../../../public/projects.icon.png'
import HomeIcon from '../../../public/home.svg'
import ContactsIcon from '../../../public/contacts.icon.png'
import CvIcon from '../../../public/cv.icon.png'
import TwitchIcon from '../../../public/twitch.icon.png'
import { Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/router'


import Image from 'next/image';

export const Menu = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <MenuContainer>

        <Tooltip content={'Home'} placement={'right'} hideArrow={true} rounded={true} offset={-20}>
          <MenuLink href={'/'} className={currentRoute === '/' ? "active" : ""}  >
            <Image src={HomeIcon} alt="Projects" width={40} height={40}/>
          </MenuLink>
        </Tooltip>
        <Tooltip content={'Projects'} placement={'right'} hideArrow={true} rounded={true} offset={-20}>
          <MenuLink href={'/projects'}>
            <Image src={ProjectIcon} alt="Projects" width={40} height={40}/>
          </MenuLink>
        </Tooltip>
        <Tooltip content={'Contacts'} placement={'right'} hideArrow={true} rounded={true} offset={-20}>
          <MenuLink href={'/contacts'}>
            <Image src={ContactsIcon} alt="Projects" width={48} height={48}/>
          </MenuLink>
        </Tooltip>
        <Tooltip content={'CV'} placement={'right'} hideArrow={true} rounded={true} offset={-20}>
          <MenuLink href={'https://cv.djinni.co/27/d79ac9b762cd570ed3f9ebfd9a3aa4/cv_artem_valkov.pdf'} target={'_blank'}>
            <Image src={CvIcon} alt="Projects" width={40} height={40}/>
          </MenuLink>
        </Tooltip>
        <Tooltip content={'Twitch'} placement={'right'} hideArrow={true} rounded={true} offset={-20}>
          <MenuLink href={'https:/twitch.tv/z00mq'} target={'_blank'}>
            <Image src={TwitchIcon} alt="Projects" width={40} height={40}/>
          </MenuLink>
        </Tooltip>
      </MenuContainer>
    </>
  )
}