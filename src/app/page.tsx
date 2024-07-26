import { items } from '@/components/BentoItems'
import { ProjectCards } from '@/components/ProjectCard'
import Skills from '@/components/Skills'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Button } from '@/components/ui/button'
import { Spotlight } from '@/components/ui/spotlight'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-full min-h-screen mb-32 space-y-20 pr-3 md:pr-0'>
      <section className='relative flex items-center w-full h-screen' id='hero'>
        <Spotlight className='left-10 top-10 md:-top-10 md:left-56' />
        <h1 className='font-bold text-4xl md:text-7xl'>
          Coffee, code, and creativity
          <br /> - building the future.
        </h1>
        <div className='absolute bottom-5 w-full flex flex-col gap-3 md:flex-row md:justify-between items-center pr-5'>
          <div className='space-x-3 text-center'>
            <span className='font-semibold'>Ade Bagas Wicaksono</span>
            <span>/</span>
            <span className='block md:inline-block'>Still a Student</span>
          </div>
          <div>
            <Button
              className='bg-primary-foreground text-primary hover:bg-inherit hover:border-border hover:border hover:text-primary-foreground hover:scale-105'
              asChild
            >
              <Link href={'#contact'}>Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
      <section id='about'>
        <h2 className='text-3xl font-bold text-center'>
          Ab<span className='underline'>out.</span>
        </h2>
        <BentoGrid className='max-w-4xl mx-auto'>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 1 || i === 2 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </section>
      <section id='skills'>
        <h2 className='text-3xl font-bold text-center'>
          S<span className='underline'>kill</span>s and Tools.
        </h2>
        <div className='mt-3'>
          <Skills />
        </div>
      </section>
      <section id='project'>
        <h2 className='text-3xl font-bold text-center'>
          <span className='underline'>Pro</span>ject.
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-x-10 px-5 gap-y-5'>
          <ProjectCards />
        </div>
      </section>
      <section id='contact'>
        <h2 className='text-3xl font-bold text-center'>
          Cont<span className='underline'>act.</span>
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 mt-3 px-3'>
          <Link
            href={'https://github.com/Gaks3'}
            className='flex items-center justify-center w-full min-h-40 hover:bg-[#24292e] rounded-md transition-colors duration-200 group'
          >
            <div className='flex items-center justify-center w-10 h-10 bg-[#24292e] rounded-full text-white group-hover:bg-white group-hover:text-[#24292e] transition-colors duration-200'>
              <Github />
            </div>
          </Link>
          <Link
            href={'https://www.instagram.com/gaks_3/'}
            className='flex items-center justify-center w-full min-h-40 hover:bg-[#C13584] rounded-md transition-colors duration-200 group'
          >
            <div className='flex items-center justify-center w-10 h-10 bg-[#C13584] rounded-full text-white group-hover:bg-white group-hover:text-[#C13584] transition-colors duration-200'>
              <Instagram />
            </div>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/ade-bagas-wicaksono/'}
            className='flex items-center justify-center w-full min-h-40 hover:bg-[#0A66C2] rounded-md transition-colors duration-200 group col-span-2 md:col-auto'
          >
            <div className='flex items-center justify-center w-10 h-10 bg-[#0A66C2] rounded-full text-white group-hover:bg-white group-hover:text-[#0A66C2] transition-colors duration-200'>
              <Linkedin />
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
