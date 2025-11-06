export interface RetailProduct {
  category: string;
  name: string;
  detail: string;
  minPrice: number;
  maxPrice: number;
  highlights: string[];
}

export const retailProducts: RetailProduct[] = [
  {
    category: 'Açougue',
    name: 'Miolo de Alcatra',
    detail: 'Peça a vácuo kg',
    minPrice: 39.9,
    maxPrice: 54.9,
    highlights: ['Ideal para churrasco', 'Corte selecionado'],
  },
  {
    category: 'Hortifruti',
    name: 'Mamão Formosa',
    detail: 'Unidade grande',
    minPrice: 3.49,
    maxPrice: 8.49,
    highlights: ['Colheita da semana', 'Hortifruti fresquinho'],
  },
  {
    category: 'Mercearia',
    name: 'Arroz Agulhinha 5kg',
    detail: 'Pacote econômico',
    minPrice: 18.9,
    maxPrice: 32.9,
    highlights: ['3ª unidade com 10% OFF', 'Clube Vantagens acumula pontos'],
  },
  {
    category: 'Higiene & Limpeza',
    name: 'Sabão em Pó 1,6kg',
    detail: 'Variedades sortidas',
    minPrice: 14.9,
    maxPrice: 27.9,
    highlights: ['Perfume duradouro', 'Rende até 20 lavagens'],
  },
  {
    category: 'Padaria',
    name: 'Pão Francês',
    detail: 'Fresquinho do forno kg',
    minPrice: 6.49,
    maxPrice: 12.99,
    highlights: ['Assado na hora', 'Promoção até 12h'],
  },
  {
    category: 'Bebidas',
    name: 'Cerveja Lata 350ml',
    detail: 'Fardo com 12 unidades',
    minPrice: 35.9,
    maxPrice: 59.9,
    highlights: ['Geladinha é mais gostosa', 'Cliente Clube paga menos'],
  },
  {
    category: 'Frios & Laticínios',
    name: 'Queijo Mussarela Fatiado',
    detail: 'Bandeja 500g',
    minPrice: 17.9,
    maxPrice: 32.9,
    highlights: ['Cortado na hora', 'Perfeito para sanduíches'],
  },
  {
    category: 'Mercearia Doce',
    name: 'Achocolatado 400g',
    detail: 'Lata ou sachê',
    minPrice: 6.49,
    maxPrice: 12.9,
    highlights: ['Mistura fácil', 'Amado pela família'],
  },
  {
    category: 'Congelados',
    name: 'Lasanha Bolonhesa 600g',
    detail: 'Linha premium',
    minPrice: 11.9,
    maxPrice: 22.9,
    highlights: ['Pronto em 8 minutos', 'Refeição completa'],
  },
  {
    category: 'Bazar',
    name: 'Ventilador de Mesa 40cm',
    detail: '3 velocidades',
    minPrice: 119.9,
    maxPrice: 219.9,
    highlights: ['Selo Procel A', 'Garantia de 12 meses'],
  },
  {
    category: 'Eletro',
    name: 'Liquidificador Turbo',
    detail: '550W 12 velocidades',
    minPrice: 89.9,
    maxPrice: 159.9,
    highlights: ['Copo resistente', '2 anos de garantia'],
  },
  {
    category: 'Perfumaria',
    name: 'Desodorante Aerosol 150ml',
    detail: 'Fragrâncias sortidas',
    minPrice: 9.9,
    maxPrice: 17.9,
    highlights: ['Proteção 48h', 'Leve 3 pague 2'],
  },
];

export const offerBadges = ['OFERTA', 'OFERTA DO DIA', 'PREÇO BAIXO', 'PROMOÇÃO RELÂMPAGO', 'IMPERDÍVEL'];

export const priceLabels = ['SÓ HOJE', 'APROVEITE', 'LEVE JÁ', 'PREÇO CAMPEÃO', 'POR APENAS'];

export const priceConditions = [
  '{detail}',
  '{detail} cada',
  'No Clube Vantagens',
  'Pagando no Pix',
  'Na compra de 2 unidades',
  'À vista no dinheiro',
  'Em até 3x sem juros',
];

export const footerNotes = [
  'Ofertas válidas enquanto durarem os estoques.',
  'Promoção exclusiva da loja física. Consulte condições.',
  'Foto meramente ilustrativa. Sujeito à disponibilidade.',
  'Limite de 6 unidades por cliente. Consulte o regulamento.',
];

export const generalHighlights = [
  'Estoque limitado',
  'Clube Vantagens tem mais desconto',
  'Chegaram agora pela manhã',
  'Leve mais, pague menos',
  'Favor confirmar no caixa',
];
