export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductVariant {
  id: string;
  label: string;
  sublabel: string;
  images: string[];
  hoverImage?: string;
  colorImages?: Record<string, string[]>;
  colors: ProductColor[];
  description: string;
}

export interface TechnologyFeature {
  number: string;
  headline: string;
  description: string;
  image?: string;
  /** CSS object-position for cropping (e.g. 'center bottom' to hide top) */
  imagePosition?: string;
  icon?: 'invisible' | 'molding' | 'stretch' | 'breathe' | 'durability' | 'anchor' | 'comfort';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: 'bras' | 'briefs' | 'leggings';
  line: 'barely-zero' | 'pure-comfort' | 'ultraflex' | 'bandeau' | 'swan' | 'featherlight';
  subcategory: string;
  colors: ProductColor[];
  sizes: string[];
  isNew?: boolean;
  images: string[];
  hoverImage?: string;
  colorImages?: Record<string, string[]>;
  description: string;
  details: {
    composition: string;
    care: string;
    fit: string;
  };
  sensoryLine: string;
  lifestyleLine: string;
  variants?: ProductVariant[];
  technologyFeatures?: TechnologyFeature[];
}

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA — 25 Keep List products
// Categories: bras (17) · briefs (5) · leggings (3)
// Lines: barely-zero · pure-comfort · ultraflex · bandeau · swan · featherlight
// Descriptions: revamped copy from NEIWAI_US_Portfolio_Action_Plan_v26.xlsx
// ─────────────────────────────────────────────────────────────

