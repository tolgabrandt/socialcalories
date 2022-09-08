import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ChevronRight } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../firebase/config';

const Message = () => {
  const param = useParams();
  const [message, setMessage] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const message = await getDoc(doc(db, 'messages', param.messageId));
        setMessage(message.data());
        await updateDoc(doc(db, 'messages', param.messageId), {
          isRead: true,
        });
        setIsPending(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMessage();
  }, [param.messageId]);

  if (isPending) {
    return (
      <div className="mx-auto">
        <div className="loading-full"></div>
      </div>
    );
  }

  return (
    <div className=" border border-gray-200  p-6 rounded-lg ml-8 flex-auto h-min bg-gray-50">
      <h1 className=" mb-8 border-b pb-4 gap-2 flex">
        <Link
          className="flex gap-2 items-center text-slate-700 text-lg"
          to="/dashboard/messages"
        >
          <span>Mesajlar </span>
          <ChevronRight />
        </Link>
        <Link
          className="font-black text-slate-700 text-lg"
          to={`/profil/${message.sender.uid}`}
        >
          {message.sender.displayName}
        </Link>
      </h1>
      <div className="flex-auto flex flex-col gap-4 ">
        <div className="font-black text-2xl text-slate-700">
          {message.title}
        </div>
        <section className=" text-slate-600 text-lg whitespace-pre-line ">
          {message?.content}
        </section>
      </div>
    </div>
  );
};
export default Message;
