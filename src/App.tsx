import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Button from './components/Button';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* These are temporary placeholders until Phase 4 */}
        <Route index element={
          <div className="flex flex-col items-center justify-center p-20 space-y-6">
            <h1 className="text-3xl font-bold text-slate-50">About Page Coming Soon</h1>
            <Button variant="outline">Test Button</Button>
          </div>
        } />
        <Route path="projects" element={<div className="p-20 text-center text-slate-50">Projects Page Coming Soon</div>} />
      </Route>
    </Routes>
  );
}

export default App;