// ─────────────────────────────────────────────────────────────────────────────
// Product catalog — drives the nav, product grid, calculator, AND the
// /products/<slug> SEO pages. Each entry carries its own page copy + meta.
// Swap `image: null` for a real photo path to replace the placeholder art.
// ─────────────────────────────────────────────────────────────────────────────

import embroideredImg from '../assets/embroidered.jpg'
import chenilleImg from '../assets/chenille.jpg'
import pvcImg from '../assets/pvc.jpg'
import siliconeImg from '../assets/silicone.jpg'
import leatherImg from '../assets/leather.jpg'
import wovenImg from '../assets/woven.jpg'
import sublimatedImg from '../assets/sublimated.jpg'
import metflexImg from '../assets/metflex.jpg'
import lapelPinImg from '../assets/lapel-pin.jpg'
import keychainImg from '../assets/keychain.jpg'
import coinImg from '../assets/coin.jpg'
import socksImg from '../assets/socks.jpg'
import shoeCharmsImg from '../assets/shoe-charms.jpg'
import beaniesImg from '../assets/beanies.jpg'
import scarvesImg from '../assets/scarves.jpg'

export const patches = [
  {
    id: 'embroidered',
    slug: 'embroidered-patches',
    name: 'Embroidered Patch',
    plural: 'Custom Embroidered Patches',
    short: 'Embroidered',
    basePrice: 3.0,
    image: embroideredImg,
    description:
      'Classic, tactile, and built to last. Dense stitching renders logos and lettering with crisp, dimensional definition.',
    seoTitle: 'Custom Embroidered Patches | Xatlantic Patches',
    metaDesc:
      'Order custom embroidered patches with up to 100% thread coverage. Iron-on, sew-on & Velcro backings, low minimums, free proof. Price yours instantly.',
    intro:
      'Embroidered patches are the industry standard for a reason: raised thread on a twill base gives your logo bold color, real texture, and decades of durability. We digitize your artwork stitch by stitch, so lettering stays sharp and colors stay true — wash after wash.',
    features: [
      'Up to 100% embroidery coverage with merrowed or laser-cut borders',
      'Virtually any shape and size from 0.5" to 12"',
      'Iron-on, sew-on, Velcro, or adhesive backing options',
    ],
    useCases: 'Uniforms, team jackets, scout troops, biker vests, hats, and brand apparel.',
    faqs: [
      {
        q: 'What is the minimum order for custom embroidered patches?',
        a: 'Our minimums start at just 25 pieces, so small teams and first-run brands can order without bulk-order pressure.',
      },
      {
        q: 'Are embroidered patches washable?',
        a: 'Yes — machine wash cold and they hold shape and color for years. Sew-on backing is the most durable choice for heavy laundering.',
      },
    ],
  },
  {
    id: 'chenille',
    slug: 'chenille-patches',
    name: 'Chenille Patch',
    plural: 'Custom Chenille Patches',
    short: 'Chenille',
    basePrice: 4.0,
    image: chenilleImg,
    description:
      'The plush, varsity-letterman texture. A premium, oversized statement piece for jackets, teams, and apparel lines.',
    seoTitle: 'Custom Chenille Patches — Varsity Style | Xatlantic Patches',
    metaDesc:
      'Custom chenille patches with that classic varsity letterman look. Plush yarn texture, low minimums and a free digital proof. Get instant pricing.',
    intro:
      'Chenille patches bring the unmistakable varsity-jacket feel: looped yarn piled high on a felt base for a soft, dimensional finish you can see across a room. Perfect for letters, mascots, and statement-scale designs.',
    features: [
      'Plush looped-yarn texture on a sturdy felt base',
      'Ideal for large letters, numbers, and mascots',
      'Single or multi-layer felt for extra depth',
    ],
    useCases: 'Varsity jackets, letterman sweaters, streetwear drops, and school spirit wear.',
    faqs: [
      {
        q: 'How detailed can a chenille patch be?',
        a: 'Chenille shines with bold shapes and big lettering. For fine detail we can combine chenille with embroidered elements in one patch.',
      },
      {
        q: 'What sizes do chenille patches come in?',
        a: 'Anything from a 2" chest letter to a 12" full-back piece — most varsity letters run 4"–6".',
      },
    ],
  },
  {
    id: 'pvc',
    slug: 'pvc-patches',
    name: 'PVC / Rubber Patch',
    plural: 'Custom PVC Patches',
    short: 'PVC / Rubber',
    basePrice: 2.8,
    image: pvcImg,
    description:
      'Weatherproof, flexible, and sharp. Molded 2D/3D detail that holds up on gear, packs, and tactical kit.',
    seoTitle: 'Custom PVC Patches — 2D & 3D | Xatlantic Patches',
    metaDesc:
      'Custom PVC rubber patches molded in 2D or 3D. Waterproof, UV-stable and built for tactical gear and outdoor brands. Low minimums, instant pricing.',
    intro:
      'PVC patches are molded, not stitched — which means crisp raised detail, unlimited color matching, and a patch that shrugs off water, mud, and sun. The go-to choice for tactical, outdoor, and morale designs.',
    features: [
      '2D or 3D molding with fine raised detail',
      'Waterproof, UV-resistant, and temperature-stable',
      'Velcro backing standard for tactical applications',
    ],
    useCases: 'Morale patches, range bags, plate carriers, outdoor gear, and uniforms.',
    faqs: [
      {
        q: 'What is the difference between 2D and 3D PVC patches?',
        a: '2D patches have flat layered levels; 3D patches have smooth sculpted contours. 3D adds a small mold cost but a big visual upgrade.',
      },
      {
        q: 'Do PVC patches survive outdoor use?',
        a: 'Yes — PVC is waterproof and UV-stable, making it the most weatherproof patch material we offer.',
      },
    ],
  },
  {
    id: 'silicone',
    slug: 'silicone-patches',
    name: 'Silicone Patch',
    plural: 'Custom Silicone Patches',
    short: 'Silicone',
    basePrice: 5.5,
    image: siliconeImg,
    description:
      'Soft-touch, low-profile branding. A modern, athletic finish ideal for performance and lifestyle apparel.',
    seoTitle: 'Custom Silicone Patches — Soft-Touch | Xatlantic Patches',
    metaDesc:
      'Custom silicone patches with a soft, flexible, low-profile finish. Front-side heat-seal application for performance apparel and headwear. Price yours instantly.',
    intro:
      'Silicone patches are thinner and softer than PVC, with a smooth matte finish and front-side heat-seal application that bonds cleanly to performance fabrics. The modern label look for athletic and lifestyle brands.',
    features: [
      'Thin, flexible, soft-touch construction',
      'Front-side heat-seal for fast, clean application',
      'Stretch-friendly — ideal for performance fabrics',
    ],
    useCases: 'Activewear, hats, jackets, gym bags, and modern apparel labeling.',
    faqs: [
      {
        q: 'How do silicone patches attach?',
        a: 'Most customers heat-seal them, which bonds the patch flush to the garment — no stitching visible. Sew-on is also available.',
      },
      {
        q: 'Silicone vs PVC — which should I pick?',
        a: 'Pick silicone for thin, flexible, on-garment branding; pick PVC for thick, rugged, gear-mounted patches.',
      },
    ],
  },
  {
    id: 'leather',
    slug: 'leather-patches',
    name: 'Leather Patch',
    plural: 'Custom Leather Patches',
    short: 'Leather',
    basePrice: 3.5,
    image: leatherImg,
    description:
      'Debossed genuine or vegan leather. The heritage, premium-label look for headwear, denim, and workwear.',
    seoTitle: 'Custom Leather Patches — Debossed | Xatlantic Patches',
    metaDesc:
      'Custom leather patches in genuine or vegan leather — debossed, laser-engraved, or printed. The premium label for hats and workwear. Low minimums, free proof.',
    intro:
      'Nothing says premium like leather. We deboss, laser-engrave, or print your mark on genuine or vegan leather for a rich, heritage finish that gets better with age — the signature look of craft brands and quality headwear.',
    features: [
      'Genuine or vegan leather in multiple tones',
      'Debossed, laser-engraved, or full-color printed',
      'Clean die-cut edges in any shape',
    ],
    useCases: 'Hats and beanies, denim, leather goods, workwear, and craft-brand apparel.',
    faqs: [
      {
        q: 'Real or vegan leather — what do you recommend?',
        a: 'Genuine leather offers natural grain and patina; vegan leather gives uniform color and an animal-free option. Both deboss beautifully.',
      },
      {
        q: 'Can leather patches be sewn onto hats?',
        a: 'Yes — leather patches are most often sewn onto headwear. We can also supply adhesive backing for temporary placement.',
      },
    ],
  },
  {
    id: 'woven',
    slug: 'woven-patches',
    name: 'Woven Patch',
    plural: 'Custom Woven Patches',
    short: 'Woven',
    basePrice: 3.2,
    image: wovenImg,
    description:
      'Finer thread, finer detail. Woven construction captures small text and intricate artwork with a smooth finish.',
    seoTitle: 'Custom Woven Patches — Fine Detail | Xatlantic Patches',
    metaDesc:
      'Custom woven patches capture fine lines and small text that embroidery can’t. Thin, smooth finish with merrowed or laser-cut edges. Instant pricing.',
    intro:
      'Woven patches are made on a loom with thread far finer than embroidery, so small text, thin lines, and complex logos come out crisp and legible. Thinner and smoother than embroidered, with the same durability.',
    features: [
      'Renders small text and fine line-work accurately',
      'Thin, flat profile with a smooth hand-feel',
      'Merrowed or laser-cut borders',
    ],
    useCases: 'Detailed logos, brand labels, sleeve hits, and designs with fine text.',
    faqs: [
      {
        q: 'Woven vs embroidered — which is right for my logo?',
        a: 'If your design has small text or fine detail, go woven. If you want bold texture and dimension, go embroidered.',
      },
      {
        q: 'Can woven patches be iron-on?',
        a: 'Yes — woven patches take iron-on, sew-on, Velcro, and adhesive backings just like embroidered patches.',
      },
    ],
  },
  {
    id: 'sublimated',
    slug: 'dye-sublimation-patches',
    name: 'Dye Sublimation Patch',
    plural: 'Custom Dye Sublimation Patches',
    short: 'Sublimated',
    basePrice: 2.6,
    image: sublimatedImg,
    description:
      'Full-color, photo-grade printing with unlimited gradients. Perfect for complex, vibrant, detailed designs.',
    seoTitle: 'Custom Dye Sublimation Patches | Xatlantic Patches',
    metaDesc:
      'Custom dye sublimation patches print photographs and unlimited colors directly into the fabric. Perfect for complex artwork. Low minimums, instant quote.',
    intro:
      'Dye sublimation bonds ink into the fabric itself, so photographs, gradients, and unlimited-color artwork reproduce with near-photographic accuracy. When thread can’t capture your design, sublimation can.',
    features: [
      'Unlimited colors, gradients, and photographic detail',
      'Ink is dyed into the fabric — it can’t crack or peel',
      'Optional embroidered border for a hybrid look',
    ],
    useCases: 'Photo patches, event commemoratives, intricate art, and full-color logos.',
    faqs: [
      {
        q: 'Can you print an actual photo on a patch?',
        a: 'Yes — sublimation is the only patch process that reproduces true photographic detail, including faces and complex scenes.',
      },
      {
        q: 'Will the print fade?',
        a: 'Sublimated ink is dyed into the fibers rather than printed on top, so it resists fading, cracking, and peeling.',
      },
    ],
  },
  {
    id: 'metflex',
    slug: 'metflex-patches',
    name: 'Metflex Patch',
    plural: 'Custom Metflex Patches',
    short: 'Metflex',
    basePrice: 4.5,
    image: metflexImg,
    description:
      'A metallic, reflective sheen with flexible backing. Eye-catching luxe detail for premium emblem work.',
    seoTitle: 'Custom Metflex Patches — Metallic | Xatlantic Patches',
    metaDesc:
      'Custom Metflex patches: thin, lightweight and metallic with full-color print options. A modern reflective finish for fashion apparel. Request a quote.',
    intro:
      'Metflex is our newest material: a thin, lightweight patch with a metallic sheen and optional full-color printing. It catches light like foil but flexes like fabric — a distinctive finish for fashion-forward brands.',
    features: [
      'Metallic or matte-metal finishes',
      'Thin, flexible, and lightweight on garment',
      'Full-color printing available over the metallic base',
    ],
    useCases: 'Fashion apparel, event merch, dancewear, and premium limited runs.',
    faqs: [
      {
        q: 'How durable is a Metflex patch?',
        a: 'Metflex handles normal wear and gentle washing well. For heavy-duty use we recommend PVC or embroidered construction.',
      },
      {
        q: 'How do I get Metflex pricing?',
        a: 'Metflex is quoted per design — send your artwork through the quote form and we’ll price it within one business day.',
      },
    ],
  },
]

