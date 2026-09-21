import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'db.json');

export interface ProductRecord {
  product_id: string;        // e.g. "VN-0001" or "VRN-TN-000428"
  varnam_id?: string;        // e.g. "VRN-TN-000428"
  slug_id?: string;          // e.g. "bamboo-basket" or "swamimalai-bronze-nataraja"
  name: string;
  artisan_id: string;
  artisan_name: string;
  category: string;
  origin: string;
  material: string;
  price: number;
  image: string;
  story: string;
  verified: boolean;
  is_active: boolean;
  nfc_tag_id: string;        // "VN-0001" or chip UID
  nfc_status: 'Linked' | 'Not Linked';
  last_scanned_at?: string;
  scan_count: number;
  created_at: string;
}

export interface UserRecord {
  id: string;
  email: string;
  name?: string;
  role?: 'customer' | 'artisan' | 'admin';
  email_verified: boolean;
  email_verification_time?: number;
  created_at: number;
}

export interface AuthAccountRecord {
  id: string;
  user_id: string;
  provider: string; // e.g. "email-otp"
  provider_account_id: string; // email
  email_verified: string;
  created_at: number;
}

export interface AuthSessionRecord {
  id: string;
  user_id: string;
  expiration_time: number;
  created_at: number;
}

export interface VerificationCodeRecord {
  id: string;
  email: string;
  code: string;
  expiration_time: number;
  created_at: number;
}

export interface LikeRecord {
  id: string;
  product_id: string;
  user_id: string;
  created_at: string;
}

export interface ReviewRecord {
  id: string;
  product_id: string;
  user_id: string;
  user_name: string;
  rating: number; // 1-5
  title?: string;
  comment: string;
  verified_buyer: boolean;
  created_at: string;
}

export interface TranslationRecord {
  id: string;
  target_id: string; // craft_id or product_id or story_id
  field_name: string; // 'story' | 'history' | 'name'
  locale: string; // 'ta' | 'hi' | 'te' | 'kn' | 'bn' | 'mr'
  original_text: string;
  translated_text: string;
  created_at: string;
}

export interface NfcScanLog {
  id: string;
  product_id: string;
  device_id: string;
  status: 'verified' | 'unverified' | 'not_found';
  craft_name?: string;
  location?: string;
  timestamp: string;
}

interface DatabaseSchema {
  products: ProductRecord[];
  scans: NfcScanLog[];
  users?: UserRecord[];
  authAccounts?: AuthAccountRecord[];
  authSessions?: AuthSessionRecord[];
  authVerificationCodes?: VerificationCodeRecord[];
  likes?: LikeRecord[];
  reviews?: ReviewRecord[];
  translations?: TranslationRecord[];
}

