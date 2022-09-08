const Bank = () => {
  return (
    <main className="flex-auto border  border-gray-200 p-6 rounded-lg  min-w-[360px]">
      <div className="flex justify-between  mb-8 border-b pb-4">
        <h1 className="text-xl font-bold text-slate-700">Ödeme Bildirimi</h1>
        <span className="bg-gray-200 text-white rounded-lg p-1 px-4">
          0 bekleniyor
        </span>
      </div>
      <section>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Adı Soyadı" />
          <select>
            <option>Ziraat Bankası</option>
            <option>İş Bankası</option>
          </select>
          <input type="text" placeholder="Açıklama" />
          <button>Ödeme Bilidirimi</button>
        </form>
      </section>
    </main>
  );
};
export default Bank;
