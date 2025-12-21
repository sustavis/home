import ComingSoonSvg from './ComingSoonSvg';

function App() {
  return (
    <div className="fixed inset-0 w-full h-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Full-screen SVG with animated content */}
      <div className="w-full h-full min-h-screen">
        <ComingSoonSvg />
      </div>
    </div>
  );
}

export default App;
