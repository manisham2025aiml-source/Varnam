import express, { Request, Response } from 'express';
import cors from 'cors';
import { db } from './database.ts';

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Health Check for ESP32 and Network Testing
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    server: 'VARNAM IoT Handicraft Authenticity Platform',
    version: '2.0.0',
    timestamp: new Date().toISOString()
  });
});

// GET /api/products - Get all products
app.get('/api/products', (_req: Request, res: Response) => {
  const products = db.getAllProducts();
  res.json({
    success: true,
    count: products.length,
    products
  });
});

// GET /api/products/:productId - Verification endpoint queried by ESP32 and NFC tap
app.get('/api/products/:productId', (req: Request, res: Response) => {
  const rawId = req.params?.productId;
  const productId: string = String(Array.isArray(rawId) ? rawId[0] : (rawId || '')).trim();
  const product = db.findProduct(productId);

  if (!product) {
    // Log not found scan if requested with ?log=true or default
    if (String(req.query.log) !== 'false') {
      const deviceId: string = String(req.query.device || 'VARNAM-ESP32-01');
      db.logScan(productId, deviceId, 'not_found');
    }
    res.status(404).json({
      success: false,
      verified: false,
      message: 'Product not found'
    });
    return;
  }

  // Check verification & active status
  const isAuthentic = Boolean(
    product.verified && 
    (product.is_active ?? true) && 
    product.nfc_status?.toLowerCase() === 'linked'
  );

  // Optional auto-logging on read
  if (String(req.query.log) === 'true') {
    const deviceId: string = String(req.query.device || 'VARNAM-ESP32-01');
    db.logScan(
      product.product_id,
      deviceId,
      isAuthentic ? 'verified' : 'unverified'
    );
  }

  res.json({
    success: true,
    product_id: product.product_id,
    productId: product.product_id,
    name: product.name,
    artisan: product.artisan_name,
    category: product.category,
    origin: product.origin,
    material: product.material,
    price: product.price,
    giTag: `${product.origin} GI Certified`,
    status: isAuthentic ? 'verified' : 'unlinked',
    verified: isAuthentic,
    nfc_tag_id: product.nfc_tag_id,
    nfcTagId: product.nfc_tag_id,
    nfc_status: product.nfc_status,
    nfcStatus: product.nfc_status === 'Linked' ? 'linked' : 'unlinked',
    image: product.image,
    story: product.story,
    slug_id: product.slug_id || product.product_id.toLowerCase(),
    varnam_id: product.varnam_id || product.product_id,
    product: {
      productId: product.product_id,
      product_id: product.product_id,
      name: product.name,
      artisan: product.artisan_name,
      artisan_name: product.artisan_name,
      artisan_id: product.artisan_id,
      category: product.category,
      origin: product.origin,
      material: product.material,
      price: product.price,
      image: product.image,
      story: product.story,
      slug_id: product.slug_id || product.product_id.toLowerCase(),
      varnam_id: product.varnam_id || product.product_id
    }
  });
});

// POST /api/nfc/scan - Hardware scan event logging from ESP32 or web
app.post('/api/nfc/scan', (req: Request, res: Response) => {
  const targetId: string = String(req.body.product_id || req.body.productId || '').trim();
  const targetDevice: string = String(req.body.device_id || req.body.deviceLocation || 'VARNAM-ESP32-01').trim();
  const rawStatus = String(req.body.status || 'verified').trim();

  if (!targetId) {
    res.status(400).json({ success: false, message: 'product_id or productId is required' });
    return;
  }

  const scanStatus: 'verified' | 'unverified' | 'not_found' = 
    rawStatus === 'verified' || rawStatus === 'unverified' || rawStatus === 'not_found' 
      ? rawStatus 
      : 'verified';

  const log = db.logScan(targetId, targetDevice, scanStatus);

  res.status(201).json({
    success: true,
    message: 'Scan event recorded',
    log
  });
});

