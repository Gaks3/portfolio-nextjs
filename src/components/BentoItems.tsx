import Skeleton from '@/components/Skeleton';
import { Atom, School, Server, Shapes } from 'lucide-react';
import Image from 'next/image';

export const items = [
  {
    title: 'Currently attending SMK Negeri 2 Yogyakarta',
    description:
      '12th grade with majors "Sistem Informasi Jaringan dan Aplikasi.',
    header: (
      <Skeleton>
        <Image
          src={'/school.jpg'}
          alt='School'
          fill
          className='object-cover rounded-md'
        />
      </Skeleton>
    ),
    icon: <School className='w-4 h-4 text-neutral-500' />,
  },
  {
    title: 'Sistem Informasi Jaringan dan Aplikasi',
    description:
      'This major equips students with the knowledge and skills to build, manage, and secure computer networks, as well develop software applications.',
    header: (
      <Skeleton>
        <Image
          src={'/major.jpg'}
          alt='Major'
          fill
          className='object-cover rounded-md'
        />
      </Skeleton>
    ),
    icon: <Atom className='w-4 h-4 text-neutral-500' />,
  },
  {
    title: 'Frontend',
    description:
      'Use technologies such as HTML for content structure, CSS for styling, React or Next.js as frameworks to build complex user interfaces, and Tailwind CSS as a utility-first framework to speed up development.',
    header: (
      <Skeleton>
        <Image
          src={'/ui-design.jpg'}
          alt='UI Design'
          fill
          className='object-cover rounded-md'
        />
      </Skeleton>
    ),
    icon: <Shapes className='w-4 h-4 text-neutral-500' />,
  },
  {
    title: 'Backend',
    description:
      'Use technologies such as Node.js, Express.js, Next.js to build servers and APIs that handle data requests, and interact with MySQL databases to store and retrieve information.',
    header: (
      <Skeleton>
        <Image
          src={'/coding.jpg'}
          alt='Code of Programming'
          fill
          className='object-cover rounded-md'
        />
      </Skeleton>
    ),
    icon: <Server className='w-4 h-4 text-neutral-500' />,
  },
];
