import './App.css'
import { useState } from "react";
import MessageCard from './MessageCard';
function App() {
  const [msg,setMsg] = useState('');
  const [title,setTitle]=useState('');
  const [tempTitle, setTempTitle] = useState('');
  const [tempMsg, setTempMsg] = useState('');
  const handleSend = ()=>{
    setMsg(tempMsg);
    setTitle(tempTitle);
  }

  return (
    <>
    <div style={{
      padding:"23px",
      width:"300px",
      backgroundColor:"honeydew"

    }}>
      <input type="text" placeholder='Title Here...' onChange={(e)=>setTempTitle(e.target.value)} /> <br/><br/>
      <input type="text" placeholder='Message Here...' onChange={(e)=>setTempMsg(e.target.value)} />
      <br/><br/><button onClick={handleSend}>Send</button>
      <MessageCard title={title} message={msg}></MessageCard>
      <MessageCard title={title} message={msg}></MessageCard>
    </div>
    </>
  )
}

export default App
