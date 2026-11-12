// Single source of truth for site facts. All numbers match the original
// Paradigm site; this redesign changes presentation only.

export const EMAIL = 'aezparadigm@gmail.com'

export type Stat = { value: string; label: string }

// Shown once, in the About section.
export const firmStats: Stat[] = [
  { value: '4.91/5', label: 'Average client satisfaction across engagements' },
  { value: '35+', label: 'Strategy and technology projects delivered' },
  { value: '<10%', label: 'Of applicants accepted each recruiting cycle' },
  { value: '2003', label: 'Year founded as a branch of Alpha Epsilon Zeta' },
]

export const alumniStats: Stat[] = [
  { value: '100%', label: 'Full-Time Job Placement' },
  { value: '$500M+', label: 'Alumni-Founded Startups' },
  { value: '200+', label: 'Total Alumni' },
]

export const services = {
  strategy: {
    title: 'Strategy',
    items: [
      'Go-To-Market Strategy',
      'Business Model Innovation',
      'Customer Segmentation',
      'Cost Reduction',
      'Market Research',
      'Competitive Analysis',
    ],
  },
  technology: {
    title: 'Technology',
    items: [
      'Custom Software Development',
      'Legacy System Modernization',
      'UI/UX Design',
      'AI/ML Integration',
      'Cloud Architecture/Migration',
      'Alternative Analytics',
    ],
  },
}

// Logos cut from the club's original client and alumni graphics.
// w/h are the PNG's pixel size, used to balance visual weight.
export type Logo = { name: string; src: string; w: number; h: number }
const L = (name: string, file: string, w: number, h: number): Logo => ({ name, src: `/logos/${file}.png`, w, h })

export const strategyClients: Logo[] = [
  L('eBay', 'ebay', 309, 123),
  L('Juniper Networks', 'juniper', 339, 98),
  L('Bose', 'bose', 756, 102),
  L('Honeywell', 'honeywell', 390, 80),
  L('Dropbox', 'dropbox', 310, 68),
]

export const technologyClients: Logo[] = [
  L('Roblox', 'roblox', 399, 76),
  L('AWS', 'aws', 296, 181),
  L('Coca-Cola', 'coca-cola', 342, 118),
  L('Visa', 'visa', 385, 131),
  L('Janssen', 'janssen', 548, 237),
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
