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
    summary: 'SWOAD (Surface Water Observation and Assessment Dashboard) combines multi-satellite earth observation with localized hydro-spatial intelligence to deliver continuous water surface tracking, catchment capacity estimation, and early anomaly alerts.',
    overview: [
      'SWOAD serves municipal water authorities, irrigation boards, and environmental stewards with near-real-time digital surface water twins.',
      'Integrating Synthetic Aperture Radar (SAR) with high-resolution multispectral feeds ensures round-the-clock surface water visibility through cloud cover and extreme storms.',
    ],
    uses: ['Reservoir and lake capacity monitoring', 'Flood extent mapping and early warning', 'Surface water balance and drainage analysis', 'Industrial water security audits'],
    benefits: ['Automated 24/7 hydrological observation', 'Cloud-penetrating radar analytics', 'Actionable alerts for decision-makers'],
    steps,
    faqs: [
      { q: 'What is SWOAD?', a: 'SWOAD is THAZHAL’s flagship surface water observation and intelligence dashboard designed for proactive water resources governance.' },
      { q: 'Who is it for?', a: 'Water resource departments, irrigation engineers, agricultural cooperatives, and environmental compliance teams.' },
    ],
    related: ['/products/environmental-monitoring', '/products/forest-intelligence'],
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
    related: ['/products/fire-audit', '/products/environmental-monitoring'],
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
    related: ['/products/forest-intelligence', '/products/infrastructure-monitoring'],
  },
  {
    kind: 'product', slug: 'environmental-monitoring', name: 'Environmental Monitoring', variant: 3, image: '/images/environmental-monitoring.jpg',
    tagline: 'Observe, assess and understand changing environments.',
    summary: 'Understand changing environmental conditions with geospatial monitoring and imagery analytics designed to support observation, assessment, and informed environmental decisions.',
    overview: [
      'Environmental monitoring uses geospatial data and imagery to observe how landscapes, vegetation and water systems change over time.',
      'Delivers automated spectral indices (NDVI, NDWI, EVI) and time-series change detection across vast geographies.',
    ],
    uses: ['Environmental change observation', 'Geospatial imagery analysis', 'Land and landscape assessment', 'Environmental reporting and insights'],
    benefits: ['Consistent observation over large areas', 'Evidence for environmental decisions', 'Clear, shareable reporting'],
    steps,
    faqs: [
      { q: 'What data is used?', a: 'Sources depend on the question and area. High-cadence satellite constellations, SAR, and multispectral sensors are agreed during scoping.' },
      { q: 'Can this be ongoing?', a: 'Monitoring can be configured for automated periodic reporting or continuous alert streams.' },
    ],
    related: ['/products/swoad', '/products/forest-intelligence'],
  },
  {
    kind: 'product', slug: 'infrastructure-monitoring', name: 'Infrastructure Monitoring', variant: 4, image: '/images/infrastructure-monitoring.jpg',
    tagline: 'A clearer view of critical infrastructure.',
    summary: 'Gain a clearer view of critical infrastructure through geospatial information, imagery analysis, and monitoring workflows that support assessment and operational planning.',
    overview: [
      'Infrastructure monitoring applies geospatial information, SAR interferometry (InSAR), and multispectral analytics to linear assets, bridges, utilities, and industrial facilities.',
      'Enables engineering teams to detect structural displacement, corridor encroachment, and slope instability long before failures occur.',
    ],
    uses: ['Infrastructure visibility & asset corridors', 'Millimeter-scale surface displacement', 'Corridor encroachment tracking', 'Risk-informed maintenance planning'],
    benefits: ['Network-wide visibility across linear assets', 'Proactive identification of structural displacement', 'Optimized field inspection scheduling'],
    steps,
    faqs: [
      { q: 'Which assets can be assessed?', a: 'Highways, rail corridors, bridges, pipelines, dams, energy grids, and industrial installations.' },
      { q: 'Does it replace on-site inspection?', a: 'No. It prioritizes and guides field inspections with macro-level spatial telemetry.' },
    ],
    related: ['/products/fire-audit', '/products/environmental-monitoring'],
  },
  {
    kind: 'product', slug: 'forest-intelligence', name: 'Forest Intelligence', variant: 5, image: '/images/environmental-monitoring.jpg',
    tagline: 'Canopy health, biomass auditing, and illegal logging surveillance.',
    summary: 'High-cadence satellite intelligence to monitor forest ecosystems, estimate above-ground biomass, detect illegal deforestation, and protect biodiversity corridors.',
    overview: [
      'Forest Intelligence applies multi-temporal radar and high-resolution optical imagery to track changes in canopy density, tree cover loss, and habitat fragmentation.',
      'Designed for conservation trusts, forest departments, carbon credit auditors, and commercial forestry managers.',
    ],
    uses: ['Canopy cover & deforestation tracking', 'Above-ground biomass & carbon stock estimation', 'Wildfire burn-severity assessment', 'Biodiversity corridor mapping'],
    benefits: ['Rapid detection of illegal logging and clearing', 'Verifiable spatial evidence for carbon projects', 'Automated alerts on forest degradation'],
    steps,
    faqs: [
      { q: 'How frequently is forest data updated?', a: 'Weekly to daily updates depending on the satellite constellation chosen for your target area.' },
      { q: 'Can it differentiate between seasonal changes and deforestation?', a: 'Yes. Our time-series AI models account for seasonal leaf-fall and phenology to prevent false positives.' },
    ],
    related: ['/products/environmental-monitoring', '/products/fire-audit'],
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
    related: ['/solutions/forest-intelligence', '/products/swoad'],
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
    related: ['/solutions/forest-intelligence', '/products/infrastructure-monitoring'],
  },
  {
    kind: 'solution', slug: 'forest-intelligence', name: 'Forest Intelligence', variant: 5, image: '/images/environmental-monitoring.jpg',
    tagline: 'Canopy health, biomass auditing, and illegal logging surveillance.',
    summary: 'High-cadence satellite intelligence to monitor forest ecosystems, estimate above-ground biomass, detect illegal deforestation, and protect biodiversity corridors.',
    overview: [
      'Forest Intelligence applies multi-temporal radar and optical satellite data to track canopy health, land clearing, and carbon sequestration potentials.',
      'Enables government agencies and conservation organizations to enforce ecological governance and protect critical green cover.',
    ],
    uses: ['Canopy cover loss detection', 'Biomass and carbon stock analysis', 'Forest fire recovery monitoring', 'Protected reserve surveillance'],
    benefits: ['Continuous spatial evidence of canopy health', 'Independent verification for ESG and forestry standards', 'Early alert on logging activities'],
    steps,
    faqs: [
      { q: 'What sensors are utilized?', a: 'Optical multispectral satellites, SAR (Synthetic Aperture Radar), and LiDAR elevation datasets.' },
      { q: 'Can it track historical trends?', a: 'Yes. Historical archive analysis going back over two decades can be conducted.' },
    ],
    related: ['/solutions/environmental-monitoring', '/products/forest-intelligence'],
  },
]

