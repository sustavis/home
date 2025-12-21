import { useEffect, useRef } from 'react';

function ComingSoonSvg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Lade das SVG und füge Animationen hinzu
    fetch('/home/sustavis-coming-soon.svg')
      .then(res => res.text())
      .then(svgContent => {
        if (!containerRef.current) return;
        
        containerRef.current.innerHTML = svgContent;
        const svg = containerRef.current.querySelector('svg');
        
        if (svg) {
          // Setze SVG auf 100% Breite und Höhe für responsive Darstellung
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
          svg.style.display = 'block';
          
          // Finde alle Elemente außer dem Hintergrund-Rechteck
          const allElements = svg.querySelectorAll('*');
          
          allElements.forEach((element, index) => {
            const tagName = element.tagName.toLowerCase();
            
            // Skip clipPath definitions, defs und die Hintergrund-Rechtecke
            if (
              element.closest('defs') ||
              element.closest('clipPath') ||
              tagName === 'g' ||
              (tagName === 'rect' && (
                element.getAttribute('width') === '1366' ||
                element.getAttribute('width') === '1376' ||
                element.getAttribute('fill') === 'none'
              ))
            ) {
              return;
            }
            
            // Sanftes Fade-in mit gestaffelten Delays
            const delay = (index % 10) * 0.1;
            
            element.classList.add('animate-gentle-fade-in');
            (element as HTMLElement).style.animationDelay = `${delay}s`;
            (element as HTMLElement).style.opacity = '0';
          });
        }
      });
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center"
    />
  );
}

export default ComingSoonSvg;