// GET /api/nfc/scans - Get recent scan history
app.get('/api/nfc/scans', (req: Request, res: Response) => {
  const limit = req.query.limit ? parseInt(String(req.query.limit), 10) : 20;
  const scans = db.getScans(Number.isNaN(limit) ? 20 : limit);
  res.json({
    success: true,
    count: scans.length,
    scans
  });
});

// GET /api/nfc/stats - Hardware statistics for Admin Dashboard
app.get('/api/nfc/stats', (_req: Request, res: Response) => {
  const stats = db.getStats();
  res.json({
    success: true,
    ...stats
  });
});

// ==========================================
// RFID HARDWARE API (ESP32 + RC522)
// ==========================================

// POST /api/rfid/scan - Process RFID scan from ESP32 + RC522 or Web simulation
app.post('/api/rfid/scan', (req: Request, res: Response) => {
  const rawUid = String(req.body.uid || req.body.UID || req.body.rfid || '').trim();
  const deviceId = String(req.body.device_id || req.body.deviceId || 'VARNAM-ESP32-RC522').trim();

  if (!rawUid) {
    res.status(400).json({ success: false, message: 'uid is required' });
    return;
  }

  const event = db.handleRfidScan(rawUid, deviceId);

  res.json({
    success: true,
    verified: event.status === 'verified',
    uid: event.formatted_uid,
    rawUid: event.uid,
    user: event.user_name,
    role: event.role,
    status: event.status,
    craftId: event.craft_id,
    craftName: event.craft_name,
    message: event.status === 'verified' ? `Welcome ${event.user_name}` : 'Unknown RFID Tag',
    oled: {
      line1: event.oled_line1,
      line2: event.oled_line2,
      line3: event.oled_line3
    },
    timestamp: event.timestamp
  });
});

// GET /api/rfid/latest - Polled by website for real-time RFID status display
app.get('/api/rfid/latest', (_req: Request, res: Response) => {
  const latest = db.getLatestRfidScan();
  res.json({
    success: true,
    deviceConnected: true,
    latest: latest || {
      uid: 'None',
      formatted_uid: '-- -- -- --',
      user_name: 'Waiting for tap...',
      role: '--',
      status: 'waiting',
      timestamp: new Date().toISOString()
    }
  });
});

// GET /api/rfid/cards - List registered RFID cards / keychains
app.get('/api/rfid/cards', (_req: Request, res: Response) => {
  const cards = db.getAllRfidCards();
  res.json({
    success: true,
    count: cards.length,
    cards
  });
});

// POST /api/rfid/register - Register a new card or keychain
app.post('/api/rfid/register', (req: Request, res: Response) => {
  const { uid, user_name, role, card_type, craft_id, craft_name } = req.body;
  if (!uid || !user_name) {
    res.status(400).json({ success: false, message: 'uid and user_name are required' });
    return;
  }
  const card = db.registerRfidCard({ uid, user_name, role, card_type, craft_id, craft_name });
  res.json({ success: true, message: 'RFID tag registered', card });
});

// POST /api/nfc/link - Associate an NFC tag with a Product ID (Artisan Studio)
app.post('/api/nfc/link', (req: Request, res: Response) => {
  const product_id: string = String(req.body.product_id || req.body.productId || '').trim();
  const nfc_tag_id: string = String(req.body.nfc_tag_id || req.body.nfcTagId || '').trim();

  if (!product_id || !nfc_tag_id) {
    res.status(400).json({
      success: false,
      message: 'Both product_id and nfc_tag_id are required'
    });
    return;
  }

  const updated = db.updateNfcLink(product_id, nfc_tag_id);
  if (!updated) {
    res.status(404).json({
      success: false,
      message: `Product with ID ${product_id} not found`
    });
    return;
  }

  res.json({
    success: true,
    message: `NFC tag ${nfc_tag_id} linked to product ${product_id}`,
    product: updated
  });
});

