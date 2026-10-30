import React, { useRef, useEffect } from 'react';

export interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'down' | 'left' | 'right';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
  reducedMotion?: boolean;
}

export const Squares: React.FC<SquaresProps> = ({
  direction = 'diagonal',
  speed = 0.35,
  borderColor = 'rgba(255, 255, 255, 0.12)',
  squareSize = 45,
  hoverFillColor = 'rgba(255, 45, 35, 0.35)',
  className = '',
  reducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hoveredSquare = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Fallback to window dimensions if parent dimensions are zero during initial layout
      const parentW = canvas.parentElement?.clientWidth || 0;
      const parentH = canvas.parentElement?.clientHeight || 0;
      width = parentW > 0 ? parentW : window.innerWidth;
      height = parentH > 0 ? parentH : window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Reset transform before applying scale so it doesn't compound
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse globally across window so hover effect responds even when pointer-events: none on canvas
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
        const startX = -(gridOffset.current.x % squareSize);
        const startY = -(gridOffset.current.y % squareSize);

        const col = Math.floor((mouseX - startX) / squareSize);
        const row = Math.floor((mouseY - startY) / squareSize);

        hoveredSquare.current = {
          x: startX + col * squareSize,
          y: startY + row * squareSize,
        };
      } else {
        hoveredSquare.current = null;
      }
    };

    const handleMouseLeave = () => {
      hoveredSquare.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      if (!ctx || !canvas) return;

      // Clear using untransformed canvas coordinates
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      const startX = -(gridOffset.current.x % squareSize);
      const startY = -(gridOffset.current.y % squareSize);

      // 1. Draw hovered cell with glowing red fill
      if (hoveredSquare.current) {
        ctx.fillStyle = hoverFillColor;
        ctx.fillRect(
          hoveredSquare.current.x,
          hoveredSquare.current.y,
          squareSize,
          squareSize
        );

        // Soft ambient bloom around hovered cell
        ctx.save();
        ctx.fillStyle = 'rgba(255, 45, 35, 0.08)';
        ctx.fillRect(
          hoveredSquare.current.x - squareSize,
          hoveredSquare.current.y - squareSize,
          squareSize * 3,
          squareSize * 3
        );
        ctx.restore();
      }

      // 2. Efficient Grid Line Drawing
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = borderColor;

      // Vertical lines
      for (let x = startX; x <= width + squareSize; x += squareSize) {
        const px = Math.floor(x) + 0.5;
        ctx.moveTo(px, 0);
        ctx.lineTo(px, height);
      }

      // Horizontal lines
      for (let y = startY; y <= height + squareSize; y += squareSize) {
        const py = Math.floor(y) + 0.5;
        ctx.moveTo(0, py);
        ctx.lineTo(width, py);
      }

      ctx.stroke();

      // 3. Move offset if reduced-motion is not active
      if (!reducedMotion) {
        const effectiveSpeed = Math.max(speed, 0.05);

        switch (direction) {
          case 'right':
            gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
            break;
          case 'left':
            gridOffset.current.x = (gridOffset.current.x + effectiveSpeed) % squareSize;
            break;
          case 'up':
            gridOffset.current.y = (gridOffset.current.y + effectiveSpeed) % squareSize;
            break;
          case 'down':
            gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
            break;
          case 'diagonal':
          default:
            gridOffset.current.x = (gridOffset.current.x + effectiveSpeed) % squareSize;
            gridOffset.current.y = (gridOffset.current.y + effectiveSpeed) % squareSize;
            break;
        }
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    requestRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [direction, speed, borderColor, squareSize, hoverFillColor, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default Squares;
