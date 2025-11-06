import { palettes, type ColorPalette } from '../data/palettes';
import {
  footerNotes,
  generalHighlights,
  offerBadges,
  priceConditions,
  priceLabels,
  retailProducts,
  type RetailProduct,
} from '../data/retailCopy';

export interface BackgroundDecoration {
  id: string;
  width: string;
  height: string;
  top: string;
  left: string;
  rotate: string;
  background: string;
  blur?: string;
  opacity: number;
  borderRadius: string;
  mixBlendMode?: 'overlay' | 'screen' | 'multiply' | 'normal' | 'soft-light';
  boxShadow?: string;
  zIndex: number;
}

export interface BackgroundDesign {
  palette: ColorPalette;
  backgroundLayers: string[];
  decorations: BackgroundDecoration[];
  textColors: {
    primary: string;
    secondary: string;
    accent: string;
    ink: string;
    price: string;
  };
  spotlight?: {
    color: string;
    size: number;
    intensity: number;
  };
  offer: OfferContent;
}

export interface GeneratorOptions {
  aspectRatio: number;
}

type RandomFn = () => number;

const randomFromArray = <T>(arr: readonly T[], random: RandomFn): T =>
  arr[Math.floor(random() * arr.length)];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const createSeededRandom = (seed: number): RandomFn => {
  let x = Math.sin(seed) * 10000;
  return () => {
    x = Math.sin(x) * 10000;
    return x - Math.floor(x);
  };
};

