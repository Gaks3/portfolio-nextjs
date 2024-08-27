import { cn } from '@/lib/utils'
import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

type ContactProps = {
  url: string
  Icon: LucideIcon
  className: string
}

export default function Contact({ url, Icon, className }: ContactProps) {
  return (
    <Link
      href={url}
      className={cn(
        'flex items-center justify-center w-full min-h-40 rounded-md transition-colors duration-200 group border border-neutral-500',
        className
      )}
    >
      <div className='flex items-center justify-center w-10 h-10 bg-[#24292e] rounded-full text-white group-hover:bg-white group-hover:text-[#24292e] transition-colors duration-200'>
        <Icon />
      </div>
    </Link>
  )
}
