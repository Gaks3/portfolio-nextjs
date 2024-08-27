import { Github, Instagram, Linkedin } from 'lucide-react'
import Contact from './Contact'

export default function Contacts() {
  return (
    <>
      <Contact
        url='https://github.com/Gaks3'
        Icon={Github}
        className='hover:bg-[#24292e]'
      />
      <Contact
        url='https://www.instagram.com/gaks_3/'
        Icon={Instagram}
        className='hover:bg-[#C13584]'
      />
      <Contact
        url='https://github.com/Gaks3'
        Icon={Linkedin}
        className='hover:bg-[#0A66C2]'
      />
    </>
  )
}
