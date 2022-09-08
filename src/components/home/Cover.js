import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cover = () => {
  return (
    <section className="cover min-h-[calc(100vh_-_90px)] text-white flex items-center">
      <div className="w-[1140px] mx-auto px-4 xl:p-0">
        <div className="flex flex-col gap-8">
          <h1 className=" text-[28px]  md:text-[32px] lg:text-[36px]  xl:text-[56px] font-black">
            Online diyet ile istediğin kiloya kısa zamanda ulaş
          </h1>
          <div className="flex gap-8">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link to="randevu">
                <button className="h-12 text-lg w-[220px]">Randevu Al</button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <button className="bg-transparent border w-[220px] border-emerald-500 h-12 text-lg">
                Canlı Sohbet
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cover;
