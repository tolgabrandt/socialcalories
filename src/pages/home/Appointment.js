const Appointment = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <section className="h-[220px] bg-emerald-500 text-white">
        <div className="max-w-[1140px] flex items-center mx-auto justify-center h-full">
          <div className="text-5xl font-black">Online Randevu</div>
        </div>
      </section>
      <section className="flex-auto w-fullh-full">
        <div className="max-w-[1140px] mx-auto flex gap-16 flex-wrap ">
          <form className="flex flex-col gap-4 sm:w-[360px] w-full px-4">
            <h2 className="text-4xl font-black text-slate-600 mb-8 border-b-4 py-8 border-emerald-500">
              Randevu Formu
            </h2>
            <input type="text" placeholder="Adınız Soyadınız" />
            <input type="text" placeholder="E-Posta Adresiniz" />
            <input type="text" placeholder="Telefon Numaranız" />
            <input type="text" placeholder="Şehir" />
            <button className="h-12">Sizi Arayalım</button>
          </form>
          <section className="flex-auto w-[600px] h-[600px] px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.4172364332976!2d36.26227801557834!3d37.07136836008734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f1f8013a428e1%3A0xdbac2026b652f3db!2sKurtulu%C5%9F%2C%207038.%20Sk.%20No%3A19%2C%2080020%20Osmaniye%20Merkez%2FOsmaniye!5e0!3m2!1str!2str!4v1662512986197!5m2!1str!2str"
              className="w-full h-full"
              loading="lazy"
              title="map"
            ></iframe>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Appointment;
