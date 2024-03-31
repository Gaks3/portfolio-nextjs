'use client'

import { cn } from '@/lib/utils'
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from 'framer-motion'
import { useState } from 'react'

export default function FloatingNavbar({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0) {
        setVisible(false)
      } else {
        if (direction < 0) setVisible(true)
        else setVisible(false)
      }
    }
  })

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2  items-center justify-center space-x-4',
          className
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
