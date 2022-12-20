import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

 ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  function Hello() {
    return <div>
      
    </div>;
    }
    
    const parentContainer=document.querySelector(".read-more-container");
    parentContainer.addEventListener("click",(event)=>{
  const current=event.target;
  const isReadMoreBtn=current.className.includes("read-more-btn");
  if(!isReadMoreBtn) return;
  const currentText=event.target.parentNode.querySelector('.read-more-text');
  currentText.classList.toggle('read-more-text--show');
  current.textContent=current.textContent.includes('Read More') ? "Read Less..." :"ReadMore...";
  })
  
 

  
reportWebVitals();

  
    export default Hello