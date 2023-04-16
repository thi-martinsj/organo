import Banner from './components/Banner';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Name" placeholder="Enter your name"/>
      <TextField label="Role" placeholder="Enter your role"/>
      <TextField label="Image" placeholder="Enter image file path"/>
    </div>
  );
}

export default App;
