import './App.css';
import Friends from './components/Friends';
import DogGallery from './components/DogGallery';
import RandomJoke from './components/RandomJoke';

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
