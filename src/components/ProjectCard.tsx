import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjectCard({
  image,
  title,
  date,
  description,
  link,
}: {
  image: string
  title: string
  date: string
  description: string
  link: string
}) {
  return (
    <div className='flex flex-col w-full h-full space-y-2'>
      <div className='p-2 border-neutral-500 border rounded-md'>
        <div className='relative w-full rounded-md min-h-44'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-contain'
            quality={100}
          />
        </div>
      </div>
      <div className='flex justify-between px-3 md:flex-col lg:flex-row'>
        <h3 className='text-lg font-semibold '>{title}</h3>
        <span className='text-sm text-neutral-500'>{date}</span>
      </div>
      <p className='font-sans text-xs font-normal text-neutral-300 px-3'>
        {description}
      </p>
      <Button
        variant={'link'}
        className='flex items-end flex-grow gap-2 text-primary-foreground'
        asChild
      >
        <Link href={link}>
          Github Repo <ArrowRight size={18} className='animate-bounce-right' />
        </Link>
      </Button>
    </div>
  )
}

export function ProjectCards() {
  return (
    <>
      <ProjectCard
        image='/animlist.png'
        title='Anime List'
        date='December 2023'
        description='Anime collection website whose data comes from jikanAPI. It features
        authentication, bookmarking, and managing watches such as episodes. Created with NextJS, Tailwind, Prisma, and MySQL.'
        link='https://github.com/Gaks3/AList'
      />
      <ProjectCard
        image='/teform.png'
        title='Questionnaire'
        date='April 2024'
        description='Website to create a questionnaire in general. Get answers from users who fill in. Dashboard for admin who can control all questionnaires and forms. Created with NextJS, ShadcnUi, Tailwind, Prisma, and MySQL.'
        link='https://github.com/Gaks3/teform'
      />
      <ProjectCard
        image='/perpus.png'
        title='Library'
        date='April 2024'
        description="The website typically includes a catalog of the library's holdings, as well as features for managing book loans, user accounts, and library statistics. The website can be used by patrons to search for books, place holds, renew loans, and view their account information. Created with NextJS, ShadcnUi, Tailwind, Prisma, and MySQL."
        link='https://github.com/Gaks3/perpus'
      />
    </>
  )
}
