import React from 'react';

export default function FriendProfile({ friend }) {
  const { name, location, email, phone } = friend;
  return (
    <div>
      <ul>
        <li key="name">
          {name.first} {name.last}
        </li>
        <li key="address">
          {location.street.name} {location.street.number}. {location.city}{' '}
          {location.postcode}, {location.country}.
        </li>
        <li key="email">{email}</li>
        <li key="phone">{phone}</li>
      </ul>
    </div>
  );
}
