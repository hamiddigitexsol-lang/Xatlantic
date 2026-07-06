import shamrockSkull from '../assets/hero-patches/shamrock-skull.jpg'
import usaFlag from '../assets/hero-patches/usa-flag.jpg'
import newYork from '../assets/hero-patches/new-york.jpg'
import moneyRoll from '../assets/hero-patches/money-roll.jpg'
import badMoon from '../assets/hero-patches/bad-moon.jpg'
import compassNavy from '../assets/hero-patches/compass-navy.jpg'
import compassRed from '../assets/hero-patches/compass-red.jpg'
import wovenShield from '../assets/hero-patches/woven-shield.jpg'
import cowboy from '../assets/hero-patches/cowboy.jpg'

const photos = [
  shamrockSkull,
  moneyRoll,
  usaFlag,
  compassNavy,
  newYork,
  badMoon,
  compassRed,
  wovenShield,
  cowboy,
]

// Slight per-tile rotation so the wall of patches reads as an organic pile
// of real patches rather than a clean, obviously-repeating grid.
const rotations = [-6, 4, -3, 7, -8, 5, -4, 6, -5, 3, -7, 8]

// Full-bleed collage of real patch photos covering the entire hero, with a
// dark scrim on top (applied by the caller) so text stays readable — same
// composition as a typical patch-supplier hero banner.
export default function PatchesBackground() {
  const tileCount = 36
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="grid h-full w-full grid-cols-6 sm:grid-cols-8 lg:grid-cols-10">
        {Array.from({ length: tileCount }).map((_, i) => (
          <div key={i} className="relative -m-[6%] overflow-hidden">
            <img
              src={photos[i % photos.length]}
              alt=""
              className="h-full w-full scale-125 object-cover"
              style={{ transform: `rotate(${rotations[i % rotations.length]}deg) scale(1.25)` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
