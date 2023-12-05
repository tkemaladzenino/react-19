
// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';



import AppTask from './AppTask.';


function App() {


  return (
    <>

      <AppTask />
    </>
  );
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);



