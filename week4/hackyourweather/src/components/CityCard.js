import React from 'react';
import { Heading } from './Heading';
import { Main } from './Main';
import { Details } from './Details';

export const CityCard = ({ weatherData, removeCity }) => {
  return (
    <div className="card-style">
      <button className="btn-remove" onClick={removeCity}>
        <i className="fas fa-minus"></i>
      </button>
      <Heading weatherData={weatherData} />
      <Details weatherData={weatherData} />
      <Main weatherData={weatherData} />
    </div>
  );
};
