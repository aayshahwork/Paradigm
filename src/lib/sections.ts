// In-page sections, in page order. Drives the nav, footer and section numbers.
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'clients', label: 'Clients' },
  { id: 'services', label: 'Services' },
  { id: 'alumni', label: 'Alumni' },
  { id: 'team', label: 'Team' },
] as const

export type SectionId = (typeof sections)[number]['id']

export const sectionNumber = (id: SectionId) => sections.findIndex((s) => s.id === id) + 1