export const details = [...products, ...solutions]
export const pathOf = (d: Detail) => `/${d.kind === 'product' ? 'products' : 'solutions'}/${d.slug}`

const productIcons = ['Layers', 'Thermometer', 'Flame', 'Activity', 'Building2', 'Trees']
const solutionIcons = ['Activity', 'Building2', 'Trees']

export const nav = {
  products: products.map((p, i) => ({ label: p.name, to: pathOf(p), desc: p.tagline, icon: productIcons[i] || 'Layers' })),
  solutions: solutions.map((s, i) => ({ label: s.name, to: pathOf(s), desc: s.tagline, icon: solutionIcons[i] || 'Trees' })),
  company: [
    { label: 'About', to: '/about', desc: 'Our mission, team, and geospatial vision.', icon: 'Building2' },
    { label: 'Blogs', to: '/blog', desc: 'Insights, research, and technical articles.', icon: 'Layers' },
    { label: 'Awards & Recognitions', to: '/awards', desc: 'Honors, milestones, and industry achievements.', icon: 'Flame' },
  ],
}

export type Article = { slug: string; title: string; category: string; author?: string; date: string; excerpt: string; body: string[]; variant: number; image?: string }
const body = (t: string) => [
  `${t}`,
  'Geospatial intelligence is revolutionizing the way organizations observe, understand, and protect our environment and critical resources.',
  'Combining satellite earth observation, automated spatial analytics, and machine learning models enables rapid situational awareness and informed decision-making.',
  'Contact the THAZHAL team to learn more about our implementations and case studies for this domain.',
]
export const articles: Article[] = [
  {
    slug: 'digital-water-twin-revolutionizing-water-management',
    title: 'Digital Water Twin: Revolutionizing Water Management with Geospatial Technologies',
    category: 'Water Management',
    author: 'Thazhal',
    date: '22 NOV',
    excerpt: 'How spatial digital twins and geospatial technologies are transforming surface and groundwater monitoring, predictive management, and resilience.',
    variant: 0,
    image: '/images/blog/blog-1.jpg',
    body: [
      '### What is a Digital Water Twin?',
      'A Digital Water Twin is a virtual, dynamic representation of physical water systems—ranging from river basins and urban drainage networks to reservoirs, aquifers, and irrigation canals. By synchronizing real-time sensor data, spatial earth observation, and high-fidelity hydrological models, a Digital Water Twin replicates the real-world behavior of water assets in a computational environment. It allows water authorities, environmental scientists, and civil engineers to simulate scenarios, forecast flood or drought events, and optimize distribution with unprecedented accuracy.',

      '### Current Global Developments in Digital Water Twins',
      'Across the globe, governments and research institutions are deploying digital twins to tackle freshwater stress and climate volatility:',
      '**1. Europe: Leading the Innovation**\nInitiatives like the European Union’s Destination Earth (DestinE) and national water agency projects are setting benchmarks. European water utilities use digital twins for watershed-scale flood early warning, asset management, and wastewater quality control.',
      '**2. Australia: Smart Solutions for Scarcity**\nFacing prolonged droughts and acute arid conditions, Australian basin authorities utilize digital water twins to simulate water allocation across agricultural corridors and safeguard ecological flow requirements in vulnerable river basins.',
      '**3. North America: Enhancing Water Quality**\nIn North America, municipal utilities leverage digital twins coupled with storm surge and runoff simulations to detect combined sewer overflows, monitor contaminant plumes, and safeguard municipal drinking reservoirs.',
      '**4. Asia: Urban Water Revolution**\nMegacities across Asia are adopting digital twin frameworks to manage extreme monsoonal inundation, urban storm runoff, and aquifer depletion caused by rapid urbanization.',
      '**5. Innovative Case Studies**\nFrom automated gate controls in smart canals to predictive reservoir drawdown ahead of severe typhoons, digital twins are proving that virtual simulations translate directly into saved lives, preserved resources, and reduced municipal operating costs.',

      '### Geospatial Technologies: The Backbone of Digital Water Twins',
      'A digital twin is only as good as the spatial data feeding it. The convergence of modern geospatial technologies provides the foundational infrastructure:',
      '**1. Satellite Remote Sensing**\nMulti-spectral and Synthetic Aperture Radar (SAR) imagery provide frequent, cloud-penetrating views of surface water extent, wetland health, soil moisture levels, and reservoir surface elevations over vast geographical expanses.',
      '**2. Geographic Information Systems (GIS)**\nGIS serves as the central spatial operating system, organizing multi-layered environmental parameters—such as digital elevation models (DEMs), land use land cover (LULC), soil permeability, and hydrographic network vectors.',
      '**3. IoT and Real-Time Monitoring**\nTelemetry stations, acoustic flow meters, water level radar sensors, and water quality probes deliver high-frequency ground truth measurements directly into the digital twin stream.',
      '**4. AI and Machine Learning**\nDeep learning models analyze spatial-temporal trends, predict flow velocities, automate anomaly detection in sensor feeds, and accelerate compute-intensive hydrodynamic calculations.',
      '**5. Hydrological and Hydraulic Modeling**\nPhysics-based 1D, 2D, and 3D hydrodynamic models calculate overland flow, sediment transport, and subsurface infiltration, giving the twin its predictive intelligence.',

      '### Thazhal Geospatial Analytics: Innovating with SWOAD',
      'At THAZHAL, we are at the forefront of this digital transformation with **SWOAD (Surface Water Observation and Assessment Dashboard)**. SWOAD combines multi-satellite observation with intelligent localized modeling to deliver continuous water surface tracking, catchment capacity estimation, and early anomaly alerts. By bridging the gap between raw spatial observation and actionable municipal analytics, SWOAD turns complex geospatial data into an intuitive operational tool for stakeholders.',

      '### Challenges in Implementing Digital Water Twins',
      'While the potential is vast, real-world deployment faces distinct challenges:',
      '• **Data Fragmentation:** Siloed datasets between meteorology, irrigation, and municipal departments.\n• **High Computational Demands:** Running real-time 2D hydraulic models requires robust cloud infrastructure.\n• **Sensor Maintenance:** In-situ IoT networks demand sustained calibration and maintenance in harsh environmental conditions.\n• **Calibration Uncertainty:** Bridging macroscopic satellite observations with micro-level ground truth requires advanced domain expertise.',

      '### The Path Forward',
      'The evolution of cloud geospatial computing, open data APIs, and edge AI is lowering the barrier to entry for digital water twins. As high-cadence satellite constellations expand, digital twins will shift from reactive monitoring dashboards to proactive, autonomous decision-support systems that govern smart sluice gates, optimize regional irrigation schedules, and safeguard municipal water reserves.',

      '### Conclusion',
      'Digital Water Twins represent a paradigm shift in how humanity manages its most vital resource. By fusing geospatial intelligence, real-time IoT feeds, and hydrodynamic modeling, organizations can anticipate risks rather than merely react to crises. THAZHAL remains committed to pioneering forward-looking geospatial technologies that foster resilient water governance for a sustainable planet.',
    ],
  },
  {
    slug: 'revolutionizing-farm-management-automated-boundary-delineation',
    title: 'Revolutionizing Farm Management with Automated Boundary Delineation',
    category: 'Agriculture',
    author: 'Thazhal',
    date: '25 OCT',
    excerpt: 'Automating agricultural field boundary mapping with high-resolution imagery and computer vision to empower precision farming and crop auditing.',
    variant: 1,
    image: '/images/blog/blog-2.jpg',
    body: [
      '### Introducing Thazhal’s Automated Farm Boundary Detection',
      'Accurate parcel and field boundary mapping is the bedrock of digital agriculture, precision farming, crop insurance, and subsidy administration. Historically, delineating farm boundaries relied on labor-intensive manual GPS surveys or subjective on-screen digitization. THAZHAL introduces an automated farm boundary detection engine that leverages high-resolution satellite imagery, multi-temporal vegetation indices, and state-of-the-art computer vision segmentation models to delineate individual crop fields with pinpoint precision.',

      '### Key Benefits of Thazhal’s Automated Boundary Detection',
      '• **Rapid Scalability:** Process thousands of square kilometers of agricultural land in hours rather than months.\n• **Sub-Meter Boundary Precision:** Accurately identifies natural hedges, access tracks, irrigation bunds, and ditch lines.\n• **Temporal Consistency:** Tracks boundary changes season-over-season, capturing crop rotations, parcel consolidation, or land-use conversions.\n• **Fraud Reduction for Insurance & Subsidies:** Eliminates fraudulent overlapping claims and boundary disputes through indisputable spatial verification.\n• **Optimized Input Delivery:** Provides the spatial foundation for variable-rate fertilizer application, autonomous machinery guidance, and targeted drone spraying.',

      '### How Does It Work?',
      '**1. Multi-Spectral & High-Resolution Ingestion:** The pipeline acquires high-resolution imagery along with multi-temporal Sentinel and Planet data to capture contrasting crop cycles and vegetation vigor.\n\n**2. Feature Extraction & Edge Filtering:** Deep convolutional and transformer-based segmentation models analyze spatial textures, elevation gradients, and spectral reflectance differences across adjoining plots.\n\n**3. Vectorization & Cadastral Alignment:** Raw raster masks are converted into clean, topologically valid polygon vectors that can integrate seamlessly with existing cadastral land records and farm management information systems (FMIS).\n\n**4. Continuous Learning Loop:** The system continuously refines its accuracy against diverse agricultural topologies, from fragmented smallholder holdings in Asia to expansive industrial farms.',

      '### Embrace the Future of Agriculture',
      'As climate volatility intensifies and global food demand rises, farming must become smarter and more resource-efficient. Automated boundary delineation is not just about drawing lines on a map; it is about unlocking actionable plot-level intelligence that empowers agritech enterprises, financial institutions, and agricultural cooperatives to support farmers with tailored, timely agronomic guidance.',

      '### Join the Thazhal Revolution',
      'Whether you are an agricultural bank evaluating crop loan risks, an insurance provider streamlining damage assessments, or a regional agricultural department modernizing land records, THAZHAL provides the precision geospatial infrastructure your operations require. Get in touch with our geospatial solutions team today to see a demonstration of our automated boundary delineation in action.',
    ],
  },
  {
    slug: 'thazhal-geospatial-analytics-japan-india-innovation-pitch',
    title: 'Thazhal Geospatial Analytics Shines at Japan-India Innovation Pitch',
    category: 'Innovation',
    author: 'Thazhal',
    date: '07 AUG',
    excerpt: 'THAZHAL showcases its cutting-edge remote sensing and climate intelligence solutions on the global stage at the Japan-India Innovation Pitch.',
    variant: 2,
    image: '/images/blog/blog-3.png',
    body: [
      '### Introduction',
      'We’re thrilled to announce that Thazhal Geospatial Analytics has been selected as one of the top 15 startup finalists for the prestigious Japan-India Innovation Pitch! Hosted by JETRO (Japan External Trade Organization) and the Ministry of Economy, Trade, and Industry (METI), this esteemed event brought together innovators and industry leaders from Japan and India.',

      '### The Pitch',
      'Our team presented our cutting-edge geospatial solution for the Infosys Challenge, showcasing our expertise in harnessing location intelligence to drive business success. The event provided a unique platform to connect with fellow innovators, challenge owners, and potential partners.',

      '### Bridging Global Technology & Local Impact',
      'Participating in the Japan-India Innovation Pitch underscored the growing international appetite for scalable, satellite-driven climate risk intelligence. During our technical presentation, the THAZHAL team demonstrated how our proprietary processing pipelines turn complex multi-spectral radar and optical data streams into automated decision metrics for sustainable enterprise operations and infrastructure resilience.',

      '### High-Level Industry Feedback & Collaboration',
      'The jury and challenge evaluators commended THAZHAL for our lean architecture, spatial modeling accuracy, and practical focus on real-world environmental challenges. The interactions opened up exciting avenues for bilateral technical collaborations, cross-border pilot deployments, and enterprise partnerships with leading Japanese technology conglomerates interested in advanced geospatial AI.',

      '### Looking Ahead',
      'Being recognized among the top 15 innovators in an international bilateral forum validates our core mission: developing geospatial technologies that combine scientific rigor with real-world accessibility. We extend our sincere gratitude to JETRO, METI, and Infosys for this honor. THAZHAL continues to accelerate its product roadmap, expanding into enterprise environmental monitoring and global sustainability intelligence.',
    ],
  },
  {
    slug: 'wayanad-landslide-damage-assessment',
    title: 'Wayanad Landslide Damage Assessment',
    category: 'Disaster Assessment',
    author: 'Thazhal',
    date: '03 AUG',
    excerpt: 'Comprehensive geospatial assessment and rapid imagery analytics to evaluate slope failures, infrastructure impact, and terrain changes in Wayanad.',
    variant: 3,
    image: '/images/blog/blog-4.jpg',
    body: [
      '### Wayanad Damage Assessment',
      'In the wake of the catastrophic landslides that devastated communities across the Wayanad district of Kerala, THAZHAL deployed its rapid geospatial response workflow. Using high-resolution satellite imagery, multi-temporal Synthetic Aperture Radar (SAR), and terrain elevation models, our analytics team conducted an extensive damage assessment to map the initiation zones, debris flow trajectories, and downstream deposition extents.',

      '### The Role of Extreme Weather',
      'The disaster was triggered by unprecedented localized cloudburst events, dumping hundreds of millimeters of rainfall onto saturated mountainous slopes within hours. The intense precipitation destabilized fragile upper slope soils, triggering massive debris flows that channeled through river valleys, sweeping away homes, roads, bridges, and agricultural plantations. Geospatial terrain analysis reveals critical slope failure dynamics, underscoring how micro-climatic extremes interact with topography to create acute landslide vulnerability.',

      '### Our Commitment to Support',
      'During moments of acute humanitarian and environmental crisis, timely and objective spatial data is essential. THAZHAL stands committed to supporting relief organizations, local administrative authorities, and disaster management teams with high-confidence geospatial intelligence that aids rapid situational awareness and informed recovery efforts.',

      '### Our Services Include:',
      '**• Damage Assessment:**\nComprehensive delineation of debris tracks, identification of submerged and obliterated structures, and quantitative mapping of destroyed agricultural and forest acreage.',
      '**• Impact Analysis:**\nDetailed evaluation of severed transportation arteries, damaged bridges, blocked river channels, and utilities infrastructure disruption to identify cut-off settlements.',
      '**• Prioritization of Needs:**\nSpatial vulnerability overlays highlighting isolated zones, emergency staging points, safe evacuation corridors, and areas requiring immediate search-and-rescue or logistical access.',
      '**• Recovery Planning:**\nHigh-resolution slope stability modeling, runout zone hazard mapping, and land suitability assessments to guide sustainable, safe long-term rehabilitation and resilient infrastructure reconstruction away from critical hazard paths.',
    ],
  },
  {
    slug: 'assessing-flood-damage-agricultural-land',
    title: "Assessing Flood Damage in Agricultural Land with Thazhal's Geospatial Solutions",
    category: 'Disaster Assessment',
    author: 'Thazhal',
    date: '20 JUL',
    excerpt: 'Leveraging SAR and multi-spectral satellite data to map inundation extent, soil waterlogging, and quantify crop losses accurately for farming communities.',
    variant: 4,
    image: '/images/blog/blog-5.jpg',
    body: [
      '### Assessing Flood Damage in Agricultural Land with Thazhal’s Geospatial Solutions',
      'When extreme monsoon rains and overflowing river systems breach embankments, agricultural fields bear the brunt of devastating inundation. Swift response and recovery hinge on immediate, reliable data detailing where water has accumulated, how long fields have remained submerged, and the specific crops affected.',

      '### Harnessing Satellite Imagery for Rapid Damage Assessment',
      'Traditional ground-based surveys take weeks to organize, are stalled by flooded roads, and often fail to cover remote rural acreage. By harnessing optical and Synthetic Aperture Radar (SAR) satellite imagery, THAZHAL cuts through cloud cover and precipitation to capture a bird’s-eye, verifiable view of agricultural damage as events unfold.',

      '### Thazhal’s Geospatial Solutions',
      '**• Rapid Assessment:**\nWithin hours of satellite acquisition, our automated processing pipelines generate regional flood inundation masks, pinpointing submerged agricultural zones before waters recede.',
      '**• Accurate Damage Estimation:**\nBy combining high-resolution imagery with historical crop signatures and pre-disaster vegetation indices (NDVI/EVI), we accurately quantify crop destruction rates, differentiating between recoverable plots and total harvest losses.',
      '**• Enhanced Decision Making:**\nSpatial vulnerability heatmaps and parcel-level loss figures equip government relief commissions, disaster response units, and agricultural extension offices with objective intelligence to allocate resources where they are needed most.',
      '**• Cost-Effective:**\nReplaces expensive, fragmented field teams with comprehensive, scalable satellite intelligence, cutting assessment expenditures while dramatically increasing coverage and accuracy.',

      '### Let’s Connect',
      'Whether you represent a state disaster management authority, an agricultural insurance provider, or a cooperative seeking to build climate resilience for farming communities, THAZHAL is ready to assist. Contact our team to learn how our flood assessment models can be integrated into your disaster recovery strategy.',
    ],
  },
  {
    slug: 'introducing-swoad-surface-water-management',
    title: 'Introducing SWOAD: A Revolutionary Solution for Surface Water Management',
    category: 'Product',
    author: 'Thazhal',
    date: '20 JUN',
    excerpt: 'Meet SWOAD — an intelligent, sensor-to-satellite platform engineered for continuous surface water observation, depth estimation, and quality metrics.',
    variant: 0,
    image: '/images/blog/blog-6.jpg',
    body: [
      '### Introducing SWOAD: A Revolutionary Solution for Surface Water Management',
      'Freshwater bodies across the globe are under severe stress from urbanization, unregulated extraction, pollution, and climate variability. To safeguard these critical assets, THAZHAL introduces **SWOAD (Surface Water Observation and Assessment Dashboard)**—an advanced geospatial intelligence platform engineered for comprehensive surface water tracking.',

      '### Harnessing the Power of Space for Water Conservation',
      'SWOAD combines high-cadence satellite earth observation, radar altimetry, and predictive hydrological models. It transforms raw spectral and topographic data into an intuitive, real-time command center for lakes, reservoirs, river basins, and urban wetland systems.',

      '### Key Features of SWOAD',
      '**• Real-Time Water Level Monitoring:** Continuous observation of water spread dynamics and storage capacities across seasons.\n**• Historical Data Analysis:** Deep retrospective analytics comparing decadal trends in water retention, seasonal shrinkage, and catchment health.\n**• Anomaly Detection:** Automated alert triggers for unexpected depletion rates, sudden flash-inundation, or industrial discharge plumes.\n**• Data-Driven Decision Making:** Interactive analytics and scenario modeling that empower water authorities to manage releases, storage, and conservation proactively.',

      '### How SWOAD Works:',
      '**• Water Level Measurements:** Combines satellite altimetry data and multi-spectral surface extent delineations with localized bathymetric curves to estimate accurate volumetric capacity.\n**• Water Quality Assessment:** Analyzes optical spectral bands to continuously estimate key environmental health parameters, including Turbidity, Chlorophyll-a concentration, and Total Suspended Solids (TSS).\n**• Encroachment Detection:** Automated change-detection algorithms monitor shoreline buffer zones, identifying unauthorized construction, dumping, and vegetation clearing.',

      '### Why Choose SWOAD?',
      '**• Enhanced Water Management:** Gain unprecedented visibility into regional freshwater reserves without deploying expensive manual survey teams across every reservoir.\n**• Environmental Protection:** Safeguard delicate aquatic biomes, wetlands, and groundwater recharge zones from irreversible ecological degradation.\n**• Sustainable Development:** Provide urban planners and irrigation engineers with the empirical foundation for climate-resilient water allocation.\n**• Cost-Effective Solution:** A single scalable software platform serving municipal, regional, and national water agencies.',

      '### Let’s Work Together:',
      'Are you looking to modernize your water monitoring infrastructure and ensure long-term regional water security? Connect with THAZHAL today to explore how SWOAD can be deployed for your water bodies.',
    ],
  },
  {
    slug: 'water-pollution-a-growing-crisis',
    title: 'Water Pollution: A Growing Crisis',
    category: 'Environment',
    author: 'Thazhal',
    date: '10 JUN',
    excerpt: 'Analyzing industrial runoff, urban effluents, and turbidity trends across water bodies through high-cadence satellite monitoring and spectral indicators.',
    variant: 1,
    image: '/images/blog/blog-7.jpg',
    body: [
      '### From Last Year to Now: A Disturbing Trend',
      'Water quality monitoring across major water basins reveals an alarming upward trajectory in industrial chemical effluents, untreated municipal wastewater, and agricultural runoff. Over the past year alone, multi-temporal satellite analyses indicate a steep rise in eutrophic conditions and chronic turbidity spikes across urban lakes and river tributaries.',

      '### A Growing Threat to Children',
      'Contaminated water supplies pose the gravest threat to vulnerable populations, particularly children. Waterborne pathogens, heavy metal contamination, and toxic chemical concentrations lead to severe gastrointestinal illnesses, developmental issues, and chronic health crises in communities living downstream of unmonitored effluent discharges.',

      '### The Economic Toll',
      'Beyond its profound human cost, water pollution exerts a massive economic drag on regional economies. Fisheries suffer catastrophic stock declines, municipal water treatment facilities face escalating chemical purification costs, and fertile agricultural soils suffer salinity buildup and toxicity from contaminated irrigation channels.',

      '### Thazhal: A Solution to the Crisis',
      'THAZHAL deploys multi-spectral satellite earth observation and intelligent spectral profiling to turn the tide against water pollution. By examining spectral absorption and reflectance anomalies from space, our algorithms map pollution plumes, pinpoint non-point industrial discharge sources, and track pollutant dispersion in real time across vast watersheds.',

      '### Join Us in the Fight',
      'Combating the global water crisis requires concerted action from governments, industries, and civil society:',
      '**• Promote awareness:** Spread knowledge about the critical importance of catchment conservation, responsible waste disposal, and clean freshwater access.',
      '**• Support sustainable practices:** Advocate for industrial circular-water recycling, regenerative agricultural methods that reduce fertilizer runoff, and strict municipal effluent enforcement.',
      '**• Invest in innovative solutions:** Harness scalable, transparent geospatial technologies like THAZHAL’s water intelligence dashboards to monitor water health objectively and hold polluters accountable.',
    ],
  },
  {
    slug: 'harmful-algae-bloom-monitoring-from-space',
    title: 'Harmful Algae Bloom Monitoring from Space',
    category: 'Environment',
    author: 'Thazhal',
    date: '25 MAY',
    excerpt: 'Early detection and predictive tracking of chlorophyll anomalies and toxic algal blooms in inland reservoirs and coastal waters using satellite spectra.',
    variant: 2,
    image: '/images/blog/blog-8.jpg',
    body: [
      '### How Satellite Remote Sensing Works',
      'Harmful Algae Blooms (HABs) are characterized by dense concentrations of phytoplankton and cyanobacteria that alter the optical properties of water. Chlorophyll-a and phycocyanin pigments inside algae absorb blue and red light while strongly reflecting green and near-infrared (NIR) wavelengths. Multi-spectral sensors aboard satellites like Sentinel-2, Sentinel-3, and Landsat capture these subtle spectral reflections, allowing automated algorithms to detect microscopic algae proliferation long before it forms visible surface scums.',

      '### Applications of Satellite Remote Sensing in HAB Monitoring',
      'Space-based observation provides unmatched spatial coverage and frequent revisit intervals for coastal waters, inland lakes, and drinking reservoirs:',
      '**• Early warning systems:**\nDetect subtle, early-stage chlorophyll anomalies days before full-blown toxic bloom outbreaks occur, allowing municipal water utilities to activate advanced filtration or modify intake depths.',
      '**• Risk assessment:**\nQuantify the spatial extent, intensity, and historical recurrence of algal blooms across different seasons to identify high-risk catchments and nutrient-loading hotspots.',
      '**• HAB forecasting:**\nCombine satellite-derived surface temperature, spectral indices, and hydrodynamic current models with weather forecasts to predict the likely growth trajectory of blooms.',
      '**• Tracking HAB movement:**\nObserve bloom drift patterns across coastal waters and reservoirs in real time to protect aquaculture farms, commercial fisheries, and public recreational beaches.',
    ],
  },
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
  x: (import.meta.env.VITE_X_URL as string | undefined) || 'https://x.com/thazhal_in',
  linkedin: (import.meta.env.VITE_LINKEDIN_URL as string | undefined) || 'https://www.linkedin.com/company/thazhal',
  instagram: (import.meta.env.VITE_INSTAGRAM_URL as string | undefined) || 'https://www.instagram.com/thazhal_in',
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
