import React, { useState, useEffect } from 'react';
import Info from '../InfoTable/Info';
import Update from '../Update/Update';

function Main() {
  const [allInfo, setAllInfo] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5555/info/showinfo')
      .then((response) => response.json())
      .then((data) => setAllInfo(data));
    return () => setAllInfo([]);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Update setAllInfo={setAllInfo} />
        <div
          style={{
            display: 'flex', alignContent: 'row', gap: '100px', paddingLeft: '25px', paddingBottom: '20px', fontWeight: 'bold',
          }}
          className="tableHeader"
        >
          <div>name</div>
          <div>contact 1</div>
          <div>contact 2</div>
          <div>contact 3</div>
          <div>contact 4</div>
        </div>
      </div>

      {
    allInfo.length > 1
      ? (allInfo.map((el) => <Info key={el.id} info={el} setAllInfo={setAllInfo} />))
      : (
        <h5>
          Here the info uploaded by HRHelper
        </h5>
      )
  }
    </div>
  );
}

export default Main;
