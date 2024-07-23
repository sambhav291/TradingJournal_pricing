import React, { useState } from 'react';
import axios from 'axios';
import './payment.css';

function Payment() {
    const [amount, setAmount] = useState('');
    const [MUID, setMUID] = useState('');
    const [number, setNumber] = useState('');

    const initiatePayment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/pay", { amount, MUID, number });
            console.log(res.data);
            if (res.data.success === true) {
                window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='bodydiv'>
        <div className='container'>
            <h1>PhonePe Payment Gateway</h1>
            <form onSubmit={initiatePayment}>
                <div className='form'>
                <div className="wrap-input-8">
                    <input className="input" type="text" placeholder='Phone no.' name='number' value={number} onChange={(e) => setNumber(e.target.value)} />
                    <span className="focus-border"><i></i></span>
                </div>
                <div className="wrap-input-8">
                    <input className="input" type="text" placeholder='user id' name='MUID' value={MUID} onChange={(e) => setMUID(e.target.value)} />
                    <span className="focus-border"><i></i></span>
                </div>
                <div className="wrap-input-8">
                    <input className="input" type="text" placeholder='amount' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <span className="focus-border"><i></i></span>
                </div>
                </div>
                <button className="button-roundpurple" type="submit">Pay With PhonePe</button>
            </form>
        </div>
       </div>
    );
}

export default Payment;

