import type { Feature, Stat, Industry, Step, NavItem } from '../types'
import type { TKey } from '../i18n/translations'

type T = (key: TKey) => string

/* ── Navigation ── */
export function getNavItems(T: T): NavItem[] {
  return [
    { label: T('nav_why'), href: '#why' },
    { label: T('nav_solutions'), href: '#solutions' },
    { label: T('nav_sectors'), href: '#industries' },
    { label: T('nav_water_universe'), href: '#water-universe' },
    { label: T('nav_about'), href: '#about' },
    { label: T('nav_contact'), href: '#contact' },
  ]
}

/* ── Solution menu (navbar dropdown) ── */
const SOLUTION_MENU_BASE = [
  { labelKey: 'smenu_1' as TKey, slug: 'su-yonetim-platformu',          id: 'flow-mapping'        },
  { labelKey: 'smenu_2' as TKey, slug: 'su-kalitesi-platformu',         id: 'quality-platform'    },
  { labelKey: 'smenu_3' as TKey, slug: 'su-ayak-izi-hesaplayici',       id: 'footprint-reporting' },
  { labelKey: 'smenu_4' as TKey, slug: 'su-risk-guvenlik-analizi',      id: 'risk-analysis'       },
  { labelKey: 'smenu_5' as TKey, slug: 'su-akis-haritalari',            id: 'legal-compliance'    },
  { labelKey: 'smenu_6' as TKey, slug: 'surdurulebilir-su-danismanligi',id: 'carbon-footprint'    },
]

export function getSolutionMenu(T: T) {
  return SOLUTION_MENU_BASE.map(s => ({ label: T(s.labelKey), slug: s.slug, id: s.id }))
}

