import React, { useState, useEffect } from 'react';
// import Info from '../InfoTable/Info';

function Main() {
  const [allInfo, setAllInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/info/showinfo')
      .then((response) => response.json())
      .then((data) => setAllInfo(data));
  }, []);
  // const updateAllInfo = (event) => {
  //   if (event.key === 'Update') {
  //     fetch('http://localhost:5555/info/showinfo')
  //       .then((response) => response.json())
  //       .then((data) => setAllInfo({data}));
  //   }
  // };
  return (
  // <div>
  //   {
  // photoDB.length > 1
  //   ? (allInfo.map((el, index) => <Info key={} info={el} />))
  //   : (
  //     <h5>
  //       Here the info uploaded by HRHelper
  //     </h5>
  //   )
  // }
  // </div>

    <div className="weather-block">
      {/* <input
      type="text"
      className="location input-field"
      placeholder="Update"
      onKeyDown={updateAllInfo}
    /> */}
      <div>{JSON.stringify(allInfo)}</div>
    </div>
  );
}

export default Main;
