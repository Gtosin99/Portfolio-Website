import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <main> takes up all available remaining space between Navbar and Footer */}
      <main className="flex-grow">
        {/* <Outlet /> is the screen where our actual page content will be injected */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}