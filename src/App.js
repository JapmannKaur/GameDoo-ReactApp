import './App.css';
import Sidebar from './components/Sidebar.js'
import Mainpage from './components/Mainpage.js'

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Sidebar />
      </div>
      <div className='right'>
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