const INITIAL_PRODUCTS: ProductRecord[] = [
  {
    product_id: 'VN-0001',
    varnam_id: 'VRN-TN-000431',
    slug_id: 'bamboo-basket',
    name: 'Bamboo Basket',
    artisan_id: 'ART-001',
    artisan_name: 'Meena',
    category: 'Handicrafts',
    origin: 'Pollachi',
    material: 'Bamboo',
    price: 850,
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1000&q=80',
    story: 'Woven by generational bamboo weavers of the Anaimalai foothills in Pollachi using sustainable native bamboo split to sub-millimeter precision.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0001',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-17T09:15:00Z',
    scan_count: 14,
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    product_id: 'VN-0002',
    varnam_id: 'VRN-TN-000428',
    slug_id: 'swamimalai-bronze-nataraja',
    name: 'Swamimalai Bronze Nataraja (Lost-Wax Casting)',
    artisan_id: 'rajendran-sthapathi',
    artisan_name: 'S. Rajendran Sthapathi',
    category: 'Metalwork & Bronze',
    origin: 'Swamimalai, Thanjavur District',
    material: 'Panchaloha (Copper 80%, Zinc 15%, Tin 4%, Gold/Silver 1%)',
    price: 38500,
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
    story: 'Consecrated 16-inch Nataraja icon cast in solid Panchaloha bronze by 4th-generation Chola royal guild sculptors using Kaveri riverbed silt.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0002',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-17T08:45:00Z',
    scan_count: 42,
    created_at: '2024-02-01T11:00:00Z'
  },
  {
    product_id: 'VN-0003',
    varnam_id: 'VRN-TN-000429',
    slug_id: 'tanjore-painting-krishna',
    name: 'Thanjavur Gold Foil Painting — Yashoda Krishna',
    artisan_id: 'meenakshi-ammal',
    artisan_name: 'Meenakshi Ammal',
    category: 'Paintings & Art',
    origin: 'Thanjavur, Tamil Nadu',
    material: '22-Carat Gold Leaf, Burma Teak Wood, Limestone Gesso',
    price: 24000,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    story: 'High-relief devotional masterpiece created with pure 22K gold leaf foil and unheated Jaipur cabochon stones on seasoned teak.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0003',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-17T07:20:00Z',
    scan_count: 28,
    created_at: '2024-02-10T12:00:00Z'
  },
  {
    product_id: 'VN-0004',
    varnam_id: 'VRN-GJ-000210',
    slug_id: 'nirona-roghan-tree-of-life',
    name: 'Nirona Roghan Textile Art — Tree of Life',
    artisan_id: 'gafur-khatri',
    artisan_name: 'Padma Shri Abdul Gafur Khatri',
    category: 'Paintings & Art',
    origin: 'Nirona, Kutch, Gujarat',
    material: 'Boiled Wild Castor Oil, Natural Earth Pigments, Silk Khadi',
    price: 16500,
    image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1000&q=80',
    story: 'Preserved by the sole surviving family practicing 300-year-old castor oil thread manipulation without stencils or sketches.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0004',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-17T06:10:00Z',
    scan_count: 31,
    created_at: '2024-02-15T09:00:00Z'
  },
  {
    product_id: 'VN-0005',
    varnam_id: 'VRN-RJ-000311',
    slug_id: 'jaipur-blue-pottery-vase',
    name: 'Jaipur Blue Pottery Persian Arabesque Vase',
    artisan_id: 'kripal-kumbhakar',
    artisan_name: 'Kripal Kumbhakar',
    category: 'Pottery & Ceramics',
    origin: 'Jaipur, Rajasthan',
    material: 'Ground Quartz, Glass Cullet, Multani Mitti, Cobalt Oxide',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80',
    story: 'Clay-free Egyptian dough pottery glazed at low temperatures with vibrant cobalt oxide and hand-painted Persian florals.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0005',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-17T05:30:00Z',
    scan_count: 19,
    created_at: '2024-02-20T14:00:00Z'
  },
  {
    product_id: 'VN-0006',
    varnam_id: 'VRN-KL-000801',
    slug_id: 'aranmula-kannadi-mirror',
    name: 'Aranmula Kannadi Front-Surface Metal Mirror',
    artisan_id: 'janardhanan-achari',
    artisan_name: 'Janardhanan Achari',
    category: 'Metalwork & Bronze',
    origin: 'Aranmula, Pathanamthitta, Kerala',
    material: 'Copper-Tin Secret Metallurgical Ratio, Velvet Polish',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    story: 'Zero secondary reflection front-surface metal mirror cast by hereditary Vishwakarma craftsmen holding GI-008.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0006',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-16T18:00:00Z',
    scan_count: 22,
    created_at: '2024-03-01T10:00:00Z'
  },
  {
    product_id: 'VN-0007',
    varnam_id: 'VRN-TN-000432',
    slug_id: 'kanchipuram-silk-saree',
    name: 'Kanchipuram Korvai Mulberry Silk Saree',
    artisan_id: 'sundaram-mudaliar',
    artisan_name: 'Sundaram Mudaliar',
    category: 'Textiles & Weaving',
    origin: 'Kanchipuram, Tamil Nadu',
    material: 'Mulberry Silk, Pure Silver & 24K Gold Zari',
    price: 52000,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    story: 'Three-shuttle interlocked Korvai border woven with heavyweight South Indian mulberry silk and certified pure silver-gold zari.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0007',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-16T16:30:00Z',
    scan_count: 15,
    created_at: '2024-03-05T12:00:00Z'
  },
  {
    product_id: 'VN-0008',
    varnam_id: 'VRN-KA-000501',
    slug_id: 'bidriware-silver-vase',
    name: 'Bidriware Pure Silver Inlay Aftaba Vase',
    artisan_id: 'rashid-qadri',
    artisan_name: 'Rashid Ahmed Qadri',
    category: 'Metalwork & Bronze',
    origin: 'Bidar, Karnataka',
    material: 'Zinc-Copper Alloy, Pure Silver Sheet Inlay, Bidar Fort Soil',
    price: 12800,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
    story: 'Damascened with 99.9% pure silver inlay and oxidized jet-black using 500-year-old unexposed soil from the ruins of Bidar Fort.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0008',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-16T14:15:00Z',
    scan_count: 11,
    created_at: '2024-03-10T11:00:00Z'
  },
  {
    product_id: 'VN-0009',
    varnam_id: 'VRN-JK-000901',
    slug_id: 'kashmiri-pashmina-shawl',
    name: 'Kashmiri Hand-Spun Pashmina Sozni Shawl',
    artisan_id: 'bashir-jan',
    artisan_name: 'Bashir Ahmad Jan',
    category: 'Textiles & Weaving',
    origin: 'Srinagar, Jammu & Kashmir',
    material: 'Ladakhi Changthangi Raw Pashm, Fine Silk Needlework',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
    story: '12-micron pure Changthangi cashmere hand-spun on yinder wheels and embroidered in microscopic Sozni needlework over 9 months.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0009',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-16T12:00:00Z',
    scan_count: 18,
    created_at: '2024-03-12T09:00:00Z'
  },
  {
    product_id: 'VN-0010',
    varnam_id: 'VRN-KA-000502',
    slug_id: 'channapatna-lacquer-train',
    name: 'Channapatna Non-Toxic Lacquer Toy Train',
    artisan_id: 'noorulla-khan',
    artisan_name: 'Noorulla Khan',
    category: 'Woodwork & Lacquer',
    origin: 'Channapatna, Karnataka',
    material: 'Wrightia Tinctoria (Aale Mara) Wood, Natural Vegetable Lacquer',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
    story: 'Turned on high-speed wood lathes and polished with natural tree resin infused with turmeric and indigo for baby-safe play.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0010',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-16T10:45:00Z',
    scan_count: 25,
    created_at: '2024-03-14T10:00:00Z'
  },
  {
    product_id: 'VN-0011',
    varnam_id: 'VRN-WB-000601',
    slug_id: 'dhokra-brass-figurine',
    name: 'Bikna Dhokra Lost-Wax Bell Metal Figurine',
    artisan_id: 'bikash-karmakar',
    artisan_name: 'Bikash Karmakar',
    category: 'Metalwork & Bronze',
    origin: 'Bankura, West Bengal',
    material: 'Scrap Brass, Beeswax Resin Threads, Ant-hill Clay',
    price: 7200,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    story: '4,000-year-old tribal non-ferrous metal casting lineage continuous with the Dancing Girl of Mohenjo-daro.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0011',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-15T17:30:00Z',
    scan_count: 8,
    created_at: '2024-03-16T11:00:00Z'
  },
  {
    product_id: 'VN-0012',
    varnam_id: 'VRN-CG-000701',
    slug_id: 'bastar-wrought-iron-tree',
    name: 'Bastar Loha Shilpa Wrought Iron Tree of Birds',
    artisan_id: 'sukhram-lohar',
    artisan_name: 'Sukhram Lohar',
    category: 'Metalwork & Bronze',
    origin: 'Bastar, Chhattisgarh',
    material: 'Recycled Charcoal Wrought Iron, Natural Linseed Oil',
    price: 6400,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    story: 'Hammered red-hot over open charcoal pits without welding machines by Maria and Gond tribal blacksmiths.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0012',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-15T15:20:00Z',
    scan_count: 14,
    created_at: '2024-03-18T10:00:00Z'
  },
  {
    product_id: 'VN-0013',
    varnam_id: 'VRN-BR-000801',
    slug_id: 'madhubani-kohbar-painting',
    name: 'Madhubani Mithila Kohbar Nuptial Painting',
    artisan_id: 'baua-devi',
    artisan_name: 'Baua Devi',
    category: 'Paintings & Art',
    origin: 'Jitwarpur, Madhubani, Bihar',
    material: 'Handmade Bamboo Paper, Soot Lampblack, Aparajita Flowers',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    story: 'Geometric fertility symbology painted with fine split bamboo twigs and natural mineral extracts by Mithila women artists.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0013',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-15T13:40:00Z',
    scan_count: 16,
    created_at: '2024-03-20T12:00:00Z'
  },
  {
    product_id: 'VN-0014',
    varnam_id: 'VRN-AP-000901',
    slug_id: 'kondapalli-wooden-toys',
    name: 'Kondapalli Ambari Elephant Softwood Toy',
    artisan_id: 'ramu-varma',
    artisan_name: 'Ramu Varma',
    category: 'Woodwork & Lacquer',
    origin: 'Kondapalli, Andhra Pradesh',
    material: 'Tella Poniki Softwood, Makku Tamarind Paste, Natural Enamels',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
    story: 'Carved from featherlight medicinal softwood found in the Kondapalli hills and joined with tamarind-sawdust cement.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0014',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-15T11:15:00Z',
    scan_count: 9,
    created_at: '2024-03-22T09:00:00Z'
  },
  {
    product_id: 'VN-0015',
    varnam_id: 'VRN-UP-001001',
    slug_id: 'varanasi-silk-brocade',
    name: 'Varanasi Shikargah Katan Silk Brocade',
    artisan_id: 'maqbool-hassan',
    artisan_name: 'Maqbool Hassan',
    category: 'Textiles & Weaving',
    origin: 'Varanasi, Uttar Pradesh',
    material: 'Twisted Katan Silk, Tested Gold-Plated Zari',
    price: 14500,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
    story: 'Woven on multi-tier drawlooms depicting imperial Persian hunting forest motifs using pure silver wire gilded in 24K gold.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0015',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-15T09:00:00Z',
    scan_count: 12,
    created_at: '2024-03-24T10:00:00Z'
  },
  {
    product_id: 'VN-0016',
    varnam_id: 'VRN-TN-000433',
    slug_id: 'pattamadai-fine-mat',
    name: 'Pattamadai Superfine 140-Count Korai Grass Mat',
    artisan_id: 'mariammal-lebbai',
    artisan_name: 'S. Mariammal',
    category: 'Natural Fiber & Grass',
    origin: 'Pattamadai, Tirunelveli, Tamil Nadu',
    material: 'Thamirabarani Split Korai Grass, Fine Cotton Warp',
    price: 3900,
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1000&q=80',
    story: 'Soaked in the Thamirabarani River and woven so pliable it folds like fine silk cloth. GI-089 recognized masterwork.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0016',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-14T16:00:00Z',
    scan_count: 7,
    created_at: '2024-03-26T11:00:00Z'
  },
  {
    product_id: 'VN-0017',
    varnam_id: 'VRN-TS-001101',
    slug_id: 'cheriyal-scroll-mask',
    name: 'Cheriyal Narrative Scroll Mask of Garuda',
    artisan_id: 'vaikuntam-nakash',
    artisan_name: 'D. Vaikuntam Nakash',
    category: 'Paintings & Art',
    origin: 'Cheriyal, Telangana',
    material: 'Tamarind Seed Starch, Khadi Cloth, Natural Mineral Earths',
    price: 11200,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    story: 'Storytelling scroll theatre art form preserved by Nakash community families for wandering ballads in Telangana villages.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0017',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-14T14:30:00Z',
    scan_count: 10,
    created_at: '2024-03-28T12:00:00Z'
  },
  {
    product_id: 'VN-0018',
    varnam_id: 'VRN-RJ-000312',
    slug_id: 'molela-terracotta-plaque',
    name: 'Molela Votive Terracotta Sun God Wall Plaque',
    artisan_id: 'dinesh-kumhar',
    artisan_name: 'Dinesh Chandra Kumhar',
    category: 'Pottery & Ceramics',
    origin: 'Molela, Rajsamand, Rajasthan',
    material: 'Banas River Red Clay, Donkey Dung Organic Binder',
    price: 5400,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80',
    story: 'Hollow terracotta relief sculptures created without moulds to serve tribal pilgrimage shrines across western India.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0018',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-14T11:20:00Z',
    scan_count: 13,
    created_at: '2024-03-30T10:00:00Z'
  },
  {
    product_id: 'VN-0019',
    varnam_id: 'VRN-TS-001102',
    slug_id: 'pochampally-ikat-silk',
    name: 'Pochampally Double Ikat Telia Rumal Saree',
    artisan_id: 'laxman-goud',
    artisan_name: 'Laxman Goud',
    category: 'Textiles & Weaving',
    origin: 'Pochampally, Telangana',
    material: 'Mulberry Silk, Castor Oil Sizing, Alizarin Natural Red',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    story: 'Precision geometric warp-and-weft resist tie-dye woven with mathematical accuracy by master weavers in Bhoodan Pochampally.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0019',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-14T09:00:00Z',
    scan_count: 8,
    created_at: '2024-04-01T10:00:00Z'
  },
  {
    product_id: 'VN-0020',
    varnam_id: 'VRN-UP-001002',
    slug_id: 'saharanpur-sheesham-box',
    name: 'Saharanpur Hand-Pierced Sheesham Keepsake Box',
    artisan_id: 'mohd-aslam',
    artisan_name: 'Mohd. Aslam',
    category: 'Woodwork & Lacquer',
    origin: 'Saharanpur, Uttar Pradesh',
    material: 'Seasoned Dalbergia Sissoo (Sheesham Wood), Brass Inlay',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    story: 'Intricate Jaali fretwork pierced by hand with traditional steel bow-saws from legally harvested plantation sheesham wood.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0020',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-13T16:00:00Z',
    scan_count: 17,
    created_at: '2024-04-03T11:00:00Z'
  },
  {
    product_id: 'VN-0021',
    varnam_id: 'VRN-OR-001201',
    slug_id: 'pipli-applique-wall-hanging',
    name: 'Pipli Chandua Ceremonial Applique Canopy',
    artisan_id: 'bipin-das',
    artisan_name: 'Bipin Das',
    category: 'Textiles & Weaving',
    origin: 'Pipli, Puri District, Odisha',
    material: 'Handloom Cotton, Glass Convex Mirrors, Gilded Borders',
    price: 4100,
    image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1000&q=80',
    story: 'Originally stitched for the majestic chariots of the Puri Jagannath Ratha Yatra festival with auspicious elephant motifs.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0021',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-13T14:20:00Z',
    scan_count: 9,
    created_at: '2024-04-05T12:00:00Z'
  },
  {
    product_id: 'VN-0022',
    varnam_id: 'VRN-TN-000430',
    slug_id: 'thanjavur-bobblehead-doll',
    name: 'Thanjavur Golu Bobblehead Dancing Doll',
    artisan_id: 'meenakshi-ammal',
    artisan_name: 'Meenakshi Ammal',
    category: 'Handicrafts',
    origin: 'Thanjavur, Tamil Nadu',
    material: 'Kaveri River Alluvial Clay, Paper Pulp, Lead Counterweight',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    story: 'Low center-of-gravity oscillating self-balancing doll engineered in the 19th century under King Serfoji II.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0022',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-13T12:00:00Z',
    scan_count: 21,
    created_at: '2024-04-07T10:00:00Z'
  },
  {
    product_id: 'VN-0023',
    varnam_id: 'VRN-TN-000434',
    slug_id: 'chettinad-kottan-basket',
    name: 'Chettinad Kottan Dyed Palmyra Leaf Heritage Basket',
    artisan_id: 'visalakshi-ramaswamy',
    artisan_name: 'Visalakshi Ramaswamy',
    category: 'Handicrafts',
    origin: 'Kanadukathan, Sivaganga, Tamil Nadu',
    material: 'Boiled Palmyra Tender Leaf Fibers, Natural Turmeric & Madder Dyes',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1000&q=80',
    story: 'Geometric check-patterned heirloom basket traditionally presented during Chettiar weddings for gifting betel leaves.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0023',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-13T10:00:00Z',
    scan_count: 14,
    created_at: '2024-04-09T11:00:00Z'
  },
  {
    product_id: 'VN-0024',
    varnam_id: 'VRN-GJ-000211',
    slug_id: 'kutch-bandhani-dupatta',
    name: 'Kutch Traditional Bandhani Silk Dupatta',
    artisan_id: 'khatri-umar',
    artisan_name: 'Khatri Umar',
    category: 'Textiles & Weaving',
    origin: 'Bhuj, Kutch, Gujarat',
    material: 'Natural Silk, Pure Indigo & Madder Dyes',
    price: 6200,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    story: 'Thousands of micro-plucked pin-head knots tied with fingernails before dip-dyeing in authentic Kutchi vegetable indigo vats.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0024',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-13T08:30:00Z',
    scan_count: 12,
    created_at: '2024-04-11T12:00:00Z'
  },
  {
    product_id: 'VN-0025',
    varnam_id: 'VRN-TN-000435',
    slug_id: 'swamimalai-somaskanda-bronze',
    name: 'Swamimalai Bronze Somaskanda Icon (Holy Family)',
    artisan_id: 'rajendran-sthapathi',
    artisan_name: 'S. Rajendran Sthapathi',
    category: 'Metalwork & Bronze',
    origin: 'Swamimalai, Thanjavur District',
    material: 'Solid Panchaloha Bronze, Kaveri Silt Mould',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
    story: 'Classic seated Shiva with Uma and infant Skanda, cast strictly adhering to the Manasara and Shilpa Shastras.',
    verified: true,
    is_active: true,
    nfc_tag_id: 'VN-0025',
    nfc_status: 'Linked',
    last_scanned_at: '2026-09-12T16:00:00Z',
    scan_count: 19,
    created_at: '2024-04-13T10:00:00Z'
  },
  // Unlinked & Testing Products (Total 28: 25 verified linked, 3 unlinked)
  {
    product_id: 'VN-0026',
    varnam_id: 'VRN-KA-000503',
    slug_id: 'mysore-rosewood-inlay',
    name: 'Mysore Rosewood Inlay Floral Tray',
    artisan_id: 'ramesh-rao',
    artisan_name: 'Ramesh Rao',
    category: 'Woodwork & Lacquer',
    origin: 'Mysore, Karnataka',
    material: 'Dalbergia Latifolia (Rosewood), Acrylic Inlay Pieces',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    story: 'Traditional Mysore wood inlay technique requiring precision geometric chiseling on dark seasoned rosewood.',
    verified: false,
    is_active: true,
    nfc_tag_id: '',
    nfc_status: 'Not Linked',
    scan_count: 0,
    created_at: '2024-04-15T11:00:00Z'
  },
  {
    product_id: 'VN-0027',
    varnam_id: 'VRN-WB-000602',
    slug_id: 'sholapith-bridal-crown',
    name: 'Bengal Sholapith Bridal Mukut Crown',
    artisan_id: 'subhash-malakar',
    artisan_name: 'Subhash Malakar',
    category: 'Handicrafts',
    origin: 'Kumartuli, Kolkata, West Bengal',
    material: 'Aeschynomene Aspera (Reed Sola Plant Core)',
    price: 1950,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
    story: 'Ivory-white spongey stem of marshland sola reed carved into filigree crowns for Bengali weddings.',
    verified: false,
    is_active: true,
    nfc_tag_id: '',
    nfc_status: 'Not Linked',
    scan_count: 0,
    created_at: '2024-04-17T09:00:00Z'
  },
  {
    product_id: 'VN-0028',
    varnam_id: 'VRN-CG-000702',
    slug_id: 'bastar-bell-metal-horse',
    name: 'Bastar Bell Metal Ceremonial Horse',
    artisan_id: 'maniram-baghel',
    artisan_name: 'Maniram Baghel',
    category: 'Metalwork & Bronze',
    origin: 'Kondagaon, Bastar, Chhattisgarh',
    material: 'Brass Scrap, Beeswax Coils, Red Alluvial Clay',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    story: 'Votive horse offering cast with decorative spiral wax threads by Bastar bell metal sculptors.',
    verified: false,
    is_active: true,
    nfc_tag_id: '',
    nfc_status: 'Not Linked',
    scan_count: 0,
    created_at: '2024-04-19T14:00:00Z'
  }
];

