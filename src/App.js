import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
    
    <Navbar title="TextUtils"></Navbar>
    <div className="container my-3">
    {/* <TextForm heading = "Enter Your Text"></TextForm> */}
    </div>
    <About/>
    </>
  );
}

export default App;
