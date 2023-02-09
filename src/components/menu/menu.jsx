import {MenuContainer, MenuStyled, MenuLink} from "@/components/menu/menu.styles";
import ProjectIcon from '../../../public/projects.icon.png'
import HomeIcon from '../../../public/home.icon.png'
import ContactsIcon from '../../../public/contacts.icon.png'
import CvIcon from '../../../public/cv.icon.png'
import TwitchIcon from '../../../public/twitch.icon.png'



import Image from 'next/image';

export const Menu = () => {


    return (
        <>
            <MenuContainer>
                    <MenuLink href={'/'}>
                      <Image src={HomeIcon} alt='Projects' width={40} height={40} />
                    </MenuLink>
                    <MenuLink href={'/projects'}>
                      <Image src={ProjectIcon} alt='Projects' width={40} height={40} />
                    </MenuLink>
                    <MenuLink href={'/'}>
                      <Image src={ContactsIcon} alt='Projects' width={48} height={48} />
                    </MenuLink>
                    <MenuLink href={'/'}>
                      <Image src={CvIcon} alt='Projects' width={40} height={40} />
                    </MenuLink>
                    <MenuLink href={'/'}>
                      <Image src={TwitchIcon} alt='Projects' width={40} height={40} />
                    </MenuLink>
            </MenuContainer>
        </>
    )
}