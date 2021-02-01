import React from 'react';

export default function FriendProfile({ friend }) {
  const { name, location, email, phone } = friend;
  const { street, city, postcode, country } = location;
  return (
    <div>
      <ul>
        <li key="name">
          {name.first} {name.last}
        </li>
        <li key="address">
          {street.name} {street.number}. {city} {postcode}, {country}.
        </li>
        <li key="email">{email}</li>
        <li key="phone">{phone}</li>
      </ul>
    </div>
  );
}
