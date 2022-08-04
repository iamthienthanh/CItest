import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [inputValue, setInputValue] = useState("")
  const [random, setRandom] = useState(Math.floor(Math.random()*10+1))
  const [count, setCount] = useState(1)
  const handleChange = (e) => {
    setInputValue(e.target.value) 
  };
  const handleClick = (e) => {
    if (!inputValue) {
      return toast.error("Hay nhap 1 so");
    }
    if(Number(inputValue) === random) {
      toast.success("Ban da doan chinh xac!!!")
    }
    else {
      toast.error("Dap an dung la " + random)
      setCount(count+1)
    }
    if (count === 3) {
      toast.error("Ban da doan sai 3 lan!!!")
    }
    setRandom(Math.floor(Math.random()*10))
  };
  return (
    <div className="App">
      <div className="header">
        <h2>LUCKY NUMBER</h2>
      </div>
      <div className='container'>
        <p>Dự đoán con số của bạn trong khoảng 1 đến 10</p>
        <div className='input'>
          <input placeholder="Nhập con số bạn dự đoán" type="text" value={inputValue} onChange={handleChange}></input>
          <button onClick={handleClick}>QUAY SỐ</button>
        </div>
      </div>
    <ToastContainer />
    </div>
  );
}

export default App;
