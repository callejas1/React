import React, { useState, useEffect } from 'react';
import Button from './FriendButton';
import FriendProfile from './FriendProfile';

export default function Friends() {
  const FRIEND_URL = 'https://www.randomuser.me/api?results=1';
  const [friend, setFriend] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const getFriend = async () => {
    try {
      setLoading(true);
      const res = await fetch(FRIEND_URL);
      if (!res.ok) {
        throw new Error('Request failed!');
      }
      const data = await res.json();
      setFriend(data.results[0]);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => getFriend(), []);

  return (
    <div className="wrapper">
      <Button getFriend={getFriend} />
      {isLoading && <p>Loading...</p>}
      {friend && !isLoading && <FriendProfile friend={friend} />}
      {error && <p>Something went wrong :( {error}</p>}
    </div>
  );
}
