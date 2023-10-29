import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const ShowAlert = (message,type) =>{
   setAlert({
    msg:message,
    type:type
  })
setTimeout(() => {
   setAlert(null);
}, 2000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      ShowAlert("Dark mode enabled","success");
      document.title ='CodyAthira - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      ShowAlert("Light mode enabled","success");
      document.title ='CodyAthira - Light Mode';
    }
  }
  return (
<>
<BrowserRouter>
<Navbar title="CodebyAthira" b="hello" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>     
        <Route path="/" element={<LoginForm ShowAlert={ShowAlert} heading="Enter the data to analyze" mode={mode}/>} />
        <Route exact path="/about" element={<About />}>
        </Route>
 </Routes>
  </div>
    </BrowserRouter>
</>
  );
}

export default App;
