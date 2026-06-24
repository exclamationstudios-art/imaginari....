import { Product } from '../types';

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
