import {
  CalculatorFill,
  DropletFill,
  EggFried,
  NintendoSwitch,
  Speedometer,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Calculating = () => {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <div className="flex gap-4 flex-wrap">
          <motion.div whileHover={{ scale: 1.1 }} className="flex-auto">
            <Link
              to="ideal-kilo-hesaplama"
              className="calculations bg-emerald-600 rounded-2xl group gap-4  min-w-max px-4"
            >
              <NintendoSwitch className="text-4xl text-emerald-100" />
              <div className="flex flex-col items-center ">
                <span className="text-xl font-medium ">İdeal Kilo</span>
              </div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="flex-auto">
            <Link
              to="ideal-kilo-hesaplama"
              className="calculations bg-emerald-400  rounded-2xl group min-w-max px-4 gap-4 "
            >
              <CalculatorFill className="text-4xl" />
              <div className="flex flex-col items-center ">
                <span className="text-xl  font-medium">
                  Vücut Kitle İndeksi
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="flex-auto">
            <Link
              to="ideal-kilo-hesaplama"
              className="calculations bg-teal-400 rounded-2xl group  min-w-max px-4 gap-4 "
            >
              <DropletFill className="text-4xl " />
              <div className="flex flex-col items-center ">
                <span className="text-xl font-medium">Su Tüketimi</span>
              </div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="flex-auto">
            <Link
              to="ideal-kilo-hesaplama"
              className="calculations bg-cyan-500 rounded-2xl group  min-w-max px-4 gap-4"
            >
              <Speedometer className="text-4xl" />
              <div className="flex flex-col items-center ">
                <span className="text-xl font-medium">Bazal Metabolizma</span>
              </div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="flex-auto">
            <Link
              to="ideal-kilo-hesaplama"
              className="calculations bg-cyan-600 rounded-2xl group min-w-max px-4  gap-4"
            >
              <EggFried className="text-4xl " />
              <div className=" flex flex-col items-center ">
                <span className="text-xl font-medium ">Kaç Kalori</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Calculating;
