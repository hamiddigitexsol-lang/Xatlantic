import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'

// Smoothly tweens between numeric values for a premium "count-up" feel.
// `format` controls how the live value is rendered (e.g. currency).
export default function AnimatedNumber({ value, format = (v) => v.toFixed(2), className = '' }) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)

  useEffect(() => {
    const controls = animate(prev.current, value, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    })
    prev.current = value
    return () => controls.stop()
  }, [value])

  return <span className={className}>{format(display)}</span>
}
