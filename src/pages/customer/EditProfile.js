import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { db } from '../../firebase/config';
import { auth } from '../../firebase/config';
import { storage } from '../../firebase/config';

const EditProfile = () => {
  const boy = ['1.60', '1.61', '1.62', '1.63', '1.64', '1.65'];
  const kilo = ['55', '56', '57', '58'];
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [birthDate, setBirthDate] = useState(user.birthDate || '01-01-1999');
  const [gender, setGender] = useState(user.gender || 'Erkek');
  const [height, setHeight] = useState(user.height || '1.60');
  const [weight, setWeight] = useState(user.weight || '60');
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChange = (e) => {
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError('Lütfen bir resim seçiniz');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Lütfen bir resim dosyası seçiniz');
      return;
    }

    if (selected.size > 1000000) {
      setThumbnailError('Lütfen 1 mb küçük seçiniz');
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setSuccess(false);
    let thumbnailRef;
    let thumbnailPath;
    if (thumbnail) {
      thumbnailPath = `thumbnails/${user.uid}/${thumbnail.name}`;
      thumbnailRef = ref(storage, thumbnailPath);
    }
    try {
      let downloadImgUrl;
      if (thumbnail) {
        await uploadBytes(thumbnailRef, thumbnail);
        downloadImgUrl = await getDownloadURL(ref(storage, thumbnailPath));
      }
      await updateDoc(doc(db, 'users', user.uid), {
        displayName: displayName,
        birthDate: birthDate,
        gender: gender,
        height: height,
        weight: weight,
        photoURL: downloadImgUrl || user.photoURL,
      });
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: downloadImgUrl || user.photoURL,
      });
      setIsPending(false);
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setIsPending(false);
      setSuccess(false);
    }
  };

  return (
    <div className=" border border-gray-200 p-6 rounded-lg flex-auto">
      <div className="flex justify-between  mb-8 border-b pb-4">
        <h1 className="text-xl font-bold text-slate-700">Profil Bilgileri</h1>
        <span className="bg-gray-200 text-white rounded-lg p-1 px-4">
          E-posta onayı gerekli
        </span>
      </div>
      <form onSubmit={handleSubmit} className=" flex-auto">
        <section className="flex justify-between gap-4 flex-wrap ">
          <div className="flex flex-col gap-2 flex-auto ">
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 flex-auto ">
            <input
              type="text"
              disabled
              value={user.email}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <span className="text-xs text-gray-400">
              Üzgünüz, şu anda değiştirilemiyor.
            </span>
          </div>
        </section>

        <section className="flex justify-between gap-4 flex-wrap mt-8  ">
          <div className="flex flex-col gap-2 flex-auto ">
            <select
              defaultValue={gender}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              required
            >
              <option>{user.gender || 'Erkek'}</option>
              <option>{user.gender === 'Kadın' ? 'Erkek' : 'Kadın'}</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 flex-auto ">
            <input
              type="date"
              value={birthDate}
              required
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 flex-auto ">
            <select
              defaultValue={height}
              onChange={(e) => setHeight(e.target.value)}
            >
              {boy.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2 flex-auto ">
            <select
              defaultValue={weight}
              onChange={(e) => setWeight(e.target.value)}
            >
              {kilo.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>
          </div>
        </section>

        <section className="flex justify-between gap-8 flex-wrap mt-8 ">
          <div className="flex gap-2 flex-auto items-center ">
            <img
              className="w-16 h-16 object-cover rounded-lg"
              src={user.photoURL}
              alt="Kullanıcı profil fotoğrafı"
            />
            <input
              className="border-none bg-transparent"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          {thumbnailError && <div>{thumbnailError}</div>}
        </section>

        <button className="mt-8">
          {isPending && <div className="loading"></div>}
          {!isPending && 'Kaydet'}
        </button>
        <div className="text-green-500 text-xs mt-2">
          {success && 'Başarılı'}
        </div>
      </form>
    </div>
  );
};
export default EditProfile;
