import IconCloud from './ui/icon-cloud'

export default function Skills() {
  const slugs = [
    'typescript',
    'javascript',
    'react',
    'android',
    'html5',
    'css3',
    'nodejs',
    'express',
    'prisma',
    'postgresql',
    'firebase',
    'nginx',
    'vercel',
    'git',
    'github',
    'visualstudiocode',
    'androidstudio',
    'figma',
    'php',
    'laravel',
    'mysql',
    'tailwindcss',
    'bun',
    'mqtt',
    'nestjs',
    'nvm',
    'python',
    'shadcnui',
    'ubuntu',
  ]

  return (
    <div className='flex flex-row h-auto items-center justify-center flex-wrap gap-5'>
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
