import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Blogs from './Blogs';
import Developer from './Developer';
import Section from './Section';



function App() {

    
return (
    <>

      <Router>
        
        <Routes>
          <Route path="/" element={<Navigate to="/blogs"/>}/>
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/developer" element={<Developer/>}/>
            <Route path="/section" element={<Section/>}/>
            
        </Routes>
      </Router>
    </>

);
}

export default App;