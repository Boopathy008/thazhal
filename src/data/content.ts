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
    kind: 'product', slug: 'swoad', name: 'Water Body Monitoring', variant: 0, image: '/images/swoad.webp',
    tagline: 'A THAZHAL offering for geospatial intelligence.',
    summary: 'Track lake extent, surface-water changes, vegetation, encroachment and long-term trendsover time.',
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
    kind: 'product', slug: 'climate-audit', name: 'Climate Audit', variant: 1, image: '/images/climate-audit.webp',
    tagline: 'Structured geospatial insight for climate-focused assessment.',
    summary: 'Understand historical and future climate risks around assets, including floods, cyclones, sea-level rise and fire.',
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
    kind: 'product', slug: 'fire-audit', name: 'Fire Audit', variant: 2, image: '/images/fire-audit.webp',
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
    related: ['/solutions/forest-intelligence', '/solutions/infrastructure-monitoring'],
  },
]

export const solutions: Detail[] = [
  {
    kind: 'solution', slug: 'environmental-monitoring', name: 'Environmental Monitoring', variant: 3, image: '/images/environmental-monitoring.webp',
    tagline: 'Observe, assess and understand changing environments.',
    summary: 'Assess ecosystem health and quantify environmental risks and the impact of nature-based interventions.',
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
    kind: 'solution', slug: 'infrastructure-monitoring', name: 'Infrastructure Monitoring', variant: 4, image: '/images/infrastructure-monitoring.webp',
    tagline: 'A clearer view of critical infrastructure.',
    summary: 'Monitor buildings, dams, ports, airports and utility networks to support risk assessment and operational decisions.',
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
    related: ['/solutions/forest-intelligence', '/solutions/environmental-monitoring'],
  },
  {
    kind: 'solution', slug: 'forest-intelligence', name: 'Forest Intelligence', variant: 5, image: '/images/forest-intelligence.webp',
    tagline: 'Canopy health, biomass auditing, and illegal logging surveillance.',
    summary: 'Use satellite imagery, drone data and LiDAR to support tree counting, species classification and precise measurements.',
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
    related: ['/solutions/environmental-monitoring', '/solutions/mining'],
  },
  {
    kind: 'solution', slug: 'mining', name: 'Mining', variant: 1, image: '/images/mining.webp',
    tagline: 'Satellite-driven intelligence for safe and sustainable mining operations.',
    summary: 'Monitor active mine sites, track surface deformation, assess environmental impact and support compliance with space-based analytics.',
    overview: [
      'Mining intelligence uses high-resolution satellite imagery and SAR-based deformation mapping to provide continuous visibility over active quarries, open-pit mines and tailing storage facilities.',
      'These are general solution areas. Specific capabilities are scoped with each organisation.',
    ],
    uses: ['Mine pit boundary and volume change monitoring', 'Surface subsidence and deformation mapping', 'Dust, erosion and sediment plume tracking', 'Environmental compliance and reclamation assessment'],
    benefits: ['Wide-area surveillance without ground-team risk', 'Objective spatial evidence for regulatory reporting', 'Early detection of structural or environmental anomalies'],
    steps,
    faqs: [
      { q: 'What kind of mines can be monitored?', a: 'Open-pit, quarry and underground (surface-expression) operations can be assessed, subject to site-specific scoping.' },
      { q: 'Can it support environmental compliance?', a: 'Yes. Spatial change detection and vegetation/soil indices can support compliance monitoring and rehabilitation assessment.' },
    ],
    related: ['/solutions/environmental-monitoring', '/solutions/infrastructure-monitoring'],
  },
  {
    kind: 'solution', slug: 'disaster-management', name: 'Disaster Management', variant: 2, image: '/images/disaster-management.webp',
    tagline: 'Rapid geospatial response for preparedness, relief and recovery.',
    summary: 'Map flood extents, landslide zones, cyclone damage and wildfire burns to support emergency response, recovery planning and risk reduction.',
    overview: [
      'Disaster Management leverages multi-sensor satellite data to deliver rapid damage assessments and situational awareness across floods, landslides, wildfires and cyclone events.',
      'These are general solution areas. Specific capabilities are scoped with each organisation.',
    ],
    uses: ['Flood inundation and damage extent mapping', 'Landslide initiation zone and run-out assessment', 'Cyclone and storm surge impact delineation', 'Wildfire burn scar and recovery monitoring'],
    benefits: ['Near-real-time spatial intelligence during crises', 'Cloud-penetrating SAR imaging through storms', 'Evidence base for relief prioritisation and recovery planning'],
    steps,
    faqs: [
      { q: 'How quickly can assessments be delivered?', a: 'Rapid assessment products can typically be generated within hours of satellite acquisition, subject to imagery availability.' },
      { q: 'What disaster types are covered?', a: 'Floods, landslides, cyclones, wildfires and earthquakes are key areas, with scope agreed per event and organisation.' },
    ],
    related: ['/solutions/environmental-monitoring', '/solutions/forest-intelligence'],
  },
]

