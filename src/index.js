import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Section from './components/Section';
import Pricing from './components/Pricing';
import Information from './components/Information';

ReactDOM.render(
  <Router>
    <Routes>
      <Route index element = {<App />} />
      <Route path='/about' element = {<Section />} />
      <Route path='/' element = {<Pricing />} />
      <Route path='/contact' element = {<Information />} />
      <Route path= "*" element = {<div className='text-6xl font-extrabold text-center flex flex-col justify-center my-40 uppercase'> 404 page not found</div>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