/* ── Solutions / Features ── */
const FEATURES_BASE: {
  id: string; icon: string; badgeKey?: TKey; image?: string
  titleKey: TKey; descKey: TKey; longKey: TKey
  capabilities: { icon: string; titleKey: TKey; descKey: TKey }[]
}[] = [
  {
    id: 'flow-mapping', icon: 'GitBranch', badgeKey: 'badge_ai',
    image: '/solutions/dashboard-laptop.jpg',
    titleKey: 'feat_1_title', descKey: 'feat_1_desc', longKey: 'feat_1_long',
    capabilities: [
      { icon: 'Map',           titleKey: 'cap_flow_maps', descKey: 'cap_flow_maps_d' },
      { icon: 'FileText',      titleKey: 'cap_legal',     descKey: 'cap_legal_d'     },
      { icon: 'Lightbulb',     titleKey: 'cap_improve',   descKey: 'cap_improve_d'   },
      { icon: 'ClipboardList', titleKey: 'cap_report',    descKey: 'cap_report_d'    },
      { icon: 'ShieldAlert',   titleKey: 'cap_risk',      descKey: 'cap_risk_d'      },
      { icon: 'TrendingUp',    titleKey: 'cap_ai',        descKey: 'cap_ai_d'        },
    ],
  },
  {
    id: 'quality-platform', icon: 'FlaskConical', badgeKey: 'badge_realtime',
    image: '/solutions/su-yonetim-2.jpg',
    titleKey: 'feat_2_title', descKey: 'feat_2_desc', longKey: 'feat_2_long',
    capabilities: [
      { icon: 'ShieldAlert',   titleKey: 'cap_monitor', descKey: 'cap_monitor_d' },
      { icon: 'FlaskConical',  titleKey: 'cap_aiqa',    descKey: 'cap_aiqa_d'    },
      { icon: 'Map',           titleKey: 'cap_intl',    descKey: 'cap_intl_d'    },
      { icon: 'FileText',      titleKey: 'cap_auto',    descKey: 'cap_auto_d'    },
      { icon: 'Lightbulb',     titleKey: 'cap_alert',   descKey: 'cap_alert_d'   },
      { icon: 'TrendingUp',    titleKey: 'cap_trend',   descKey: 'cap_trend_d'   },
    ],
  },
  {
    id: 'footprint-reporting', icon: 'FileBarChart', badgeKey: 'badge_iso',
    image: '/solutions/su-ayak-izi.jpg',
    titleKey: 'feat_3_title', descKey: 'feat_3_desc', longKey: 'feat_3_long',
    capabilities: [
      { icon: 'FileText',      titleKey: 'cap_iso',     descKey: 'cap_iso_d'     },
      { icon: 'ClipboardList', titleKey: 'cap_direct',  descKey: 'cap_direct_d'  },
      { icon: 'TrendingUp',    titleKey: 'cap_sustain', descKey: 'cap_sustain_d' },
      { icon: 'Lightbulb',     titleKey: 'cap_aifa',    descKey: 'cap_aifa_d'    },
      { icon: 'ShieldAlert',   titleKey: 'cap_audit',   descKey: 'cap_audit_d'   },
      { icon: 'Map',           titleKey: 'cap_enviro',  descKey: 'cap_enviro_d'  },
    ],
  },
  {
    id: 'risk-analysis', icon: 'ShieldCheck', badgeKey: 'badge_ml',
    image: '/solutions/risk-guvenlik.jpg',
    titleKey: 'feat_4_title', descKey: 'feat_4_desc', longKey: 'feat_4_long',
    capabilities: [
      { icon: 'ShieldAlert',   titleKey: 'cap_comprehensive', descKey: 'cap_comprehensive_d' },
      { icon: 'TrendingUp',    titleKey: 'cap_mlai',          descKey: 'cap_mlai_d'          },
      { icon: 'Map',           titleKey: 'cap_security',      descKey: 'cap_security_d'      },
      { icon: 'ClipboardList', titleKey: 'cap_budget',        descKey: 'cap_budget_d'        },
      { icon: 'Lightbulb',     titleKey: 'cap_proactive',     descKey: 'cap_proactive_d'     },
      { icon: 'FileText',      titleKey: 'cap_resilience',    descKey: 'cap_resilience_d'    },
    ],
  },
  {
    id: 'legal-compliance', icon: 'Scale',
    image: '/solutions/akis-haritalari.jpg',
    titleKey: 'feat_5_title', descKey: 'feat_5_desc', longKey: 'feat_5_long',
    capabilities: [
      { icon: 'Map',           titleKey: 'cap_flowmap',     descKey: 'cap_flowmap_d'     },
      { icon: 'ShieldAlert',   titleKey: 'cap_anomaly',     descKey: 'cap_anomaly_d'     },
      { icon: 'FlaskConical',  titleKey: 'cap_qualm',       descKey: 'cap_qualm_d'       },
      { icon: 'ClipboardList', titleKey: 'cap_mass',        descKey: 'cap_mass_d'        },
      { icon: 'TrendingUp',    titleKey: 'cap_opeff',       descKey: 'cap_opeff_d'       },
      { icon: 'Lightbulb',     titleKey: 'cap_transparent', descKey: 'cap_transparent_d' },
    ],
  },
  {
    id: 'carbon-footprint', icon: 'Leaf', badgeKey: 'badge_esg',
    image: '/solutions/surdurulebilirlik.jpg',
    titleKey: 'feat_6_title', descKey: 'feat_6_desc', longKey: 'feat_6_long',
    capabilities: [
      { icon: 'Lightbulb',     titleKey: 'cap_tech',      descKey: 'cap_tech_d'      },
      { icon: 'Map',           titleKey: 'cap_strategic', descKey: 'cap_strategic_d' },
      { icon: 'TrendingUp',    titleKey: 'cap_footprint', descKey: 'cap_footprint_d' },
      { icon: 'ShieldAlert',   titleKey: 'cap_regcomp',   descKey: 'cap_regcomp_d'   },
      { icon: 'FileText',      titleKey: 'cap_susrep',    descKey: 'cap_susrep_d'    },
      { icon: 'ClipboardList', titleKey: 'cap_stratval',  descKey: 'cap_stratval_d'  },
    ],
  },
]

export function getFeatures(T: T): Feature[] {
  return FEATURES_BASE.map(f => ({
    id: f.id,
    icon: f.icon,
    image: f.image,
    badge: f.badgeKey ? T(f.badgeKey) : undefined,
    title: T(f.titleKey),
    description: T(f.descKey),
    longDescription: T(f.longKey),
    capabilities: f.capabilities.map(c => ({ icon: c.icon, title: T(c.titleKey), desc: T(c.descKey) })),
  }))
}

/* ── Stats ── */
const STATS_BASE: { id: string; value: number; suffix: string; prefix: string; labelKey: TKey; descKey: TKey }[] = [
  { id: 'meters',  value: 1000000, suffix: '', prefix: '', labelKey: 'stats_s1_lbl', descKey: 'stats_s1_desc' },
  { id: 'volume',  value: 189898,  suffix: '', prefix: '', labelKey: 'stats_s2_lbl', descKey: 'stats_s2_desc' },
  { id: 'anomaly', value: 2398,    suffix: '', prefix: '', labelKey: 'stats_s3_lbl', descKey: 'stats_s3_desc' },
  { id: 'saving',  value: 20,      suffix: 'm', prefix: '', labelKey: 'stats_s4_lbl', descKey: 'stats_s4_desc' },
]

