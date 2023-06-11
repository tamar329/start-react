import logo from './logo.svg';
import './App.css';
import Counter from './comps/counter';
import Gallery from './comps/gallery';
import Colors from './comps/colors';

function App() {
  return (
    <>
      <Counter/>
      <hr/> 
      <Gallery/>
      <hr/>
      <Colors/>
    </>
  );
}

export default App;
