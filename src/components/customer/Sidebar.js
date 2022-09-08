import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContex';
import { ChatLeft, CalendarDay, Person, Bank } from 'react-bootstrap-icons';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useEffect } from 'react';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  const [isRead, setIsRead] = useState('');

  const calcAge = (birthDate) => {
    const age = 2022 - birthDate?.slice(0, 4);
    return age;
  };

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'messages'), where('send', '==', user.uid)),
      (querySnapShot) => {
        let arr = [];
        querySnapShot.forEach((doc) => {
          arr.push(doc.data());
        });
        setIsRead(arr.filter((m) => !m.isRead));
      }
    );
  }, [user.uid]);

  return (
    <aside className="sm:w-[280px] bg-white  flex flex-col shrink-0 w-full">
      <section className="bg-gray-50 p-4 rounded-md flex flex-col gap-4">
        <div className="flex justify-center">
          <img
            className="w-16 h-16 object-cover rounded-md"
            src={user.photoURL}
            alt="PP"
          />
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-lg text-slate-600 font-bold ">
            {user.displayName}
          </h1>
          {user.birthDate && (
            <div className="text-sm text-gray-400">
              {user.gender}, {calcAge(user.birthDate)} yaşında
            </div>
          )}
          {!user.birthDate && (
            <div className="text-sm text-gray-400">
              <Link to="/dashboard/edit">Profili düzenle</Link>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-4 py-4">
          <ul>
            <Link to="/dashboard/edit">
              <li
                className={`flex items-center gap-6 px-6 py-4 hover:bg-gray-50 ${
                  location.pathname === '/dashboard/edit' && 'bg-gray-50'
                }`}
              >
                <Person className="text-lg" /> <span>Profil Bilgilerim</span>
              </li>
            </Link>

            <Link to="/dashboard/program">
              <li
                className={`flex items-center gap-6 px-6 py-4 hover:bg-gray-50 ${
                  location.pathname === '/dashboard/program' && 'bg-gray-50'
                }`}
              >
                <CalendarDay /> <span>Diyet Programım</span>
              </li>
            </Link>
            <Link to="/dashboard/messages">
              <li
                className={`flex items-center gap-6 px-6 py-4 hover:bg-gray-50 ${
                  location.pathname === '/dashboard/messages' && 'bg-gray-50'
                }`}
              >
                <ChatLeft /> <span>Mesajlar</span>
                <span className="bg-red-500 text-white rounded-full text-xs h-6 w-6 flex justify-center items-center">
                  {isRead?.length}
                </span>
              </li>
            </Link>
            <Link to="/dashboard/bildirim">
              <li className="flex items-center gap-6 px-6 py-4 hover:bg-gray-50">
                <Bank /> <span>Ödeme Bildirimi</span>
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </aside>
  );
};
export default Sidebar;
