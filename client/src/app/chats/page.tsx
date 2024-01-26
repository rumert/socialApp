import MessagesList from "@/components/MessagesList"
import { getMessages } from "../../../lib/firebase/firestore";
import SendMessage from "@/components/SendMessage";

export default async function Chats() {

  const messages = await getMessages()
  
  return (
    <div className='flex-grow flex flex-col h-[88vh]'>
        <div className='h-[11vh] border-2 rounded-2xl flex gap-2 pl-4 items-center'>
          <div className='h-[10vh] w-[10vh] bg-gray-800 rounded-full'>a</div>
          <div className='h-[10vh] w-[10vh] bg-gray-800 rounded-full'>b</div>
        </div> {/* Friends */}
        <div className='flex-grow flex flex-col'>
          <MessagesList initialMessages={messages} />
          <SendMessage />
        </div>
    </div>
  )
}