const INITIAL_SCANS: NfcScanLog[] = [
  {
    id: 'scan-101',
    product_id: 'VN-0025',
    device_id: 'VARNAM-ESP32-01',
    status: 'verified',
    craft_name: 'Swamimalai Bronze Somaskanda Icon',
    location: 'Chennai Quality & Certification Hub',
    timestamp: '2026-09-17T09:15:22Z'
  },
  {
    id: 'scan-102',
    product_id: 'VN-0024',
    device_id: 'VARNAM-ESP32-01',
    status: 'verified',
    craft_name: 'Kutch Traditional Bandhani Silk Dupatta',
    location: 'Bhuj Artisan Cluster Station',
    timestamp: '2026-09-17T08:52:10Z'
  },
  {
    id: 'scan-103',
    product_id: 'VN-0023',
    device_id: 'VARNAM-ESP32-02',
    status: 'verified',
    craft_name: 'Chettinad Kottan Dyed Palmyra Leaf Heritage Basket',
    location: 'Madurai Craft Verification Hub',
    timestamp: '2026-09-17T08:30:45Z'
  },
  {
    id: 'scan-104',
    product_id: 'VN-0001',
    device_id: 'VARNAM-ESP32-01',
    status: 'verified',
    craft_name: 'Bamboo Basket',
    location: 'Pollachi Weaver Center',
    timestamp: '2026-09-17T07:45:12Z'
  },
  {
    id: 'scan-105',
    product_id: 'VN-0002',
    device_id: 'VARNAM-ESP32-01',
    status: 'verified',
    craft_name: 'Swamimalai Bronze Nataraja (Lost-Wax Casting)',
    location: 'Thanjavur Temple Trust Terminal',
    timestamp: '2026-09-17T06:18:04Z'
  }
];

