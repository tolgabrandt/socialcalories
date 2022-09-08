import { Outlet } from 'react-router-dom';
import Footer from '../../components/shared/Footer';
import Navbar from '../../components/shared/Navbar';

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
