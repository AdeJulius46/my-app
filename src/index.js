import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




function Julius() {
  return (
    <div className="App" >
      <ul>
        <li>i love react </li>
        <li>i love react </li>
        <li>i love react </li>
        <li>i love react </li>
      </ul>
    </div>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Julius />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

