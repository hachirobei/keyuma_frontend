import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function SubmitButton() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle click event
  const handleClick = () => {
    navigate('/login'); // Navigate to /login route
  };

  return (
    <Button label='Log Masuk' onClick={handleClick} /> // Add onClick event handler
  );
}