export const details = [...products, ...solutions]
export const pathOf = (d: Detail) => `/${d.kind === 'product' ? 'products' : 'solutions'}/${d.slug}`

const productIcons = ['Layers', 'Thermometer', 'Flame']
const solutionIcons = ['Activity', 'Building2', 'Trees', 'Mountain', 'AlertTriangle']

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
    image: '/images/blog/blog-1.webp',
    body: [
      '### What is a Digital Water Twin?',
      'A Digital Water Twin is a virtual model of physical water systems, such as rivers, reservoirs, urban pipelines, or wastewater treatment facilities. These twins integrate real-time data, advanced analytics, and simulations to replicate, monitor, and predict the behaviour of water systems. By providing actionable insights, DWTs enable efficient management of water resources—from reducing urban water loss to planning flood mitigation strategies.',

      '### Current Global Developments in Digital Water Twins',
      'Across the globe, governments and research institutions are deploying digital twins to tackle freshwater stress and climate volatility:',
      '**1. Europe: Leading the Innovation**\nThe European Union is at the forefront of DWT innovation with its Digital Water Programme under Horizon 2020. This initiative focuses on integrating digital twins into urban water systems to minimize water loss and improve supply efficiency.',
      '**2. Australia: Smart Solutions for Scarcity**\nAustralia leverages DWTs to address water scarcity. For example, the South East Queensland Urban Water Security Program uses digital twins to simulate drought scenarios and optimize resource usage.',
      '**3. North America: Enhancing Water Quality**\nIn the U.S. and Canada, digital twins like the SWMM Digital Twin help cities manage stormwater and wastewater systems, reducing flood risks and ensuring compliance with environmental standards.',
      '**4. Asia: Urban Water Revolution**\nSingapore’s PUB WaterGrid Digital Twin integrates IoT and geospatial technologies to monitor water networks in real-time. The system detects anomalies, optimizes distribution, and ensures water sustainability for its urban population.',
      '**5. Innovative Case Studies**\nWater utilities worldwide are increasingly adopting digital twin technology to optimize their operations. In China, the Lushan Water Supply Company uses a digital twin to modernize outdated systems, supplying 25,000 tons of water daily while minimizing losses. Similarly, Spain\'s Tarragona Water Consortium integrates real-time sensor data with hydraulic models to predict system behavior, reducing energy consumption and preventing issues before they occur. Meanwhile, in Greece, the DEYAK Water Utility has leveraged its digital twin to achieve a 40% reduction in man-hours for pressure management and a 50% improvement in leak repairs.',

      '### Geospatial Technologies: The Backbone of Digital Water Twins',
      'Geospatial technologies play a pivotal role in the development and functionality of digital water twins by offering powerful tools for data integration, real-time monitoring, predictive modeling, and asset management.',
      '**1. Satellite Remote Sensing**\nSatellites provide crucial data for monitoring large-scale water dynamics like river flows, reservoir levels, and drought conditions. Sensors like Sentinel-1 (radar) and Sentinel-2 (optical imaging) enhance DWT precision.',
      '**2. Geographic Information Systems (GIS)**\nGIS integrates spatial and non-spatial data, enabling detailed visualization of water systems. Urban planners use GIS to map water networks, analyze patterns, and optimize infrastructure layouts.',
      '**3. IoT and Real-Time Monitoring**\nIoT-enabled sensors gather real-time data on flow rates, water quality, and pressure levels, which are spatially mapped and updated within digital twins for live analysis.',
      '**4. AI and Machine Learning**\nAI-driven analytics identify patterns and predict risks like contamination zones or pipeline failures, enabling proactive maintenance.',
      '**5. Hydrological and Hydraulic Modeling**\nModels such as HEC-RAS or MIKE SHE integrate geospatial data to simulate water behavior under different conditions, aiding in flood risk management and resource allocation.',

      '### Thazhal Geospatial Analytics: Innovating with SWOAD',
      'At Thazhal Geospatial Analytics, we are introducing a cutting-edge platform called SWOAD (Surface Water Observatory and Anomaly Detection), designed to revolutionize surface water management. SWOAD leverages advanced satellite imagery and geospatial analytics to monitor and analyze surface water bodies, offering real-time insights into water levels, quality, and potential anomalies. By integrating historical trends, detecting encroachments, and identifying pollution or flow changes, SWOAD empowers decision-makers to address water challenges proactively. With this innovation, we aim to support smarter resource management and promote sustainable practices for safeguarding surface water resources.',

      '### Challenges in Implementing Digital Water Twins',
      'While promising, global adoption of DWTs faces several hurdles:',
      '• **Data Integration:** Combining diverse data sources like IoT, satellite imagery, and SCADA systems remains complex.\n• **Cost Barriers:** The development and maintenance of DWTs are resource-intensive, especially for developing countries.\n• **Sensor Maintenance:** In-situ IoT networks demand sustained calibration and maintenance in harsh environmental conditions.\n• **Skill Gaps:** Expertise in geospatial technologies, hydrology, and AI is essential but often scarce.',

      '### The Path Forward',
      'To drive the widespread adoption of digital water twin (DWT) solutions, fostering public-private partnerships is essential to make these technologies accessible and affordable. Additionally, encouraging the development and use of open-source geospatial platforms can lower barriers to entry and promote innovation. Finally, investing in capacity building by training professionals in geospatial and water management technologies will help bridge critical skill gaps across the sector.',

      '### Conclusion',
      'Digital Water Twins are transforming global water management, offering precision, efficiency, and sustainability. With innovative platforms like SWOAD, we at Thazhal Geospatial Analytics are committed to addressing water challenges and ensuring a future where every drop is effectively managed.',
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
    image: '/images/blog/blog-2.webp',
    body: [
      '### Introducing Thazhal’s Automated Farm Boundary Detection',
      'Thazhal, a pioneer in agricultural technology, is proud to present its innovative AI-powered solution for automated farm boundary delineation. By leveraging cutting-edge satellite imagery analysis, our technology can accurately map your farm boundaries, saving you valuable time and resources.',

      '### Key Benefits of Thazhal’s Automated Boundary Detection',
      '• **Reduced Operational Costs:** Eliminate the need for expensive manual surveying, saving you money and time.\n• **Improved Data Consistency:** Ensure accurate and consistent boundary data for informed decision-making.\n• **Minimized Disputes:** Clearly defined boundaries help prevent conflicts and misunderstandings.\n• **Efficient and Accurate Future:** Transition from traditional surveying methods to a more modern and precise approach to agriculture.\n• **Optimized Input Delivery:** Provides the spatial foundation for variable-rate fertilizer application, autonomous machinery guidance, and targeted drone spraying.',

      '### How Does It Work?',
      '**1. Multi-Spectral & High-Resolution Ingestion:** The pipeline acquires high-resolution imagery along with multi-temporal Sentinel and Planet data to capture contrasting crop cycles and vegetation vigor.\n\n**2. Feature Extraction & Edge Filtering:** Deep convolutional and transformer-based segmentation models analyze spatial textures, elevation gradients, and spectral reflectance differences across adjoining plots.\n\n**3. Vectorization & Cadastral Alignment:** Raw raster masks are converted into clean, topologically valid polygon vectors that can integrate seamlessly with existing cadastral land records and farm management information systems (FMIS).\n\n**4. Continuous Learning Loop:** The system continuously refines its accuracy against diverse agricultural topologies, from fragmented smallholder holdings in Asia to expansive industrial farms.',

      '### Embrace the Future of Agriculture',
      'By adopting Thazhal’s Automated Farm Boundary Detection, you’re taking a significant step towards a more efficient, sustainable, and profitable agricultural future. Our technology empowers you with accurate and reliable data, enabling you to make informed decisions and optimize your farm operations.',

      '### Join the Thazhal Revolution',
      'Ready to experience the benefits of automated boundary delineation? Contact Thazhal today to learn more about our solution and how it can transform your farm management.',
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
    image: '/images/blog/blog-3.webp',
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
    image: '/images/blog/blog-4.webp',
    body: [
      '### Wayanad Damage Assessment',
      'The devastating landslides that struck Wayanad, Kerala, on July 30th have highlighted the urgent need for effective disaster response and recovery efforts. Satellite imagery reveals the extent of the damage, with over 200 buildings completely destroyed in the settlements of Mundakkai and Chooralmala. The Iruvazhinji River has been significantly widened, causing extensive damage to nearby houses and infrastructure.',

      '### The Role of Extreme Weather',
      'The heavy rainfall that preceded the landslides, with over 300 mm recorded in the district, underscores the impact of climate change on extreme weather events. These events pose significant risks to communities and infrastructure, necessitating rapid assessment and response.',

      '### Our Commitment to Support',
      'In the aftermath of the Wayanad landslides, our team offers rapid damage assessment services to support disaster response and recovery efforts. By utilizing cutting-edge satellite imagery and AI techniques, we can provide actionable insights for informed decision-making.',

      '### Our Services Include:',
      '**• Damage Assessment:**\nAccurate identification and mapping of affected areas, including building damage, infrastructure destruction, and changes in land cover.',
      '**• Impact Analysis:**\nAssessment of the social, economic, and environmental impacts of the disaster.',
      '**• Prioritization of Needs:**\nIdentification of critical areas requiring immediate assistance and resources.',
      '**• Recovery Planning:**\nSupport for the development of effective recovery plans and strategies.',
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
    image: '/images/blog/blog-5.webp',
    body: [
      '### Assessing Flood Damage in Agricultural Land with Thazhal’s Geospatial Solutions',
      'When extreme monsoon rains and overflowing river systems breach embankments, agricultural fields bear the brunt of devastating inundation. Swift response and recovery hinge on immediate, reliable data detailing where water has accumulated, how long fields have remained submerged, and the specific crops affected.',

      '### Harnessing Satellite Imagery for Rapid Damage Assessment',
      'Floods can have devastating consequences for agricultural land, leading to significant crop losses and economic hardship. Traditional damage assessment methods can be time-consuming and resource-intensive. However, with the advancement of geospatial technology, we can now leverage satellite imagery to assess flood damage quickly and accurately.',

      '### Thazhal’s Geospatial Solutions',
      '**• Rapid Assessment:**\nSatellite imagery can be captured immediately after a flood event, providing timely information for disaster response and recovery efforts.',
      '**• Accurate Damage Estimation:**\nOur algorithms can analyze satellite images to identify affected areas, assess crop damage, and estimate economic losses.',
      '**• Enhanced Decision Making:**\nThe data provided by our solutions can support informed decision-making by government agencies, insurance companies, and agricultural organizations.',
      '**• Cost-Effective:**\nSatellite-based damage assessment is often more cost-effective than traditional ground-based methods.',

      '### Let’s Connect',
      'If you are interested in exploring how Thazhal’s geospatial solutions can enhance your organization’s disaster response and risk management initiatives, please contact us. We are committed to providing innovative solutions to address the challenges of natural disaster',
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
    image: '/images/blog/blog-6.webp',
    body: [
      '### Introducing SWOAD: A Revolutionary Solution for Surface Water Management',
      'Freshwater bodies across the globe are under severe stress from urbanization, unregulated extraction, pollution, and climate variability. To safeguard these critical assets, THAZHAL introduces **SWOAD (Surface Water Observation and Assessment Dashboard)**—an advanced geospatial intelligence platform engineered for comprehensive surface water tracking.',

      '### Harnessing the Power of Space for Water Conservation',
      'We are excited to announce the launch of SWOAD (Surface Water Observatory and Anomaly Detection), a groundbreaking solution designed to revolutionize surface water management. Utilizing state-of-the-art satellite imaging and geospatial analytics, SWOAD provides real-time insights into water bodies, empowering decision-makers with critical information.',

      '### Key Features of SWOAD',
      '**• Real-Time Water Level Monitoring:** Track water levels in lakes, rivers, and reservoirs with unparalleled accuracy.\n**• Historical Data Analysis:** Gain valuable insights into long-term trends and patterns in water levels and quality.\n**• Anomaly Detection:** Identify and address potential issues such as encroachments, pollution, or changes in water flow.\n**• Data-Driven Decision Making:** Make informed choices based on reliable and up-to-date water data.',

      '### How SWOAD Works:',
      '**• Water Level Measurements:** Precise measurements of water levels over time.\n**• Water Quality Assessment:** Identification of potential pollution indicators and changes in water clarity.\n**• Encroachment Detection:** Detection of unauthorized construction or land use changes near water bodies.',

      '### Why Choose SWOAD?',
      '**• Enhanced Water Management:** SWOAD provides the tools and data needed for effective water resource planning and management.\n**• Environmental Protection:** By monitoring water bodies and detecting anomalies, SWOAD helps protect valuable ecosystems.\n**• Sustainable Development:** SWOAD supports sustainable practices by providing insights for informed decision-making.\n**• Cost-Effective Solution:** SWOAD offers a cost-effective alternative to traditional water monitoring methods.',

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
    image: '/images/blog/blog-7.webp',
    body: [
      '### From Last Year to Now: A Disturbing Trend',
      'The global water crisis continues to deepen, with a concerning rise in water pollution and its devastating consequences. Last year, 1.8 billion people faced inadequate access to clean water. Unfortunately, this year has seen a further deterioration, with waterborne diseases surging by 15%, impacting an additional 3 million people.',

      '### A Growing Threat to Children',
      'One of the most alarming trends is the increase in water-related diseases among children under five. This year, these illnesses have risen by 20%, putting the health and well-being of our most vulnerable population at risk.',

      '### The Economic Toll',
      'The economic impact of water pollution is staggering. This year alone, the combined costs of healthcare, productivity loss, and other related factors have reached a staggering $10 billion. These figures highlight the urgent need for action to address this pressing issue.',

      '### Thazhal: A Solution to the Crisis',
      'At Thazhal, we are committed to combating water pollution and ensuring a healthier, more sustainable future for all. Our innovative solutions empower individuals, communities, and organizations to take control of water quality and protect their water resources.',

      '### Join Us in the Fight',
      'Together, we can reverse the disturbing trends of water pollution and create a world where everyone has access to clean and safe water. By working together, we can:',
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
    image: '/images/blog/blog-8.webp',
    body: [
      '### How Satellite Remote Sensing Works',
      'Satellite remote sensing technology utilizes sensors onboard satellites to capture data about the Earth’s surface. These sensors can measure various parameters, including water color, chlorophyll concentration, and ocean temperature.',

      '### Applications of Satellite Remote Sensing in HAB Monitoring',
      'Satellite remote sensing has been used successfully in various applications related to HAB monitoring, including:',
      '**• Early warning systems:**\nBy detecting HABs early, satellite data can help trigger public health alerts and mitigate their impacts.',
      '**• Risk assessment:**\nSatellite data can be used to identify areas at high risk for HABs, allowing for targeted monitoring and management efforts.',
      '**• HAB forecasting:**\nBy analyzing historical satellite data and environmental factors, scientists can develop models to predict the occurrence and severity of HABs.',
      '**• Tracking HAB movement:**\nSatellites can track the movement of HABs, helping to understand their dispersal patterns and potential impacts on coastal communities.',
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
  x: (import.meta.env.VITE_X_URL as string | undefined) || 'https://x.com/thazhalgeo?s=11',
  linkedin: (import.meta.env.VITE_LINKEDIN_URL as string | undefined) || 'https://www.linkedin.com/company/thazhal-geospatial-analytics/',
  instagram: (import.meta.env.VITE_INSTAGRAM_URL as string | undefined) || 'https://www.instagram.com/thazhal_geospatial?srtk=d3o0MHVtejJxdjA0',
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
