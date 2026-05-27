import { Product, Brand, Article } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'rains',
    name: 'RAINS',
    logo: 'RAINS',
    moodImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800',
    shortLine: 'The architects of wet-weather utility.',
    description: 'Founded in Aarhus, Denmark, RAINS redefines structural rainwear for the urban explorer, combining geometric concepts and technical polyurethane fabrications.'
  },
  {
    id: 'nude-project',
    name: 'NUDE PROJECT',
    logo: 'NUDE PROJECT',
    moodImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800',
    shortLine: 'Out of order since day one.',
    description: 'Combining heavy cotton streetwear, bold graphics, and pop-up culture, Nude Project capture the unstilted energy of youthful European counter-culture.'
  },
  {
    id: 'heliot-emil',
    name: 'HELIOT EMIL',
    logo: 'HELIOT EMIL',
    moodImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    shortLine: 'Industrial elegance and structural friction.',
    description: 'Operating in the intersection of functional street clothing and high-fashion monochrome tech, presenting elite asymmetrical garments and metal hardware.'
  },
  {
    id: 'tekla',
    name: 'TEKLA',
    logo: 'TEKLA',
    moodImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    shortLine: 'Uncompromising functional fabrics.',
    description: 'Based in Copenhagen, Tekla designs thoughtfully crafted textiles and lounge uniforms in organic cotton, wool, and heavy flannel designed for peaceful intervals.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'hydro-tech-parka',
    brand: 'RAINS',
    name: 'Hydro-Tech Modular Parka',
    price: 175,
    originalPrice: 210,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Charcoal Black', hex: '#1E2022' },
      { name: 'Silt Grey', hex: '#8b8c89' },
      { name: 'Olive Green', hex: '#444A3D' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Outerwear',
    gender: 'Unisex',
    isNew: true,
    isDrop: true,
    details: [
      'Water column pressure: 4000mm',
      'Windproof rating: 0.02mm air permeability',
      'Ultrasonically double-welded seams',
      'Engineered multi-functional storm hood with peak',
      'Coated storm-flap zipper with storm guard'
    ],
    fit: 'Relaxed utilitarian. Intended for styling over winter sweaters and mid-layers. Draft cord hem allows custom crop adjustment.',
    delivery: 'Complimentary standard delivery over £100. Dispatched in 100% recyclable, flat-pack envelopes to minimize transit space.',
    returns: '30-day trial window. Return labels included in each delivery box. Fully processed within 5 business days.'
  },
  {
    id: 'core-lounge-hoodie',
    brand: 'NUDE PROJECT',
    name: 'Core Heavy-Weight Hoodie',
    price: 90,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Stone Beige', hex: '#E1DBD6' },
      { name: 'Acid-Wash Black', hex: '#313233' },
      { name: 'Washed Royal Blue', hex: '#233246' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Hoodies',
    gender: 'Unisex',
    isNew: true,
    details: [
      '100% Portuguese carded organic cotton',
      'Heavy-weight 480gsm ultra-dense knit fabric',
      'Loopback interior brushing for structural loft',
      'Embossed tonal puff-print brand typography on chest',
      'Double-lined hood without strings'
    ],
    fit: 'Drop-shoulder architectural fit. Boxy torso with ribbed waistband and structured sleeve drape.',
    delivery: 'Dispatched within 24 hours. DHL Express and local collection hub pickup available on checkout.',
    returns: 'Refund or exchange within 14 days of receipt. Protective retail tags must remain fully intact.'
  },
  {
    id: 'storm-cargo-pants',
    brand: 'HELIOT EMIL',
    name: 'Asymmetric Storm Cargo Pants',
    price: 145,
    originalPrice: 180,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Asphalt Slate', hex: '#4A4E51' },
      { name: 'Matte Black', hex: '#141414' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    category: 'Trousers',
    gender: 'Men',
    isDrop: true,
    details: [
      'Reinforced cotton-nylon ripstop blend',
      'Carbon-zero fluorocarbon-free water-repellent (DWR) coating',
      'Structured volume cargo pockets with internal compression straps',
      'Signature Heliot Emil engraved metal carabiner at left hip belt-loop',
      'Ankle toggle adjusters for convertible taper styling'
    ],
    fit: 'Wide, straight leg profile. Sit medium-high on the waist. Fully customizable taper at hem.',
    delivery: 'Free priority shipping inside continental UK and EU. Duties paid upfront for international destinations.',
    returns: 'Hassle-free 30 days returns. Re-usable paper mailing bags included.'
  },
  {
    id: 'boxy-heavy-tee',
    brand: 'TEKLA',
    name: 'Heavy-Weight Organic Tee',
    price: 55,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Chalk White', hex: '#FAFAFA' },
      { name: 'Washed Charcoal', hex: '#37383B' },
      { name: 'Burnt Ochre', hex: '#A86C45' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Tees',
    gender: 'Unisex',
    isNew: true,
    details: [
      '100% certified organic long-staple cotton yarn',
      '280gsm dense jersey with a smooth structural handfeel',
      'Reinforced double-rib high collar',
      'Seamless split shoulders for active horizontal comfort',
      'Fabric pre-washed to eliminate post-purchase shrinking'
    ],
    fit: 'Modern Scandinavian boxy fit. Wide body, relaxed shoulders, sleeve terminates just above the elbow.',
    delivery: 'Eco-conscious minimal packaging. Dispatched standard or express under secure tracking.',
    returns: '100% full money-back guarantee within 30 days. Items must be unwashed.'
  },
  {
    id: 'waterproof-commute-tote',
    brand: 'RAINS',
    name: 'Shield Waterproof Tote Bag',
    price: 85,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Vapor Sand', hex: '#EBE6DF' },
      { name: 'Stealth Black', hex: '#161617' }
    ],
    sizes: ['One Size'],
    category: 'Bags',
    gender: 'Unisex',
    details: [
      'Outer fabrication: 100% waterproof polyester with polyurethane finish',
      '18-litre active volume capacity',
      'Internal neoprene padded laptop chamber (fits up to 16” Macbook)',
      'Waterproof seam-sealed laser matte zippers',
      'Ergonomic webbing shoulder straps with secure neoprene pads'
    ],
    fit: 'Clean structural geometric tote. Stays upright when placed on flat surfaces due to heavy structured base paneling.',
    delivery: 'Free shipping on orders over £100. International shipping with DHL.',
    returns: '30 days standard return policy.'
  },
  {
    id: 'thermal-gilet-vest',
    brand: 'HELIOT EMIL',
    name: 'Modular Thermal Shell Vest',
    price: 120,
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Slate Matte Grey', hex: '#636D70' },
      { name: 'Obsidian Black', hex: '#0D0E10' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Outerwear',
    gender: 'Men',
    details: [
      'Primaloft Eco recycled thermal micro-fiber insulation',
      'Windproof micro-ripstop structural shell framework',
      'Dual multi-tier diagonal chest pocketing with heavy buckle closure',
      'Reflective tape trimming along rear shoulder yoke',
      'Asymmetric dual neck zippers'
    ],
    fit: 'Slightly cropped technical outline. Fits close to the torso. Adjustable side cinch-buckles.',
    delivery: 'Secure courier dispatch. Tracking number supplied automatically upon courier collection.',
    returns: '30-day returns accepted. Please use our digital ticket portal to download your prepaid labels.'
  },
  {
    id: 'brutal-combat-boot',
    brand: 'HELIOT EMIL',
    name: 'Industrial Lugged Combat Boot',
    price: 210,
    originalPrice: 280,
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Coal Black', hex: '#161718' },
      { name: 'Oatmeal Nubuck', hex: '#C2B9A9' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    category: 'Footwear',
    gender: 'Unisex',
    isNew: true,
    details: [
      'Full-grain waterproof Italian leather hide',
      'Vibram heavy-lug compound rubber outsole with mud guards',
      'Speed-lacing stainless steel industrial eyelets',
      'Removable shock-preventing leather footbed',
      'Embossed technical specifications label on lateral heel'
    ],
    fit: 'Narrow military box. We recommend sizing down one full size if in-between standard dimensions.',
    delivery: 'Packed inside structural branded cardboard case. Shipping fully insured.',
    returns: '30-day return policy. Outer sole must display absolutely zero street markings or friction wear.'
  },
  {
    id: 'merino-rib-beanie',
    brand: 'TEKLA',
    name: 'Fine-Rib Merino Beanie',
    price: 40,
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Charcoal Grey', hex: '#3E4145' },
      { name: 'Desert Sand', hex: '#EBE1D3' },
      { name: 'Oxblood Red', hex: '#631B1E' }
    ],
    sizes: ['One Size'],
    category: 'Accessories',
    gender: 'Unisex',
    details: [
      '100% fine-spun merino thermal wool',
      'Heavy dual-ply flat rib knit construction',
      'Wide adjustable cuff fold with minimal raw stitched label',
      'Excellent breathability and moisture extraction',
      'Odor resistant fibers'
    ],
    fit: 'Standard urban watch-cap. Offers adaptable fit ranging from slouchy to cropped snug over the ears.',
    delivery: 'Sent in flat envelopes. Dispatched same day if ordered before 3:00 PM GMT.',
    returns: 'Accessories can be returned within 14 days if completely unworn with sanitary seal attached.'
  },
  {
    id: 'industrial-steel-watch',
    brand: 'HELIOT EMIL',
    name: 'Industrial Monolith Steel Watch',
    price: 245,
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Brushed Chrome', hex: '#D2D2D2' },
      { name: 'Matte Stealth Black', hex: '#1C1C1C' }
    ],
    sizes: ['One Size'],
    category: 'Accessories',
    gender: 'Unisex',
    details: [
      'Surgical-grade 316L sandblasted stainless steel casing',
      'Minimal dial face without brand credentials or indexing markers',
      'Miyota precision Japanese quartz movement',
      'Double-domed sapphire crystal dial window',
      'Integrated heavy mesh architectural strap'
    ],
    fit: 'Unisex dimensioning. Toolless modular strap adjustment matches wrists from 145mm to 215mm.',
    delivery: 'Complimentary tracked courier delivery. Heavy presentation display case included.',
    returns: '30-day window. Protective plastic overlays must remain untouched.'
  },
  {
    id: 'heavy-rib-socks',
    brand: 'TEKLA',
    name: 'Heavy-Knit Ribbed Uniform Socks',
    price: 22,
    images: [
      'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1619086303291-0ef7b4142db5?auto=format&fit=crop&q=80&w=1000'
    ],
    colours: [
      { name: 'Chalk White', hex: '#FDFDFD' },
      { name: 'Muted Taupe', hex: '#948D85' },
      { name: 'Charcoal Blend', hex: '#313233' }
    ],
    sizes: ['S/M', 'M/L'],
    category: 'Accessories',
    gender: 'Unisex',
    details: [
      '92% organic long-staple cotton yarn, 8% elastic weave',
      'Heavy flat-rib visual texture reminiscent of athletic vintage',
      'Terrycloth-cushioned shock barrier footbed',
      'Seamless flat-toe loop detailing',
      'High rise calf length with compression elastic'
    ],
    fit: 'Standard tube sock sizing. Durable elastic stays up on calf without skin constriction.',
    delivery: 'Delivered in custom paper sleeves. Fully recyclable.',
    returns: 'For sanity reasons returns are restricted unless sealed in origin plastic wrapping.'
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
    summary: 'A raw glimpse inside Nude Project’s popup tour. Queue blocks stretching beyond view, custom soundscapes, and the culture defining streetwear in Europe.',
    date: 'May 12, 2026',
    content: `Streetwear isn’t purchased; it’s joined. That is the conviction carrying Nude Project’s legendary popup tours across Seville, London, and Berlin. 

When blocks start styling hours before the sun rises, they aren’t just looking for physical hoodies—they are looking for connection, energy, and subcultural status. The team behind Nude Project creates spaces that operate less like traditional storefronts and more like short-term skate clubs: live DJ booths, free stickers, massive custom steel industrial scaffolds, and extremely limited product drops.

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
    content: `At first glance, Aarhus minimalism and Madrid skateboards share very little surface. RAINS operates with strict, clean lines, muted architectural stone palettes, and uncompromising waterproof performance. Understated, structured, silent. Nude Project operates on the exact opposite: graphic disruption, rich chest puff printing, vintage textures, and high crowd volumes.

Yet, this friction is exactly where contemporary urban fashion thrives.

The modern "city uniform" is a brilliant collision of these exact schools. A technical waterproof parka styled over a heavy, fleece-lined streetwear graphic hoodie. The shell offers structure and protection from the weather; the fleece provides comfort, personality, and community. Maginari was built precisely to house this duality. It’s not about selecting one side of the coin; it is about styling the friction.`
  }
];

export const CATEGORIES = [
  'All Elements',
  'Outerwear',
  'Hoodies',
  'Tees',
  'Trousers',
  'Bags',
  'Accessories',
  'Footwear'
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
  { id: 'ugc-1', user: '@nordic_core', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600', location: 'Oslo Store' },
  { id: 'ugc-2', user: '@streetwear_daily', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600', location: 'London Pop-up' },
  { id: 'ugc-3', user: '@emil_archive', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600', location: 'Copenhagen' },
  { id: 'ugc-4', user: '@utility_wear_club', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600', location: 'Aarhus Dockyard' },
  { id: 'ugc-5', user: '@city_uniforms_mag', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600', location: 'Berlin Subway' },
  { id: 'ugc-6', user: '@skate_nudeproject', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=600', location: 'Madrid Plaza' }
];
