import type { FC } from 'react';
import type { BackgroundDesign } from '../utils/generator';

interface BackgroundCardProps {
  design: BackgroundDesign;
  aspectRatio: number;
}

const BackgroundCard: FC<BackgroundCardProps> = ({ design, aspectRatio }) => {
  return (
    <article
      className="background-card"
      style={{
        backgroundImage: design.backgroundLayers.join(', '),
        aspectRatio: `${aspectRatio}`,
      }}
    >
      {design.spotlight && (
        <div
          className="spotlight"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${design.spotlight.color} 0%, rgba(255,255,255,0) ${
              design.spotlight.size * 100
            }%)`,
            opacity: design.spotlight.intensity,
          }}
        />
      )}

      {design.decorations.map((decoration) => (
        <span
          key={decoration.id}
          className="decoration"
          style={{
            width: decoration.width,
            height: decoration.height,
            top: decoration.top,
            left: decoration.left,
            transform: `rotate(${decoration.rotate})`,
            background: decoration.background,
            opacity: decoration.opacity,
            filter: decoration.blur ? `blur(${decoration.blur})` : undefined,
            mixBlendMode: decoration.mixBlendMode,
            borderRadius: decoration.borderRadius,
            boxShadow: decoration.boxShadow,
            zIndex: decoration.zIndex,
          }}
        />
      ))}

      <div className="poster-shell">
        <header className="poster-shell__banner" style={{ backgroundColor: design.ui.bannerBg, color: design.ui.bannerText }}>
          <span>oferta imbatível</span>
          <span className="poster-shell__banner-tag" style={{ backgroundColor: design.ui.tagBg, color: design.ui.tagText }}>
            só hoje
          </span>
        </header>

        <div className="poster-shell__body">
          <div
            className="poster-shell__info"
            style={{ backgroundColor: design.ui.infoPanelBg, color: design.ui.infoPanelText }}
          >
            <span className="poster-shell__category">hortifruti selecionado</span>
            <h2>Produto destaque da semana</h2>
            <p>Reposição fresca com visual agressivo de gôndola.</p>
          </div>

          <div className="poster-shell__price" style={{ backgroundColor: design.ui.priceBg, color: design.ui.priceText }}>
            <span className="price__label">por apenas</span>
            <div className="price__value">
              <span className="price__currency">R$</span>
              <span className="price__amount">9</span>
              <span className="price__cents">,99</span>
            </div>
            <span className="price__details">unidade no varejo</span>
          </div>
        </div>

        <footer className="poster-shell__footer" style={{ color: design.ui.footerText }}>
          <span className="poster-shell__stamp" style={{ backgroundColor: design.ui.tagBg, color: design.ui.tagText }}>
            leve 3 pague 2
          </span>
          <span className="poster-shell__palette">Paleta: {design.palette.name}</span>
        </footer>
      </div>
    </article>
  );
};

export default BackgroundCard;
