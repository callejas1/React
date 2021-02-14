import React from 'react';

export const Form = ({ handleSubmit, getWeather, cityName }) => {
  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search city"
        name="city"
        value={cityName}
      />
      <button type="submit" onClick={getWeather}>
        <i className="fas fa-search"></i> Search
      </button>
    </form>
  );
};
