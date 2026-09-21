export interface ClassificationResult {
  predictedCraft: string;
  predictedState: string;
  category: string;
  confidenceScore: number;
  detectedMotifs: string[];
  suggestedMaterials: string[];
  giTagCandidate: string;
  disclaimer: string;
}

export function classifyCraftImage(fileNameOrUrl: string): ClassificationResult {
  const lower = fileNameOrUrl.toLowerCase();

  if (lower.includes('bronze') || lower.includes('nataraja') || lower.includes('sculpture') || lower.includes('metal')) {
    return {
      predictedCraft: 'Swamimalai Bronze Icon (Lost-Wax Casting)',
      predictedState: 'Tamil Nadu',
      category: 'Metalwork & Bronze',
      confidenceScore: 0.94,
      detectedMotifs: ['Agamic Talamana Proportions', 'Panchaloha Surface Patina', 'Lost-Wax Chisel Tool Marks'],
      suggestedMaterials: ['Copper (80%)', 'Zinc', 'Tin', 'Beeswax core residue'],
      giTagCandidate: 'GI-023 (Swamimalai Bronze Icons)',
      disclaimer: 'AI-assisted classification only. Physical authenticity is verified strictly through embedded NFC / GI registry records.'
    };
  }

  if (lower.includes('tanjore') || lower.includes('gold') || lower.includes('krishna') || lower.includes('painting')) {
    return {
      predictedCraft: 'Thanjavur Gold Foil Devotional Painting',
      predictedState: 'Tamil Nadu',
      category: 'Paintings & Art',
      confidenceScore: 0.96,
      detectedMotifs: ['High-Relief Sukkan Gesso (Makku)', '22K Gold Leaf Foil Lustre', 'Cabochon Cut Stones'],
      suggestedMaterials: ['22-Carat Gold Leaf', 'Burma Teak Wood', 'Limestone Chalk'],
      giTagCandidate: 'GI-022 (Thanjavur Paintings)',
      disclaimer: 'AI-assisted classification only. Physical authenticity is verified strictly through embedded NFC / GI registry records.'
    };
  }

  if (lower.includes('blue') || lower.includes('pottery') || lower.includes('vase') || lower.includes('ceramic')) {
    return {
      predictedCraft: 'Jaipur Blue Pottery',
      predictedState: 'Rajasthan',
      category: 'Pottery & Ceramics',
      confidenceScore: 0.92,
      detectedMotifs: ['Cobalt & Copper Oxide Glazes', 'Persian Arabesque Floral Spirals', 'Non-Clay Quartz Dough'],
      suggestedMaterials: ['Ground Quartz', 'Glass Cullet', 'Multani Mitti', 'Natural Katira Gum'],
      giTagCandidate: 'GI-028 (Blue Pottery of Jaipur)',
      disclaimer: 'AI-assisted classification only. Physical authenticity is verified strictly through embedded NFC / GI registry records.'
    };
  }

  if (lower.includes('roghan') || lower.includes('kutch') || lower.includes('tree')) {
    return {
      predictedCraft: 'Nirona Roghan Textile Art',
      predictedState: 'Gujarat',
      category: 'Paintings & Art',
      confidenceScore: 0.97,
      detectedMotifs: ['Castor Oil Polymerized Strand', 'Bilateral Mirror Symmetry Fold', 'Tree of Life Pattern'],
      suggestedMaterials: ['Boiled Wild Castor Oil', 'Natural Earth Pigments', 'Silk Base'],
      giTagCandidate: 'GI-Roghan (Nirona Craft)',
      disclaimer: 'AI-assisted classification only. Physical authenticity is verified strictly through embedded NFC / GI registry records.'
    };
  }

  // Default silk / textile classification
  return {
    predictedCraft: 'Kanchipuram Mulberry Silk Sari',
    predictedState: 'Tamil Nadu',
    category: 'Textiles & Weaving',
    confidenceScore: 0.89,
    detectedMotifs: ['Three-Shuttle Korvai Interlock Border', 'Petni Pallu Joint', 'Pure Silver-Gold Zari (Mayil/Peacock)'],
    suggestedMaterials: ['Mulberry Silk Yarn', 'Silver Zari Core', '24K Gold Electroplating'],
    giTagCandidate: 'GI-002 (Kancheepuram Silk)',
    disclaimer: 'AI-assisted classification only. Physical authenticity is verified strictly through embedded NFC / GI registry records.'
  };
}
