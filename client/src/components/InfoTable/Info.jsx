import React from 'react';
import InfoCell from './InfoCell';
import DeleteButton from '../Delete/Delete';

export default function Info({ info, setAllInfo }) {
  const keys = Object.keys(info).slice(1, -2);
  console.log(keys);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr) 6rem',
      borderTop: '2px solid #4187dc',
      gridColumnGap: '10px',
      gridRowGap: '10px',
    }}
    >
      { keys && keys.map((el) => (<InfoCell key={el} dataInfo={info[el]} />))}
      <DeleteButton setAllInfo={setAllInfo} infoId={info.id} />
    </div>
  );
}
