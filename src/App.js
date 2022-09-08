import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './pages/home/HomeLayout';
import Home from './pages/home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './context/AuthContex';
import { useContext } from 'react';
import DashboardLayout from './pages/customer/DashboardLayout';
import Dashboard from './pages/customer/Dashboard';
import EditProfile from './pages/customer/EditProfile';
import Program from './pages/customer/Program';
import Messages from './pages/customer/Messages';
import Admin from './pages/admin/Admin';
import AdminLayout from './pages/admin/AdminLayout';
import PrivateRoute from './helpers/functions/PrivateRoute';
import UserList from './pages/admin/UserList';
import NewMessage from './pages/admin/NewMessage';
import Message from './pages/customer/Message';
import Blog from './pages/home/Blog';
import BlogPost from './pages/home/BlogPost';
import AddPost from './pages/admin/AddPost';
import Appointment from './pages/home/Appointment';
import WeightCalc from './pages/home/WeightCalc';
import AdminRoute from './helpers/functions/AdminRoute';
import Error from './pages/Error';
import Orders from './pages/admin/Orders';
import AllPosts from './pages/admin/AllPosts';
import Settings from './pages/admin/Settings';
import Bank from './pages/customer/Bank';
import Contact from './pages/home/Contact';

const App = () => {
  const { isAuthReady } = useContext(AuthContext);

  if (!isAuthReady) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="loading-full"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="randevu" element={<Appointment />}></Route>
          <Route path="ideal-kilo-hesaplama" element={<WeightCalc />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="iletisim" element={<Contact />}></Route>
          <Route path="blog/:blogId" element={<BlogPost />}></Route>
          <Route
            path="/giris"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/kayit"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          ></Route>
          <Route path="error" element={<Error />}></Route>
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="duzenle" element={<EditProfile />}></Route>
          <Route path="program" element={<Program />}></Route>
          <Route path="bildirim" element={<Bank />}></Route>
          <Route path="mesajlar" element={<Messages />}></Route>
          <Route path="mesajlar/:messageId" element={<Message />}></Route>
        </Route>

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<Admin />}></Route>
          <Route path="yeni-yazi" element={<AddPost />}></Route>
          <Route path="kullanicilar" element={<UserList />}></Route>
          <Route path="yeni-mesaj" element={<NewMessage />}></Route>
          <Route path="siparisler" element={<Orders />}></Route>
          <Route path="yazilar" element={<AllPosts />}></Route>
          <Route path="ayarlar" element={<Settings />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
