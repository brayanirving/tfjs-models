import type { BackgroundDesign } from '../utils/generator';

interface BackgroundCardProps {
  design: BackgroundDesign;
  aspectRatio: number;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({ design, aspectRatio }) => {
  const { offer } = design;

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

      <div className="poster" style={{ borderColor: design.palette.secondary }}>
        <header
          className="poster__header"
          style={{
            background: `linear-gradient(120deg, ${design.palette.secondary} 0%, ${design.palette.primary} 100%)`,
            color: design.textColors.primary,
          }}
        >
          <span className="poster__badge">{offer.badge}</span>
          <div className="poster__logo" style={{ color: design.palette.secondary }}>
            Sua Marca Aqui
          </div>
        </header>

        <div className="poster__body">
          <span className="poster__category" style={{ color: design.palette.secondary }}>
            {offer.category}
          </span>
          <h2 className="poster__product" style={{ color: design.textColors.ink }}>
            {offer.product}
          </h2>
          <p className="poster__detail" style={{ color: design.textColors.ink }}>
            {offer.detail}
          </p>
          <span
            className="poster__highlight"
            style={{ backgroundColor: design.textColors.accent, color: design.textColors.primary }}
          >
            {offer.highlight}
          </span>
        </div>

        <div
          className="poster__price-block"
          style={{
            background: `linear-gradient(135deg, ${design.palette.primary} 0%, ${design.palette.tertiary} 100%)`,
            color: design.textColors.ink,
          }}
        >
          <span className="poster__price-label" style={{ color: design.palette.secondary }}>
            {offer.priceLabel}
          </span>
          <div className="poster__price" style={{ color: design.textColors.price }}>
            <span className="poster__currency">R$</span>
            <span className="poster__reais">{offer.priceReais}</span>
            <span className="poster__cents">,{offer.priceCents}</span>
          </div>
          <span className="poster__price-condition">{offer.priceCondition}</span>
        </div>

        <footer className="poster__footer" style={{ color: design.textColors.ink }}>
          {offer.footer}
        </footer>
      </div>

      <footer className="card-footer" style={{ color: design.textColors.primary }}>
        Paleta: {design.palette.name}
      </footer>
    </article>
  );
};

export default BackgroundCard;
