import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar title="TextUtils" about="aboutTextUtils"/>
      <div className='container my-3'>
        <TextForm heading="Enter to Text to analyze"/>
      </div>
      </header>
    </div>
  );
  }

export default App;
