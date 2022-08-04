import "./App.css";
import Header from "./components/Header";
import MessageBox from "./components/MessageBox";
import { useState } from "react";
function App() {
  const [status, setStatus] = useState("expand");

  const handleMessageBox = (status) => {
    setStatus(status);
  };
  return (
    <div className="App">
      <Header handleMessageBox={handleMessageBox} />
      <MessageBox handleMessageBox={handleMessageBox} status = {status}/>
    </div>
  );
}

export default App;
