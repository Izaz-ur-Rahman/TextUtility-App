import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // Removed Switch import
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1A1741'
      showAlert("Dark has been enabled!", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light has been enabled!", "success")
    }
  }

  return (
    <>
return (
  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <About />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    </div>
  </Router>
);


    </>
  );
}

export default App;