const INITIAL_USERS: UserRecord[] = [
  {
    id: 'jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0',
    email: 'manisha.m2025aiml@sece.ac.in',
    name: 'Manisha M',
    role: 'customer',
    email_verified: true,
    email_verification_time: 1789925258335,
    created_at: 1789925225118
  },
  {
    id: 'user-ananya-heritage',
    email: 'ananya.heritage@gmail.com',
    name: 'Ananya Sharma',
    role: 'customer',
    email_verified: true,
    email_verification_time: 1789920000000,
    created_at: 1789910000000
  },
  {
    id: 'artisan-meena-pollachi',
    email: 'meena.bamboo@varnam-heritage.in',
    name: 'Meena of Pollachi',
    role: 'artisan',
    email_verified: true,
    created_at: 1789900000000
  }
];

const INITIAL_ACCOUNTS: AuthAccountRecord[] = [
  {
    id: 'j575sw0r58aksg3t6jc81d16p58er2vz',
    user_id: 'jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0',
    provider: 'email-otp',
    provider_account_id: 'manisha.m2025aiml@sece.ac.in',
    email_verified: 'manisha.m2025aiml@sece.ac.in',
    created_at: 1789925225118
  }
];

const INITIAL_SESSIONS: AuthSessionRecord[] = [
  {
    id: 'jh78cp9716j5jh3cjyn78c6rnn8erh5m',
    user_id: 'jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0',
    expiration_time: 1792517258335,
    created_at: 1789925258335
  }
];

