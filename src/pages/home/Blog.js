const Blog = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-16">
      <section className="h-[220px] bg-emerald-500 text-white">
        <div className="max-w-[1140px] flex items-center mx-auto justify-center h-full">
          <div className="text-5xl font-black">BLOG</div>
        </div>
      </section>
      <section className="flex-auto w-fullh-full">
      <div className="max-w-[1140px] flex items-center mx-auto justify-center h-full">
          <div className="text-lg text-slate-600">Henüz bir içerik yok.</div>
        </div>
      </section>
    </div>
  );
};
export default Blog;
