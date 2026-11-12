// Single source of truth for site facts. All numbers match the original
// Paradigm site; this redesign changes presentation only.

export const EMAIL = 'aezberkeley@gmail.com'
export const SITE_URL = 'https://berkeleyparadigm.org'

export type Stat = { value: string; label: string }

// Shown once, in the About section.
export const firmStats: Stat[] = [
  { value: '4.91/5', label: 'Average client satisfaction across engagements' },
  { value: '35+', label: 'Strategy and technology projects delivered' },
  { value: '2003', label: 'Year founded as a branch of Alpha Epsilon Zeta' },
]

export const alumniStats: Stat[] = [
  { value: '100%', label: 'Full-Time Job Placement' },
  { value: '$500M+', label: 'Alumni-Founded Startups' },
  { value: '200+', label: 'Total Alumni' },
]

export type Service = { name: string; description: string }

export const services: Record<'strategy' | 'technology', { title: string; items: Service[] }> = {
  strategy: {
    title: 'Strategy',
    items: [
      {
        name: 'Go-To-Market Strategy',
        description: 'Launch plans covering target segments, positioning, pricing and channels, ready for your team to execute.',
      },
      {
        name: 'Business Model Innovation',
        description: 'New revenue models and partnerships, tested against market data and your unit economics.',
      },
      {
        name: 'Customer Segmentation',
        description: 'Data-driven customer groups with the needs and behaviors that set them apart, and how to reach each one.',
      },
      {
        name: 'Cost Reduction',
        description: 'A review of spend and operations that identifies savings and a prioritized plan to capture them.',
      },
      {
        name: 'Market Research',
        description: 'Primary and secondary research that sizes the opportunity and answers the questions behind your decision.',
      },
      {
        name: 'Competitive Analysis',
        description: 'A clear view of competitors\u2019 products, pricing and positioning, and where you can differentiate.',
      },
    ],
  },
  technology: {
    title: 'Technology',
    items: [
      {
        name: 'Custom Software Development',
        description: 'Web and internal tools built to your requirements, delivered with documentation and a clean handoff.',
      },
      {
        name: 'Legacy System Modernization',
        description: 'Migration plans and rebuilds that move aging systems to maintainable, modern stacks.',
      },
      {
        name: 'UI/UX Design',
        description: 'User research, wireframes and tested interface designs your engineers can build from.',
      },
      {
        name: 'AI/ML Integration',
        description: 'Practical machine learning and AI features added to your product or workflow, from prototype to deployment.',
      },
      {
        name: 'Cloud Architecture/Migration',
        description: 'Cloud designs and migrations that balance cost, performance and security.',
      },
      {
        name: 'Alternative Analytics',
        description: 'Analysis of non-traditional data sources to surface insights that standard reporting misses.',
      },
    ],
  },
}

// Logos cut from the club's original client and alumni graphics.
// w/h are the PNG's pixel size, used to balance visual weight.
export type Logo = { name: string; src: string; w: number; h: number }
const L = (name: string, file: string, w: number, h: number): Logo => ({ name, src: `/logos/${file}.png`, w, h })
// Full-color official SVGs for the client wall; w/h are the SVG viewBox.
const C = (name: string, file: string, w: number, h: number): Logo => ({ name, src: `/logos/color/${file}.svg`, w, h })

export const strategyClients: Logo[] = [
  C('eBay', 'ebay', 1000, 400.75),
  C('Juniper Networks', 'juniper', 718.2, 196.3),
  C('Bose', 'bose', 215, 26.8),
  C('Honeywell', 'honeywell', 677.9, 120.1),
  C('Dropbox', 'dropbox', 1000, 196.9),
]

export const technologyClients: Logo[] = [
  C('Roblox', 'roblox', 161.2, 28.1),
  C('AWS', 'aws', 304, 182),
  C('Coca-Cola', 'coca-cola', 615.1, 192.9),
  C('Visa', 'visa', 1000, 323.7),
  C('Janssen', 'janssen', 1126.7, 481.8),
]

export const alumni: { group: string; logos: Logo[] }[] = [
  {
    group: 'Consulting',
    logos: [L('McKinsey & Company', 'mckinsey', 204, 68), L('Bain & Company', 'bain', 150, 92)],
  },
  {
    group: 'Finance',
    logos: [
      L('Goldman Sachs', 'goldman-sachs', 166, 76),
      L('J.P. Morgan', 'jp-morgan', 234, 54),
      L('Morgan Stanley', 'morgan-stanley', 108, 106),
      L('Centerview Partners', 'centerview', 244, 47),
      L('Lazard', 'lazard', 238, 50),
      L('Moelis', 'moelis', 222, 60),
      L('Raine', 'raine', 234, 52),
      L('Blackstone', 'blackstone', 180, 76),
      L('BlackRock', 'blackrock', 248, 42),
      L('Citadel', 'citadel', 256, 36),
      L('TPG', 'tpg', 172, 76),
      L('Carlyle', 'carlyle', 252, 40),
      L('Point72', 'point72', 164, 80),
    ],
  },
  {
    group: 'Technology',
    logos: [
      L('Google', 'google', 200, 73),
      L('Apple', 'apple', 94, 110),
      L('Meta', 'meta', 237, 55),
      L('Microsoft', 'microsoft', 233, 58),
      L('Salesforce', 'salesforce', 138, 100),
      L('LinkedIn', 'linkedin', 224, 64),
      L('PayPal', 'paypal', 219, 64),
      L('Stripe', 'stripe', 172, 74),
      L('Coinbase', 'coinbase', 241, 49),
      L('Snowflake', 'snowflake', 226, 61),
      L('Tesla', 'tesla', 252, 39),
      L('SpaceX', 'spacex', 242, 37),
      L('DoorDash', 'doordash', 256, 40),
      L('Slack', 'slack', 221, 60),
    ],
  },
  {
    group: 'Graduate & Ventures',
    logos: [
      L('Stanford', 'stanford', 78, 114),
      L('MIT', 'mit', 160, 86),
      L('Harvard Business School', 'harvard-business-school', 208, 68),
      L('University of Cambridge', 'cambridge', 116, 106),
      L('UCSF', 'ucsf', 165, 84),
      L('Y Combinator', 'y-combinator', 110, 109),
    ],
  },
]

export const team: { name: string; email?: string; image: string }[] = [
  { name: 'Sreekar Nagulapalli', email: 'sreekar_nagul@berkeley.edu', image: '/faces/sreekar.avif' },
  { name: 'Aadi Agrawal', email: 'aadia12@berkeley.edu', image: '/faces/aadi.avif' },
  { name: 'Gowri Biju', email: 'gowrib@berkeley.edu', image: '/faces/gowri.avif' },
  { name: 'Shivm Patel', email: 'shivmpatel@berkeley.edu', image: '/faces/shivm.avif' },
]
