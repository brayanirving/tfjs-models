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

      <div className="poster-content">
        <span
          className="badge"
          style={{ backgroundColor: design.textColors.accent, color: design.palette.primary }}
        >
          Oferta Relâmpago
        </span>
        <h2 style={{ color: design.textColors.primary }}>Até 70% de desconto</h2>
        <p style={{ color: design.textColors.secondary }}>Somente hoje em produtos selecionados</p>
        <button
          style={{
            backgroundColor: design.textColors.accent,
            color: design.palette.primary,
            boxShadow: `0 12px 24px rgba(0, 0, 0, 0.25)`,
          }}
        >
          Comprar agora
        </button>
      </div>

      <footer className="card-footer" style={{ color: design.textColors.secondary }}>
        Paleta: {design.palette.name}
      </footer>
    </article>
  );
};

export default BackgroundCard;
