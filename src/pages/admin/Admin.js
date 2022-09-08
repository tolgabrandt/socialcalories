import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { auth } from '../../firebase/config';

const Admin = () => {
  const { user } = useContext(AuthContext);
  const newDate = new Date(auth.currentUser.metadata.lastLoginAt * 1);
  const date = newDate.toLocaleString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div className="bg-emerald-100 p-4 rounded-sm ">
      <div className="text-emerald-600 flex flex-col gap-2">
        <span> Admin paneline hoşgeldiniz.</span>
        <div>
          <span>Geçerli kullanıcı: </span>
          <span className="font-bold">{user.displayName}</span>
        </div>
        <div>
          <span>Son giriş tarihi: </span>
          <span className="font-bold">{date}</span>
        </div>
      </div>
    </div>
  );
};
export default Admin;
