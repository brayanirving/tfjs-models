export interface ColorPalette {
  name: string;
  primary: string;
  secondary: string;
  tertiary: string;
  accents: string[];
  neutrals: string[];
}

export const palettes: ColorPalette[] = [
  {
    name: 'Citrus Pop',
    primary: '#FF8A00',
    secondary: '#FFD500',
    tertiary: '#FF3A5C',
    accents: ['#FF715B', '#F9A602', '#FFC857'],
    neutrals: ['#FFFFFF', '#FFF5E1'],
  },
  {
    name: 'Fresh Market',
    primary: '#1E9E63',
    secondary: '#62D2A2',
    tertiary: '#FCF7BB',
    accents: ['#25A18E', '#1B512D', '#F7EC59'],
    neutrals: ['#FFFFFF', '#E8F5E9'],
  },
  {
    name: 'Berry Burst',
    primary: '#9327FF',
    secondary: '#FF5DA2',
    tertiary: '#FFB6C1',
    accents: ['#FFD2FF', '#FB8B24', '#FF1B6B'],
    neutrals: ['#FFFFFF', '#F3E8FF'],
  },
  {
    name: 'Ocean Breeze',
    primary: '#0077FF',
    secondary: '#00C2FF',
    tertiary: '#7AF5FF',
    accents: ['#FFE45E', '#FF7A00', '#FFE66D'],
    neutrals: ['#FFFFFF', '#E8F1FF'],
  },
  {
    name: 'Sunset Sale',
    primary: '#FF5F6D',
    secondary: '#FFC371',
    tertiary: '#FFF1C1',
    accents: ['#FF9A8C', '#F76E11', '#F7B267'],
    neutrals: ['#FFFFFF', '#FFEEDD'],
  },
  {
    name: 'Techno Glow',
    primary: '#0F2027',
    secondary: '#203A43',
    tertiary: '#2C5364',
    accents: ['#FDE74C', '#5BC0EB', '#9BC53D'],
    neutrals: ['#F5F7FA', '#E4EBF5'],
  },
  {
    name: 'Candy Shop',
    primary: '#FF6F91',
    secondary: '#FFC75F',
    tertiary: '#F9F871',
    accents: ['#FBB1BD', '#D65DB1', '#845EC2'],
    neutrals: ['#FFFFFF', '#FFF2F9'],
  },
  {
    name: 'Minimal Chic',
    primary: '#222831',
    secondary: '#393E46',
    tertiary: '#FFD369',
    accents: ['#F6C90E', '#32E0C4', '#00ADB5'],
    neutrals: ['#EEEEEE', '#F7F7F7'],
  }
];
