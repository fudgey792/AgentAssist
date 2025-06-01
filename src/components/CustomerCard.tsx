import React from 'react';
import type { Customer } from '../types';
import './CustomerCard.css';
import { Link } from 'react-router-dom';

type Props = {
    customer: Customer;
};

const CustomerCard = ({ customer }: Props) => {
  return (
    <Link to={`/customer/${customer.id}`} className="card-link">
      <div className="customer-card">
        <h2>{customer.name}</h2>
        <p>Email: {customer.email}</p>
      </div>
    </Link>
  );
};

export default CustomerCard;