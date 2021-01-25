import './App.css';
import DogPhoto from './Doggo-API/DogPhoto';
import Friends from './A-friend-API/Friends';
import DogGallery from './Doggo-API/DogGallery';
import RandomJoke from './Joke-API/RandomJoke';

function App() {
  return (
    <div className="App">
      <Friends />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
