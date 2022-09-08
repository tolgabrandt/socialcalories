import { AlarmFill, PeopleFill } from 'react-bootstrap-icons';
const Card = ({ categorie, title, coverIMG, cookingTime, portion }) => {
  return (
    <li className=" relative ">
      <div className="relative">
        <img
          className=" rounded-xl h-[240px] w-full object-cover"
          src={coverIMG}
          alt="Makale fotoğrafı"
        />
        <div
          className={`absolute font-bold tracking-wider ${
            categorie === 'Yemek Tarifi' ? 'bg-rose-500' : 'bg-blue-500'
          } top-5 left-4 text-white rounded-lg font-medium text-sm  h-[24px] flex items-center px-4`}
        >
          {categorie}
        </div>
        {categorie === 'Yemek Tarifi' && (
          <div className="absolute top-4 right-4 flex gap-6 bg-slate-600 p-2 rounded-lg bg-opacity-40">
            <div className="flex gap-2">
              <AlarmFill className="text-emerald-500" />
              <span className="text-xs font-bold text-white">
                {cookingTime}
              </span>
            </div>

            <div className="flex gap-2">
              <PeopleFill className="text-emerald-500" />
              <span className="text-xs font-bold text-white"> {portion}</span>
            </div>
          </div>
        )}
      </div>
      <div className=" text-center p-4 flex flex-col gap-2 absolute bottom-0 bg-slate-900 w-full bg-opacity-30 rounded-b-xl ">
        <h2 className="font-bold tracking-wider text-white text-xl  ">
          {title}
        </h2>
      </div>
    </li>
  );
};
export default Card;
