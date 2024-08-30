import Layout from "./layout/Layout";
import './App.css'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "preline/preline";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);
  return (
    <>
    <Layout/>
    </>
  )
}

export default App
