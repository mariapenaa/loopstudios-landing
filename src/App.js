import './App.scss';
import React, {useState} from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Drawer from './components/Drawer/Drawer'

function App() {
  const [open, setOpen] = useState(false)

  let toggleOpen = () => {
    if(open){
      setOpen(false)
    }else{
      setOpen(true)
    }
  }
  return (
    <div className="App">
      <div className={open ? 'drawer' : 'none'}>
        <Drawer toggleOpen={toggleOpen}/>
      </div>
      <div className={open ? 'none' : 'drawer'}>
        <Header id="top" toggleOpen={toggleOpen}/>
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
