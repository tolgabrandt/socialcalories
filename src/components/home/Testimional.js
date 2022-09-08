import { ReactComponent as Quoto } from '../../assets/svg/quoto.svg';
import { ReactComponent as Star } from '../../assets/svg/start.svg';
const Testimional = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-8 ">
        <div className="justify-center flex">
          <h2 className="text-2xl font-black text-slate-600 mb-8 border-b-4 py-4 border-emerald-500">
            MUTLU DANIŞANLAR
          </h2>
        </div>
        <div>
          <div className="container px-6 mx-auto">
            <section className=" text-gray-800 text-center">
              <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12 ">
                <section className="mb-12 md:mb-0 bg-gray-50 border border-gray-200 rounded-xl p-6  ">
                  <div className="flex justify-center mb-6">
                    <img
                      alt="Cover"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                      className="rounded-full shadow-lg w-32"
                    />
                  </div>
                  <h5 className="text-lg font-bold mb-4">Aylin Kaya</h5>
                  <h6 className="font-medium text-emerald-500 mb-4">Danışan</h6>
                  <p className="mb-4">
                    <Quoto />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <div className="flex justify-center mb-0">
                    <div className=" flex w-16">
                      <Star /> <Star /> <Star /> <Star />
                    </div>
                  </div>
                </section>
                <section className="mb-12 md:mb-0 bg-emerald-500 text-white border border-gray-200 rounded-xl p-6 ">
                  <div className="flex justify-center mb-6">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                      className="rounded-full shadow-lg w-32"
                      alt="Cover"
                    />
                  </div>
                  <h5 className="text-lg font-bold mb-4">Melisa Çakmak</h5>
                  <h6 className="font-medium text-emerald-200 mb-4">Danışan</h6>
                  <p className="mb-4">
                    <Quoto />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <div className="flex justify-center mb-0">
                    <div className=" flex w-16">
                      <Star /> <Star /> <Star /> <Star />
                    </div>
                  </div>
                </section>
                <section className="mb-0 bg-gray-50 border border-gray-200 rounded-xl p-6 ">
                  <div className="flex justify-center mb-6">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      className="rounded-full shadow-lg w-32"
                      alt="Cover"
                    />
                  </div>
                  <h5 className="text-lg font-bold mb-4">Filiz Binici</h5>
                  <h6 className="font-medium text-emerald-500 mb-4">Danışan</h6>
                  <p className="mb-4">
                    <Quoto />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <div className="flex justify-center mb-0">
                    <div className=" flex w-16">
                      <Star /> <Star /> <Star /> <Star />
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimional;
