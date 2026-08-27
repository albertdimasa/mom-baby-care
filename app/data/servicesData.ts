import type { ServiceItem, PackageItem } from '~/types/spa'

export const BABY_SERVICES: ServiceItem[] = [
  {
    id: 'baby-massage',
    name: 'Baby Massage',
    price: 100000,
    priceDisplay: '100K',
    category: 'baby'
  },
  {
    id: 'baby-spa',
    name: 'Baby Spa',
    subtitle: '(massage, gym, swim, baby bath)',
    price: 200000,
    priceDisplay: '200K',
    category: 'baby'
  },
  {
    id: 'baby-massage-swim-bath',
    name: 'Baby Massage + Swim + Baby Bath',
    price: 180000,
    priceDisplay: '180K',
    category: 'baby'
  },
  {
    id: 'baby-massage-gym',
    name: 'Baby Massage + Gym',
    price: 150000,
    priceDisplay: '150K',
    category: 'baby'
  },
  {
    id: 'baby-therapy',
    name: 'Baby Therapy',
    subtitle: '(massage therapy)',
    price: 120000,
    priceDisplay: '120K',
    category: 'baby'
  },
  {
    id: 'cukur-rambut-bayi',
    name: 'Cukur Rambut Bayi',
    price: 50000,
    priceDisplay: '50K',
    isNew: true,
    category: 'baby'
  }
]

export const KIDS_SERVICES: ServiceItem[] = [
  {
    id: 'kids-massage',
    name: 'Kids Massage',
    subtitle: '(45 menit)',
    price: 130000,
    priceDisplay: '130K',
    category: 'kids'
  },
  {
    id: 'kids-therapy',
    name: 'Kids Therapy',
    subtitle: '(kids massage therapy)',
    price: 150000,
    priceDisplay: '150K',
    category: 'kids'
  }
]

export const MOM_SERVICES: ServiceItem[] = [
  {
    id: 'mom-relaxing-60',
    name: 'Mom Relaxing',
    subtitle: '(60 menit)',
    price: 150000,
    priceDisplay: '150K',
    category: 'mom'
  },
  {
    id: 'mom-relaxing-90',
    name: 'Mom Relaxing',
    subtitle: '(90 menit)',
    price: 180000,
    priceDisplay: '180K',
    category: 'mom'
  },
  {
    id: 'prenatal-massage-60',
    name: 'Prenatal Massage',
    subtitle: '(60 menit)',
    price: 150000,
    priceDisplay: '150K',
    category: 'mom'
  },
  {
    id: 'prenatal-massage-90',
    name: 'Prenatal Massage',
    subtitle: '(90 menit)',
    price: 180000,
    priceDisplay: '180K',
    category: 'mom'
  },
  {
    id: 'totok-wajah-masker',
    name: 'Totok Wajah + Masker',
    price: 50000,
    priceDisplay: '50K',
    category: 'mom'
  },
  {
    id: 'nifas-massage-90',
    name: 'Nifas Massage',
    subtitle: '(90 menit)',
    price: 180000,
    priceDisplay: '180K',
    category: 'mom'
  },
  {
    id: 'nifas-oksitosin-laktasi',
    name: 'Nifas Massage + Oksitosin + Laktasi',
    subtitle: '(90 menit)',
    price: 180000,
    priceDisplay: '180K',
    category: 'mom'
  },
  {
    id: 'oksitosin-laktasi-60',
    name: 'Oksitosin + Laktasi Massage',
    subtitle: '(60 menit)',
    price: 165000,
    priceDisplay: '165K',
    category: 'mom'
  },
  {
    id: 'lulur-body-scrub',
    name: 'Lulur (body scrub)',
    price: 75000,
    priceDisplay: '75K',
    isNew: true,
    category: 'mom'
  }
]

export const NEWBORN_PACKAGES: PackageItem[] = [
  {
    id: 'package-3-days',
    title: 'Paket Newborn 3 Hari',
    subtitle: 'Perawatan dasar newborn 3 hari berturut-turut',
    price: 500000,
    priceDisplay: 'Rp 500K',
    tag: 'PAKET 3 HARI',
    features: [
      'Memandikan bayi',
      'Menjemur bayi',
      'Perawatan tali pusat',
      'Potong kuku & bersih lidah/telinga',
      'Baby massage 1x/hari (total 3x)'
    ]
  },
  {
    id: 'package-7-days',
    title: 'Paket Newborn 7 Hari',
    subtitle: 'Perawatan lengkap newborn & pemulihan Bunda 7 hari',
    price: 1250000,
    priceDisplay: 'Rp 1.250K',
    tag: 'PAKET 7 HARI',
    features: [
      'Memandikan & menjemur bayi',
      'Perawatan tali pusat, kuku, lidah & telinga',
      'Totok wajah bayi',
      'Baby massage 4x',
      'Nifas massage untuk Bunda',
      'Oksitosin + laktasi massage 2x'
    ]
  }
]
