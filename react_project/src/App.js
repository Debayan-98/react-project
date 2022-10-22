import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Menu} from './pages/Menu'
import { Contact } from './pages/Contact';
import { Test } from './pages/Test';
import { Navbar } from './components/common/Navbar';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/test/:id/:name' element={<Test />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
     </Router>
      </div>
  );
}

export default App;
