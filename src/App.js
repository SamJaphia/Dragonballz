import React from 'react';
import './App.scss';
import { render } from '@testing-library/react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar';
import Saiyanlist from './components/Saiyanlist';


function App () {
render() 
  return <React.Fragment>
    <Navbar />
    <Saiyanlist />
  </React.Fragment>
};
export default App;
