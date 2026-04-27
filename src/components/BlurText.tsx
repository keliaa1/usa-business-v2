import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  direction?: 'bottom' | 'top'
  animateBy?: 'words' | 'letters'
}

export default function BlurText({
  text,
  className = '',
  delay = 200,
  direction = 'bottom',
  animateBy = 'words',
}: BlurTextProps) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const tokens = animateBy === 'words' ? text.split(' ') : text.split('')
  const yFrom = direction === 'bottom' ? 50 : -50

  const variants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: yFrom },
    mid: { filter: 'blur(5px)', opacity: 0.5, y: direction === 'bottom' ? -5 : 5 },
    visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
  }

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ gap: animateBy === 'words' ? '0.3em' : '0' }}>
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{
            delay: (i * delay) / 1000,
            duration: 0.35,
            times: [0, 0.5, 1],
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block' }}
        >
          {token}
        </motion.span>
      ))}
    </span>
  )
}
