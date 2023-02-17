import { ContactImage, ContactLink, ContactsContainer } from '@/components/contacts/contacts.styles';
import Skype from '../../../public/skype.png'
import Telegram from '../../../public/telegram.png'
import Slack from '../../../public/slack.png'
import Call from '../../../public/call.png'

export const Contacts = () => {
  return (
    <>
      <ContactsContainer>
        <ContactLink href={'https://t.me/valkovartem'} target={'_blank'}>
          <ContactImage src={Telegram} width={100} height={100} alt={'Telegram'}/>
        </ContactLink>
        <ContactLink href={'https://join.skype.com/invite/hCBLkJd0bXBc'} target={'_blank'}>
          <ContactImage src={Skype} width={100} height={100} alt={'Skype'} />
        </ContactLink>
        <ContactLink href={'https://valkov.slack.com'} target={'_blank'}>
          <ContactImage src={Slack} width={100} height={100} alt={'Slack'}/>
        </ContactLink>
        <ContactLink href={'tel: +380632592007'}>
          <ContactImage src={Call} width={100} height={100} alt={'Mobile number'}/>
        </ContactLink>
      </ContactsContainer>
    </>
  )
}