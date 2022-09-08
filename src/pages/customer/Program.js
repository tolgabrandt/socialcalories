const Program = () => {
  return (
    <main className="flex-auto border  border-gray-200 p-6 rounded-lg  min-w-[360px]">
      <div className="flex justify-between  mb-8 border-b pb-4">
        <h1 className="text-xl font-bold text-slate-700">Diyet Programım</h1>
        <span className="bg-gray-200 text-white rounded-lg p-1 px-4">
          0 toplam program
        </span>
      </div>
      <section>
        <ul className="flex flex-col gap-4">
          Henüz bir diyet programına sahip değilsiniz.
        </ul>
      </section>
    </main>
  );
};
export default Program;
