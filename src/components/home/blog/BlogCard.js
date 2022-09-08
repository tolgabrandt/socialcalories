import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Basket3Fill, Check, Clock, Eyeglasses } from 'react-bootstrap-icons';
import { db } from '../../../firebase/config';
import { motion, useScroll } from 'framer-motion';
import LastPosts from './LastPosts';
import { Link, useParams } from 'react-router-dom';
import { InlineShareButtons } from 'sharethis-reactjs';
import { InlineReactionButtons } from 'sharethis-reactjs';

const BlogCard = ({
  title,
  coverURL,
  categorie,
  createdAt,
  summary,
  content,
  view,
  ingredients,
  cookingTime,
  shortName,
}) => {
  const { scrollYProgress } = useScroll();
  const newDate = new Date(createdAt.seconds * 1000);
  const date = newDate.toLocaleString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const params = useParams();

  const getData = () => {
    try {
      onSnapshot(collection(db, 'posts'), (querySnapshot) => {
        let arr = [];
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
        });
        setPosts(arr);
        setIsPending(false);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (isPending) {
    return (
      <div className="mx-auto">
        <div className="loading-full"></div>
      </div>
    );
  }

  function createMarkup() {
    return { __html: content };
  }

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <section className="w-full mx-auto mt-8 px-4">
        <div className="max-w-[1140px] mx-auto flex justify-between flex-wrap gap-16">
          <article className="flex-1">
            <header>
              <div className="flex flex-col  gap-8">
                <section className="flex justify-between">
                  <div className="flex gap-8">
                    <span className="uppercase font-bold">{categorie}</span>
                    <span>{date}</span>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <Eyeglasses className="text-2xl" />
                      <span className="text-sm">
                        <span className="font-bold">{view} </span>
                        <span>OKUNMA</span>
                      </span>
                    </div>
                  </div>
                </section>
                <section>
                  <h1 className="text-5xl font-black">{title}</h1>
                </section>
              </div>
            </header>

            <div className="flex flex-col gap-8">
              <section className="text-2xl text-gray-400 leading-normal font-light mt-4">
                {summary}
              </section>
              <section>
                <img
                  className="w-full h-[440px] object-cover"
                  src={coverURL}
                  alt="Makale fotoğrafı"
                />
              </section>
              <InlineShareButtons />
              {ingredients && (
                <section className="leading-relaxed text-xl whitespace-pre-line text-gray-600 flex flex-col gap-4">
                  <div className="flex justify-between bg-rose-100 text-rose-700 p-4 rounded-lg items-center">
                    <h2 className="">Malzemeler</h2>
                    <span className="text-sm flex gap-2">
                      <span>
                        <Basket3Fill className="text-lg" />
                      </span>
                      <span className="mt-[2px] font-bold">
                        {ingredients.length} Adet
                      </span>
                    </span>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {ingredients.map((item, index) => {
                      return (
                        <li
                          className="bg-gray-50 rounded-xl p-2 flex items-center gap-4"
                          key={index}
                        >
                          <Check className="text-green-500 text-3xl" />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}
              <section className="leading-relaxed text-xl whitespace-pre-line text-gray-600 flex flex-col gap-4">
                {ingredients && (
                  <div className="flex justify-between bg-emerald-100 text-emerald-700 p-4 rounded-lg items-center">
                    <h2 className="">Hazırlanışı</h2>
                    <span className="text-sm flex items-center gap-2">
                      <span>
                        <Clock className="text-lg" />
                      </span>
                      <span className="font-bold mt-[2px]">{cookingTime} </span>
                    </span>
                  </div>
                )}
                <div dangerouslySetInnerHTML={createMarkup()}></div>
              </section>
              {params.blogId === shortName && (
                <section className="flex flex-col gap-6 items-center">
                  <div className=" w-full bg-teal-100 p-6 text-teal-600 text-2xl rounded-lg text-center">
                    Makaleyi nasıl buldunuz?
                  </div>
                  <div>
                    <InlineReactionButtons />
                  </div>
                </section>
              )}
            </div>
          </article>

          <aside className="sm:w-[320px] w-full flex flex-col gap-6">
            <div className=" h-[60px] bg-yellow-100 flex items-center justify-center rounded-md">
              <h2 className="text-xl  text-yellow-700 ">Son Makaleler</h2>
            </div>
            <div className="flex flex-col ">
              {posts.map((doc, index) => {
                return (
                  <Link
                    className={`hover:bg-gray-50 p-4 text-lg ${
                      params.blogId === doc.shortName
                        ? 'bg-violet-50 rounded-lg'
                        : null
                    }`}
                    to={`/blog/${doc.shortName}`}
                    key={index}
                  >
                    <LastPosts coverURL={doc.coverURL} title={doc.title} />
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
export default BlogCard;
