import React, { useState, useEffect } from 'react';
import Button from './DogButton';
import DogPhoto from './DogPhoto';

export default function DogGallery() {
  const DOGGO_URL = 'https://dog.ceo/api/breeds/image/random';
  const [dogPhotos, setDogPhotos] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const getDogPhoto = async () => {
    try {
      setLoading(true);
      const res = await fetch(DOGGO_URL);
      if (!res.ok) {
        throw new Error('Request failed!');
      }
      const data = await res.json();
      const [firstPicture] = dogPhotos;
      setDogPhotos([data.message, firstPicture].filter((x) => x));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogPhoto();
  }, []);

  return (
    <div className="wrapper">
      <div>
        <Button getDogPhoto={getDogPhoto}></Button>
      </div>
      {dogPhotos.length === 0 && !isLoading && (
        <p>Get your first dog by clicking the button!</p>
      )}
      {isLoading && <p>Loading...</p>}
      {dogPhotos !== '' && !isLoading && (
        <div className="dogImg">
          {dogPhotos.map((doggo, i) => (
            <DogPhoto doggo={doggo} key={i} />
          ))}
        </div>
      )}
      {error && <p>Something went wrong :( {error}</p>}
    </div>
  );
}
