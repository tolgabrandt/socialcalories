import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import BlogCard from '../../components/home/blog/BlogCard';

const BlogPost = () => {
  const params = useParams();
  const [posts, setPosts] = useState();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    try {
      onSnapshot(
        query(collection(db, 'posts'), where('shortName', '==', params.blogId)),
        (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          setPosts(arr);
          setIsPending(false);
        }
      );
    } catch (err) {
      console.log(err);
      setIsPending(false);
    }
  }, [params]);

  if (isPending) {
    return <div className="loading-full mx-auto"></div>;
  }

  return (
    <>
      {posts?.map((doc, index) => {
        return (
          <BlogCard
            key={index}
            title={doc.title}
            content={doc.content}
            portion={doc.portion}
            categorie={doc.categorie}
            coverURL={doc.coverURL}
            cookingTime={doc.cookingTime}
            view={doc.view}
            ingredients={doc.ingredients}
            createdAt={doc.createdAt}
            summary={doc.summary}
            id={doc.id}
            shortName={doc.shortName}
          />
        );
      })}
    </>
  );
};
export default BlogPost;
