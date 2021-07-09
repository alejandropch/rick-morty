
import React,{useContext} from 'react'

import ThemeContext from './context/ThemeContext'
import Header from './components/Header'
import Characters from './components/Characters'

function App() {
  const mode=useContext(ThemeContext)
  console.log(mode)
  

  return (
    <div className={mode}>
     <Header />
     <Characters />
    </div>
  );
}

export default App;
