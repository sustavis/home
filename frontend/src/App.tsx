import ComingSoonSvg from './ComingSoonSvg';
import GradientShader from './GradientShader';

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden" style={{ margin: 0, padding: 0 }}>
      {/* Animated gradient shader background */}
      <GradientShader speed={1.2} lineCount={12} amplitude={0.18} yOffset={0.15} />
      
      {/* Full-screen SVG with animated content */}
      <div className="relative w-full h-full z-10" style={{ margin: 0, padding: 0 }}>
        <ComingSoonSvg />
      </div>
    </div>
  );
}

export default App;
