
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './pages/NavbarComponent';
import FormComponent from './pages/FormComponent';
import Example from './pages/Example';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <FormComponent/>
      {/* <Example/> */}
    </div>
  );
}

export default App;
