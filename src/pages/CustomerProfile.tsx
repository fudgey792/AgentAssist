import React from 'react';
import { useParams } from 'react-router-dom';

function CustomerProfile() {
  const { id } = useParams();

  return (
    <div>
      <h2>Customer Profile</h2>
      <p>Customer ID: {id}</p>
    </div>
  );
}

export default CustomerProfile;
