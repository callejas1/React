import './App.css';
import { HobbyList } from './HobbyList';
import { Counter } from './Counter';
import { instantiateGuarantee } from './GuaranteeInstance';

function App() {
  const guaranteeStyle = {
    display: 'flex',
    alignItems: 'baseline',
  };

  return (
    <div className="App">
      <div>
        <h1>Hobby list</h1>
        <HobbyList />
      </div>
      <div>
        <h1>E-commerce</h1>
        <div style={guaranteeStyle}>{instantiateGuarantee}</div>
      </div>
      <div>
        <h1>Counter</h1>
        <Counter style={{}} />
      </div>
    </div>
  );
}

export default App;

// PROJECT INFO -->
// Link to Netlify - HackYourWeather Week I => https://hackyourweather-app.netlify.app/
// Link to GitHub Repo => https://github.com/callejas1/HackYourWeather