export function getStats(T: T): Stat[] {
  return STATS_BASE.map(s => ({
    id: s.id, value: s.value, suffix: s.suffix, prefix: s.prefix,
    label: T(s.labelKey), description: T(s.descKey),
  }))
}

/* ── Industries ── */
const INDUSTRIES_BASE: { id: string; icon: string; image: string; titleKey: TKey; descKey: TKey; statsKey: TKey }[] = [
  { id: 'textile',  icon: 'Shirt',            image: '/industries/textile.jpg',  titleKey: 'ind_textile',  descKey: 'ind_textile_d',  statsKey: 'ind_textile_s'  },
  { id: 'food',     icon: 'UtensilsCrossed',  image: '/industries/food.jpg',     titleKey: 'ind_food',     descKey: 'ind_food_d',     statsKey: 'ind_food_s'     },
  { id: 'beverage', icon: 'GlassWater',       image: '/industries/beverage.jpg', titleKey: 'ind_beverage', descKey: 'ind_beverage_d', statsKey: 'ind_beverage_s' },
  { id: 'cement',   icon: 'Building2',        image: '/industries/cement.jpg',   titleKey: 'ind_cement',   descKey: 'ind_cement_d',   statsKey: 'ind_cement_s'   },
  { id: 'paper',    icon: 'FileBarChart',     image: '/industries/paper.jpg',    titleKey: 'ind_paper',    descKey: 'ind_paper_d',    statsKey: 'ind_paper_s'    },
  { id: 'ceramic',  icon: 'Factory',          image: '/industries/ceramic.jpg',  titleKey: 'ind_ceramic',  descKey: 'ind_ceramic_d',  statsKey: 'ind_ceramic_s'  },
]

export function getIndustries(T: T): Industry[] {
  return INDUSTRIES_BASE.map(i => ({
    id: i.id, icon: i.icon, image: i.image,
    title: T(i.titleKey), description: T(i.descKey), stats: T(i.statsKey),
  }))
}

/* ── How it works (currently unused, kept localized for future use) ── */
const HOW_IT_WORKS_BASE: { id: string; number: string; titleKey: TKey; descKey: TKey }[] = []

export function getHowItWorks(T: T): Step[] {
  return HOW_IT_WORKS_BASE.map(s => ({ id: s.id, number: s.number, title: T(s.titleKey), description: T(s.descKey) }))
}

/* ── Clients & investors (proper nouns — same in both languages) ── */
export const CLIENTS = [
  'Brisa', 'KWORKS', 'Türkiye İş Bankası', 'Ülker', 'Otokoç', 'Poyraz Boya', 'Türk Tuborg', 'Sabancı',
]

export const INVESTORS = [
  { id: 'sabanci', name: 'Sabancı ARF' },
  { id: 'teb', name: 'TEB Girişim Evi' },
  { id: 'cventures', name: 'C Ventures' },
  { id: 'kworks', name: 'KWORKS' },
  { id: 'tubitak', name: 'TÜBİTAK MAM' },
]

