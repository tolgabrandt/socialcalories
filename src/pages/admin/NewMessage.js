import { useState } from 'react';
import { useEffect } from 'react';
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';

const NewMessage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [userInput, setUserInput] = useState('');
  const [foundUsers, setFoundUsers] = useState();
  const [searchError, setSearchError] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [recieverUser, setRecieverUser] = useState(null);

  const { user } = useContext(AuthContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchActive(!searchActive);
  };

  const handleSelect = (e) => {
    const user = foundUsers.find((user) => user.email === e.target.value);
    setRecieverUser(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
      send: recieverUser.uid,
      isRead: false,
      createdAt: serverTimestamp(),
      sender: {
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
        email: user.email,
      },
    };
    await addDoc(collection(db, 'messages'), data);
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await getDocs(
        query(collection(db, 'users'), where('displayName', '==', userInput))
      );
      if (user.empty) {
        setSearchError(true);
      } else {
        setSearchError(false);
      }
      let arr = [];
      user.forEach((doc) => {
        arr.push(doc.data());
      });
      setFoundUsers(arr);
    };
    getUser();
  }, [searchActive, userInput]);

  return (
    <section className="flex-auto border border-gray-200 bg-gray-50 p-6 rounded-lg">
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-700">Yeni mesaj</h1>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Üye"
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button
                className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                onClick={handleSearch}
              >
                Ara
              </button>
            </div>
            <div>
              <select onChange={handleSelect}>
                {searchError && <option>Kullanıcı yok</option>}
                {!searchError && (
                  <option>{foundUsers?.length} kullanıcı bulundu</option>
                )}
                {foundUsers?.map((value, index) => {
                  return <option key={index}>{value.email}</option>;
                })}
              </select>
            </div>
          </div>
        </section>
        <section>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Başlık"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              cols="30"
              rows="10"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="bg-blue-500">Gönder</button>
          </form>
        </section>
      </div>
    </section>
  );
};
export default NewMessage;
