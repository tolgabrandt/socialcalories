import { Link } from 'react-router-dom';
import LogoShort from '../../assets/logo/shortlogo.svg';

const AdminNavbar = () => {
  return (
    <header className="bg-gray-50">
      <div className="w-[1140px] mx-auto flex items-center justify-between h-[70px]">
        <Link to="/admin">
          <section className="flex items-center gap-4 font-bold text-lg text-slate-600">
            <img src={LogoShort} alt="Site logo" />
            <span>Admin Paneli</span>
          </section>
        </Link>
        <section>
          <div>
            <Link to="/">
              <button className="bg-blue-500">Siteye dön</button>
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
};
export default AdminNavbar;
