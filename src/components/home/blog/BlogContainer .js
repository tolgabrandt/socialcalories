import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { motion } from 'framer-motion';
const BlogContainer = () => {
  const [isPending, setIsPending] = useState(true);
  const [recipes, setRecipes] = useState(null);
  const [article, setArticle] = useState(null);

  const getPost = async () => {
    try {
      onSnapshot(
        query(
          collection(db, 'posts'),
          where('categorie', '==', 'Yemek Tarifi'),
          limit(2)
        ),
        (querySnapshot) => {
          let arr1 = [];
          querySnapshot.forEach((doc) => {
            arr1.push(doc.data());
          });
          setRecipes(arr1);
        }
      );

      onSnapshot(
        query(
          collection(db, 'posts'),
          where('categorie', '==', 'Makale'),
          limit(4)
        ),
        (querySnapshot) => {
          let arr2 = [];
          querySnapshot.forEach((doc) => {
            arr2.push(doc.data());
          });
          setArticle(arr2);
        }
      );

      setIsPending(false);
    } catch (err) {
      console.log(err);
      setIsPending(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  if (isPending) {
    return <div className="loading-full mx-auto"></div>;
  }

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <div className="justify-center flex">
          <h2 className="text-2xl font-black text-slate-600 mb-8 border-b-4 py-4 border-emerald-500">
            MAKALELER
          </h2>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center gap-8">
            {article?.map((doc, index) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="md:w-[48%] w-full "
                  key={index}
                >
                  <Link to={`blog/${doc.shortName}`}>
                    <Card
                      categorie={doc.categorie}
                      title={doc.title}
                      coverIMG={doc.coverURL}
                      content={doc.content}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-8 ">
        <div className="justify-center flex">
          <h2 className="text-2xl font-black text-slate-600 mb-8 border-b-4 py-4 border-emerald-500">
            YEMEK TARİFLERİ
          </h2>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center gap-8">
            {recipes?.map((doc, index) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="md:w-[48%] w-full "
                  key={index}
                >
                  <Link to={`blog/${doc.shortName}`}>
                    <Card
                      categorie={doc.categorie}
                      title={doc.title}
                      coverIMG={doc.coverURL}
                      portion={doc.portion}
                      cookingTime={doc.cookingTime}
                      content={doc.content}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default BlogContainer;
