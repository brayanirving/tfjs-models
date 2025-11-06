import { useMemo, useState } from 'react';
import BackgroundCard from './components/BackgroundCard';
import { generateBackgroundDesign } from './utils/generator';

const ASPECT_OPTIONS = [
  { label: 'Quadrado 1:1', value: '1:1', ratio: 1 },
  { label: 'Vertical 4:5', value: '4:5', ratio: 4 / 5 },
  { label: 'Vertical Stories 9:16', value: '9:16', ratio: 9 / 16 },
  { label: 'Horizontal 16:9', value: '16:9', ratio: 16 / 9 },
];

const DEFAULT_CARDS = 12;

const App: React.FC = () => {
  const [aspect, setAspect] = useState<(typeof ASPECT_OPTIONS)[number]>(ASPECT_OPTIONS[1]);
  const [cardCount, setCardCount] = useState(DEFAULT_CARDS);
  const [baseSeed, setBaseSeed] = useState(() => Date.now());

  const cards = useMemo(
    () =>
      Array.from({ length: cardCount }).map((_, index) =>
        generateBackgroundDesign(baseSeed + index * 97, { aspectRatio: aspect.ratio })
      ),
    [aspect.ratio, baseSeed, cardCount]
  );

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <h1>Construtor de cartazes para ofertas de varejo</h1>
          <p>
            Monte cartazes com cara de gôndola brasileira em segundos. Escolha o aspecto, gere dezenas de variações
            e receba composições com faixas, blocos de preço e chamadas prontas para personalizar produtos do seu
            tabloide.
          </p>
        </div>
        <div className="controls">
          <label className="control">
            Aspecto
            <select
              value={aspect.value}
              onChange={(event) => {
                const next = ASPECT_OPTIONS.find((option) => option.value === event.target.value);
                if (next) {
                  setAspect(next);
                }
              }}
            >
              {ASPECT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="control">
            Quantidade
            <input
              type="range"
              min={6}
              max={24}
              value={cardCount}
              onChange={(event) => setCardCount(Number(event.target.value))}
            />
            <span className="range-value">{cardCount} variações</span>
          </label>

          <button className="randomize" onClick={() => setBaseSeed(Date.now())}>
            Gerar novas combinações
          </button>
        </div>
      </header>

      <main>
        <section className="background-grid">
          {cards.map((design, index) => (
            <BackgroundCard key={`${design.palette.name}-${index}`} design={design} aspectRatio={aspect.ratio} />
          ))}
        </section>
      </main>

      <footer className="app__footer">
        <p>
          Dica: exporte os fundos com a ferramenta de captura do seu navegador ou integre este gerador à sua pipeline
          para automatizar campanhas promocionais.
        </p>
      </footer>
    </div>
  );
};

export default App;
