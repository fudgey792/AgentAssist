import React from 'react';
import type { Customer } from '../types';
import './CustomerCard.css';

type Props = {
    customer: Customer;
};

const CustomerCard = ({ customer }: Props) => (
    <div>
        <div className="customer-card">
            <h2>{customer.name}</h2>
            <p>Email: {customer.email}</p>
        </div>
    </div>
);

export default CustomerCard;