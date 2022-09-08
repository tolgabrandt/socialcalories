const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col gap-16">
      <section className="min-h-[220px] bg-emerald-500 text-white">
        <div className="max-w-[1140px] flex items-center mx-auto justify-center h-full">
          <div className="text-5xl font-black">İLETİŞİM</div>
        </div>
      </section>
      <section className=" px-4 flex-auto w-full h-full max-w-[1140px]  mx-auto justify-center  flex flex-col">
        <div className="text-3xl font-black text-slate-600 tracking-wide border-b-4 border-emerald-500 py-6 mb-8">
          Ofislerimiz
        </div>
        <div className=" flex flex-col gap-6">
          <div className="text-lg text-slate-600">
            Güler yüzlü personelimizden biriyle görüşmek için ofisimizle
            iletişime geçin. Pazartesi'den Cuma'ya sabah 9:00'dan akşam 17:00'ye
            kadar açığız ve resmi tatillerde
            kapalıyız.
          </div>
          <div className="text-lg flex flex-col gap-2">
            <div>
              <span>Telefon: </span>
              <span className="font-bold text-emerald-500">
                +90(535) 295 9277
              </span>
            </div>
            <div>
              <span>E-posta: </span>
              <span className="font-bold text-emerald-500">
                tolgabrandt@gmail.com
              </span>
            </div>
            <div>
              <span>Adres: </span>
              <span className="font-bold text-emerald-500">
                Halide Edip Adıvar Mahallesi - Darülaceze Caddesi No:3A BOMONTİ
                / ŞİŞLİ - İSTANBUL
              </span>
            </div>
          </div>
          <div>
            Bireysel gizliliği korumak için, üye iletişim bilgileri, üye
            yayınlanmasını kabul etmediği sürece gizlidir.
          </div>
        </div>
        <div className="text-3xl font-black mt-8 text-slate-600 tracking-wide border-b-4 border-emerald-500 py-6 mb-8">
          Sizi hemen arayalım!
        </div>
        <form className="w-full flex gap-4">
          <input
            className="flex-1"
            type="text"
            placeholder="Telefon numaranız"
          />
          <button className="h-12 px-8">ARA</button>
        </form>
      </section>
    </div>
  );
};
export default Contact;