/* ── Press ── */
const PRESS_ITEMS_BASE: {
  id: string; date: string; icon: string; image: string; gradient: string
  titleKey: TKey; excerptKey: TKey; sourceKey: TKey
}[] = [
  { id: 'p1', date: 'Mayıs 25, 2025',  icon: 'Radio',      image: '/press/sudan-gelen.jpg',            gradient: 'linear-gradient(135deg, #0EA5E9, #06D6A0)', titleKey: 'press_p1_title',  excerptKey: 'press_p1_excerpt',  sourceKey: 'press_p1_source'  },
  { id: 'p2', date: 'Aralık 18, 2023', icon: 'Tv',         image: '/press/bein-iz-tv.jpg',              gradient: 'linear-gradient(135deg, #6366F1, #0EA5E9)', titleKey: 'press_p2_title',  excerptKey: 'press_p2_excerpt',  sourceKey: 'press_p2_source'  },
  { id: 'p3', date: 'Kasım 17, 2023',  icon: 'TrendingUp', image: '/press/blueit-yatirim-250k.jpg',     gradient: 'linear-gradient(135deg, #06D6A0, #0EA5E9)', titleKey: 'press_p3_title',  excerptKey: 'press_p3_excerpt',  sourceKey: 'press_p3_source'  },
  { id: 'p4', date: 'Kasım 16, 2023',  icon: 'Banknote',   image: '/press/blueit-arf-yatirim.jpg',      gradient: 'linear-gradient(135deg, #0EA5E9, #38BDF8)', titleKey: 'press_p4_title',  excerptKey: 'press_p4_excerpt',  sourceKey: 'press_p4_source'  },
  { id: 'p5', date: 'Kasım 9, 2023',   icon: 'Globe',      image: '/press/blueit-arf-tech-inside.jpg',  gradient: 'linear-gradient(135deg, #06B6D4, #22D3EE)', titleKey: 'press_p5_title',  excerptKey: 'press_p5_excerpt',  sourceKey: 'press_p5_source'  },
  { id: 'p6', date: 'Eylül 16, 2023',  icon: 'Recycle',    image: '/press/boyahane-yapay-zeka.jpg',     gradient: 'linear-gradient(135deg, #06D6A0, #34D399)', titleKey: 'press_p6_title',  excerptKey: 'press_p6_excerpt',  sourceKey: 'press_p6_source'  },
  { id: 'p7', date: 'Eylül 8, 2023',   icon: 'Trophy',     image: '/press/cyberpark-ring.jpg',          gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)', titleKey: 'press_p7_title',  excerptKey: 'press_p7_excerpt',  sourceKey: 'press_p7_source'  },
  { id: 'p8', date: 'Nisan 29, 2023',  icon: 'FileSearch', image: '/press/dogal-afetler-gooinn.jpg',    gradient: 'linear-gradient(135deg, #64748B, #0EA5E9)', titleKey: 'press_p8_title',  excerptKey: 'press_p8_excerpt',  sourceKey: 'press_p8_source'  },
  { id: 'p9', date: 'Nisan 26, 2023',  icon: 'HeartPulse', image: '/press/hayat-kurtaracak-girisimler.jpg', gradient: 'linear-gradient(135deg, #EF4444, #F59E0B)', titleKey: 'press_p9_title',  excerptKey: 'press_p9_excerpt',  sourceKey: 'press_p9_source'  },
  { id: 'p10', date: 'Mayıs 8, 2022',  icon: 'Sparkles',   image: '/press/kadin-girisimciler-sdg.jpg',  gradient: 'linear-gradient(135deg, #06D6A0, #6366F1)', titleKey: 'press_p10_title', excerptKey: 'press_p10_excerpt', sourceKey: 'press_p10_source' },
]

export function getPressItems(T: T) {
  return PRESS_ITEMS_BASE.map(p => ({
    id: p.id, date: p.date, icon: p.icon, image: p.image, gradient: p.gradient,
    title: T(p.titleKey), excerpt: T(p.excerptKey), source: T(p.sourceKey),
  }))
}

/* ── Offices ── */
export function getOffices(T: T) {
  return [
    { id: 'izmir',    title: T('contact_izmir'),    address: 'Erzene Mah., Ankara Cad. No:172/67\nBornova / İzmir', hours: T('office_hours') },
    { id: 'istanbul', title: T('contact_istanbul'), address: 'Levent, 4, Sabancı Center\n34330 Beşiktaş / İstanbul', hours: T('office_hours') },
  ]
}

/* ── Water Universe / Blog posts ── */
export type BlogCategoryKey = 'wu_cat_su' | 'wu_cat_iklim' | 'wu_cat_iyi'

const BLOG_POSTS_BASE: { id: string; date: string; catKey: BlogCategoryKey; titleKey: TKey; excerptKey: TKey }[] = [
  { id: 'su-ayak-izi',      date: 'Haziran 20, 2023',  catKey: 'wu_cat_su',   titleKey: 'wu_post1_title', excerptKey: 'wu_post1_excerpt' },
  { id: 'tekstil-atik-su',  date: 'Aralık 13, 2022',   catKey: 'wu_cat_iyi',  titleKey: 'wu_post2_title', excerptKey: 'wu_post2_excerpt' },
  { id: 'cevre-hukuk',      date: 'Kasım 26, 2022',    catKey: 'wu_cat_iklim',titleKey: 'wu_post3_title', excerptKey: 'wu_post3_excerpt' },
  { id: 'su-gercekleri',    date: 'Temmuz 30, 2022',   catKey: 'wu_cat_su',   titleKey: 'wu_post4_title', excerptKey: 'wu_post4_excerpt' },
  { id: 'zero-carbon',      date: 'Temmuz 13, 2022',   catKey: 'wu_cat_iklim',titleKey: 'wu_post5_title', excerptKey: 'wu_post5_excerpt' },
  { id: 'e-atik',           date: 'Mayıs 31, 2022',    catKey: 'wu_cat_iyi',  titleKey: 'wu_post6_title', excerptKey: 'wu_post6_excerpt' },
]

export function getBlogPosts(T: T) {
  return BLOG_POSTS_BASE.map(b => ({
    id: b.id, date: b.date, categoryKey: b.catKey, category: T(b.catKey),
    title: T(b.titleKey), excerpt: T(b.excerptKey),
  }))
}
