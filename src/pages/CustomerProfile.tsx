import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

function CustomerProfile() {
  const { id } = useParams();

  return (
    
    <div>
      <NavigationBar />
      <h2>Customer Profile</h2>
      <p>Customer ID: {id}</p>
    </div>
  );
}

export default CustomerProfile;