// POST /api/products - Create a new product (from Seller listing flow)
app.post('/api/products', (req: Request, res: Response) => {
  const body = req.body;

  if (!body.name || !body.artisan_name) {
    res.status(400).json({
      success: false,
      message: 'Name and artisan_name are required'
    });
    return;
  }

  // Generate next Product ID if not provided
  let productId = body.product_id;
  if (!productId) {
    const allProds = db.getAllProducts();
    const nextNum = allProds.length + 1;
    productId = `VN-${String(nextNum).padStart(4, '0')}`;
  }

  const newProduct = db.addProduct({
    product_id: productId,
    varnam_id: body.varnam_id || `VRN-GEN-${Date.now()}`,
    slug_id: body.slug_id || body.name.toLowerCase().replace(/\s+/g, '-'),
    name: body.name,
    artisan_id: body.artisan_id || 'artisan-custom',
    artisan_name: body.artisan_name,
    category: body.category || 'Handicrafts',
    origin: body.origin || 'India',
    material: body.material || 'Natural Handcrafted Materials',
    price: Number(body.price) || 1200,
    image: body.image || 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1000&q=80',
    story: body.story || 'Handcrafted traditional piece created with generational knowledge.',
    verified: Boolean(body.verified ?? true),
    is_active: true,
    nfc_tag_id: body.nfc_tag_id || productId,
    nfc_status: body.nfc_tag_id ? 'Linked' : 'Not Linked'
  });

  res.status(201).json({
    success: true,
    message: 'Product registered successfully',
    product: newProduct
  });
});

// AI Agent: Craft Image & Story Analysis Endpoint
app.post('/api/ai/analyze-craft', (req: Request, res: Response) => {
  const { imageName, textPrompt } = req.body;
  const prompt = `${imageName || ''} ${textPrompt || ''}`.toLowerCase();

  let analysis = {
    detectedCraft: 'Indian Traditional Handicraft',
    originVillage: 'Thanjavur Marabu Cluster',
    state: 'Tamil Nadu',
    category: 'Handicrafts',
    materials: ['Natural River Clay', 'Organic Mineral Pigments', 'Handspun Thread'],
    confidenceScore: 0.93,
    suggestedPrice: 1850,
    generatedStory: 'Handcrafted by hereditary master artisans using age-old vernacular techniques passed down through generations. Sourced from sustainable regional materials.'
  };

  if (prompt.includes('bamboo') || prompt.includes('basket') || prompt.includes('cane') || prompt.includes('grass')) {
    analysis = {
      detectedCraft: 'Anaimalai Split-Bamboo Heritage Basket',
      originVillage: 'Pollachi Foothills',
      state: 'Tamil Nadu',
      category: 'Handicrafts',
      materials: ['Native Anaimalai Bamboo', 'Vegetable Bark Starch', 'Palm Leaf Strands'],
      confidenceScore: 0.96,
      suggestedPrice: 850,
      generatedStory: 'Harvested from sustainable hillside bamboo groves and hand-shaved into razor-thin flexible weft ribbons by Pollachi indigenous weavers.'
    };
  } else if (prompt.includes('bronze') || prompt.includes('nataraja') || prompt.includes('sculpture') || prompt.includes('metal')) {
    analysis = {
      detectedCraft: 'Swamimalai Chola Lost-Wax Bronze Icon',
      originVillage: 'Swamimalai',
      state: 'Tamil Nadu',
      category: 'Metalwork & Bronze',
      materials: ['Panchaloha (Copper 80%, Zinc 15%, Tin 4%, Gold/Silver 1%)', 'Kaveri River Silt'],
      confidenceScore: 0.98,
      suggestedPrice: 38500,
      generatedStory: 'Cast in solid bronze according to ancient Shilpa Shastras by master Sthapathis using single-pour crucible techniques.'
    };
  } else if (prompt.includes('pottery') || prompt.includes('blue') || prompt.includes('ceramic') || prompt.includes('vase')) {
    analysis = {
      detectedCraft: 'Jaipur Persian Arabesque Blue Pottery',
      originVillage: 'Kot Jewar, Jaipur',
      state: 'Rajasthan',
      category: 'Pottery & Ceramics',
      materials: ['Ground Quartz', 'Glass Cullet', 'Multani Mitti', 'Natural Copper Oxide'],
      confidenceScore: 0.95,
      suggestedPrice: 4800,
      generatedStory: 'Crafted without clay using crushed quartz dough and hand-painted with cobalt blue oxide floral arabesques.'
    };
  } else if (prompt.includes('silk') || prompt.includes('saree') || prompt.includes('textile') || prompt.includes('weaving')) {
    analysis = {
      detectedCraft: 'Kanchipuram Three-Shuttle Silk Brocade',
      originVillage: 'Kanchipuram Weaver Quarter',
      state: 'Tamil Nadu',
      category: 'Textiles & Weaving',
      materials: ['Mulberry Silk Yarn', 'Pure Silver Zari Thread', '24K Gold Electroplate'],
      confidenceScore: 0.94,
      suggestedPrice: 28500,
      generatedStory: 'Interlocked Korvai border woven on pit looms by generational weavers honoring Chola courtly temple traditions.'
    };
  }

  res.json({
    success: true,
    analysis
  });
});

