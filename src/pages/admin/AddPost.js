import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { db, storage } from '../../firebase/config';

const AddPost = () => {
  const [categorie, setCategorie] = useState('Makale');
  const [ingredientsChange, setIngredientsChange] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [blogCover, setBlogCover] = useState(null);
  const [blogCoverError, setBlogCoverError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [portion, setPortion] = useState('1');
  const [minutes, setMinutes] = useState('15 dk');
  const [shortName, setShortName] = useState('');
  const [summary, setSummary] = useState('');

  const handleFileChange = (e) => {
    let selected = e.target.files[0];

    if (!selected) {
      setBlogCoverError('Lütfen bir resim seçiniz');
      return;
    }
    if (!selected.type.includes('image')) {
      setBlogCoverError('Lütfen bir resim dosyası seçiniz');
      return;
    }

    if (selected.size > 1000000) {
      setBlogCoverError('Lütfen 1 mb küçük seçiniz');
      return;
    }

    setBlogCoverError(null);
    setBlogCover(selected);
  };

  const handleSelect = (e) => {
    setCategorie(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIngredients((prev) => [...prev, ingredientsChange]);
    setIngredientsChange('');
  };

  const handleDelete = (id) => {
    const deletedItem = ingredients.filter((item, i) => i !== id);
    setIngredients(deletedItem);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setSuccess(false);
    let blogCoverRef;
    let blogCoverPath;
    if (blogCover) {
      blogCoverPath = `blogCovers/${blogCover.name}`;
      blogCoverRef = ref(storage, blogCoverPath);
    }

    try {
      let downloadImgUrl;
      if (blogCover) {
        await uploadBytes(blogCoverRef, blogCover);
        downloadImgUrl = await getDownloadURL(ref(storage, blogCoverPath));
      }

      const data = {
        title: title,
        content: content,
        coverURL: downloadImgUrl,
        createdAt: serverTimestamp(),
        view: 1,
        shortName: shortName,
        categorie: categorie,
        summary: summary,
      };

      if (ingredients.length > 0) {
        data.ingredients = [...ingredients];
        data.cookingTime = minutes;
        data.portion = portion;
      }

      await addDoc(collection(db, 'posts'), data);
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (isPending) {
    return (
      <div className="mx-auto">
        <div className="loading-full"></div>
      </div>
    );
  }

  return (
    <div className="flex gap-8">
      <section className="flex-auto border border-gray-200 bg-gray-50 p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <section className="flex flex-col gap-4">
            <div className="flex flex-col rounded-lg gap-4">
              <h1 className="text-2xl font-bold text-gray-700">Yeni blog</h1>
              <input
                required
                type="text"
                placeholder="Başlık"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Kısa özet"
                onChange={(e) => setSummary(e.target.value)}
              />
              <input
                required
                type="text"
                placeholder="Url"
                onChange={(e) => setShortName(e.target.value)}
              />
              <span className="text-xs text-gray-400">
                <span className="mr-1">
                  URL türkçe karakter içermemelidir, boşluk yerine "-"
                  kullanılmalıdır. Örnek:
                </span>
                <span className="text-gray-600">"bu-bir-baslik-ornegidir"</span>
              </span>
              <textarea
                required
                cols="30"
                rows="10"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col p-4 rounded-lg">
              <input
                onChange={handleFileChange}
                className="border-0 p-2 bg-gray-50"
                type="file"
              />
              <span>{blogCoverError}</span>
            </div>
            <div className="flex flex-col gap-2  bg-gray-50 rounded-lg">
              <label>Kategori</label>
              <select defaultValue={categorie} onChange={handleSelect}>
                <option>Makale</option>
                <option>Yemek Tarifi</option>
              </select>
            </div>
            {categorie === 'Yemek Tarifi' && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label>Malzemeler</label>
                  <input
                    type="text"
                    onChange={(e) => setIngredientsChange(e.target.value)}
                    value={ingredientsChange}
                    placeholder="Malzeme Ekle"
                  />
                </div>
                <div className="flex gap-4 flex-wrap">
                  {ingredients.map((ing, i) => {
                    return (
                      <span className="bg-emerald-200 text-emerald-700 p-1 px-4 rounded-xl gap-2 flex">
                        {ing}
                        <button
                          type="button"
                          onClick={(e) => handleDelete(i)}
                          className="bg-emerald-400 rounded-full p-0 px-2 h-6"
                        >
                          x
                        </button>
                      </span>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={handleClick}
                  className="bg-transparent text-emerald-500 border border-emerald-500"
                >
                  Malzeme Ekle
                </button>
                <section className="flex gap-4">
                  <div className="flex gap-4 items-center">
                    <label>Kaç Kişilik</label>
                    <select
                      onChange={(e) => setPortion(e.target.value)}
                      defaultValue="1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>

                  <div className="flex gap-4 items-center">
                    <label>Hazırlama Süresi</label>
                    <select
                      onChange={(e) => setMinutes(e.target.value)}
                      defaultValue="15 dk"
                    >
                      <option>15 dk</option>
                      <option>30 dk</option>
                      <option>45 dk</option>
                      <option>1 s</option>
                      <option>2 s</option>
                      <option>3 s</option>
                    </select>
                  </div>
                </section>
                {ingredients.length <= 1 && (
                  <button className="text-gray-400" disabled>
                    En az 2 malzeme gerekli
                  </button>
                )}
                {ingredients.length > 1 && <button>Gönder</button>}
              </div>
            )}
            {categorie === 'Makale' && <button>Gönder</button>}
            {success && <span>Başarılı</span>}
          </section>
        </form>
      </section>
    </div>
  );
};
export default AddPost;
