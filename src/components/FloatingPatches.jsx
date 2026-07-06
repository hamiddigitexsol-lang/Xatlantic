import { motion } from 'framer-motion'
import pvcImg from '../assets/pvc.jpg'
import siliconeImg from '../assets/silicone.jpg'
import metflexImg from '../assets/metflex.jpg'
import coinImg from '../assets/coin.jpg'
import wovenImg from '../assets/woven.jpg'

// Decorative patch photos that gently bob behind the hero calculator card.
// Hidden below `lg` so they never compete with content on smaller screens.
const patches = [
  { img: metflexImg, top: '-6%', right: '4%', size: 108, rotate: -12, duration: 6.5, delay: 0 },
  { img: pvcImg, top: '20%', left: '-8%', size: 88, rotate: 9, duration: 7.5, delay: 0.6 },
  { img: coinImg, bottom: '-4%', left: '8%', size: 76, rotate: -8, duration: 6, delay: 1.1 },
  { img: siliconeImg, bottom: '-8%', right: '-4%', size: 96, rotate: 13, duration: 7, delay: 0.3 },
  { img: wovenImg, top: '46%', right: '-10%', size: 68, rotate: 6, duration: 8, delay: 1.6 },
]

export default function FloatingPatches() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block" aria-hidden>
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
