import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Character Counter</h2>
      
      <textarea
        placeholder=" Type here"
        value={text}
        onChange={handleChange}
        style={{ width: "500px", padding: '10px', fontSize: '16px',height: "100px" }}
      />

      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Character Count: {text.length}
      </p>
    </div>
  );
};

export default CharacterCounter;