export const otherProducts = [
  {
    id: 'lapel-pin',
    slug: 'lapel-pins',
    name: 'Lapel Pin',
    plural: 'Custom Lapel Pins',
    short: 'Lapel Pin',
    basePrice: 0.9,
    image: lapelPinImg,
    description:
      'Hard & soft enamel pins with jeweler-grade plating. Collectible, giftable, and endlessly customizable.',
    seoTitle: 'Custom Lapel Pins — Hard & Soft Enamel | Xatlantic Patches',
    metaDesc:
      'Custom enamel lapel pins with jeweler-grade plating in gold, silver or black nickel. Hard and soft enamel, low minimums, free proof. Price your pins instantly.',
    intro:
      'From employee recognition to collectible drops, custom enamel pins carry your design in polished metal. Choose soft enamel for texture and value, or hard enamel for a smooth, jewelry-grade finish.',
    features: [
      'Hard or soft enamel with die-struck detail',
      'Gold, silver, black nickel, and antique platings',
      'Butterfly clutch, rubber, or magnetic backings',
    ],
    useCases: 'Brand merch, employee awards, club membership, and collectible series.',
    faqs: [
      {
        q: 'Hard vs soft enamel — what’s the difference?',
        a: 'Soft enamel has recessed color between raised metal lines; hard enamel is polished flat for a smooth, premium surface.',
      },
      {
        q: 'What’s the minimum pin order?',
        a: 'Minimums start at 25 pieces, with per-unit pricing dropping quickly at 100+.',
      },
    ],
  },
  {
    id: 'keychain',
    slug: 'keychains',
    name: 'Keychain',
    plural: 'Custom Keychains',
    short: 'Keychain',
    basePrice: 1.0,
    image: keychainImg,
    description:
      'Durable custom keychains in PVC, metal, and leather. A practical, everyday-carry brand touchpoint.',
    seoTitle: 'Custom Keychains — PVC, Metal & Leather | Xatlantic Patches',
    metaDesc:
      'Custom keychains in PVC, embroidered, leather and metal styles. Durable everyday-carry merch with your logo. Low minimums and instant online pricing.',
    intro:
      'Keychains put your brand in someone’s pocket every single day. We build them in molded PVC, stitched embroidery, debossed leather, and die-struck metal — matched to your logo and budget.',
    features: [
      'PVC, embroidered, woven, leather, or metal builds',
      'Standard ring, carabiner, or snap-hook hardware',
      'Double-sided designs available',
    ],
    useCases: 'Giveaways, retail merch, dealership gifts, and event swag.',
    faqs: [
      {
        q: 'Which keychain material lasts longest?',
        a: 'Molded PVC and die-struck metal are the most durable for daily carry; leather develops character with age.',
      },
      {
        q: 'Can keychains be double-sided?',
        a: 'Yes — PVC and embroidered keychains can carry different artwork on each side for a small additional cost.',
      },
    ],
  },
  {
    id: 'coin',
    slug: 'challenge-coins',
    name: 'Challenge Coin',
    plural: 'Custom Challenge Coins',
    short: 'Challenge Coin',
    basePrice: 3.5,
    image: coinImg,
    description:
      'Die-struck metal coins with antique or polished finishes. The standard for recognition, military, and civic pride.',
    seoTitle: 'Custom Challenge Coins | Xatlantic Patches',
    metaDesc:
      'Custom challenge coins die-struck in brass with antique or polished finishes. Military, first responder and corporate recognition coins. Price yours instantly.',
    intro:
      'A challenge coin is recognition you can feel — real weight, struck metal, and detail on both faces. We craft coins for military units, fire and police departments, companies, and commemorative events.',
    features: [
      'Die-struck brass with 3D or 2D relief',
      'Antique, polished, or dual-plated finishes',
      'Edge options: reeded, rope-cut, or engraved',
    ],
    useCases: 'Military units, first responders, corporate awards, and anniversaries.',
    faqs: [
      {
        q: 'What size should a challenge coin be?',
        a: 'The classic is 1.75" — substantial in hand without being heavy. We mint from 1.5" to 3".',
      },
      {
        q: 'Can both sides have different designs?',
        a: 'Yes — two-sided artwork is standard on every coin we make.',
      },
    ],
  },
  {
    id: 'socks',
    slug: 'custom-socks',
    name: 'Custom Socks',
    plural: 'Custom Knit Socks',
    short: 'Custom Socks',
    basePrice: 4.0,
    image: socksImg,
    description:
      'Knit-in branded socks in your colorway. Soft, comfortable, and unexpectedly memorable merch.',
    seoTitle: 'Custom Socks — Knit-In Logo Socks | Xatlantic Patches',
    metaDesc:
      'Custom knit socks with your logo woven directly into the fabric — not printed. Dress and athletic styles in your brand colors. Request a free quote today.',
    intro:
      'Your logo, knit directly into the sock — not printed on top. We produce dress and athletic styles in your exact colorway, delivering the rare piece of merch people actually wear on repeat.',
    features: [
      'Logo and pattern knit into the fabric',
      'Dress, crew, and athletic performance styles',
      'Combed cotton and moisture-wicking blends',
    ],
    useCases: 'Corporate gifts, team kits, retail lines, and conference swag.',
    faqs: [
      {
        q: 'Are the designs printed or knit?',
        a: 'Knit — the design is part of the sock’s construction, so it never cracks or washes out.',
      },
      {
        q: 'What’s the sock minimum?',
        a: 'Custom socks start at 100 pairs. Send your artwork for an exact quote within one business day.',
      },
    ],
  },
  {
    id: 'shoe-charms',
    slug: 'shoe-charms',
    name: 'Shoe Charms',
    plural: 'Custom Shoe Charms',
    short: 'Shoe Charms',
    basePrice: 0.8,
    image: shoeCharmsImg,
    description:
      'Custom PVC charms for clogs and laces. A playful, on-trend product for fan and lifestyle brands.',
    seoTitle: 'Custom Shoe Charms — Croc & Lace Charms | Xatlantic Patches',
    metaDesc:
      'Custom PVC shoe charms for clogs and laces. Turn your logo or characters into collectible charms fans love. Low minimums and fast, free quotes.',
    intro:
      'Shoe charms turn any clog or lace into a canvas. Molded in durable PVC with your characters, logos, or slogans, they’re a low-cost, high-delight product for fan communities and lifestyle brands.',
    features: [
      'Durable molded PVC with vivid color',
      'Standard clog-hole fitting; lace adapters available',
      'From simple logos to multi-part character sets',
    ],
    useCases: 'Fan merch, school fundraisers, brand activations, and retail add-ons.',
    faqs: [
      {
        q: 'Do the charms fit all clogs?',
        a: 'They use the standard clog-hole post, which fits the popular brands and most look-alikes.',
      },
      {
        q: 'How small can charm details be?',
        a: 'We recommend keeping elements above 1mm; our proof will flag anything too fine before production.',
      },
    ],
  },
  {
    id: 'beanies',
    slug: 'custom-beanies',
    name: 'Beanies',
    plural: 'Custom Beanies',
    short: 'Beanies',
    basePrice: 6.5,
    image: beaniesImg,
    description:
      'Premium knit beanies finished with your patch or woven label. Cold-weather merch that gets worn for years.',
    seoTitle: 'Custom Beanies with Your Patch | Xatlantic Patches',
    metaDesc:
      'Custom knit beanies finished with your leather, woven or embroidered patch. Premium cold-weather merch in your brand colors. Request a free quote.',
    intro:
      'Pair a premium knit beanie with your patch — leather, woven, or embroidered — for headwear that carries your brand through every cold season. Choose cuffed or slouch styles in your colors.',
    features: [
      'Cuffed, slouch, and pom styles',
      'Finished with your choice of patch or label',
      'Soft acrylic and wool-blend knits',
    ],
    useCases: 'Craft brands, breweries, outdoor companies, and winter team gear.',
    faqs: [
      {
        q: 'Which patch looks best on a beanie?',
        a: 'Leather and woven patches are the most popular beanie pairings — both sew cleanly onto the cuff.',
      },
      {
        q: 'What’s the beanie minimum?',
        a: 'Custom beanies start at 50 pieces including the patch. Quotes come back within one business day.',
      },
    ],
  },
  {
    id: 'scarves',
    slug: 'custom-scarves',
    name: 'Scarves',
    plural: 'Custom Scarves',
    short: 'Scarves',
    basePrice: 7.5,
    image: scarvesImg,
    description:
      'Woven and printed scarves for supporters, teams, and luxury gifting. Soft hand-feel, vivid color retention.',
    seoTitle: 'Custom Team Scarves | Xatlantic Patches',
    metaDesc:
      'Custom woven supporter scarves and printed scarves for teams, clubs and events. Soft hand-feel, vivid knit-in color, tassel finishing. Request a free quote.',
    intro:
      'From match-day supporter scarves to corporate winter gifts, we weave your crest, colors, and slogans into both faces of a soft, substantial scarf — finished with classic tassels.',
    features: [
      'Double-sided woven designs with knit-in color',
      'Classic tassel or clean-edge finishing',
      'Acrylic, cotton, and premium blend options',
    ],
    useCases: 'Football clubs, universities, fan groups, and executive gifting.',
    faqs: [
      {
        q: 'Can each side of the scarf be different?',
        a: 'Yes — woven scarves carry independent artwork on each face as standard.',
      },
      {
        q: 'What’s the minimum scarf order?',
        a: 'Scarves start at 50 pieces. Send your design for a quote within one business day.',
      },
    ],
  },
]

// Flat list used by the navigation dropdown + product grid
export const allProducts = [...patches, ...otherProducts]

export const productBySlug = (slug) => allProducts.find((p) => p.slug === slug)

// Subset offered as selectable types inside the live price calculator.
// (Apparel items like socks/beanies/scarves price differently and are
//  handled as a quote request rather than the per-unit area calculator.)
export const calculatorProducts = [
  ...patches.filter((p) => p.id !== 'metflex'),
  otherProducts.find((p) => p.id === 'lapel-pin'),
  otherProducts.find((p) => p.id === 'keychain'),
  otherProducts.find((p) => p.id === 'coin'),
]
