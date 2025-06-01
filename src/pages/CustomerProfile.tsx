import React from 'react';
import type { Customer } from '../types';

type Props = {
    customer: Customer;
};

const CustomerProfile = ({ customer }: Props) => (
    <div>
        <h2>{customer.name}</h2>
        <p>Email: {customer.email}</p>
    </div>
);

export default CustomerProfile;