const INITIAL_REVIEWS: ReviewRecord[] = [
  {
    id: 'rev-001',
    product_id: 'VN-0001',
    user_id: 'jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0',
    user_name: 'Manisha M',
    rating: 5,
    title: 'Exquisite Pollachi craft and genuine NFC verification!',
    comment: 'The split-bamboo finish is so fine and aromatic. Tapped my phone against the rim and immediately saw Meena’s master craft certificate and village geotag. True Indian heritage!',
    verified_buyer: true,
    created_at: '2026-09-18T14:30:00Z'
  },
  {
    id: 'rev-002',
    product_id: 'VN-0002',
    user_id: 'user-ananya-heritage',
    user_name: 'Ananya Sharma',
    rating: 5,
    title: 'Panchaloha masterpiece — museum grade',
    comment: 'The lost-wax casting details on Nataraja’s flying jata and the ring of fire (prabhavali) are spellbinding. You can feel the weight and spiritual resonance.',
    verified_buyer: true,
    created_at: '2026-09-19T10:15:00Z'
  },
  {
    id: 'rev-003',
    product_id: 'VN-0003',
    user_id: 'user-collector-raj',
    user_name: 'Rajesh Raman',
    rating: 5,
    title: 'Authentic 22K Gold Foil Thanjavur art',
    comment: 'Verified the seal at the back. The Burma teak frame and relief gesso work are immaculate. Shipped with tamper-proof seal.',
    verified_buyer: true,
    created_at: '2026-09-19T16:45:00Z'
  }
];

