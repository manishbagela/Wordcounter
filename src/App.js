import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#020238';
      showAlert("Night Mode On", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Night Mode Off", "success");
    }
  }




  return (
    // <Router>
    <>
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
              
            {/* </Route> */}
          
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode}></TextForm>}> */}
         
          <TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode}></TextForm>
            {/* </Route> */}
          {/* </Routes> */}
    </div>
    
    </>
    // {/* </Router> */}
  );
}

export default App;
