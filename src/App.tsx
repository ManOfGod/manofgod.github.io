// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="save-the-date-container">
      <header className="header">
        <div className="header-content">
          <div className="names">Junel A. Mata & Christa Lou C. Derasin</div>
          <div className="breaking-news">Breaking News</div>
          <div className="date-top">Circa 1900</div>
        </div>
      </header>
      <main className="main-content">
        <hr />
        <hr />
        <div className="save-the-date-title">
          <div className="save-date">SAVE</div>
          <div className="the">
            <hr />THE <hr /></div>
          <div className="save-date">DATE</div>
        </div>
        <hr />
        <hr />
        <div className="event-date-container">
          <h2 className="event-date">You are invited to join us on our special day.</h2>
        </div>
        <div className="image-section">
          <img src="/src/assets/images/test.jpg" alt="Onie and Sweet" className="wedding-image" />
        </div>
        <div className="event-date-container">
          <h2 className="event-date">Wednesday, February 05, 2025</h2>
        </div>
        <footer className="footer-content">
          <h3 className="couple-names">Onie & Sweet</h3>
          <p className="footer-text">Are Getting Married</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
