import { Button } from '@chakra-ui/react';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path = "/" />
      <Route path = "/chat" />
    </div>
  );
}

export default App;

