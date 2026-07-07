// ─────────────────────────────────────────────────────────────────────────────
// Patch style / industry pages — drives the /patches/<slug> SEO pages.
// Each entry is one landing page targeting a specific buyer segment.
// `recommended` lists product ids (from products.js) to cross-link.
// ─────────────────────────────────────────────────────────────────────────────

export const styles = [
  {
    slug: 'military-patches',
    name: 'Military Patches',
    h1: 'Custom Military Patches',
    seoTitle: 'Custom Military Patches — Unit & Rank | Xatlantic Patches',
    metaDesc:
      'Custom military patches for every branch — unit insignia, rank, name tapes and morale designs. Regulation-quality embroidery, Velcro backing, low minimums.',
    intro:
      'From unit insignia to name tapes, we produce regulation-quality patches for the Army, Navy, Air Force, Marines, Coast Guard, and National Guard. Precise embroidery, correct colorways, and hook-and-loop backing built for daily wear.',
    points: [
      'Unit insignia, rank patches, and name tapes',
      'Hook-and-loop (Velcro) backing standard',
      'Subdued, multicam-friendly colorways available',
    ],
    recommended: ['embroidered', 'pvc', 'woven'],
  },
  {
    slug: 'army-patches',
    name: 'Army Patches',
    h1: 'Custom Army Patches',
    seoTitle: 'Custom Army Patches | Xatlantic Patches',
    metaDesc:
      'Custom Army patches: unit insignia, shoulder sleeve patches, name tapes and morale patches. OCP-compatible colors, Velcro backing, fast turnaround.',
    intro:
      'Shoulder sleeve insignia, morale designs, and name tapes crafted to spec — including OCP-compatible subdued colorways and hook-and-loop backing for uniform wear.',
    points: [
      'Shoulder sleeve insignia and unit crests',
      'OCP/multicam subdued color matching',
      'Morale patches in embroidered or PVC',
    ],
    recommended: ['embroidered', 'pvc'],
  },
  {
    slug: 'navy-patches',
    name: 'Navy Patches',
    h1: 'Custom Navy Patches',
    seoTitle: 'Custom Navy Patches — Ship Crests | Xatlantic Patches',
    metaDesc:
      'Custom Navy patches for squadrons, ships and commands. Detailed crest embroidery, flight-jacket patches and morale designs. Low minimums, free proof.',
    intro:
      'Squadron patches, ship crests, and command insignia rendered with the fine detail naval heraldry demands — from flight-jacket rounds to modern morale designs.',
    points: [
      'Squadron and ship crest reproduction',
      'Flight-jacket style merrowed rounds',
      'Fine-detail woven options for complex crests',
    ],
    recommended: ['embroidered', 'woven', 'pvc'],
  },
  {
    slug: 'air-force-patches',
    name: 'Air Force Patches',
    h1: 'Custom Air Force Patches',
    seoTitle: 'Custom Air Force Patches | Xatlantic Patches',
    metaDesc:
      'Custom Air Force patches for squadrons, wings and crews. Heritage roundels, nametags and morale patches with Velcro backing. Price yours instantly.',
    intro:
      'Squadron heritage, wing insignia, and crew morale patches — stitched or molded with accurate detail and hook-and-loop backing ready for flight suits and OCPs.',
    points: [
      'Squadron and wing insignia',
      'Flight-suit nametags and crew patches',
      'PVC morale patches for daily wear',
    ],
    recommended: ['embroidered', 'pvc', 'woven'],
  },
  {
    slug: 'fire-department-patches',
    name: 'Fire Department Patches',
    h1: 'Custom Fire Department Patches',
    seoTitle: 'Custom Fire Department Patches | Xatlantic Patches',
    metaDesc:
      'Custom fire department patches: shoulder patches, Maltese crosses, station numbers and memorial designs. Durable embroidery built for turnout wear.',
    intro:
      'Shoulder patches, Maltese crosses, and station insignia built to the standard your house deserves — dense embroidery, accurate department colors, and stitching that survives the job.',
    points: [
      'Department shoulder patches and rockers',
      'Maltese cross and station-number designs',
      'Memorial and anniversary commemoratives',
    ],
    recommended: ['embroidered', 'woven', 'coin'],
  },
  {
    slug: 'police-patches',
    name: 'Police Patches',
    h1: 'Custom Police Patches',
    seoTitle: 'Custom Police Patches | Xatlantic Patches',
    metaDesc:
      'Custom police patches for departments and units: shoulder patches, badges, K9 and SWAT insignia. Uniform-grade embroidery with precise detail.',
    intro:
      'Uniform-grade shoulder patches, specialized unit insignia, and commemorative designs for law enforcement — precise heraldry, correct colors, and department-approved durability.',
    points: [
      'Department shoulder and hat patches',
      'K9, SWAT, and specialty unit insignia',
      'Subdued tactical variants available',
    ],
    recommended: ['embroidered', 'pvc', 'coin'],
  },
  {
    slug: 'ems-patches',
    name: 'EMS Patches',
    h1: 'Custom EMS Patches',
    seoTitle: 'Custom EMS Patches — Paramedic & EMT | Xatlantic Patches',
    metaDesc:
      'Custom EMS patches for paramedics, EMTs and rescue squads. Star of Life designs, certification rockers and unit patches. Low minimums, free proof.',
    intro:
      'Star of Life emblems, certification rockers, and squad insignia for EMS professionals — stitched clean, colored correctly, and ready for uniform placement.',
    points: [
      'Star of Life and rescue squad designs',
      'EMT / Paramedic certification rockers',
      'Reflective-accent options for visibility',
    ],
    recommended: ['embroidered', 'woven'],
  },
  {
    slug: 'first-responder-patches',
    name: 'First Responder Patches',
    h1: 'Custom First Responder Patches',
    seoTitle: 'Custom First Responder Patches | Xatlantic Patches',
    metaDesc:
      'Custom first responder patches honoring fire, police, EMS and dispatch. Unit insignia, thin-line designs and memorial patches. Fast, free quotes.',
    intro:
      'One page for every service: fire, police, EMS, dispatch, and search & rescue. Unit insignia, thin-line tributes, and memorial designs produced with the respect they deserve.',
    points: [
      'Multi-service and joint-unit designs',
      'Thin-line tribute and memorial patches',
      'Coordinated patch + challenge coin sets',
    ],
    recommended: ['embroidered', 'pvc', 'coin'],
  },
  {
    slug: 'morale-patches',
    name: 'Morale Patches',
    h1: 'Custom Morale Patches',
    seoTitle: 'Custom Morale Patches | Xatlantic Patches',
    metaDesc:
      'Custom morale patches in PVC or embroidery with Velcro backing. Humorous, unit-pride and collectible designs for military, gyms and teams. Instant pricing.',
    intro:
      'Morale patches are personality you can stick to a plate carrier. We mold and stitch humorous, irreverent, and unit-pride designs with hook-and-loop backing — built for gear, range bags, and collections.',
    points: [
      'PVC or embroidered with Velcro standard',
      'Glow-in-the-dark and blacklight options',
      'Short runs welcome for collectible drops',
    ],
    recommended: ['pvc', 'embroidered'],
  },
  {
    slug: 'scout-patches',
    name: 'Scout Patches',
    h1: 'Custom Scout & Troop Patches',
    seoTitle: 'Custom Scout Patches — Troop Designs | Xatlantic Patches',
    metaDesc:
      'Custom scout patches for troops, packs and councils. Rank designs, camp commemoratives and trading patches kids love. Low minimums for small troops.',
    intro:
      'Troop numerals, camp commemoratives, and trading designs for scouting programs of every kind. Low minimums mean even a small troop can afford a patch worth collecting.',
    points: [
      'Troop, pack, and council designs',
      'Camp and jamboree commemoratives',
      'Minimums from 25 pieces for small troops',
    ],
    recommended: ['embroidered', 'sublimated'],
  },
  {
    slug: 'sports-patches',
    name: 'Sports Patches',
    h1: 'Custom Sports Patches',
    seoTitle: 'Custom Sports Patches — Team Logos | Xatlantic Patches',
    metaDesc:
      'Custom sports patches for teams and leagues: jersey crests, championship commemoratives and varsity letters. Durable stitching for game-day wear.',
    intro:
      'Jersey crests, championship patches, and varsity letters for teams at every level — stitched to survive seasons of game-day wear and washing.',
    points: [
      'Jersey crests and shoulder patches',
      'Championship and season commemoratives',
      'Chenille varsity letters and awards',
    ],
    recommended: ['embroidered', 'chenille', 'woven'],
  },
  {
    slug: 'biker-patches',
    name: 'Biker Patches',
    h1: 'Custom Biker Patches',
    seoTitle: 'Custom Biker Patches — Vest & Rockers | Xatlantic Patches',
    metaDesc:
      'Custom biker patches: large back patches, rockers, and club insignia stitched for leather vests. Bold embroidery up to 12 inches. Free digital proof.',
    intro:
      'Back patches, rockers, and club insignia sized for leather — bold embroidery up to 12" with merrowed borders that hold their edge on the road.',
    points: [
      'Large-format back patches up to 12"',
      'Top and bottom rocker sets',
      'Heavy-duty sew-on construction for leather',
    ],
    recommended: ['embroidered', 'leather'],
  },
  {
    slug: 'name-patches',
    name: 'Name Patches',
    h1: 'Custom Name Patches',
    seoTitle: 'Custom Name Patches for Workwear | Xatlantic Patches',
    metaDesc:
      'Custom name patches for uniforms and workwear. Classic oval and rectangular styles, script or block lettering, iron-on or sew-on. Order from 25 pieces.',
    intro:
      'The classic workwear name patch — oval or rectangular, script or block lettering, in your company colors. Iron-on for quick application or sew-on for the long haul.',
    points: [
      'Classic oval, rectangle, and custom shapes',
      'Script, block, and monogram lettering',
      'Bulk employee-roster ordering available',
    ],
    recommended: ['embroidered', 'woven'],
  },
  {
    slug: 'merit-badges',
    name: 'Merit Badges',
    h1: 'Custom Merit Badges',
    seoTitle: 'Custom Merit Badges | Xatlantic Patches',
    metaDesc:
      'Custom merit badges and achievement patches for clubs, camps, schools and corporate programs. Collectible round designs from 1.5". Low minimums.',
    intro:
      'Recognition people can wear: round achievement badges for camps, clubs, schools, and even corporate milestone programs. Collect-them-all formats from 1.5" up.',
    points: [
      'Classic round badge formats from 1.5"',
      'Series and level designs for progression',
      'Iron-on backing for easy sash application',
    ],
    recommended: ['embroidered', 'sublimated', 'woven'],
  },
]

export const styleBySlug = (slug) => styles.find((s) => s.slug === slug)
