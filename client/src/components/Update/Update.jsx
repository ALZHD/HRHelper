import React from 'react';

export default function Update({ setAllInfo }) {
  const updateHandler = async () => {
    (console.log('update'));
    fetch('http://localhost:5555/info/showinfo')
      .then((response) => response.json())
      .then((data) => setAllInfo(data));
  };
  return (
    <div style={{ paddingBottom: '20px' }}>
      <button className="btn btn-info" onClick={updateHandler} type="button">Update</button>
    </div>
  );
}
