export type Faq = { q: string; a: string }
export type Detail = {
  kind: 'product' | 'solution'
  slug: string
  name: string
  tagline: string
  summary: string
  overview: string[]
  uses: string[]
  benefits: string[]
  steps: { title: string; text: string }[]
  faqs: Faq[]
  related: string[]
  variant: number
  /** Optional: path to a real photo in /public/images, e.g. '/images/swoad.jpg'. Falls back to generated art. */
  image?: string
}

const steps = [
  { title: 'Scope', text: 'Define the area, question and decisions the work should support.' },
  { title: 'Gather', text: 'Collect the relevant geospatial information and imagery.' },
  { title: 'Analyse', text: 'Examine spatial patterns and changes to produce structured insights.' },
  { title: 'Report', text: 'Share findings in a form your team can plan and act on.' },
]

export const products: Detail[] = [
  {
    kind: 'product', slug: 'swoad', name: 'SWOAD', variant: 0, image: '/images/swoad.jpg',
    tagline: 'A THAZHAL offering for geospatial intelligence.',
    summary: 'SWOAD is a THAZHAL offering. Replace this introduction with the official product description when it is available.',
    overview: [
      'This page is driven by structured data in src/data/content.ts. The official SWOAD description, capabilities and terminology should be added there.',
      'Until then, the content on this page describes general geospatial workflows and makes no claims about specific SWOAD features.',
    ],
    uses: ['Use case to be confirmed', 'Application area to be confirmed', 'Intended users to be confirmed'],
    benefits: ['Benefit to be confirmed', 'Outcome to be confirmed', 'Integration details to be confirmed'],
    steps,
    faqs: [
      { q: 'What is SWOAD?', a: 'SWOAD is a THAZHAL offering. Official details will be published here. Contact the team to learn more.' },
      { q: 'Who is it for?', a: 'Intended audiences will be confirmed with the official description.' },
    ],
    related: ['/products/climate-audit', '/solutions/environmental-monitoring'],
  },
  {
    kind: 'product', slug: 'climate-audit', name: 'Climate Audit', variant: 1, image: '/images/climate-audit.jpg',
    tagline: 'Structured geospatial insight for climate-focused assessment.',
    summary: 'Support climate-focused assessment through environmental information, geospatial analysis, and structured insights that can inform sustainability planning.',
    overview: [
      'Climate Audit brings environmental information and spatial analysis together so organisations can better understand conditions that matter to sustainability planning.',
      'Scope, data sources and deliverables are agreed per project.',
    ],
    uses: ['Sustainability planning inputs', 'Landscape and land-cover context', 'Site-level environmental assessment', 'Supporting material for climate reporting'],
    benefits: ['Clearer view of environmental conditions', 'Structured insights for planning', 'Spatial context for decisions'],
    steps,
    faqs: [
      { q: 'What does a Climate Audit deliver?', a: 'Deliverables depend on scope and are agreed with you at the start of a project.' },
      { q: 'Does it replace regulatory assessments?', a: 'No. It provides spatial insight that can inform planning; it is not a certification.' },
    ],
    related: ['/products/fire-audit', '/solutions/environmental-monitoring'],
  },
  {
    kind: 'product', slug: 'fire-audit', name: 'Fire Audit', variant: 2, image: '/images/fire-audit.jpg',
    tagline: 'Spatial context for fire-risk assessment and planning.',
    summary: 'Support fire-risk assessment and informed planning through relevant spatial information, environmental context, and infrastructure insights.',
    overview: [
      'Fire Audit combines spatial information, environmental context and infrastructure insight to support risk-aware planning.',
      'It supports assessment and planning. It is not a verified fire-prediction system.',
    ],
    uses: ['Fire-risk context for sites and assets', 'Vegetation and landscape review', 'Infrastructure exposure review', 'Planning support'],
    benefits: ['Better situational awareness', 'Evidence for planning conversations', 'Spatial view of assets and surroundings'],
    steps,
    faqs: [
      { q: 'Can Fire Audit predict fires?', a: 'No. It supports risk assessment and planning with spatial information.' },
      { q: 'What areas can it cover?', a: 'Coverage is agreed per project. Contact the team to discuss your area.' },
    ],
    related: ['/products/climate-audit', '/solutions/infrastructure-monitoring'],
  },
]

