import { motion } from 'framer-motion'
import shamrockSkull from '../assets/hero-patches/shamrock-skull.jpg'
import usaFlag from '../assets/hero-patches/usa-flag.jpg'
import newYork from '../assets/hero-patches/new-york.jpg'
import moneyRoll from '../assets/hero-patches/money-roll.jpg'
import badMoon from '../assets/hero-patches/bad-moon.jpg'
import compassNavy from '../assets/hero-patches/compass-navy.jpg'
import compassRed from '../assets/hero-patches/compass-red.jpg'
import wovenShield from '../assets/hero-patches/woven-shield.jpg'

// Decorative real patch photos that gently bob all around the hero section.
// Hidden below `lg` so they never compete with content on smaller screens.
const patches = [
  { img: shamrockSkull, top: '3%', left: '0%', size: 92, rotate: -10, duration: 6.5, delay: 0 },
  { img: moneyRoll, top: '4%', right: '3%', size: 82, rotate: 12, duration: 7, delay: 0.4 },
  { img: usaFlag, top: '56%', left: '-4%', size: 100, rotate: 8, duration: 7.5, delay: 0.8 },
  { img: compassNavy, top: '44%', right: '-5%', size: 92, rotate: 6, duration: 6.8, delay: 0.2 },
  { img: newYork, bottom: '3%', left: '9%', size: 86, rotate: -7, duration: 8, delay: 1.2 },
  { img: badMoon, bottom: '2%', right: '15%', size: 96, rotate: -9, duration: 7.2, delay: 0.6 },
  { img: compassRed, bottom: '9%', right: '-3%', size: 78, rotate: -14, duration: 6.3, delay: 1.6 },
  { img: wovenShield, top: '18%', left: '47%', size: 68, rotate: 11, duration: 7.8, delay: 1 },
]

export default function FloatingPatches() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      {patches.map((p, i) => (
        <motion.div
          key={i}
          className="absolute overflow-hidden rounded-full border-4 border-white shadow-float"
          style={{
            top: p.top,
            bottom: p.bottom,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size,
            rotate: p.rotate,
          }}
          animate={{ y: [0, -14, 0], rotate: [p.rotate, p.rotate + 4, p.rotate] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img src={p.img} alt="" className="h-full w-full object-cover" />
        </motion.div>
      ))}
    </div>
  )
}
