'use client'
import React, { useState } from 'react';

const EmojiFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState<string | null>(null);
  const emojis: string[] = ['😡', '😐', '😊', '🤩'];

  const handleFeedback = (emoji: string): void => {
    setFeedback(emoji);
    localStorage.setItem('userFeedback', emoji); // Store feedback locally
    alert(`Thank you for your feedback! You selected: ${emoji}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', color:'white' }}>
      <h3>How was your experience?</h3>
      <div style={{ fontSize: '2rem', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {emojis.map((emoji, index) => (
          <span
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => handleFeedback(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      {feedback && <p>You selected: {feedback}</p>}
    </div>
  );
};

export default EmojiFeedback;
