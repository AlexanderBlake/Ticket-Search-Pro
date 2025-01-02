import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout';

const App = () => {

  return (
      <div style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', color: 'white', paddingTop: 75}}>
        <Layout>
          <Routes>
            {(
              <>
                <Route path="/Home" element={<Home />} />
                <Route path="/" element={<Home />} />
              </>
            )}
          </Routes>
        </Layout>
      </div>
  );
};

export default App;
