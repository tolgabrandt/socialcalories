import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContex';

const Error = () => {
  const { user } = useContext(AuthContext);
  const [errMsg, setErrMsg] = useState({});

  useEffect(() => {
    if (user?.role !== 'admin') {
      setErrMsg({
        errCode: '401',
        errMsg: 'Bu sayfaya giriş izniniz bulunmamaktadır.',
      });
    }
  }, [user?.role]);

  return (
    <section className="max-w-[1140px] mx-auto flex flex-col gap-6 items-center">
      <div className="text-5xl font-black text-slate-600">{errMsg.errCode}</div>
      <div className="flex flex-col gap-2">
        <div className=" text-2xl text-red-500">{errMsg.errMsg}</div>
        <div className="text-sm text-slate-400">
          <span>Bunun bir hata olduğunu düşünüyorsanız lütfen bizimle </span>
          <Link className="text-blue-500" to="/iletisim">
            iletişime
          </Link>
          <span> geçin.</span>
        </div>
      </div>
    </section>
  );
};
export default Error;
