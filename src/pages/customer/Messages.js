import { useEffect, useState } from 'react';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { Link } from 'react-router-dom';

const Messages = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState();

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'messages', id));
  };

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'messages'), where('send', '==', user.uid)),
      (querySnapshot) => {
        let arr = [];
        querySnapshot.forEach((doc) => {
          arr.push({ ...doc.data(), id: doc.id });
        });
        setMessages(arr);
      }
    );
  }, [user.uid]);

  return (
    <main className="flex-auto border  border-gray-200 p-6 rounded-lg  min-w-[360px]">
      <div className="flex justify-between  mb-8 border-b pb-4">
        <h1 className="text-xl font-bold text-slate-700">Mesajlar</h1>
        <span className="bg-gray-200 text-white rounded-lg p-1 px-4">
          <span className="font-bold">{messages?.length}</span>{' '}
          <span className=""> toplam mesaj</span>
        </span>
      </div>
      <section>
        <ul className="flex flex-col gap-4">
          {messages?.length <= 0 && <div>Mesaj kutunuz boş.</div>}

          {messages?.map((message, index) => {
            const newDate = new Date(message.createdAt.seconds * 1000);
            const date = newDate.toLocaleString('tr-TR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            });

            return (
              <li
                key={index}
                className={` ${
                  !message.isRead && 'bg-gray-100 p-4'
                }  flex justify-between py-4 rounded-lg items-center `}
              >
                <Link to={message.id}>
                  <div className="flex items-center justify-between">
                    <section className="flex items-center gap-2">
                      <div>
                        <img
                          className="w-14 h-14 object-cover rounded-lg"
                          src={message.sender.photoURL}
                          alt="Kullanıcı profil fotoğrafı"
                        />
                      </div>
                    </section>
                    <section className="flex-auto ml-4 font-medium">
                      <div className="text-lg text-slate-600">
                        {message.title}
                      </div>
                      <div className="text-sm text-gray-400">{date}</div>
                    </section>
                  </div>
                </Link>
                <section>
                  <button
                    className="border border-red-500 bg-transparent text-red-500 hover:bg-red-500 hover:text-white"
                    onClick={(e) => handleDelete(message.id)}
                  >
                    sil
                  </button>
                </section>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
export default Messages;
