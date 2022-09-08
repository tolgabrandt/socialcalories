import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../components/shared/Navbar';
import Sidebar from '../../components/customer/Sidebar';
import { AuthContext } from '../../context/AuthContex';
import Footer from '../../components/shared/Footer';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div>
        <span>bu sayfaya giriş için yetkiniz yok, </span>
        <Link className="text-emerald-500" to="/giris">
          giriş yap
        </Link>
      </div>
    );
  }

  return (
    <section className="flex flex-col h-screen">
      <Navbar />
      <div className="mt-8">
        <div className="flex max-w-[1140px] mx-auto flex-wrap gap-8">
          <Sidebar />
          <div className='flex-auto px-4'>
          <Outlet />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
};
export default DashboardLayout;
