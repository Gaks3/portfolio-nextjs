import Image from 'next/image'

type ImagesData = Array<{
  url: string
  alt: string
}>

export default function Skills() {
  const images: ImagesData = [
    {
      url: 'javascript.png',
      alt: 'Javascript Logo',
    },
    {
      url: 'typescript.png',
      alt: 'Typescript Logo',
    },
    {
      url: 'nextjs.png',
      alt: 'NextJS Logo',
    },
    {
      url: 'nodejs.png',
      alt: 'NodeJS Logo',
    },
    {
      url: 'postgresql.png',
      alt: 'PostreSQL Logo',
    },
    {
      url: 'mysql.png',
      alt: 'Mysql Logo',
    },
    {
      url: 'tailwind.png',
      alt: 'Tailwind Logo',
    },
    {
      url: 'trpc.png',
      alt: 'TRPC Logo',
    },
  ]

  return (
    <div className='flex flex-row h-auto items-center justify-center flex-wrap gap-5'>
      {images.map((image, id) => (
        <Image
          src={`/${image.url}`}
          alt={image.alt}
          width={100}
          height={100}
          key={id}
        />
      ))}
    </div>
  )
}
