'use-clinet'
import React, { useState } from 'react';

interface PhoneNumberProps {
  phoneNumber: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ phoneNumber }) => {
  const [userNumber, setUserNumber] = useState('');

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send the userNumber to your backend or manager's email for follow-up
    console.log(`User's number: ${userNumber}`);
    // You can clear the input field after submission if desired
    setUserNumber('');
  };

  return (
    <div>
      <span>Click the phone icon to call us: </span>
      <a href={`tel:${phoneNumber}`} onClick={handleClick}>
        <i className="fas fa-phone"></i>
      </a>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userNumber">Leave your number:</label>
        <input
          type="tel"
          id="userNumber"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhoneNumber;
