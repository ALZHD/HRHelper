import React from 'react';
import * as endPoints from '../../config/endPoints';

export default function Delete({ infoId, setAllInfo }) {
  const deleteHandler = async () => {
    const response = await fetch(endPoints.deleteInfo(infoId), {
      method: 'DELETE',
    });
    if (response.ok) setAllInfo((prev) => prev.filter((el) => el.id !== infoId));
  };
  return (
    <button className="btn btn-danger my-2" onClick={deleteHandler} type="button">Delete</button>
  );
}
