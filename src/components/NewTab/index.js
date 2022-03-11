import React from 'react';

const NewTab = () => {
  const handleClick = () => {
    window.open(`${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Open PDF</button>
    </div>
  );
};

export default NewTab;