export interface FeatureCapability {
  icon: string
  title: string
  desc: string
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  badge?: string
  image?: string
  longDescription?: string
  capabilities?: FeatureCapability[]
}

export interface Stat {
  id: string
  value: number
  suffix: string
  prefix: string
  label: string
  description?: string
}

export interface Industry {
  id: string
  icon: string
  title: string
  image: string
  description: string
  stats: string
}

export interface Step {
  id: string
  number: string
  title: string
  description: string
}

export interface NavItem {
  label: string
  href: string
}
