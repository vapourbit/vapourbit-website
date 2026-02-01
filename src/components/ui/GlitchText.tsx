import { FC } from 'react';

interface GlitchTextProps {
    children: string;
    speed?: number;
    enableShadows?: boolean;
    enableOnHover?: boolean;
    className?: string;
}

const GlitchText: FC<GlitchTextProps> = ({
    children,
    speed = 0.8,
    enableShadows = true,
    enableOnHover = false,
    className = ''
}) => {
    const durationBefore = `${speed * 2}s`;
    const durationAfter = `${speed * 3}s`;
    const shadowBefore = enableShadows ? '5px 0 #00d4ff' : 'none'; // Cyan
    const shadowAfter = enableShadows ? '-5px 0 #8b5cf6' : 'none'; // Purple

    return (
        <div className={`relative inline-block ${className}`}>
            {/* 
         We use a standard <style> tag here to ensure animations work immediately 
         without relying on Tailwind config being picked up by a server restart.
      */}
            <style>{`
        @keyframes glitch-anim {
          0% { clip-path: inset(20% 0 50% 0); transform: translate(0); }
          10% { clip-path: inset(10% 0 60% 0); transform: translate(-5px, 5px); }
          20% { clip-path: inset(30% 0 40% 0); transform: translate(5px, -5px); }
          30% { clip-path: inset(15% 0 55% 0); transform: translate(-5px, -5px); }
          40% { clip-path: inset(25% 0 35% 0); transform: translate(5px, 5px); }
          50% { clip-path: inset(20% 0 50% 0); transform: translate(0); }
          60% { clip-path: inset(40% 0 20% 0); transform: translate(-5px, 5px); }
          70% { clip-path: inset(10% 0 60% 0); transform: translate(5px, -5px); }
          80% { clip-path: inset(30% 0 40% 0); transform: translate(-5px, -5px); }
          90% { clip-path: inset(15% 0 55% 0); transform: translate(5px, 5px); }
          100% { clip-path: inset(20% 0 50% 0); transform: translate(0); }
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent; /* Transparent to show LiquidEther */
        }
        
        .glitch-text::before {
          left: 2px;
          text-shadow: ${shadowBefore};
          animation: glitch-anim ${durationBefore} infinite linear alternate-reverse;
          ${enableOnHover ? 'opacity: 0;' : ''}
          ${enableOnHover ? 'animation-play-state: paused;' : ''}
        }
        
        .glitch-text::after {
          left: -2px;
          text-shadow: ${shadowAfter};
          animation: glitch-anim ${durationAfter} infinite linear alternate-reverse;
          ${enableOnHover ? 'opacity: 0;' : ''}
          ${enableOnHover ? 'animation-play-state: paused;' : ''}
        }

        ${enableOnHover ? `
          .glitch-container:hover .glitch-text::before,
          .glitch-container:hover .glitch-text::after {
            opacity: 1;
            animation-play-state: running;
          }
        ` : ''}
      `}</style>

            <div className="glitch-container relative">
                <div className="glitch-text text-white relative z-10" data-text={children}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GlitchText;