export const solutions: Detail[] = [
  {
    kind: 'solution', slug: 'environmental-monitoring', name: 'Environmental Monitoring', variant: 3, image: '/images/environmental-monitoring.jpg',
    tagline: 'Observe, assess and understand changing environments.',
    summary: 'Understand changing environmental conditions with geospatial monitoring and imagery analytics designed to support observation, assessment, and informed environmental decisions.',
    overview: [
      'Environmental monitoring uses geospatial data and imagery to observe how landscapes, vegetation and water systems change over time.',
      'These are general solution areas. Specific capabilities are scoped with each organisation.',
    ],
    uses: ['Environmental change observation', 'Geospatial imagery analysis', 'Land and landscape assessment', 'Environmental reporting and insights'],
    benefits: ['Consistent observation over large areas', 'Evidence for environmental decisions', 'Clear, shareable reporting'],
    steps,
    faqs: [
      { q: 'What data is used?', a: 'Sources depend on the question and area. They are agreed during scoping.' },
      { q: 'Can this be ongoing?', a: 'Monitoring can be one-off or repeated; discuss cadence with the team.' },
    ],
    related: ['/products/climate-audit', '/products/swoad'],
  },
  {
    kind: 'solution', slug: 'infrastructure-monitoring', name: 'Infrastructure Monitoring', variant: 4, image: '/images/infrastructure-monitoring.jpg',
    tagline: 'A clearer view of critical infrastructure.',
    summary: 'Gain a clearer view of critical infrastructure through geospatial information, imagery analysis, and monitoring workflows that support assessment and operational planning.',
    overview: [
      'Infrastructure monitoring applies geospatial information and imagery analysis to roads, bridges, utilities and industrial facilities.',
      'These are general solution areas. Specific capabilities are scoped with each organisation.',
    ],
    uses: ['Infrastructure visibility', 'Spatial asset assessment', 'Change observation', 'Risk-informed planning'],
    benefits: ['Wider view of asset networks', 'Earlier awareness of change', 'Better-informed operational planning'],
    steps,
    faqs: [
      { q: 'Which assets can be assessed?', a: 'Roads, bridges, industrial sites and similar assets, depending on scope.' },
      { q: 'Does it replace on-site inspection?', a: 'No. It complements field inspection with spatial context.' },
    ],
    related: ['/products/fire-audit', '/solutions/environmental-monitoring'],
  },
]

export const details = [...products, ...solutions]
export const pathOf = (d: Detail) => `/${d.kind === 'product' ? 'products' : 'solutions'}/${d.slug}`

export const nav = {
  products: products.map((p, i) => ({ label: p.name, to: pathOf(p), desc: p.tagline, icon: ['Layers', 'Thermometer', 'Flame'][i] })),
  solutions: solutions.map((s, i) => ({ label: s.name, to: pathOf(s), desc: s.tagline, icon: ['Trees', 'Building2'][i] })),
}

export type Article = { slug: string; title: string; category: string; date: string; excerpt: string; body: string[]; variant: number; image?: string }
const body = (t: string) => [
  `Draft article. ${t}`,
  'The full article text will be added here. This placeholder keeps the layout, routing and filters fully working in the meantime.',
  'Edit src/data/articles in content.ts to replace titles, dates, excerpts and body copy.',
]
export const articles: Article[] = [
  { slug: 'geospatial-intelligence-environmental-decision-making', title: 'How Geospatial Intelligence Supports Environmental Decision-Making', category: 'Environment', date: 'Draft', excerpt: 'How spatial information helps teams understand environmental change and act on it.', body: body('Geospatial intelligence and environmental decisions.'), variant: 0, image: '/images/blog/blog-1.jpg' },
  { slug: 'understanding-infrastructure-satellite-imagery', title: 'Understanding Infrastructure Through Satellite Imagery', category: 'Infrastructure', date: 'Draft', excerpt: 'What imagery can and cannot reveal about roads, bridges and industrial sites.', body: body('Infrastructure and imagery.'), variant: 1, image: '/images/blog/blog-2.jpg' },
  { slug: 'spatial-data-climate-risk-assessment', title: 'The Role of Spatial Data in Climate Risk Assessment', category: 'Climate', date: 'Draft', excerpt: 'Why location matters when assessing climate-related risk.', body: body('Spatial data and climate risk.'), variant: 2, image: '/images/blog/blog-3.jpg' },
  { slug: 'reading-landscape-change-over-time', title: 'Reading Landscape Change Over Time', category: 'Environment', date: 'Draft', excerpt: 'A primer on comparing imagery across seasons and years.', body: body('Landscape change.'), variant: 3, image: '/images/blog/blog-4.jpg' },
  { slug: 'planning-with-spatial-context', title: 'Planning With Spatial Context', category: 'Infrastructure', date: 'Draft', excerpt: 'Using maps and imagery to support operational planning.', body: body('Spatial planning.'), variant: 4, image: '/images/blog/blog-5.jpg' },
  { slug: 'fire-risk-and-the-landscape', title: 'Fire Risk and the Landscape', category: 'Climate', date: 'Draft', excerpt: 'How vegetation, terrain and assets shape fire-risk conversations.', body: body('Fire risk and terrain.'), variant: 0, image: '/images/blog/blog-6.jpg' },
]
export const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))]

