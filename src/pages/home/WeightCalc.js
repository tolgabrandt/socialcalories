const WeightCalc = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <section className="h-[220px] bg-emerald-500 text-white">
        <div className="max-w-[1140px] flex items-center mx-auto justify-center h-full">
          <div className="text-5xl font-black">İdeal Kilo Hesaplama</div>
        </div>
      </section>
      <section className="flex-auto w-fullh-full px-4">
        <div className="max-w-[1140px] mx-auto flex gap-16 flex-wrap ">
          <form className="flex-auto flex flex-col gap-4">
            <h2 className="text-4xl font-black text-slate-600 mb-8 border-b-4 py-8 border-emerald-500">
              İdeal Kilo Hesaplama
            </h2>
            <select className="h-16">
              <option>Kadın</option>
              <option>Erkek</option>
            </select>
            <select className="h-16">
              <option>165</option>
              <option>170</option>
            </select>
            <select className="h-16">
              <option>65</option>
              <option>70</option>
            </select>

            <button className="h-16 text-xl font-bold">
              İdeal Kilomu Hesapla
            </button>
          </form>
          <section className="flex-auto w-[200px]  flex flex-col">
            <h2 className="text-4xl font-black text-slate-600 mb-8 border-b-4 py-8 border-emerald-500">
              İdeal Kilonuz
            </h2>

            <div className="text-xl text-slate-600 flex flex-col gap-4 h-full">
              <div className="flex justify-between">
                <span> Yağsız Vücut Ağırlığı: </span>
                <span className="font-bold"> 46 KG</span>
              </div>
              <div className="flex justify-between">
                <span>Vücut Kitle İndeksi (BMI): </span>
                <span className="font-bold">22.4</span>
              </div>
              <div className="flex justify-between">
                <span>İdeal Kilo: </span>
                <span className="font-bold">65 KG</span>
              </div>

              <div className="flex">
                <span className="font-bold text-red-600">
                  İdeal kilonuzun üstündesiniz
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default WeightCalc;
