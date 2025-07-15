
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './pages/NavbarComponent';
import FormComponent from './pages/FormComponent';
import Example from './pages/Example';
import Calculation from './useMemo/Calculation';
import Child from './useCallback/Child';
import Sample from './useCallback/Sample';

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent/>
      <FormComponent/> */}
      {/* <Calculation/> */}
      {/* <Child/> */}
      <Sample/>
      {/* <Example/> */}
    </div>
  );
}

export default App;
