import { Product, Brand, Article, CustomLayout } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'rains',
    name: 'RAINS',
    logo: 'RAINS',
    moodImage: '/models/photo_2026-06-15_15-25-47.jpg',
    shortLine: 'The architects of wet-weather utility.',
    description: 'Founded in Aarhus, Denmark, RAINS redefines structural rainwear for the urban explorer, combining geometric concepts and technical polyurethane fabrications.'
  },
  {
    id: 'nude-project',
    name: 'MAGINARI',
    logo: 'MAGINARI',
    moodImage: '/models/photo_2026-06-15_15-25-54.jpg',
    shortLine: 'Out of order since day one.',
    description: 'Combining heavy cotton streetwear, bold graphics, and pop-up culture, Maginari capture the unstilted energy of youthful European counter-culture.'
  },
  {
    id: 'heliot-emil',
    name: 'HELIOT EMIL',
    logo: 'HELIOT EMIL',
    moodImage: '/models/photo_2026-06-15_15-26-02.jpg',
    shortLine: 'Industrial elegance and structural friction.',
    description: 'Operating in the intersection of functional street clothing and high-fashion monochrome tech, presenting elite asymmetrical garments and metal hardware.'
  },
  {
    id: 'tekla',
    name: 'TEKLA',
    logo: 'TEKLA',
    moodImage: '/models/photo_2026-06-15_15-26-14.jpg',
    shortLine: 'Uncompromising functional fabrics.',
    description: 'Based in Copenhagen, Tekla designs thoughtfully crafted textiles and lounge uniforms in organic cotton, wool, and heavy flannel designed for peaceful intervals.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'green-coc-crop-tee',
    brand: 'MAGINARI',
    name: 'Green COC Crop T-Shirt',
    price: 64.99,
    originalPrice: 84.99,
    images: [
      '/shirts/GREEN OFFICIAL COC CROP T SHIRT.jpg',
      '/shirts/ICNOS OFFICIAL BACK CROP T SHIRT GREEN.jpg'
    ],
    colours: [
      { name: 'Sage Green', hex: '#7a8a78' },
      { name: 'Chalk White', hex: '#FAFAFA' },
      { name: 'Charcoal Black', hex: '#1E2022' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    category: 'Crop Tees',
    gender: 'Unisex',
    isNew: true,
    isDrop: true,
    details: [
      '100% heavyweight cotton fabrication',
      'Cropped raw-hem relaxed silhouette',
      'Chest official COC screenprint typography',
      'Contrast rib crewneck collar'
    ],
    fit: 'Boxy cropped silhouette. Sits at the waist. We recommend taking your standard size.',
    delivery: 'Standard priority delivery within 3-5 business days. Packed in 100% compostable mailers.',
    returns: '30-day standard return window. Item must remain unworn with original tags attached.'
  },
  {
    id: 'white-coc-crop-tee',
    brand: 'MAGINARI',
    name: 'White COC Crop T-Shirt',
    price: 64.99,
    originalPrice: 84.99,
    images: [
      '/shirts/white coc crop t shirt.jpg'
    ],
    colours: [
      { name: 'Chalk White', hex: '#FAFAFA' },
      { name: 'Sage Green', hex: '#7a8a78' },
      { name: 'Navy Blue', hex: '#1C2841' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    category: 'Crop Tees',
    gender: 'Unisex',
    isNew: true,
    details: [
      'Premium organic cotton weave',
      'Cropped boxy fit with raw edge detail',
      'Minimalist contrast chest branding print',
      'Reinforced neckband detailing'
    ],
    fit: 'Relaxed crop cut. Designed for high-waisted styling.',
    delivery: 'Complimentary shipping inside EU. Dispatched same day.',
    returns: 'Easy 14-day exchange policy.'
  },
  {
    id: 'black-coc-crop-tee',
    brand: 'MAGINARI',
    name: 'Black COC Crop T-Shirt',
    price: 64.99,
    originalPrice: 84.99,
    images: [
      '/shirts/black coc cropt shirt back.jpg'
    ],
    colours: [
      { name: 'Charcoal Black', hex: '#1E2022' },
      { name: 'Off-White', hex: '#EBE6DF' },
      { name: 'Ash Grey', hex: '#A8AAA9' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    category: 'Crop Tees',
    gender: 'Unisex',
    details: [
      'Structured heavy-weight knit cotton',
      'Signature back graphic official COC branding',
      'Relaxed boxy body with crop finish',
      'Ribbed high mockneck detail'
    ],
    fit: 'Slightly oversized cropped build. Take one size down for a snug fit.',
    delivery: 'Express carbon-neutral shipping available on checkout.',
    returns: '30-day trials. Return label inside the package.'
  },
  {
    id: 'icons-crop-tee',
    brand: 'HELIOT EMIL',
    name: 'Icons Crop T-Shirt',
    price: 74.99,
    originalPrice: 97.99,
    images: [
      '/shirts/icons srop t shirt.jpg',
      '/shirts/ICONS 1.jpg'
    ],
    colours: [
      { name: 'Off-White', hex: '#EBE6DF' },
      { name: 'Matte Black', hex: '#141414' },
      { name: 'Forest Green', hex: '#444A3D' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Crop Tees',
    gender: 'Unisex',
    isDrop: true,
    details: [
      'High-grade technical cotton blend',
      'Signature distressed asymmetric graphic prints',
      'Boxy short torso cut with detailed double stitching',
      'Heliot Emil structural metal carabiner attachment on hem'
    ],
    fit: 'Short boxy fit with custom side cinches.',
    delivery: 'Free standard shipping. DHL Express worldwide.',
    returns: '14-day return window. Protective metal tag must be intact.'
  },
  {
    id: 'coc-ash-reg-tee',
    brand: 'TEKLA',
    name: 'COC Ash Regular T-Shirt',
    price: 54.99,
    originalPrice: 69.99,
    images: [
      '/shirts/coc ash reg 2.jpg',
      '/shirts/ash t shirt coc reg bAck.jpg'
    ],
    colours: [
      { name: 'Ash Grey', hex: '#A8AAA9' },
      { name: 'Pure White', hex: '#FAFAFA' },
      { name: 'Matte Black', hex: '#141414' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Regular Tees',
    gender: 'Unisex',
    isNew: true,
    details: [
      '100% organic cotton long-staple yarn',
      'Classic midweight 240gsm jersey weave',
      'Chest logo and large back official brand print',
      'Pre-shrunk fabric treatment'
    ],
    fit: 'Scandinavian relaxed standard fit. Fits true to size.',
    delivery: 'Delivered in minimal custom paper packaging.',
    returns: 'Full refund guarantee within 30 days.'
  },
  {
    id: 'coc-green-reg-tee',
    brand: 'RAINS',
    name: 'COC Green Regular T-Shirt',
    price: 54.99,
    originalPrice: 69.99,
    images: [
      '/shirts/coc reg green .jpg',
      '/shirts/green reg back coc.psd.jpg'
    ],
    colours: [
      { name: 'Forest Green', hex: '#444A3D' },
      { name: 'Ash Grey', hex: '#A8AAA9' },
      { name: 'Charcoal Black', hex: '#1E2022' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Regular Tees',
    gender: 'Unisex',
    details: [
      'Premium breathable cotton fabric',
      'Dual-faced print with bold back typography',
      'Perfect layering weight for transitional climates',
      'Split double-needle reinforced side seams'
    ],
    fit: 'Regular straight-cut profile. Clean drape.',
    delivery: 'Tracked standard delivery. Duties paid upfront.',
    returns: '30-day easy return service.'
  },
  {
    id: 'coc-black-reg-tee',
    brand: 'HELIOT EMIL',
    name: 'COC Black Regular T-Shirt',
    price: 59.99,
    originalPrice: 79.99,
    images: [
      '/shirts/coc regula t shirt black frint.jpg',
      '/shirts/greenblack reg back coc.psd.jpg'
    ],
    colours: [
      { name: 'Matte Black', hex: '#141414' },
      { name: 'Pure White', hex: '#FAFAFA' },
      { name: 'Sage Green', hex: '#7a8a78' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    category: 'Regular Tees',
    gender: 'Unisex',
    isDrop: true,
    details: [
      'Heavyweight 280gsm dense cotton knit',
      'Tonal front graphics and high-contrast back prints',
      'Ribbed high crewneck collar',
      'Architectural shoulder seams'
    ],
    fit: 'Oversized boxy fit. Drop shoulders.',
    delivery: 'Express next-day shipping available in UK and EU.',
    returns: 'Prepaid labels included. 30 days.'
  },
  {
    id: 'coc-white-reg-tee',
    brand: 'TEKLA',
    name: 'COC White Regular T-Shirt',
    price: 54.99,
    originalPrice: 69.99,
    images: [
      '/shirts/coc regula t shirt hite frint.jpg',
      '/shirts/white reg back coc.psd.jpg'
    ],
    colours: [
      { name: 'Pure White', hex: '#FAFAFA' },
      { name: 'Charcoal Black', hex: '#1E2022' },
      { name: 'Navy Blue', hex: '#1C2841' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Regular Tees',
    gender: 'Unisex',
    details: [
      'Sustainably sourced certified organic cotton',
      'Clean white canvas with classic typography details',
      'Ultra-soft combed finish',
      'Reinforced double-stitch hem'
    ],
    fit: 'Standard comfort fit. Perfect everyday classic.',
    delivery: 'Sent in flat envelopes. Dispatched same day.',
    returns: '30 days standard policy.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'urban-armour-vesting',
    title: 'THE URBAN ARMOR: MODULAR CORE VESTING IN 2026',
    category: 'Style Guide',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    summary: 'From rainy Danish fjords to active industrial warehouses, how technical gilets and shells became the core uniform for modern metropolitan creatives.',
    date: 'May 26, 2026',
    content: `The elevation of technical modular shells from isolated, severe outdoors into the architectural street uniform of Paris, Seoul, and Copenhagen is complete. It represents a paradigm shift from pure decoration to purposeful shelter.

At Maginari, we evaluate garments by structural honesty: do they shelter? Are they practical? A modular thermal vest is the perfect modern middle tier. By utilizing layered systems with GORE-TEX derivatives and technical nylon, creators can adjust instantly to changing environments—whether descending to subway tunnels or transiting between studio meetings.

To style the modular thermal shell gilet, focus on contrasting visual weights. Combine a dense 480gsm cotton hoodie or long-sleeve tee underneath a sharp, structural vest. This emphasizes asymmetry while providing immense practical utility.`
  },
  {
    id: 'nude-project-popups',
    title: 'BEHIND THE DROP: UNLOCKING STREET SECTOR ESCAPE ENERGY',
    category: 'Behind The Drop',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800',
    summary: 'A raw glimpse inside Maginari’s popup tour. Queue blocks stretching beyond view, custom soundscapes, and the culture defining streetwear in Europe.',
    date: 'May 12, 2026',
    content: `Streetwear isn’t purchased; it’s joined. That is the conviction carrying Maginari’s legendary popup tours across Seville, London, and Berlin. 

When blocks start styling hours before the sun rises, they aren’t just looking for physical hoodies—they are looking for connection, energy, and subcultural status. The team behind Maginari creates spaces that operate less like traditional storefronts and more like short-term skate clubs: live DJ booths, free stickers, massive custom steel industrial scaffolds, and extremely limited product drops.

We caught up with the head of drop design during their setup in East London. "We want the space to feel chaotic yet incredibly detailed. The scaffolding is raw, the hangers are heavy brushed nickel, the music rattles. We design the atmosphere first, and then the hoodies hang seamlessly inside it."`
  },
  {
    id: 'scandinavian-coexistence',
    title: 'WEATHER DISCIPLINE VS. REBEL FRICTION',
    category: 'Editorial',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    summary: 'Can the quiet, geometry-driven design of Danish rain utility comfortably co-exist with the loud graphic attitude of Spanish skateboarding?',
    date: 'April 28, 2026',
    content: `At first glance, Aarhus minimalism and Madrid skateboards share very little surface. RAINS operates with strict, clean lines, muted architectural stone palettes, and uncompromising waterproof performance. Understated, structured, silent. Maginari operates on the exact opposite: graphic disruption, rich chest puff printing, vintage textures, and high crowd volumes.

Yet, this friction is exactly where contemporary urban fashion thrives.

The modern "city uniform" is a brilliant collision of these exact schools. A technical waterproof parka styled over a heavy, fleece-lined streetwear graphic hoodie. The shell offers structure and protection from the weather; the fleece provides comfort, personality, and community. Maginari was built precisely to house this duality. It’s not about selecting one side of the coin; it is about styling the friction.`
  }
];

export const CATEGORIES = [
  'All Elements',
  'Crop Tees',
  'Regular Tees'
];

export const GENDERS = ['All', 'Men', 'Women', 'Unisex'];

export const PLAYLIST = {
  title: 'MAGINARI S01 // MONOCHROME URBANISM',
  tracks: [
    { name: 'Sonder', artist: 'Lorn', duration: '3:45' },
    { name: 'Kiasmos', artist: 'Looped', duration: '6:12' },
    { name: 'Aarhus Wind', artist: 'Danish Ambient Lab', duration: '4:20' },
    { name: 'Discipline', artist: 'Modeselektor', duration: '5:02' },
    { name: 'Urban Escape', artist: 'Seville Club Collective', duration: '4:18' }
  ],
  spotifyLink: '#'
};

export const INSTAGRAM_POSTS = [
  { id: 'ugc-1', user: '@nordic_core', image: '/models/photo_2026-06-15_15-24-56.jpg', location: 'Oslo Store' },
  { id: 'ugc-2', user: '@streetwear_daily', image: '/models/photo_2026-06-15_15-25-23.jpg', location: 'London Pop-up' },
  { id: 'ugc-3', user: '@emil_archive', image: '/models/photo_2026-06-15_15-25-29.jpg', location: 'Copenhagen' },
  { id: 'ugc-4', user: '@utility_wear_club', image: '/models/photo_2026-06-15_15-25-34.jpg', location: 'Aarhus Dockyard' },
  { id: 'ugc-5', user: '@city_uniforms_mag', image: '/models/photo_2026-06-15_15-25-38.jpg', location: 'Berlin Subway' },
  { id: 'ugc-6', user: '@skate_nudeproject', image: '/models/photo_2026-06-15_15-25-43.jpg', location: 'Madrid Plaza' }
];

export const getDefaultCustomLayout = (): CustomLayout => {
  const cloneProducts = (prefix: string): Product[] => {
    return PRODUCTS.map((p, idx) => ({
      ...p,
      id: `${prefix}_prod_${idx + 1}`,
      name: `${p.name}`,
    }));
  };

  return {
    heroBanner: '/models/mixed-model.png',
    banner1: '/models/photo_2026-06-15_15-26-05.jpg',
    banner2: '/models/photo_2026-06-15_15-26-10.jpg',
    banner3: '/models/photo_2026-06-15_15-26-19.jpg',
    banner4: '/models/photo_2026-06-15_15-26-23.jpg',
    
    heroProducts: cloneProducts('hero'),
    banner1Products: cloneProducts('banner1'),
    banner2Products: cloneProducts('banner2'),
    banner3Products: cloneProducts('banner3'),
    banner4Products: cloneProducts('banner4'),
  };
};