const hexToRgb = (hex: string) => {
  const parsed = hex.replace('#', '');
  const bigint = parseInt(parsed, 16);
  const length = parsed.length;

  if (Number.isNaN(bigint)) {
    return { r: 255, g: 255, b: 255 };
  }

  if (length === 3) {
    return {
      r: ((bigint >> 8) & 0xf) * 17,
      g: ((bigint >> 4) & 0xf) * 17,
      b: (bigint & 0xf) * 17,
    };
  }

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

const gradientStrategies = [
  (palette: ColorPalette, random: RandomFn) => {
    const angle = Math.floor(random() * 360);
    return `linear-gradient(${angle}deg, ${palette.primary} 0%, ${palette.secondary} 45%, ${palette.tertiary} 100%)`;
  },
  (palette: ColorPalette, random: RandomFn) => {
    const focus = clamp(random(), 0.2, 0.6);
    return `radial-gradient(circle at ${Math.floor(random() * 100)}% ${Math.floor(random() * 100)}%, ${palette.secondary} 0%, ${palette.primary} ${Math.floor(
      focus * 100
    )}%, ${palette.tertiary} 100%)`;
  },
  (palette: ColorPalette, random: RandomFn) => {
    const angle = Math.floor(random() * 360);
    const accent = randomFromArray(palette.accents, random);
    return `linear-gradient(${angle}deg, ${palette.primary} 0%, ${accent} 50%, ${palette.secondary} 100%)`;
  },
];

const patternStrategies = [
  (_palette: ColorPalette, random: RandomFn) => {
    const alpha = clamp(random(), 0.04, 0.12).toFixed(2);
    const spacing = Math.floor(120 * random()) + 40;
    return `repeating-linear-gradient(${Math.floor(random() * 180)}deg, rgba(255,255,255,${alpha}) 0px, rgba(255,255,255,${alpha}) ${spacing / 3}px, transparent ${
      spacing
    }px)`;
  },
  (_palette: ColorPalette, random: RandomFn) => {
    const alpha = clamp(random(), 0.06, 0.18).toFixed(2);
    const spacing = Math.floor(80 * random()) + 30;
    return `repeating-radial-gradient(circle at ${Math.floor(random() * 100)}% ${Math.floor(random() * 100)}%, rgba(255,255,255,${alpha}) 0px, rgba(255,255,255,${alpha}) ${
      spacing / 2
    }px, transparent ${spacing}px)`;
  },
  (palette: ColorPalette, random: RandomFn) => {
    const spacing = Math.floor(90 * random()) + 35;
    const accent = randomFromArray(palette.accents, random);
    const { r, g, b } = hexToRgb(accent);
    const alpha = clamp(random(), 0.1, 0.35).toFixed(2);
    return `repeating-linear-gradient(${Math.floor(random() * 360)}deg, transparent 0px, transparent ${spacing}px, rgba(${r},${g},${b},${alpha}) ${spacing}px, rgba(${r},${g},${b},${alpha}) ${
      spacing * 1.5
    }px)`;
  },
];

const blurValues = ['0px', '4px', '8px', '12px'];

const mixModes: BackgroundDecoration['mixBlendMode'][] = ['overlay', 'screen', 'soft-light', 'multiply'];

const randomRadius = (random: RandomFn) => `${clamp(random(), 0.2, 0.6) * 100}%`;

export interface OfferContent {
  badge: string;
  category: string;
  product: string;
  detail: string;
  highlight: string;
  priceLabel: string;
  priceReais: string;
  priceCents: string;
  priceCondition: string;
  footer: string;
}

const generatePrice = (product: RetailProduct, random: RandomFn) => {
  const value = product.minPrice + random() * (product.maxPrice - product.minPrice);
  const rounded = Math.max(product.minPrice, Math.min(product.maxPrice, Math.round(value * 20) / 20));
  const [reais, cents] = rounded.toFixed(2).split('.');
  return { reais, cents };
};

const buildOfferContent = (random: RandomFn): OfferContent => {
  const product = randomFromArray(retailProducts, random);
  const price = generatePrice(product, random);
  const badge = randomFromArray(offerBadges, random);
  const priceLabel = randomFromArray(priceLabels, random);
  const highlightOptions = [...product.highlights, ...generalHighlights];
  const highlight = randomFromArray(highlightOptions, random);
  const conditionTemplate = randomFromArray(priceConditions, random);
  const priceCondition = conditionTemplate.replace('{detail}', product.detail);
  const footer = randomFromArray(footerNotes, random);

  return {
    badge,
    category: product.category,
    product: product.name,
    detail: product.detail,
    highlight,
    priceLabel,
    priceReais: price.reais,
    priceCents: price.cents,
    priceCondition,
    footer,
  };
};

const generateDecoration = (
  palette: ColorPalette,
  random: RandomFn,
  idx: number,
  aspectRatio: number
): BackgroundDecoration => {
  const portraitBoost = aspectRatio < 1 ? 1.15 : 1;
  const landscapeBoost = aspectRatio > 1.2 ? 0.85 : 1;
  const width = clamp(random(), 0.25, 0.8) * 100 * landscapeBoost;
  const height = clamp(random(), 0.25, 0.9) * 100 * portraitBoost;
  const accent = random() > 0.5 ? randomFromArray(palette.accents, random) : palette.secondary;
  const opacity = clamp(random(), 0.25, 0.75);
  const decoration: BackgroundDecoration = {
    id: `decoration-${idx}`,
    width: `${width}%`,
    height: `${height}%`,
    top: `${clamp(random(), 0, 0.8) * 100}%`,
    left: `${clamp(random(), 0, 0.8) * 100}%`,
    rotate: `${Math.floor(random() * 360)}deg`,
    background: accent,
    opacity,
    borderRadius: `${randomRadius(random)} ${randomRadius(random)} ${randomRadius(random)} ${randomRadius(random)}`,
    zIndex: random() > 0.5 ? 2 : 0,
  };

  if (random() > 0.6) {
    decoration.blur = randomFromArray(blurValues, random);
    decoration.mixBlendMode = randomFromArray(mixModes, random);
  }

  if (random() > 0.55) {
    const spread = clamp(random(), 0.1, 0.35) * 120;
    decoration.boxShadow = `0px 0px ${Math.floor(spread)}px rgba(0, 0, 0, 0.25)`;
  }

  return decoration;
};

export const generateBackgroundDesign = (seed: number, options: GeneratorOptions): BackgroundDesign => {
  const { aspectRatio } = options;
  const orientation = aspectRatio >= 1 ? 'landscape' : 'portrait';
  const random = createSeededRandom(seed);
  const palette = randomFromArray(palettes, random);
  const gradient = randomFromArray(gradientStrategies, random)(palette, random);
  const includePattern = random() > 0.35;
  const layers = [gradient];

  if (includePattern) {
    const pattern = randomFromArray(patternStrategies, random)(palette, random);
    layers.push(pattern);
  }

  const orientationFactor = orientation === 'portrait' ? 6.5 : orientation === 'landscape' ? 5.2 : 6;
  const decorationCount = Math.max(1, Math.floor(clamp(random(), 0.3, 0.95) * orientationFactor));
  const decorations: BackgroundDecoration[] = Array.from({ length: decorationCount }).map((_, idx) =>
    generateDecoration(palette, random, idx, aspectRatio)
  );

  const spotlightChance = random();
  const spotlight = spotlightChance > 0.55
    ? {
        color: randomFromArray([...palette.accents, palette.secondary], random),
        size: clamp(random() * (orientation === 'portrait' ? 1.2 : 1), 0.45, 1),
        intensity: clamp(random(), 0.3, 0.75),
      }
    : undefined;

  const textColors = {
    primary: palette.neutrals[0],
    secondary: palette.neutrals[1] ?? palette.neutrals[0],
    accent: randomFromArray([...palette.accents, palette.secondary], random),
    ink: palette.ink,
    price: palette.price,
  };

  const offer = buildOfferContent(random);

  return {
    palette,
    backgroundLayers: layers,
    decorations,
    textColors,
    spotlight,
    offer,
  };
};
