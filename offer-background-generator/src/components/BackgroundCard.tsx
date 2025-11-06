import type { BackgroundDesign } from '../utils/generator';

interface BackgroundCardProps {
  design: BackgroundDesign;
  aspectRatio: number;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({ design, aspectRatio }) => {
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
        <header
          className="poster-shell__header"
          style={{ backgroundColor: design.palette.primary, color: design.textColors.primary }}
        >
          <span
            className="poster-shell__badge"
            style={{ backgroundColor: design.textColors.accent, color: design.palette.primary }}
          >
            {design.offer.badge}
          </span>
          <div className="poster-shell__header-info">
            <strong>{design.offer.sector}</strong>
            <span>{design.offer.category}</span>
          </div>
        </header>

        <section className="poster-shell__body">
          <div className="poster-shell__product" style={{ color: design.palette.primary }}>
            <span className="poster-shell__label">{design.offer.priceLabel}</span>
            <h2>{design.offer.product}</h2>
            <p>{design.offer.detail}</p>
          </div>

          <div
            className="poster-shell__price"
            style={{ backgroundColor: design.textColors.accent, color: design.palette.primary }}
          >
            <div className="poster-shell__price-value">
              <span className="poster-shell__currency">R$</span>
              <span className="poster-shell__integer">{design.offer.priceInteger}</span>
              <span className="poster-shell__cents">{design.offer.priceCents}</span>
            </div>
            {design.offer.installment && (
              <span className="poster-shell__installment">{design.offer.installment}</span>
            )}
            <span className="poster-shell__unit">
              <strong>{design.offer.unitNote}</strong>
              <span>{design.offer.unitValue}</span>
            </span>
          </div>
        </section>

        <footer className="poster-shell__footer" style={{ color: design.palette.secondary }}>
          <span className="poster-shell__cta">{design.offer.cta}</span>
          <span className="poster-shell__note">{design.offer.footer}</span>
        </footer>
      </div>

      <footer className="card-footer" style={{ color: design.textColors.secondary }}>
        Paleta: {design.palette.name}
      </footer>
    </article>
  );
};

export default BackgroundCard;
