import 'react-toastify/dist/ReactToastify.css';
import Cover from '../../components/home/Cover';

import Calculating from '../../components/home/Calculating';

import BlogContainer from '../../components/home/blog/BlogContainer ';

import Testimional from '../../components/home/Testimional';

const Home = () => {
  return (
    <>
      <Cover />

      <main className="flex-auto mt-16 px-4 w-full">
        <div className="max-w-[1140px] mx-auto  flex flex-col gap-16 ">
          <Calculating />
          <Testimional />
          <BlogContainer />
        </div>
      </main>
    </>
  );
};
export default Home;
