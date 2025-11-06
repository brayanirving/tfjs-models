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
    name: 'Varejo Popular',
    primary: '#d62828',
    secondary: '#f77f00',
    tertiary: '#f9df74',
    accents: ['#ffb703', '#ffd60a', '#003049'],
    neutrals: ['#ffffff', '#fff4d6'],
  },
  {
    name: 'Atacarejo Brasil',
    primary: '#1d3557',
    secondary: '#ffc300',
    tertiary: '#ffd166',
    accents: ['#ff6b6b', '#ff9f1c', '#2a9d8f'],
    neutrals: ['#ffffff', '#eef2ff'],
  },
  {
    name: 'Hortifruti Vibrante',
    primary: '#007f5f',
    secondary: '#9ef01a',
    tertiary: '#f2fbe0',
    accents: ['#f9c80e', '#ff595e', '#ffca3a'],
    neutrals: ['#ffffff', '#e8f5e9'],
  },
  {
    name: 'Liquidação Relâmpago',
    primary: '#ff003c',
    secondary: '#ff8c00',
    tertiary: '#ffe066',
    accents: ['#ffd166', '#ffe066', '#ff6b6b'],
    neutrals: ['#ffffff', '#fff5f5'],
  },
  {
    name: 'Festival Azul',
    primary: '#1e3a8a',
    secondary: '#facc15',
    tertiary: '#fef08a',
    accents: ['#f97316', '#ef4444', '#22d3ee'],
    neutrals: ['#ffffff', '#e0f2fe'],
  },
  {
    name: 'Impulso Max',
    primary: '#ff5f1f',
    secondary: '#ffe066',
    tertiary: '#fff4e6',
    accents: ['#ffc300', '#ff7b00', '#0081a7'],
    neutrals: ['#ffffff', '#fff1db'],
  },
  {
    name: 'Casa e Construção',
    primary: '#0f172a',
    secondary: '#fbbf24',
    tertiary: '#fde68a',
    accents: ['#fb7185', '#f97316', '#22c55e'],
    neutrals: ['#f8fafc', '#e2e8f0'],
  },
  {
    name: 'Mega Mix',
    primary: '#ff006e',
    secondary: '#ffbe0b',
    tertiary: '#fbf8cc',
    accents: ['#3a86ff', '#8338ec', '#ff9f1c'],
    neutrals: ['#ffffff', '#ffeedd'],
  },
];
