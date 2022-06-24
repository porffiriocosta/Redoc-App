import './App.css';

import { RedocStandalone } from 'redoc';
import Navbar from './componentes/Navbar';

function App() {
  return ( 
    <>
    <Navbar />
      <div className="App">
      <header className="App-header">
        <RedocStandalone specUrl="https://livrariavirtualapi.azurewebsites.net/swagger/v1/swagger.json" />
      </header>
    </div>
    </>

  );
}

export default App;