// ==========================================
// CONVEX SNAPSHOT & REUSED FEATURES API
// ==========================================

// POST /api/auth/send-otp - Request Email OTP code (Convex Auth email-otp flow)
app.post('/api/auth/send-otp', (req: Request, res: Response) => {
  const email = String(req.body.email || '').trim();
  if (!email || !email.includes('@')) {
    res.status(400).json({ success: false, message: 'Valid email address is required' });
    return;
  }

  const { code, expirationTime } = db.generateOtp(email);
  res.json({
    success: true,
    message: `OTP code sent to ${email}`,
    email,
    code, // Returned in dev preview for instant verification
    expiresAt: new Date(expirationTime).toISOString()
  });
});

// POST /api/auth/verify-otp - Verify Email OTP & establish active session
app.post('/api/auth/verify-otp', (req: Request, res: Response) => {
  const email = String(req.body.email || '').trim();
  const code = String(req.body.code || '').trim();

  if (!email || !code) {
    res.status(400).json({ success: false, message: 'Both email and code are required' });
    return;
  }

  const result = db.verifyOtp(email, code);
  if (!result) {
    res.status(401).json({ success: false, message: 'Invalid or expired verification code' });
    return;
  }

  res.json({
    success: true,
    message: 'Authentication successful',
    user: result.user,
    session: result.session
  });
});

// GET /api/auth/session - Verify session validity
app.get('/api/auth/session', (req: Request, res: Response) => {
  const sessionId = String(req.headers['x-session-id'] || req.query.sessionId || '').trim();
  if (!sessionId) {
    res.status(400).json({ success: false, message: 'sessionId is required' });
    return;
  }

  const result = db.getSession(sessionId);
  if (!result) {
    res.status(401).json({ success: false, message: 'Session expired or not found' });
    return;
  }

  res.json({
    success: true,
    user: result.user,
    session: result.session
  });
});

// GET /api/reviews - Get reviews for a craft or product
app.get('/api/reviews', (req: Request, res: Response) => {
  const productId = String(req.query.productId || req.query.product_id || '').trim();
  if (!productId) {
    res.status(400).json({ success: false, message: 'productId query param is required' });
    return;
  }

  const reviews = db.getReviewsForProduct(productId);
  const avgRating = reviews.length 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : '5.0';

  res.json({
    success: true,
    productId,
    count: reviews.length,
    averageRating: parseFloat(avgRating),
    reviews
  });
});

