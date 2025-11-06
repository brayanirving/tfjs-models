export interface ColorPalette {
  name: string;
  primary: string;
  secondary: string;
  tertiary: string;
  accents: string[];
  neutrals: string[];
  ink: string;
  price: string;
}

export const palettes: ColorPalette[] = [
  {
    name: 'Varejão Clássico',
    primary: '#FEE440',
    secondary: '#FF1744',
    tertiary: '#FFF6B7',
    accents: ['#FF8906', '#FFD803', '#FF595A'],
    neutrals: ['#FFFFFF', '#FFF5DC'],
    ink: '#241C15',
    price: '#FF1744',
  },
  {
    name: 'Hortifruti Fresco',
    primary: '#31C48D',
    secondary: '#137547',
    tertiary: '#E8F8EF',
    accents: ['#FFB703', '#F95738', '#4ADE80'],
    neutrals: ['#FFFFFF', '#E9F7ED'],
    ink: '#193718',
    price: '#F95738',
  },
  {
    name: 'Arraiá Junino',
    primary: '#FF7F11',
    secondary: '#F71735',
    tertiary: '#FFF0D6',
    accents: ['#FDC500', '#06AED5', '#FFCE45'],
    neutrals: ['#FFFFFF', '#FFF4E6'],
    ink: '#2B190A',
    price: '#F71735',
  },
  {
    name: 'Mega Ofertas',
    primary: '#1E3A8A',
    secondary: '#FBBF24',
    tertiary: '#E0E7FF',
    accents: ['#EF4444', '#F97316', '#FDE68A'],
    neutrals: ['#FFFFFF', '#EEF2FF'],
    ink: '#111827',
    price: '#EF4444',
  },
  {
    name: 'Casa & Construção',
    primary: '#0057D8',
    secondary: '#FFB627',
    tertiary: '#E5F1FF',
    accents: ['#F03A47', '#FFD23F', '#06D6A0'],
    neutrals: ['#FFFFFF', '#EAF2FF'],
    ink: '#0B1B35',
    price: '#F03A47',
  },
  {
    name: 'Atacadista Popular',
    primary: '#FF6B35',
    secondary: '#FFD166',
    tertiary: '#FFF1E6',
    accents: ['#EF476F', '#F7B801', '#06D6A0'],
    neutrals: ['#FFFFFF', '#FFE8D9'],
    ink: '#3D1F14',
    price: '#EF476F',
  },
  {
    name: 'Farmácia do Bairro',
    primary: '#D72323',
    secondary: '#F9A602',
    tertiary: '#FFEEDB',
    accents: ['#FFE066', '#FF6B6B', '#FFC2B4'],
    neutrals: ['#FFFFFF', '#FFF6EC'],
    ink: '#301010',
    price: '#D72323',
  },
  {
    name: 'Festival do Lar',
    primary: '#FF8C42',
    secondary: '#FFD23F',
    tertiary: '#FFF5DE',
    accents: ['#FF5F5F', '#2196F3', '#FFAFCC'],
    neutrals: ['#FFFFFF', '#FFF0E2'],
    ink: '#342519',
    price: '#FF5F5F',
  },
];
