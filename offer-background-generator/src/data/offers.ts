export interface OfferTemplate {
  sector: string;
  category: string;
  product: string;
  detail: string;
  unit: string;
}

export const offerCatalog: OfferTemplate[] = [
  {
    sector: 'Açougue',
    category: 'Carnes selecionadas',
    product: 'Miolo de alcatra bovino',
    detail: 'Ideal para churrasco de fim de semana',
    unit: 'kg',
  },
  {
    sector: 'Hortifruti',
    category: 'Direto do campo',
    product: 'Mamão formosa fresco',
    detail: 'Frutas grandes e suculentas',
    unit: 'kg',
  },
  {
    sector: 'Mercearia',
    category: 'Café da manhã',
    product: 'Café torrado e moído 500g',
    detail: 'Pacote econômico para a semana inteira',
    unit: 'unidade',
  },
  {
    sector: 'Padaria',
    category: 'Todo dia fresquinho',
    product: 'Pão francês crocante',
    detail: 'Assado a cada hora para garantir maciez',
    unit: 'kg',
  },
  {
    sector: 'Limpeza',
    category: 'Casa perfumada',
    product: 'Amaciante concentrado 1,5L',
    detail: 'Rende até 50 lavagens com perfume prolongado',
    unit: 'unidade',
  },
  {
    sector: 'Bebidas',
    category: 'Para o churrasco',
    product: 'Cerveja puro malte lata 350ml',
    detail: 'Leve mais para gelar e compartilhar',
    unit: 'unidade',
  },
  {
    sector: 'Frios & Laticínios',
    category: 'Mesa cheia',
    product: 'Queijo mussarela fatiado',
    detail: 'Bandeja com fatias uniformes',
    unit: 'kg',
  },
  {
    sector: 'Higiene',
    category: 'Cuide-se bem',
    product: 'Sabonete hidratante 90g',
    detail: 'Fragrâncias variadas para toda a família',
    unit: 'unidade',
  },
  {
    sector: 'Mercearia',
    category: 'Massas & Molhos',
    product: 'Macarrão espaguete 500g',
    detail: 'Com ovos caipiras selecionados',
    unit: 'unidade',
  },
  {
    sector: 'Congelados',
    category: 'Refeição rápida',
    product: 'Lasanha bolonhesa 600g',
    detail: 'Pronta em poucos minutos no forno',
    unit: 'unidade',
  },
];

export const badgeOptions = ['OFERTA', 'SUPER OFERTA', 'PREÇO IMBATÍVEL', 'BAIXOU O PREÇO'];

export const priceLabels = ['POR APENAS', 'SÓ HOJE', 'LEVE MAIS', 'CLIENTE CLUBE'];

export const unitNotes = [
  'Preço por {{unit}}',
  'Cada sai a {{unit}}',
  'Oferta válida para {{unit}}',
  'No cartão da loja',
];

export const installmentTemplates = [
  'Em até 3x sem juros',
  'Divide em 2x no cartão',
  'Parcelamos em até 4x',
  'Antecipe pelo app e garanta',
];

export const ctaPhrases = [
  'Passe no caixa rápido e aproveite',
  'Corra, estoque limitado!',
  'Garanta já no setor indicado',
  'Oferta válida para a loja toda',
];

export const footerNotes = [
  'Válido até domingo ou enquanto durarem os estoques.',
  'Promoção exclusiva desta unidade.',
  'Consulte limites por CPF no balcão.',
  'Imagens meramente ilustrativas.',
];
