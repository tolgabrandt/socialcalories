import { Outlet } from 'react-router-dom';

import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <main className="max-w-[1140px] mx-auto flex mt-8 gap-8">
        <AdminSidebar />
        <section className="flex-auto">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
export default AdminLayout;
