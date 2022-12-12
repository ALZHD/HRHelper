import React from 'react';

export default function InfoCell({ dataInfo }) {
  return (
    dataInfo
      ? (<div style={{ wordWrap: 'break-word', overflow: 'hidden' }}>{dataInfo}</div>) : (<div> Не обнаружено </div>)
  );
}
