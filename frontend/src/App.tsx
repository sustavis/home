import ComingSoonSvg from './ComingSoonSvg';

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100" style={{ margin: 0, padding: 0 }}>
      {/* Full-screen SVG with animated content */}
      <div className="w-full h-full" style={{ margin: 0, padding: 0 }}>
        <ComingSoonSvg />
      </div>
    </div>
  );
}

export default App;
