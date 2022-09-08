const LastPosts = ({ coverURL, title }) => {
  return (
    <div className="flex h-[80px] gap-4 items-center ">
      <img className="w-16 h-16 rounded-lg object-cover" alt="Cover" src={coverURL} />
      <div className="text-md font-bold">{title}</div>
    </div>
  );
};
export default LastPosts;