export const brasProducts: Product[] = [
  // ── Barely Zero Line ──────────────────────────────────────
  {
    id: 'bra-001',
    slug: 'barely-zero-anchored-cup-strap-bra',
    name: 'Barely Zero Anchored Cup Strap Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Lilac Ash', hex: '#B8A8B8' },
      { name: 'Peach Pure', hex: '#E8C8B8' },
      { name: 'Asparagus Green', hex: '#B8C4A8' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/0216NEIWAI32653.jpg?v=1762136724&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16086.jpg?v=1762136724&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=800',
    colorImages: {
      'Eggwhite': [
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16738.jpg?v=1762136724&width=800',
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=800',
        'https://neiwai.life/cdn/shop/files/0216NEIWAI32441.jpg?v=1762136724&width=800',
      ],
      'Black': [
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI17296.jpg?v=1762145917&width=800',
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=800',
        'https://neiwai.life/cdn/shop/files/0216NEIWAI32462.jpg?v=1762136724&width=800',
      ],
      'Treacly Almond': [
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16086.jpg?v=1762136724&width=800',
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=800',
        'https://neiwai.life/cdn/shop/files/0216NEIWAI32441.jpg?v=1762136724&width=800',
      ],
      'Lilac Ash': [
        'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_23.jpg?v=1770757989&width=800',
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=800',
      ],
      'Peach Pure': [
        'https://neiwai.life/cdn/shop/files/0216NEIWAI32413_f65e5f4f-1147-4474-8102-5b59a950223a.jpg?v=1762136724&width=800',
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=800',
      ],
      'Asparagus Green': [
        'https://neiwai.life/cdn/shop/files/0216NEIWAI32653.jpg?v=1762136724&width=800',
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=800',
      ],
    },
    description: 'Thin straps, no underwire, no adjustment required. Adaptive Fit Technology allows the one-size construction to conform to the body rather than the other way around. Anchored cups — secured at the base — stay positioned through movement. The seams are gone. The hardware is gone. The bra remains.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'For best results, hand wash with a light detergent in cold water.',
      fit: 'One size. Adaptive Fit Technology conforms to different body shapes without adjustment.',
    },
    sensoryLine: 'One size. Adapts to yours.',
    lifestyleLine: 'The seams are gone. The hardware is gone. The bra remains.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Adaptive Fit Technology',
        description: 'One-size construction that conforms to different body shapes without adjustment — the fabric works with your body, not against it.',
        image: '/images/adaptive-fit-two-women.png',
        imagePosition: 'center 45%',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Anchored Cup Support',
        description: 'Cups secured at the base stay positioned through movement — soft, natural shaping that doesn\'t shift, slide, or compress from morning to night.',
        image: '/images/anchored-cup-support-light.png',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Invisible by Construction',
        description: 'No underwire, no foam padding, no hardware — fully seamless exterior. Pairs invisibly under any layer.',
        image: '/images/invisible-by-construction-still-life.png',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-002',
    slug: 'barely-zero-anchored-cup-signature-bra',
    name: 'Barely Zero Anchored Cup Signature Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Lilac Ash', hex: '#B8A8B8' },
      { name: 'Icy Purple', hex: '#C8C0D0' },
      { name: 'Black', hex: '#1A1714' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI18218.jpg?v=1762210850&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI17255.jpg?v=1762149203&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16364_2087098d-adca-42e7-89da-ef4c3e9f3af5.jpg?v=1762149203&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI17255.jpg?v=1762149203&width=800',
    colorImages: {
      'Treacly Almond': [
        'https://neiwai.life/cdn/shop/files/0216NEIWAI32312_ec5dae56-2052-4109-a8bb-0142a3b89c45.jpg?v=1757373136&width=800',
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16364_2087098d-adca-42e7-89da-ef4c3e9f3af5.jpg?v=1762149203&width=800',
      ],
      'Black': [
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI17255.jpg?v=1762149203&width=800',
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI17270.jpg?v=1762149203&width=800',
      ],
      'Icy Purple': [
        'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI18218.jpg?v=1762210850&width=800',
        'https://neiwai.life/cdn/shop/files/0216NEIWAI32620_1.jpg?v=1757373177&width=800',
      ],
      'Lilac Ash': [
        'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_24.jpg?v=1770759128&width=800',
        'https://neiwai.life/cdn/shop/files/0216NEIWAI32620_1.jpg?v=1757373177&width=800',
      ],
    },
    description: 'Wide straps. Anchored cups. No underwire. The Signature Bra is the most supported expression of the Barely Zero construction — designed for busts that need weight distribution without compression. Soft natural shaping with no foam, no structure, nothing pressing.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'For best results, hand wash with a light detergent in cold water.',
      fit: 'One size. Wide shoulder straps distribute weight evenly — designed for larger busts.',
    },
    sensoryLine: 'The Barely Zero silhouette, fully resolved.',
    lifestyleLine: 'Shape that holds without shifting. Support without compression.',
  },
  {
    id: 'bra-003',
    slug: 'barely-zero-strap-bra',
    name: 'Barely Zero Strap Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Fluffy Peach', hex: '#E8C8B0' },
      { name: 'Cinnamon Taste', hex: '#C4A088' },
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Lavender', hex: '#C0B0C8' },
      { name: 'Plein Air', hex: '#B8C4D0' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16085.jpg?v=1757376293&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16969.jpg?v=1757376271&width=800',
      'https://neiwai.life/cdn/shop/files/NEI001_N211WU1120_BarelyZeroSpaghetti_CinnamonTaste_OM_ALT_8_1.jpg?v=1757376271&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16969.jpg?v=1757376271&width=800',
    description: 'Thin adjustable straps, no clasps, no underwire. The Strap Bra is the piece that defined the Barely Zero category — a bra worn for its absence rather than its presence. Made from CloudFit nylon, an adaptive blend developed to move with the body without binding.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'Dissolve a gentle detergent in cold water (86°F/30°C max) and fully immerse. Gently press/knead, then rinse. Hang or lay flat to dry in a cool, shaded place.',
      fit: 'One size. Wire-free, foam-free, fully seamless — designed to disappear. Adapts across a wide range of body types.',
    },
    sensoryLine: 'The original. Still the standard.',
    lifestyleLine: 'The bra defined by its absence, not its presence.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'CloudFit Nylon',
        description: 'Ultra-elastic, breathable, moisture-wicking — an adaptive blend developed to move with the body without binding or compressing.',
        image: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16085.jpg?v=1757376293&width=800',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Wire-Free. Foam-Free.',
        description: 'Fully seamless construction. No visible edges, no seam imprints — a clean, barely-there feel under everything.',
        image: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16969.jpg?v=1757376271&width=800',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'One Size, Adaptive',
        description: 'One-size construction adapts across a wide range of body types — thin adjustable straps for a clean sightline under anything.',
        image: 'https://neiwai.life/cdn/shop/files/NEI001_N211WU1120_BarelyZeroSpaghetti_CinnamonTaste_OM_ALT_8_1.jpg?v=1757376271&width=800',
        icon: 'anchor',
      },
    ],
  },
  {
    id: 'bra-004',
    slug: 'barely-zero-scallop-bra',
    name: 'Barely Zero Scallop Bra',
    price: 59,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Black', hex: '#1A1714' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Asparagus Green', hex: '#B8C4A8' },
      { name: 'Icy Purple', hex: '#C8C0D0' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      'https://neiwai.life/cdn/shop/files/Barely_Zero_Fixed_Cup_Wavy_3x4_1.jpg?v=1770860761&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI158792.jpg?v=1764127456&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI162012_eccd6926-58ef-4a36-9ddd-f76beec553d9.jpg?v=1764127456&width=800',
      'https://neiwai.life/cdn/shop/files/20250604-162624_1.jpg?v=1770860761&width=800',
      'https://neiwai.life/cdn/shop/files/20250604-162636_1_33475b81-7dbe-4908-bebf-24c9947db8f8.jpg?v=1770860761&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI158792.jpg?v=1764127456&width=800',
    description: 'A delicate scalloped V-neckline and fixed molded cups — the Scallop Bra brings structure to the Barely Zero collection without adding weight. Pull-on with no clasps or underwire. The cups stay fixed, the neckline stays crisp, and the silhouette remains invisible under clothing.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Cup retains shape wash after wash.',
      fit: 'Available in XS-S and M-L. Fixed cup with sculpted shape — slightly snug for natural shaping.',
    },
    sensoryLine: 'The scallop that holds its shape.',
    lifestyleLine: 'From meeting to dinner, without a thought.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Invisible by Design',
        description: 'Scalloped V-neckline with fixed cups that maintain shape throughout the day. Pull-on construction — no clasps, no underwire, no adjustment.',
        image: '/images/invisible-by-design-still-life.png',
        icon: 'invisible',
      },
      {
        number: '02',
        headline: 'Fixed Cup Construction',
        description: 'Precision-molded fixed cups bonded to the lining — zero shift, zero seams on skin. Shape that holds position all day without slipping.',
        image: '/images/fixed-cup-construction-still-life.png',
        imagePosition: 'center 42%',
        icon: 'molding',
      },
      {
        number: '03',
        headline: 'CloudFit Stretch',
        description: 'Seamless side panels for a smooth line under fitted tops. Adjustable straps for personalized fit, zero restriction.',
        image: '/images/cloudfit-stretch-still-life.png',
        imagePosition: 'center 42%',
        icon: 'stretch',
      },
    ],
  },
  {
    id: 'bra-005',
    slug: 'barely-zero-scallop-clasp-bra',
    name: 'Barely Zero Scallop Clasp Bra',
    price: 59,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Dark Brown', hex: '#4A3830' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI180512.jpg?v=1762149070&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI162012.jpg?v=1762149070&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23415.jpg?v=1762149070&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI162012.jpg?v=1762149070&width=800',
    description: 'The Scallop Clasp Bra adds a wave-inspired back clasp to the Fixed Cup Wavy silhouette — an upgrade that introduces fine-tuned fit without changing what the style does well. Bisous Cups™ for breathable, natural shaping. Flo Support™ for stay-put structure. The scallop neckline remains.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in XS-S and M-L. Minimal clasp-back closure for an adjustable, precise fit.',
    },
    sensoryLine: 'The Scallop, with adjustability.',
    lifestyleLine: 'The same scallop neckline. Fine-tuned fit.',
  },
  {
    id: 'bra-006',
    slug: 'barely-zero-camisole',
    name: 'Barely Zero Camisole',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'camisole',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Peach Pure', hex: '#E8C8B8' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      'https://neiwai.life/cdn/shop/files/5.26_0803.jpg?v=1762136811&width=800',
      'https://neiwai.life/cdn/shop/files/BarelyZeroCamisole_1715.jpg?v=1762136811&width=800',
      'https://neiwai.life/cdn/shop/files/5.26_1705.jpg?v=1721417901&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/BarelyZeroCamisole_1715.jpg?v=1762136811&width=800',
    description: 'Barely Zero integral cups built into a camisole body — full support without a separate bra underneath. The hem falls cleanly as a layer or on its own. The construction is the same as the rest of the Barely Zero collection: seamless, adaptive, designed to disappear.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'Hand wash cold or machine wash gentle. Lay flat to dry.',
      fit: 'Available in XS-S and M-L. Thin adjustable straps. Smooth seamless construction — no visible lines under any fit.',
    },
    sensoryLine: 'The bra, extended.',
    lifestyleLine: 'Layered under linen or worn alone. One piece, no compromise.',
  },
  {
    id: 'bra-007',
    slug: 'barely-zero-curvy-clasp-bra',
    name: 'Barely Zero Curvy Clasp Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Dark Brown', hex: '#4A3830' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://neiwai.life/cdn/shop/files/NW221WU11103_BarelyZeroFixedCupClasp_Caramel_OM_Side_5_1.jpg?v=1737920488&width=800',
      'https://neiwai.life/cdn/shop/files/BZ_Fixed_Cup_Clasp_Bra_Black_3x4_1.jpg?v=1728596897&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU11103-BZ-Fixed-Cup-Clasp-Bra-Treacly-Almond_1_1.jpg?v=1701045729&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/BZ_Fixed_Cup_Clasp_Bra_Black_3x4_1.jpg?v=1728596897&width=800',
    description: 'Flo Support™ and Bisous Cups™ — two technologies developed to bring the Barely Zero experience to fuller bust proportions. Structured where support is needed. Weightless everywhere else. Back clasp for adjustable fit. Note: this bra adapts to the body over the first few wears.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in S–XL. If you\'re in between sizes, size up. Bra adapts to the body after first few wears.',
    },
    sensoryLine: 'Fuller cups. Still barely there.',
    lifestyleLine: 'Wireless support engineered for fuller bust proportions.',
  },
  {
    id: 'bra-008',
    slug: 'barely-zero-curvy-bra',
    name: 'Barely Zero Curvy Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI18116.jpg?v=1762136074&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI17856_f73eee67-943b-42ce-9701-fd667ea7f404.jpg?v=1762136074&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI32359.jpg?v=1757370825&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI17856_f73eee67-943b-42ce-9701-fd667ea7f404.jpg?v=1762136074&width=800',
    description: 'The Curvy Bra extends the Barely Zero wireless construction to a fuller cup range — wider straps, deeper anchored cups, and the same adaptive stretch fabric as the rest of the collection. Designed for everyday wear, postpartum, and body changes that standard sizing doesn\'t account for.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach.',
      fit: 'Available in S–XL. Wider straps distribute weight evenly. Deeper anchored cups for fuller proportions.',
    },
    sensoryLine: 'Wire-free for curves.',
    lifestyleLine: 'Everyday wear, postpartum, and everything in between.',
  },
  {
    id: 'bra-009',
    slug: 'barely-zero-curve-extra-support-bra',
    name: 'Barely Zero Curve Extra Support Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Vanilla Bean', hex: '#F0E8D8' },
      { name: 'Dark Chocolate', hex: '#3C2820' },
    ],
    sizes: ['S/M', 'L/XL'],
    images: [
      'https://neiwai.life/cdn/shop/files/0216NEIWAI32383.jpg?v=1757370825&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI32513.jpg?v=1757372435&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI17865.jpg?v=1757370825&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/0216NEIWAI32513.jpg?v=1757372435&width=800',
    description: 'Maximum support in minimum bra. Extra-wide anchored cups and reinforced band provide substantial lift without a single wire. Designed for DD+ cup sizes that need structure without sacrifice.',
    details: {
      composition: '68% Polyamide, 32% Spandex — reinforced band',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in S/M and L/XL. Wider band and deeper cups for extra support.',
    },
    sensoryLine: 'Extra support. Zero wire.',
    lifestyleLine: 'For curves that need more without giving up comfort.',
  },
  {
    id: 'bra-010',
    slug: 'barely-zero-breeze-bra',
    name: 'Barely Zero Breeze Bra',
    price: 55,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Sage Mist', hex: '#C0C8B8' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_9_117a7b3d-b5f1-4aef-8fe2-3e974fc7f982.jpg?v=1768934253&width=800',
      'https://neiwai.life/cdn/shop/files/NO261WU1123_1.jpg?v=1768529492&width=800',
      'https://neiwai.life/cdn/shop/files/NO261WU1123_2.jpg?v=1768934303&width=800',
      'https://neiwai.life/cdn/shop/files/NO261WU1123.jpg?v=1768934303&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/NO261WU1123_1.jpg?v=1768529492&width=800',
    description: 'A knit-silk blend in the Barely Zero construction — the most breathable bra in the collection. Back clasp closure with anchored cups, engineered for warm weather and sensitive skin. Lighter than it looks. Cooler than you expect.',
    details: {
      composition: '52% Polyamide, 36% Spandex, 12% Silk',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in XS-S and M-L. Back clasp with adjustable band. Anchored cups.',
    },
    sensoryLine: 'The coolest bra in the collection.',
    lifestyleLine: 'Made for warmth. Made for summer.',
  },
  // ── Pure Comfort Line ──────────────────────────────────────
  {
    id: 'bra-011',
    slug: 'pure-comfort-triangle-bra',
    name: 'Pure Comfort Triangle Bra',
    price: 49,
    category: 'bras',
    line: 'pure-comfort',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Ecru', hex: '#E8DED0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Nude Pink', hex: '#D8B8A8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24188.jpg?v=1753823243&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24194.jpg?v=1753823243&width=800',
      'https://neiwai.life/cdn/shop/files/251117neiwai24141_1efcbfee-293a-45ec-921d-2c5bd2db7aa7.jpg?v=1769454776&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24194.jpg?v=1753823243&width=800',
    description: 'TENCEL™ Modal, cotton, and LYCRA® Spandex — a combination chosen for breathability, stretch recovery, and gentle contact with sensitive skin. Semi-fixed cups that provide soft support without foam. Convertible straps with a soft clasp. The 4.0 edition adds a sculpted pad shape that sits flat with no gapping.',
    details: {
      composition: '45% Modal, 45% Cotton, 10% LYCRA® Spandex',
      care: 'For best results, hand wash in cold water. Lay flat to dry. Do not iron.',
      fit: 'Available in XS–L. Semi-fixed cups tacked for easy laundering; stitching removable for unpadded preference.',
    },
    sensoryLine: 'Natural fibers. Second-skin fit.',
    lifestyleLine: 'Breathable, responsibly sourced, made for sensitive skin.',
  },
  {
    id: 'bra-012',
    slug: 'pure-comfort-bandeau-bra',
    name: 'Pure Comfort Bandeau Bra',
    price: 39,
    category: 'bras',
    line: 'pure-comfort',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Ecru', hex: '#E8DED0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Nude Pink', hex: '#D8B8A8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/NO261WU1108_NO261WU1305_3_a7430362-c197-4d0b-aa9c-10be83c22654.jpg?v=1769454776&width=800',
      'https://neiwai.life/cdn/shop/files/251117neiwai24165_020d67fe-06ce-45df-8c73-8f26df8c70e4.jpg?v=1769454809&width=800',
      'https://neiwai.life/cdn/shop/files/251117neiwai24200_41011807-1f97-4bbb-ba71-ca69957bd586.jpg?v=1769454809&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/251117neiwai24165_020d67fe-06ce-45df-8c73-8f26df8c70e4.jpg?v=1769454809&width=800',
    description: 'The natural fiber answer to the strapless bra problem. TENCEL™ Modal and Supima® cotton in a 5/8 cup cut for A–C proportions — with a front keyhole for ventilation and fully adjustable straps that convert to racerback. Cotton-padded lining.',
    details: {
      composition: '46% TENCEL™ Modal, 44% Supima® cotton, 10% LYCRA® Spandex | padded lining: 100% cotton',
      care: 'For best results, hand wash in cold water. Lay flat to dry. Do not iron.',
      fit: 'Available in XS–L. A–C cup range. Fully adjustable straps convert to racerback.',
    },
    sensoryLine: 'Natural fiber. Strapless support.',
    lifestyleLine: 'Breathable, ventilated, strapless-ready.',
  },
  // ── Bandeau Line ──────────────────────────────────────────
  {
    id: 'bra-013',
    slug: 'bandeau-bra',
    name: 'Bandeau Bra',
    price: 39,
    category: 'bras',
    line: 'bandeau',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Warm Bread', hex: '#C8B098' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_01147_1.jpg?v=1747859977&width=800',
      'https://neiwai.life/cdn/shop/files/WechatIMG55bc0a6f54fd27e9a6f6e8c12e84c4e4.jpg?v=1747866499&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33787_1.jpg?v=1747866499&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/WechatIMG55bc0a6f54fd27e9a6f6e8c12e84c4e4.jpg?v=1747866499&width=800',
    description: 'A fixed shaping panel prevents the roll and fold that undoes most strapless styles — the critical construction detail in the Bandeau Bra. Breathable stretch fabric, stay-put coverage, and three wear configurations: strapless, standard straps, or crossed.',
    details: {
      composition: '82% Polyester, 18% Spandex',
      care: 'Hand wash cold. Lay flat to dry.',
      fit: 'Available in XS–L. Three ways to wear: strapless, standard straps, or crossed at the back. Wire-free.',
    },
    sensoryLine: 'Three ways to wear it. Holds through all of them.',
    lifestyleLine: 'Fixed shaping. No rolling. No folding.',
  },
  {
    id: 'bra-014',
    slug: 'essential-bandeau-bra',
    name: 'Essential Bandeau Bra',
    price: 55,
    category: 'bras',
    line: 'bandeau',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/251116neiwai22654.jpg?v=1771356782&width=800',
      'https://neiwai.life/cdn/shop/files/251116neiwai22644.jpg?v=1771356782&width=800',
      'https://neiwai.life/cdn/shop/files/251116neiwai22646.jpg?v=1770669736&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/251116neiwai22644.jpg?v=1771356782&width=800',
    description: 'Removable straps, a mesh panel for breathability, and a back clasp — the Essential Bandeau Bra is built for low-cut dressing without the compromises of typical strapless construction. Non-removable chest padding, wire-free, and designed to sit invisibly under open necklines.',
    details: {
      composition: 'Shell: 66% Polyamide, 34% Spandex | Mesh: 100% Polyamide | Lining: 100% Cotton',
      care: 'Hand wash in cold water. Line dry in the shade. Do not iron. Do not tumble dry.',
      fit: 'Available in XS–L. Removable straps convert between strapless, straight, and crossback.',
    },
    sensoryLine: 'The convertible strapless.',
    lifestyleLine: 'For low-cut dressing without compromise.',
  },
  // ── Swan ──────────────────────────────────────────────────
  {
    id: 'bra-015',
    slug: 'swan-bra',
    name: 'Swan Bra',
    price: 45,
    category: 'bras',
    line: 'swan',
    subcategory: 'bra',
    colors: [
      { name: 'Sphinx', hex: '#C8B8A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Brazilian Sand', hex: '#D8C0A8' },
      { name: 'Chocolate', hex: '#5C4030' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/3d_smile_plunge_3x4_1.jpg?v=1728599123&width=800',
      'https://neiwai.life/cdn/shop/files/20240531_65029.jpg?v=1721857893&width=800',
      'https://neiwai.life/cdn/shop/files/5.27_0033.jpg?v=1721857893&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20240531_65029.jpg?v=1721857893&width=800',
    description: 'The Swan Bra is proportioned for V-neck and plunge silhouettes — a low, graceful neckline with molded cups that adapt to shape without heavy foam. Lightweight, adjustable straps, and a back hook-and-eye closure. Versatile enough for everyday wear and light activity.',
    details: {
      composition: '70% Polyamide, 30% Spandex',
      care: 'Hand wash with a light detergent in cold water.',
      fit: 'Available in XS–L. Low V-line silhouette. Adjustable straps; back hook-and-eye closure.',
    },
    sensoryLine: 'For deep necklines.',
    lifestyleLine: 'Sits invisibly under plunging and open necklines.',
  },
  // ── UltraFlex ─────────────────────────────────────────────
  {
    id: 'bra-016',
    slug: 'ultraflex-bra',
    name: 'UltraFlex Bra',
    price: 45,
    category: 'bras',
    line: 'ultraflex',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Sage Mist', hex: '#C0C8B8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/3d_smile_cutout_gray_1.jpg?v=1728599398&width=800',
      'https://neiwai.life/cdn/shop/files/20240531_67664.jpg?v=1721859241&width=800',
      'https://neiwai.life/cdn/shop/files/20240531_67687.jpg?v=1721859241&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20240531_67664.jpg?v=1721859241&width=800',
    description: '88% Cotton, 12% Spandex — a high-stretch cotton blend with the breathability of natural fibers and none of the stiffness. Semi-fixed triangle cups stay in position without foam or underwire. Adjustable straps with a comfortable, friction-free shoulder fit.',
    details: {
      composition: '88% Cotton, 12% Spandex',
      care: 'Hand wash with a light detergent in cold water.',
      fit: 'Available in XS–L. 360° adaptive stretch maintains shape across different body types.',
    },
    sensoryLine: 'Cotton that moves with you.',
    lifestyleLine: 'High-stretch, breathable, all-day natural comfort.',
  },
  // ── Featherlight ──────────────────────────────────────────
  {
    id: 'bra-017',
    slug: 'featherlight-push-up-bra',
    name: 'Featherlight Push Up Bra',
    price: 49,
    category: 'bras',
    line: 'featherlight',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Warm Bread', hex: '#C8B098' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24010.jpg?v=1756252947&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23615.jpg?v=1756253163&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24097.jpg?v=1756253163&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23615.jpg?v=1756253163&width=800',
    description: 'Molded cups, soft push-up padding, and a low V-neckline — a wire-free push-up construction that enhances shape without hardware or structural foam. Light enough to feel incidental. The Featherlight fabric maintains the barely-there feel the name promises.',
    details: {
      composition: '80% Polyester, 20% Spandex',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach.',
      fit: 'Available in XS–L. Low V-neckline. Wire-free despite structured cup construction.',
    },
    sensoryLine: 'Lift without the weight.',
    lifestyleLine: 'Natural lift. No hardware, no structural foam.',
  },
];

export const briefsProducts: Product[] = [
  {
    id: 'brief-001',
    slug: 'barely-zero-superlight-brief',
    name: 'Barely Zero Superlight Brief',
    price: 18,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Peach Pure', hex: '#E8C8B8' },
    ],
    sizes: ['One Size'],
    isNew: true,
    images: [
      'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_00783.jpg?v=1753306860&width=800',
      'https://neiwai.life/cdn/shop/files/20231124-NEIWAI_00263_63699f2c-48fc-4820-9e6a-185195902b4e.jpg?v=1753306860&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33794.jpg?v=1753306860&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20231124-NEIWAI_00263_63699f2c-48fc-4820-9e6a-185195902b4e.jpg?v=1753306860&width=800',
    description: 'A silicone grip along the rim keeps the Superlight Brief in position through activity — no riding, no adjustment. The back panel is seamless and non-restrictive. Built for movement without the bulk: lightweight, breathable, and invisible under anything.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'One size. Silicone grip along waist rim holds position through workouts and everyday movement.',
    },
    sensoryLine: 'Superlight. Stays put.',
    lifestyleLine: 'From workouts to wind-downs — no riding, no adjustment.',
  },
  {
    id: 'brief-002',
    slug: 'barely-zero-low-waist-brief',
    name: 'Barely Zero Low Waist Brief',
    price: 15,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Fluffy Peach', hex: '#E8C8B0' },
      { name: 'Cinnamon Taste', hex: '#C4A088' },
      { name: 'Champagne Wheat', hex: '#D8C8A8' },
      { name: 'Her Brownie', hex: '#8B6848' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Caramel', hex: '#B89070' },
      { name: 'Deep Mahogany', hex: '#5C3028' },
      { name: 'Taro Blush', hex: '#C8A8B0' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI333371.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI33185_1.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI33207_1.jpg?v=1736536548&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI33185_1.jpg?v=1736536548&width=800',
    description: 'Laser-cut edges, no visible seams, and the Barely Zero fabric in its most minimal expression. Sits low at the hip for low-rise and hip-hugging silhouettes. A bra without a brief is an unfinished thought.',
    details: {
      composition: '72% Nylon, 28% Spandex. Laser-cut construction.',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'One size. Low-rise sits at the hip. Seamless exterior — no visible lines under fitted clothing.',
    },
    sensoryLine: 'The brief that disappears.',
    lifestyleLine: 'Sits low. Stays invisible. Works under everything.',
  },
  {
    id: 'brief-003',
    slug: 'barely-zero-mid-waist-brief',
    name: 'Barely Zero Mid Waist Brief',
    price: 19,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Cinnamon Taste', hex: '#C4A088' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
    description: 'The mid-waist Brief in Barely Zero fabric — a few more sizes for a few more bodies. Laser-cut edges and seamless construction keep it invisible. Mid-rise coverage that works under anything from high-waist denim to bodycon.',
    details: {
      composition: '72% Nylon, 28% Spandex. Laser-cut edges.',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'Available in XS–L. Mid-rise with full coverage. Seamless exterior.',
    },
    sensoryLine: 'Mid-rise. Seamless. Invisible.',
    lifestyleLine: 'More sizes, same disappearing act.',
  },
  {
    id: 'brief-004',
    slug: 'ultraflex-light-brief-3-pack',
    name: 'UltraFlex Light Brief 3-Pack',
    price: 30,
    category: 'briefs',
    line: 'ultraflex',
    subcategory: '3-pack',
    colors: [
      { name: 'Assorted Neutrals', hex: '#D4B5A0' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
    description: 'Three UltraFlex light briefs in a curated neutral palette. High-stretch cotton blend with 360° adaptive comfort — breathable, lightweight, and designed for everyday wear. A practical foundation in natural fiber.',
    details: {
      composition: '88% Cotton, 12% Spandex — UltraFlex fabric',
      care: 'Machine wash cold. Tumble dry low.',
      fit: 'Available in XS–L. Mid-rise. 3 briefs per pack in assorted neutrals.',
    },
    sensoryLine: 'Three. One for every day.',
    lifestyleLine: 'High-stretch cotton comfort, three at a time.',
  },
  {
    id: 'brief-005',
    slug: 'ultraflex-cotton-brief-3-pack',
    name: 'UltraFlex Cotton Brief 3-Pack',
    price: 39,
    category: 'briefs',
    line: 'ultraflex',
    subcategory: '3-pack',
    colors: [
      { name: 'Assorted Neutrals', hex: '#D4B5A0' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
    description: 'Pure cotton UltraFlex briefs, three to a pack. Heavier cotton weight for those who prefer a more substantial feel — soft, breathable, and built for everyday comfort. Adaptive stretch with the reassurance of natural fiber against the skin.',
    details: {
      composition: '88% Cotton, 12% Spandex — UltraFlex cotton fabric',
      care: 'Machine wash cold. Tumble dry low.',
      fit: 'Available in XS–L. Mid-rise. 3 briefs per pack in assorted neutrals.',
    },
    sensoryLine: 'Pure cotton. Three-pack value.',
    lifestyleLine: 'Soft cotton comfort, every day of the week.',
  },
];

export const leggingsProducts: Product[] = [
  {
    id: 'leg-001',
    slug: 'barely-zero-lycra-leggings',
    name: 'Barely Zero Lycra Leggings',
    price: 49,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'leggings',
    isNew: true,
    colors: [
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Deep Mahogany', hex: '#5C3028' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/products/NW222WF4108_6c0cf425-aeaa-470b-b8e9-e11eb1cda5e3.jpg?v=1681238454&width=800',
      'https://neiwai.life/cdn/shop/products/20220628NEIWAI56458.jpg?v=1681238454&width=800',
      'https://neiwai.life/cdn/shop/products/20220628NEIWAI56395.jpg?v=1681238454&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/products/20220628NEIWAI56458.jpg?v=1681238454&width=800',
    description: 'LYCRA® and Barely Zero nylon in a high-waist construction — sculpted compression through the leg with the adaptive stretch the collection is known for. High elasticity, moisture-wicking, and seamless at the waistband. A legging that performs without announcing itself.',
    details: {
      composition: '68% Nylon, 32% LYCRA® Spandex. High-waist with tummy support panel.',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise, fitted through the thigh. Seamless waistband.',
    },
    sensoryLine: 'LYCRA compression. Barely Zero feel.',
    lifestyleLine: 'Performs without announcing itself.',
  },
  {
    id: 'leg-002',
    slug: 'barely-zero-flow-leggings',
    name: 'Barely Zero Flow Leggings',
    price: 39,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'leggings',
    colors: [
      { name: 'Deep Mahogany', hex: '#5C3028' },
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Sage Mist', hex: '#C0C8B8' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=800',
      'https://neiwai.life/cdn/shop/products/20211217NEIWAI8421.jpg?v=1706569721&width=800',
      'https://neiwai.life/cdn/shop/products/1222_46833.jpg?v=1706565268&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/products/20211217NEIWAI8421.jpg?v=1706569721&width=800',
    description: 'The Barely Zero legging in its most essential form — high-waist, seamless, full-length. The same adaptive fabric as the collection\'s bras, applied to a legging silhouette. Compression without constriction. Moves between couch and café without changing.',
    details: {
      composition: '72% Nylon, 28% Spandex. High-waist, seamless construction.',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise with gentle compression. Seamless waistband.',
    },
    sensoryLine: 'Compression without constriction.',
    lifestyleLine: 'From couch to café without a second thought.',
  },
  {
    id: 'leg-003',
    slug: 'barely-zero-flow-shorts',
    name: 'Barely Zero Flow Shorts',
    price: 35,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'shorts',
    colors: [
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Deep Mahogany', hex: '#5C3028' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/products/1222_46833.jpg?v=1706565268&width=800',
      'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=800',
      'https://neiwai.life/cdn/shop/products/20220628NEIWAI56395.jpg?v=1681238454&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=800',
    description: 'The Flow Shorts in Barely Zero fabric — high-waist biker short silhouette with the same seamless construction as the full-length legging. Anti-chafe, adaptive compression, and invisible under anything. For active days and everything in between.',
    details: {
      composition: '72% Nylon, 28% Spandex. High-waist, seamless construction.',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise biker short length. Seamless waistband.',
    },
    sensoryLine: 'Biker short, Barely Zero feel.',
    lifestyleLine: 'Anti-chafe, adaptive, invisible under everything.',
  },
];

export const allProducts: Product[] = [
  ...brasProducts,
  ...briefsProducts,
  ...leggingsProducts,
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductsByLine(line: string): Product[] {
  return allProducts.filter((p) => p.line === line);
}

export function getRelatedProducts(product: Product, limit: number = 3): Product[] {
  // Prefer same line first, then same category
  const sameLine = allProducts.filter(
    (p) => p.id !== product.id && p.line === product.line
  );
  const sameCategory = allProducts.filter(
    (p) => p.id !== product.id && p.category === product.category && p.line !== product.line
  );
  return [...sameLine, ...sameCategory].slice(0, limit);
}
