import logo from './logo.svg';
import './App.css';
import Counter from './comps/counter';
import Gallery from './comps/gallery';
import Colors from './comps/colors';
import Movies from './comps/movies';
import Calculator from './comps/calculator';

function App() {
  return (
    <>
      <Counter/>
      <hr/> 
      <Gallery/>
      <hr/>
      {/* <Colors/> */}
      <hr/>
      {/* <Movies/> */}
      <hr/>
      <Calculator/>
    </>
  );
}

export default App;
