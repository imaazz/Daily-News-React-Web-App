
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
const App=()=> {
const [progress, setProgress] = useState(0)

  const pageSize=6
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress}  pageSize={pageSize} country="us" category="general" key="general" />} />
            <Route exact path='/business' element={<News setProgress={setProgress}  pageSize={pageSize} country="us" category="business" key="business" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress}  pageSize={pageSize} country="us" category="entertainment" key="entertainment" />} />
            <Route exact path='/health' element={<News setProgress={setProgress}  pageSize={pageSize} country="us" category="health" key="health" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress}  pageSize={pageSize} country="us" category="sports" key="sports" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress}  pageSize={pageSize} country="us" category="technology" key="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }


export default App



