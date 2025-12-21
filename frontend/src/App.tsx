import ComingSoonSvg from './ComingSoonSvg';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Full-screen SVG with animated content */}
      <div className="w-full h-full flex items-center justify-center">
        <ComingSoonSvg />
      </div>
    </div>
  );
}

export default App;
