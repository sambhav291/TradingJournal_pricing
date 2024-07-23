import React from 'react';
import Pricing from './pricing.js';
import Payment from './payment.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Pricing />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </Router>
  );
}

export default App;
