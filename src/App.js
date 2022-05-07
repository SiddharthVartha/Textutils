import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Text from './component/Text';

function App() {
  const [mode,setMode]=useState("light");
  const handleMode=()=>{
    if(mode=="light"){
      setMode("dark");
    }
    else{
      setMode("light");
    }
  }
  return (
    <>
      <div className='container-fluid' style={mode==="dark"?{color:'white',backgroundColor:"#162534",width:"100%",height:"100vh"}:{color:"black",backgroundColor:"white",width:"100%",height:"100vh"}}>
      <Navbar mode={mode} changeMode={handleMode}/>
      <Text mode={mode}/>
      </div>
    </>
  );
}

export default App;