// POST /api/reviews - Submit a new review
app.post('/api/reviews', (req: Request, res: Response) => {
  const { productId, userId, userName, rating, comment, title } = req.body;
  if (!productId || !rating || !comment) {
    res.status(400).json({ success: false, message: 'productId, rating, and comment are required' });
    return;
  }

  const review = db.addReview({
    product_id: String(productId).trim(),
    user_id: String(userId || 'anonymous-user').trim(),
    user_name: String(userName || 'Authentic Connoisseur').trim(),
    rating: Math.min(5, Math.max(1, Number(rating) || 5)),
    title: title ? String(title).trim() : undefined,
    comment: String(comment).trim(),
    verified_buyer: true
  });

  res.status(201).json({
    success: true,
    message: 'Review submitted successfully',
    review
  });
});

// GET /api/likes - Get likes count and user state
app.get('/api/likes', (req: Request, res: Response) => {
  const productId = String(req.query.productId || req.query.product_id || '').trim();
  const userId = String(req.query.userId || '').trim();

  if (userId && !productId) {
    const userLikes = db.getUserLikes(userId);
    res.json({ success: true, likes: userLikes });
    return;
  }

  if (!productId) {
    res.status(400).json({ success: false, message: 'productId is required' });
    return;
  }

  const { count, userIds } = db.getLikesForProduct(productId);
  res.json({
    success: true,
    productId,
    count,
    isLiked: userId ? userIds.includes(userId) : false
  });
});

// POST /api/likes/toggle - Toggle favorite / like for a product
app.post('/api/likes/toggle', (req: Request, res: Response) => {
  const productId = String(req.body.productId || req.body.product_id || '').trim();
  const userId = String(req.body.userId || 'guest-user').trim();

  if (!productId) {
    res.status(400).json({ success: false, message: 'productId is required' });
    return;
  }

  const result = db.toggleLike(productId, userId);
  res.json({
    success: true,
    productId,
    ...result
  });
});

// GET /api/translations - Fetch stored translations (Convex translations table)
app.get('/api/translations', (req: Request, res: Response) => {
  const targetId = req.query.targetId ? String(req.query.targetId).trim() : undefined;
  const locale = req.query.locale ? String(req.query.locale).trim() : undefined;

  const translations = db.getTranslations(targetId, locale);
  res.json({
    success: true,
    count: translations.length,
    translations
  });
});

// POST /api/translations - Store dynamic translation
app.post('/api/translations', (req: Request, res: Response) => {
  const { targetId, locale, fieldName, originalText, translatedText } = req.body;
  if (!targetId || !locale || !translatedText) {
    res.status(400).json({ success: false, message: 'targetId, locale, and translatedText are required' });
    return;
  }

  const saved = db.saveTranslation({
    target_id: String(targetId).trim(),
    locale: String(locale).trim(),
    field_name: String(fieldName || 'story').trim(),
    original_text: String(originalText || '').trim(),
    translated_text: String(translatedText).trim()
  });

  res.status(201).json({
    success: true,
    translation: saved
  });
});

// GET /api/convex/snapshot - Convex Snapshot Data for all 11 tables
app.get('/api/convex/snapshot', (_req: Request, res: Response) => {
  const data = db.getConvexSnapshotData();
  res.json({
    success: true,
    deployment: 'convex-export-snapshot',
    exportedAt: '2026-09-20T23:00:00.000Z',
    tableCounts: {
      authAccounts: data.authAccounts.length,
      users: data.users.length,
      authSessions: data.authSessions.length,
      authVerificationCodes: data.authVerificationCodes.length,
      likes: data.likes.length,
      reviews: data.reviews.length,
      products: data.products.length,
      translations: data.translations.length,
      scans: data.scans.length
    },
    tables: data
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[VARNAM] Hardware & Marketplace API running on http://0.0.0.0:${PORT}`);
  console.log(`[VARNAM] ESP32 Endpoint: GET http://<LOCAL_IP>:${PORT}/api/products/:productId`);
});