const INITIAL_LIKES: LikeRecord[] = [
  { id: 'like-1', product_id: 'VN-0001', user_id: 'jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0', created_at: '2026-09-18T12:00:00Z' },
  { id: 'like-2', product_id: 'VN-0002', user_id: 'jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0', created_at: '2026-09-18T12:05:00Z' },
  { id: 'like-3', product_id: 'VN-0003', user_id: 'user-ananya-heritage', created_at: '2026-09-19T09:00:00Z' }
];

const INITIAL_TRANSLATIONS: TranslationRecord[] = [
  {
    id: 'trans-ta-001',
    target_id: 'bamboo-basket',
    field_name: 'story',
    locale: 'ta',
    original_text: 'Woven by generational bamboo weavers of the Anaimalai foothills in Pollachi using sustainable native bamboo split to sub-millimeter precision.',
    translated_text: 'பொள்ளாச்சி ஆனைமலை அடிவாரத்தில் வாழும் பாரம்பரிய மூங்கில் நெசவாளர்களால், இயற்கையான மூங்கிலை மெல்லிய இழைகளாக பிரித்து கலைநயத்துடன் நெய்யப்பட்டது.',
    created_at: '2026-09-18T10:00:00Z'
  },
  {
    id: 'trans-ta-002',
    target_id: 'swamimalai-bronze-nataraja',
    field_name: 'story',
    locale: 'ta',
    original_text: 'Consecrated 16-inch Nataraja icon cast in solid Panchaloha bronze by 4th-generation Chola royal guild sculptors using Kaveri riverbed silt.',
    translated_text: 'காவிரி ஆற்றுப்படுகை வண்டல் மண்ணை பயன்படுத்தி சோழர் கால மரபு சிற்பிகளால் பஞ்சலோகத்தால் வார்க்கப்பட்ட புனிதமான நடராஜர் திருவுருவம்.',
    created_at: '2026-09-18T10:00:00Z'
  },
  {
    id: 'trans-hi-001',
    target_id: 'bamboo-basket',
    field_name: 'story',
    locale: 'hi',
    original_text: 'Woven by generational bamboo weavers of the Anaimalai foothills in Pollachi using sustainable native bamboo split to sub-millimeter precision.',
    translated_text: 'पोलाची की अनाईमलाई तलहटी के पीढ़ी-दर-पीढ़ी बांस बुनकरों द्वारा प्राकृतिक बांस से बारीक तराशकर बनाया गया पारंपरिक शिल्प।',
    created_at: '2026-09-18T10:00:00Z'
  }
];

class Database {
  private data: DatabaseSchema;

  constructor() {
    this.data = this.load();
  }

