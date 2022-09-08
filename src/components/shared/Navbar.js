import { Link } from 'react-router-dom';
import useLogout from '../../helpers/hooks/useLogout.js';
import PrivateElement from '../../helpers/functions/PrivateElement';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';

import Logo from '../../assets/logo/logo.svg';
const Navbar = () => {
  const { logout } = useLogout();

  const { user } = useContext(AuthContext);

  return (
    <header className="min-h-[90px] bg-white px-4 colarize">
      <div className="max-w-[1140px] mx-auto flex h-full items-center gap-4 justify-between">
        <section className="shrink-0">
          <Link to="/">
            <img src={Logo} alt="socialcalories logo" />
          </Link>
        </section>
        <section className="flex gap-16">
          <div className=" hidden md:flex gap-2 md:gap-8 text-lg font-medium text-slate-500  items-center">
            <Link to="blog"> Blog</Link>
            <Link to="iletisim"> İletişim</Link>
          </div>
          <div className="flex gap-4">
            {user?.role === 'admin' && (
              <Link to="/admin">
                <button className="bg-red-500">Admin</button>
              </Link>
            )}
            {PrivateElement(
              <Link to="/login">
                <button className="h-10">Giriş</button>
              </Link>,
              <>
                <Link to="/dashboard">
                  <button className="h-10 bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                    Panelim
                  </button>
                </Link>
                <button className="h-10" onClick={(e) => logout()}>
                  Çıkış
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </header>
  );
};
export default Navbar;
