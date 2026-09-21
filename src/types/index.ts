export type Zone = 'South' | 'North' | 'West' | 'East' | 'North-East' | 'Central';

export type CraftCategory = 
  | 'Textiles & Weaving'
  | 'Metalwork & Bronze'
  | 'Paintings & Art'
  | 'Pottery & Ceramics'
  | 'Woodwork & Lacquer'
  | 'Stone & Filigree'
  | 'Natural Fiber & Grass'
  | 'Fragrance & Distillation';

export interface CulturalHighlight {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface CraftSticker {
  id: string;
  name: string;
  category: string;
  image: string;
  isDrawing?: boolean;
  originVillage: string;
  tag: string;
  rotationClass?: string;
  description: string;
}

export interface StateData {
  id: string; // e.g. 'IN-TN'
  slug: string; // e.g. 'tamil-nadu'
  name: string;
  capital: string;
  zone: Zone;
  tagLine: string;
  culturalStory: string;
  accentColor: string; // Hex e.g. '#C85A32'
  secondaryColor: string;
  motifName: string;
  motifSvg: string; // SVG icon or representation
  heroImage: string;
  signatureCraftIds: string[];
  featuredArtisanIds: string[];
  culturalHighlights: CulturalHighlight[];
  giCount: number;
  artisanCount: number;
  stickers?: CraftSticker[];
}

export interface CreationStep {
  stepNumber: number;
  title: string;
  description: string;
  timeSpent: string;
  tools: string[];
}

export interface CraftStory {
  history: string;
  culturalSignificance: string;
  artisanStory: string;
  creationProcessSteps: CreationStep[];
  aiAssistedNarrative?: string;
  factualProvenanceNotes: string[];
}

export interface Craft {
  id: string; // e.g. 'tanjore-painting-krishna'
  varnamId: string; // e.g. 'VRN-TN-000428'
  name: string;
  vernacularName: string; // e.g. 'தஞ்சாவூர் ஓவியம்'
  stateId: string; // e.g. 'IN-TN'
  stateName: string;
  category: CraftCategory;
  price: number;
  originalPrice?: number;
  materials: string[];
  technique: string;
  craftDuration: string; // e.g. '24 days'
  originVillage: string; // e.g. 'Thanjavur Marabu cluster'
  giNumber: string; // e.g. 'GI-022'
  giYear: number;
  isGiVerified: boolean;
  images: string[];
  shortDescription: string;
  story: CraftStory;
  artisanId: string;
  rating: number;
  reviewCount: number;
  dimensions: string;
  weight: string;
  tags: string[];
  inStock: boolean;
  featured?: boolean;
  shortProductId?: string; // e.g. 'VN-0001'
  nfcTagId?: string; // e.g. 'VN-0001' or tag UID
  nfcStatus?: 'Linked' | 'Not Linked';
  isActive?: boolean;
  lastScannedAt?: string;
  scanCount?: number;
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

export interface HardwareStats {
  totalNfcProducts: number;
  verifiedCount: number;
  unlinkedCount: number;
  totalScansCount: number;
  recentScans: NfcScanLog[];
}

export interface JourneyMilestone {
  year: number | string;
  milestone: string;
  description: string;
  location?: string;
}

export interface Artisan {
  id: string; // e.g. 'rajendran-sthapathi'
  name: string;
  title: string; // e.g. 'Master Sthapathi & National Awardee'
  craftSpecialty: string;
  stateId: string;
  stateName: string;
  village: string;
  experienceYears: number;
  generation: string; // e.g. '4th Generation Shilpa Sthapathi'
  awards: string[];
  avatar: string;
  coverImage: string;
  bio: string;
  quote: string;
  journeyTimeline: JourneyMilestone[];
  techniqueOverview: string;
  verifiedStatus: 'Verified Master' | 'Living Legend' | 'GI Authenticated';
  craftIds: string[];
  phone?: string;
  email?: string;
  apprenticesCount: number;
}

export interface ProvenanceEvent {
  timestamp: string;
  stage: 'Raw Material Origin Verified' | 'Master Guild Inspection' | 'GI Authority Validation' | 'NFC Chip Pairing' | 'Custody Transferred';
  description: string;
  verifiedBy: string;
  transactionHash: string;
  location: string;
}

export interface VerificationRecord {
  varnamId: string;
  craftId: string;
  craftName: string;
  artisanName: string;
  artisanId: string;
  stateName: string;
  originVillage: string;
  giNumber: string;
  giYear: number;
  issueDate: string;
  nfcUid: string;
  qrHash: string;
  cryptographicSignature: string;
  blockchainBlockNumber: number;
  provenanceEvents: ProvenanceEvent[];
  authenticityStatus: 'Cryptographically Verified' | 'Under Inspection' | 'Flagged';
}

export interface EditorialStory {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorTitle: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  stateName: string;
  craftName: string;
  content: string[];
  quote: string;
  quoteAuthor: string;
  relatedCraftIds: string[];
  publishedAt: string;
}

export interface CartItem {
  craft: Craft;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  totalAmount: number;
  status: 'Confirmed' | 'Processing Certificate' | 'Shipped' | 'Delivered';
  shippingAddress: {
    fullName: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export type SupportedLanguage = 'en' | 'ta' | 'hi' | 'te' | 'kn' | 'ml' | 'bn';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
}