  private load(): DatabaseSchema {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        // Ensure new collections exist even if loaded from older db.json
        parsed.users = parsed.users || INITIAL_USERS;
        parsed.authAccounts = parsed.authAccounts || INITIAL_ACCOUNTS;
        parsed.authSessions = parsed.authSessions || INITIAL_SESSIONS;
        parsed.authVerificationCodes = parsed.authVerificationCodes || [];
        parsed.likes = parsed.likes || INITIAL_LIKES;
        parsed.reviews = parsed.reviews || INITIAL_REVIEWS;
        parsed.translations = parsed.translations || INITIAL_TRANSLATIONS;
        return parsed;
      }
    } catch (e) {
      console.warn('Could not read db.json, reinitializing...', e);
    }

    const defaultData: DatabaseSchema = {
      products: INITIAL_PRODUCTS,
      scans: INITIAL_SCANS,
      users: INITIAL_USERS,
      authAccounts: INITIAL_ACCOUNTS,
      authSessions: INITIAL_SESSIONS,
      authVerificationCodes: [],
      likes: INITIAL_LIKES,
      reviews: INITIAL_REVIEWS,
      translations: INITIAL_TRANSLATIONS
    };
    this.save(defaultData);
    return defaultData;
  }

  private save(data: DatabaseSchema): void {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e) {
      console.error('Error saving db.json:', e);
    }
  }

  // --- Product Methods ---
  public getAllProducts(): ProductRecord[] {
    return this.data.products;
  }

  public findProduct(idOrNfc: string | string[]): ProductRecord | undefined {
    const raw = Array.isArray(idOrNfc) ? idOrNfc[0] : idOrNfc;
    if (!raw) return undefined;
    const cleanId = String(raw).trim().toUpperCase();
    return this.data.products.find(p => 
      p.product_id.toUpperCase() === cleanId ||
      (p.varnam_id && p.varnam_id.toUpperCase() === cleanId) ||
      (p.nfc_tag_id && p.nfc_tag_id.toUpperCase() === cleanId) ||
      (p.slug_id && p.slug_id.toLowerCase() === String(raw).toLowerCase())
    );
  }

  public addProduct(record: Omit<ProductRecord, 'scan_count' | 'created_at'>): ProductRecord {
    const newRecord: ProductRecord = {
      ...record,
      scan_count: 0,
      created_at: new Date().toISOString()
    };
    this.data.products.unshift(newRecord);
    this.save(this.data);
    return newRecord;
  }

  public updateNfcLink(productId: string, nfcTagId: string): ProductRecord | null {
    const prod = this.findProduct(productId);
    if (!prod) return null;
    prod.nfc_tag_id = nfcTagId;
    prod.nfc_status = 'Linked';
    prod.verified = true;
    this.save(this.data);
    return prod;
  }

  // --- NFC Scan Methods ---
  public logScan(productId: string | string[], deviceId?: string, status: 'verified' | 'unverified' | 'not_found' = 'verified'): NfcScanLog {
    const raw = Array.isArray(productId) ? productId[0] : productId;
    const cleanId = String(raw || '').trim();
    const prod = this.findProduct(cleanId);
    if (prod) {
      prod.scan_count = (prod.scan_count || 0) + 1;
      prod.last_scanned_at = new Date().toISOString();
    }

    const log: NfcScanLog = {
      id: `scan-${Date.now()}`,
      product_id: cleanId.toUpperCase(),
      device_id: deviceId || 'VARNAM-ESP32-01',
      status,
      craft_name: prod ? prod.name : 'Unknown Craft / Tag',
      location: 'Varnam Authenticity Verification Station',
      timestamp: new Date().toISOString()
    };

    this.data.scans.unshift(log);
    if (this.data.scans.length > 100) {
      this.data.scans = this.data.scans.slice(0, 100);
    }
    this.save(this.data);
    return log;
  }

  public getScans(limit = 20): NfcScanLog[] {
    return this.data.scans.slice(0, limit);
  }

  public getStats() {
    const products = this.data.products;
    const verified = products.filter(p => p.verified);
    const unlinked = products.filter(p => p.nfc_status !== 'Linked');

    return {
      totalNfcProducts: products.length,
      verifiedCount: verified.length,
      unlinkedCount: unlinked.length,
      totalScansCount: this.data.scans.length,
      totalReviewsCount: (this.data.reviews || []).length,
      totalLikesCount: (this.data.likes || []).length,
      recentScans: this.data.scans.slice(0, 10)
    };
  }

  // --- Auth & Email OTP Methods (Convex Auth Pattern) ---
  public getUserByEmail(email: string): UserRecord | undefined {
    const clean = email.toLowerCase().trim();
    return (this.data.users || []).find(u => u.email.toLowerCase() === clean);
  }

  public generateOtp(email: string): { code: string; expirationTime: number } {
    const clean = email.toLowerCase().trim();
    // Generate 6-digit OTP code (demo default is deterministic for ease of test if needed)
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expirationTime = Date.now() + 10 * 60 * 1000; // 10 minutes

    this.data.authVerificationCodes = this.data.authVerificationCodes || [];
    // Remove older codes for this email
    this.data.authVerificationCodes = this.data.authVerificationCodes.filter(c => c.email.toLowerCase() !== clean);
    this.data.authVerificationCodes.push({
      id: `otp-${Date.now()}`,
      email: clean,
      code,
      expiration_time: expirationTime,
      created_at: Date.now()
    });

    this.save(this.data);
    return { code, expirationTime };
  }

  public verifyOtp(email: string, code: string): { user: UserRecord; session: AuthSessionRecord } | null {
    const cleanEmail = email.toLowerCase().trim();
    const cleanCode = code.trim();

    this.data.authVerificationCodes = this.data.authVerificationCodes || [];
    const record = this.data.authVerificationCodes.find(
      c => c.email.toLowerCase() === cleanEmail && c.code === cleanCode && c.expiration_time > Date.now()
    );

    // Accept if matching record exists OR if universal demo code '123456' is used for development
    if (!record && cleanCode !== '123456') {
      return null;
    }

    // Clean up used OTP
    this.data.authVerificationCodes = this.data.authVerificationCodes.filter(c => c.email.toLowerCase() !== cleanEmail);

    // Find or create user
    this.data.users = this.data.users || [];
    let user = this.getUserByEmail(cleanEmail);
    if (!user) {
      user = {
        id: `usr-${Date.now()}`,
        email: cleanEmail,
        name: cleanEmail.split('@')[0].replace(/[._]/g, ' '),
        role: 'customer',
        email_verified: true,
        email_verification_time: Date.now(),
        created_at: Date.now()
      };
      this.data.users.push(user);
    } else {
      user.email_verified = true;
      user.email_verification_time = Date.now();
    }

    // Link auth account
    this.data.authAccounts = this.data.authAccounts || [];
    let account = this.data.authAccounts.find(a => a.user_id === user!.id && a.provider === 'email-otp');
    if (!account) {
      account = {
        id: `act-${Date.now()}`,
        user_id: user.id,
        provider: 'email-otp',
        provider_account_id: cleanEmail,
        email_verified: cleanEmail,
        created_at: Date.now()
      };
      this.data.authAccounts.push(account);
    }

    // Create session (30 days validity)
    const session: AuthSessionRecord = {
      id: `sess-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      user_id: user.id,
      expiration_time: Date.now() + 30 * 24 * 60 * 60 * 1000,
      created_at: Date.now()
    };
    this.data.authSessions = this.data.authSessions || [];
    this.data.authSessions.push(session);

    this.save(this.data);
    return { user, session };
  }

  public getSession(sessionId: string): { user: UserRecord; session: AuthSessionRecord } | null {
    this.data.authSessions = this.data.authSessions || [];
    const session = this.data.authSessions.find(s => s.id === sessionId && s.expiration_time > Date.now());
    if (!session) return null;

    this.data.users = this.data.users || [];
    const user = this.data.users.find(u => u.id === session.user_id);
    if (!user) return null;

    return { user, session };
  }

  // --- Reviews Methods ---
  public getReviewsForProduct(productId: string): ReviewRecord[] {
    this.data.reviews = this.data.reviews || [];
    const cleanId = productId.toUpperCase();
    const prod = this.findProduct(productId);
    const ids = [cleanId];
    if (prod) {
      ids.push(prod.product_id.toUpperCase());
      if (prod.slug_id) ids.push(prod.slug_id.toLowerCase());
      if (prod.varnam_id) ids.push(prod.varnam_id.toUpperCase());
    }

    return this.data.reviews.filter(r => 
      ids.includes(r.product_id.toUpperCase()) || 
      ids.includes(r.product_id.toLowerCase())
    );
  }

  public addReview(review: Omit<ReviewRecord, 'id' | 'created_at'>): ReviewRecord {
    this.data.reviews = this.data.reviews || [];
    const newRev: ReviewRecord = {
      ...review,
      id: `rev-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      created_at: new Date().toISOString()
    };
    this.data.reviews.unshift(newRev);
    this.save(this.data);
    return newRev;
  }

  // --- Likes Methods ---
  public getLikesForProduct(productId: string): { count: number; userIds: string[] } {
    this.data.likes = this.data.likes || [];
    const cleanId = productId.toUpperCase();
    const matching = this.data.likes.filter(l => l.product_id.toUpperCase() === cleanId);
    return {
      count: matching.length,
      userIds: matching.map(l => l.user_id)
    };
  }

  public toggleLike(productId: string, userId: string): { liked: boolean; count: number } {
    this.data.likes = this.data.likes || [];
    const cleanProd = productId.toUpperCase();
    const existingIndex = this.data.likes.findIndex(
      l => l.product_id.toUpperCase() === cleanProd && l.user_id === userId
    );

    let liked = false;
    if (existingIndex >= 0) {
      this.data.likes.splice(existingIndex, 1);
      liked = false;
    } else {
      this.data.likes.push({
        id: `like-${Date.now()}`,
        product_id: cleanProd,
        user_id: userId,
        created_at: new Date().toISOString()
      });
      liked = true;
    }

    this.save(this.data);
    const count = this.data.likes.filter(l => l.product_id.toUpperCase() === cleanProd).length;
    return { liked, count };
  }

  public getUserLikes(userId: string): string[] {
    this.data.likes = this.data.likes || [];
    return this.data.likes.filter(l => l.user_id === userId).map(l => l.product_id);
  }

  // --- Translations Methods ---
  public getTranslations(targetId?: string, locale?: string): TranslationRecord[] {
    this.data.translations = this.data.translations || [];
    let list = this.data.translations;
    if (targetId) {
      list = list.filter(t => t.target_id.toLowerCase() === targetId.toLowerCase());
    }
    if (locale) {
      list = list.filter(t => t.locale.toLowerCase() === locale.toLowerCase());
    }
    return list;
  }

  public saveTranslation(item: Omit<TranslationRecord, 'id' | 'created_at'>): TranslationRecord {
    this.data.translations = this.data.translations || [];
    const existingIndex = this.data.translations.findIndex(
      t => t.target_id.toLowerCase() === item.target_id.toLowerCase() && 
           t.locale.toLowerCase() === item.locale.toLowerCase() && 
           t.field_name === item.field_name
    );

    const record: TranslationRecord = {
      ...item,
      id: existingIndex >= 0 ? this.data.translations[existingIndex].id : `trans-${Date.now()}`,
      created_at: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      this.data.translations[existingIndex] = record;
    } else {
      this.data.translations.push(record);
    }

    this.save(this.data);
    return record;
  }

  // --- Convex Snapshot Explorer Export ---
  public getConvexSnapshotData() {
    return {
      authAccounts: this.data.authAccounts || [],
      users: this.data.users || [],
      authSessions: this.data.authSessions || [],
      authVerificationCodes: this.data.authVerificationCodes || [],
      likes: this.data.likes || [],
      reviews: this.data.reviews || [],
      products: this.data.products || [],
      translations: this.data.translations || [],
      scans: this.data.scans || []
    };
  }
}


export const db = new Database();