/** Add verified partners here — files go in public/images/logos/ */
export const partners: { name: string; logo: string }[] = [
  { name: 'Partner 1', logo: '/images/logos/partner-1.png' },
  { name: 'Partner 2', logo: '/images/logos/partner-2.png' },
  { name: 'Partner 3', logo: '/images/logos/partner-3.png' },
  { name: 'Partner 4', logo: '/images/logos/partner-4.png' },
  { name: 'Partner 5', logo: '/images/logos/partner-5.png' },
  { name: 'Partner 6', logo: '/images/logos/partner-6.png' },
  { name: 'Partner 7', logo: '/images/logos/partner-7.png' },
  { name: 'Partner 8', logo: '/images/logos/partner-8.png' },
  { name: 'Partner 9', logo: '/images/logos/partner-9.png' },
]
export const supporters: { name: string; logo: string }[] = [
  { name: 'Supporter 1', logo: '/images/logos/supporter-1.png' },
  { name: 'Supporter 2', logo: '/images/logos/supporter-2.png' },
  { name: 'Supporter 3', logo: '/images/logos/supporter-3.png' },
  { name: 'Supporter 4', logo: '/images/logos/supporter-4.png' },
]

export const social = {
  x: import.meta.env.VITE_X_URL as string | undefined,
  linkedin: (import.meta.env.VITE_LINKEDIN_URL as string | undefined) || 'https://www.linkedin.com/company/thazhal',
  instagram: import.meta.env.VITE_INSTAGRAM_URL as string | undefined,
}
export const contact = { hq: 'Tirunelveli, Tamil Nadu, India', email: 'contact@thazhal.in' }

export type TeamMember = {
  name: string
  role: string
  image?: string
  linkedin?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Vignesh Kandasamy',
    role: 'Founder / CEO',
    image: '/images/team/vignesh-kandasamy.jpeg',
    linkedin: 'https://www.linkedin.com/in/kandasamy-s-98149057/',
  },
  {
    name: 'Nivedhitha',
    role: 'Co-Founder / CTO',
    image: '/images/team/nivedhitha.png',
    linkedin: 'https://www.linkedin.com/in/nivedhitha-ajithkumar-125745b8/',
  },
  {
    name: 'Dinesh Kumar',
    role: 'Team Lead Geospatial Expert',
    image: '/images/team/dinesh-kumar.jpeg',
    linkedin: 'https://www.linkedin.com/in/dinesh-kumar-3015b9210/',
  },
  {
    name: 'Robinson',
    role: 'Remote Sensing Specialist',
    image: '/images/team/robinson.jpeg',
    linkedin: 'https://www.linkedin.com/in/robinson-j-b99a491b8/',
  },
  {
    name: 'Sree sutha',
    role: 'Remote Sensing & AI Developer',
    image: '/images/team/sree-sutha.jpg',
    linkedin: 'https://www.linkedin.com/in/sree-sutha-s-9b98ba2a0/',
  },
  {
    name: 'Aruna',
    role: 'Remote Sensing & AI Developer',
    image: '/images/team/aruna.jpg',
    linkedin: 'https://www.linkedin.com/in/aruna-p-11876a2a2/',
  },
  {
    name: 'Antony Jeri Christo',
    role: 'IoT Engineer',
    image: '/images/team/antony-jeri-christo.png',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Robin Sam Paul',
    role: 'Business Development Analyst',
    image: '/images/team/robin-sam-paul.png',
    linkedin: 'https://www.linkedin.com/in/sam-paul/',
  },
  {
    name: 'Bhuvaneswari',
    role: 'Product Manager',
    image: '/images/team/bhuvaneswari.jpg',
    linkedin: 'https://www.linkedin.com/in/bhuvaneswari-b-819094357/',
  },
  {
    name: 'Bala Krishnan',
    role: 'Full Stack Developer',
    image: '/images/team/bala-krishnan.png',
    linkedin: 'https://www.linkedin.com/in/bala-krishnan-41107631a/',
  },
  {
    name: 'Stalin Saran',
    role: 'Business Development Analyst',
    image: '/images/team/stalin-saran.png',
    linkedin: 'https://www.linkedin.com/in/stalin-saran-721916343/',
  },
  {
    name: 'Ramki',
    role: 'Geospatial AI Analyst',
    image: '/images/team/ramki.png',
    linkedin: 'https://www.linkedin.com/in/ramkir/',
  },
]

export const advisors: TeamMember[] = [
  {
    name: 'Sayantan Majumdar',
    role: 'Assistant Research Professor, Desert Research Institute, Nevada, USA',
    image: '/images/team/sayantan-majumdar.jpg',
    linkedin: 'https://www.linkedin.com/in/sayantanmajumdar/',
  },
  {
    name: 'Manoj Hari',
    role: 'Earth System Scientist, University of Cambridge',
    image: '/images/team/manoj-hari.jpeg',
    linkedin: 'https://www.linkedin.com/in/',
  },
]
